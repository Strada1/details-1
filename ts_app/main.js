"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const const_js_1 = require("./const.js");
const date_fns_1 = require("date-fns");
const js_cookie_1 = __importDefault(require("js-cookie"));
const popup_js_1 = require("./popup.js");
// сделать обработку ошибок
async function dataRequests() {
    getData(const_js_1.HISTORY_URL);
    await getHistoryData();
}
async function setDataCodeForm(event) {
    event.preventDefault();
    const token = const_js_1.ELEMENTS.CODE_INPUT?.value;
    if (token) {
        js_cookie_1.default.set("Authorization", `Bearer ${token}`, { expires: 3 });
        js_cookie_1.default.set("token", `${token}`);
        (0, popup_js_1.codePopUp)(popup_js_1.REMOVE);
    }
    try {
        await dataRequests();
    }
    catch (error) {
        console.log(error);
    }
}
function setDataEmailForm(event) {
    event.preventDefault();
    (0, popup_js_1.authPopUp)(popup_js_1.REMOVE);
    (0, popup_js_1.codePopUp)(popup_js_1.ADD);
    const email = const_js_1.ELEMENTS.EMAIL_INPUT?.value;
    if (email) {
        registryUser(email);
    }
    const_js_1.ELEMENTS.CODE_FORM?.addEventListener("submit", setDataCodeForm);
}
async function onAppStart() {
    if (js_cookie_1.default.get("Authorization")) {
        (0, popup_js_1.authPopUp)(popup_js_1.REMOVE);
        (0, popup_js_1.codePopUp)(popup_js_1.REMOVE);
        await dataRequests();
    }
    else {
        (0, popup_js_1.authPopUp)(popup_js_1.ADD);
        const_js_1.ELEMENTS.EMAIL_FORM?.addEventListener("submit", setDataEmailForm);
    }
}
window.addEventListener('DOMContentLoaded', onAppStart);
// window.onload = onAppStart();
function halfRender(array) {
    const tempArray = array.slice(0, 20);
    array.splice(0, 20);
    tempArray.map((item, index) => {
        messageRendering(tempArray[index]);
    });
}
function renderMessagesFromHistory(array) {
    halfRender(array);
    const_js_1.ELEMENTS.CHAT?.addEventListener("scroll", (event) => {
        event.preventDefault();
        if (const_js_1.ELEMENTS.CHAT) {
            const scrollTop = Math.round(-const_js_1.ELEMENTS.CHAT.scrollTop);
            const scrollHeight = const_js_1.ELEMENTS.CHAT.scrollHeight - const_js_1.ELEMENTS.CHAT.clientHeight;
            if (array.length === 0) {
                return;
            }
            else {
                if (scrollTop + 1 >= scrollHeight) {
                    halfRender(array);
                    const isHistoryLoaded = array.length === 0 ? console.log("Вся история загружена!") : false; //сделать вывод на экран
                }
            }
        }
    });
}
let arrayWithMessages;
async function getHistoryData() {
    const data = await getData(const_js_1.HISTORY_URL);
    arrayWithMessages = data.messages;
    renderMessagesFromHistory(arrayWithMessages);
}
async function getUserName() {
    const data = await getData(const_js_1.USER_URL);
    if (data) {
        return data.name;
    }
}
// переделать запросы в одну функцию
async function getData(url) {
    const headers = new Headers();
    headers.set("Content-Type", "application/json;charset=utf-8");
    headers.set("Authorization", `${js_cookie_1.default.get("Authorization")}`);
    const response = await fetch(url, {
        method: "GET",
        headers,
    });
    return response.json();
}
async function registryUser(email) {
    const headers = new Headers();
    headers.set("Content-Type", "application/json;charset=utf-8");
    const response = await fetch(const_js_1.STRADA_URL, {
        method: "POST",
        headers,
        body: JSON.stringify({ email }),
    });
}
async function codeFormRequest(name) {
    const headers = new Headers();
    headers.set("Content-Type", "application/json;charset=utf-8");
    headers.set("Authorization", `${js_cookie_1.default.get("Authorization")}`);
    const response = await fetch(const_js_1.STRADA_URL, {
        method: "PATCH",
        headers,
        body: JSON.stringify({ name }),
    });
}
const socket = new WebSocket(`
  wss://edu.strada.one/websockets?${js_cookie_1.default.get("token")}
`);
function messageRendering(data, message) {
    const messageTemplate = data.user?.email === const_js_1.MY_EMAIL
        ? const_js_1.ELEMENTS?.TEMPLATE_MY_MSG
        : const_js_1.ELEMENTS?.TEMPLATE_FRIEND_MSG;
    const name = data.user?.email === const_js_1.MY_EMAIL ? "Я" : data.user?.name;
    const messageText = data?.text;
    const time = (0, date_fns_1.format)(new Date(data.createdAt), "HH:mm");
    const messageSpan = messageTemplate.content.querySelector("#my-message-text");
    if (messageSpan) {
        messageSpan.textContent = `${name}: ${messageText}`;
    }
    const timeSpanFriend = messageTemplate.content.querySelector("#time");
    timeSpanFriend.textContent = time;
    const insertMethod = message === const_js_1.NEW ? true : false;
    if (insertMethod) {
        const_js_1.ELEMENTS.CHAT?.prepend(messageTemplate.content.cloneNode(true));
    }
    else {
        const_js_1.ELEMENTS.CHAT?.append(messageTemplate.content.cloneNode(true));
    }
}
socket.onmessage = function (event) {
    // console.log(JSON.parse(event.data));
    const data = JSON.parse(event.data);
    messageRendering(data, const_js_1.NEW);
};
// создать проверки и класс ошибок
function sendMessageHandler(event) {
    event.preventDefault();
    if (const_js_1.ELEMENTS.MESSAGE_INPUT) {
        const text = const_js_1.ELEMENTS.MESSAGE_INPUT?.value;
        const_js_1.ELEMENTS.MESSAGE_INPUT.value = "";
        if (text) {
            socket.send(JSON.stringify({ text: `${text}` }));
        }
    }
}
const_js_1.ELEMENTS.MESSAGE_FORM?.addEventListener("submit", sendMessageHandler);
async function changeNickname(event) {
    event.preventDefault();
    const newUserName = const_js_1.ELEMENTS.SETTING_INPUT?.value;
    if (newUserName) {
        codeFormRequest(newUserName);
    }
    const currentName = await getUserName();
    if (const_js_1.ELEMENTS.SETTING_NAME) {
        const_js_1.ELEMENTS.SETTING_NAME.textContent = `Имя в чате - ${currentName}`;
    }
    if (const_js_1.ELEMENTS.SETTING_INPUT) {
        const_js_1.ELEMENTS.SETTING_INPUT.value = "";
    }
}
const_js_1.ELEMENTS.SETTING_FORM?.addEventListener("submit", changeNickname);
async function openSettings(event) {
    event.preventDefault();
    const currentName = await getUserName();
    if (const_js_1.ELEMENTS.SETTING_NAME) {
        const_js_1.ELEMENTS.SETTING_NAME.textContent = `Имя в чате - ${currentName}`;
    }
}
const_js_1.ELEMENTS.SETTING_BUTTON?.addEventListener("click", openSettings);
