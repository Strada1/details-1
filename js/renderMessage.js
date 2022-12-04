"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.companionMessageToDOM = exports.addMessageToDOM = void 0;
const date_fns_1 = require("date-fns");
const const_1 = require("./const");
const js_cookie_1 = __importDefault(require("js-cookie"));
const_1.ELEMENT.SEND_MESSAGE.addEventListener("submit", getMessageInput);
const socket = new WebSocket(`wss://edu.strada.one/websockets?${js_cookie_1.default.get("authorizationCod")}`);
function sendMessageWebSocet(message) {
    socket.send(JSON.stringify({ text: `${message}` }));
}
socket.onmessage = async function (event) {
    let myEmail = js_cookie_1.default.get("email");
    let message = JSON.parse(event.data);
    let text = message.text;
    let userEmail = message.user.email;
    let time = message.createdAt;
    let userName = message.user.name;
    time = (0, date_fns_1.format)(new Date(time), "kk':'mm");
    if (userEmail == myEmail) {
        let method = 1;
        addMessageToDOM(text, time, method);
    }
    else {
        let method = 1;
        companionMessageToDOM(text, time, userName, method);
    }
};
function getMessageInput(event) {
    event.preventDefault();
    const message = const_1.ELEMENT.INPUT_MESSAGE.value;
    if (!message) {
        alert("Пустая строка, введите сообщение!");
    }
    else {
        sendMessageWebSocet(message);
        event.target.reset();
    }
}
function addMessageToDOM(message, time, method) {
    const userContent = document.createElement("div");
    userContent.append(const_1.ELEMENT.TEMPLATE.content.cloneNode(true));
    const contentMyMessage = userContent.querySelector(".text__my__SMS");
    const timeMyMessage = userContent.querySelector(".time__SMS");
    contentMyMessage.textContent = `${message}`;
    timeMyMessage.textContent = time;
    if (method) {
        const_1.ELEMENT.CHAT_CONTAINER.append(userContent);
        scrollLastElement();
    }
    else {
        const_1.ELEMENT.CHAT_CONTAINER.prepend(userContent);
        scrollRenderElement();
    }
}
exports.addMessageToDOM = addMessageToDOM;
// JSON PARCE В ТРАЙ КЕТЧ!!!
// переписать на принятие обьекта, а не 4 аргументов
function companionMessageToDOM(message, time, name, method) {
    const userContent = document.createElement("div");
    userContent.append(const_1.ELEMENT.TEMPLATE_COMPANION.content.cloneNode(true));
    const contentMyMessage = userContent.querySelector(".text__his_SMS");
    const timeMyMessage = userContent.querySelector(".time__SMS");
    contentMyMessage.textContent = `${name}: ${message}`;
    timeMyMessage.textContent = time;
    if (method) {
        const_1.ELEMENT.CHAT_CONTAINER.append(userContent);
        scrollLastElement();
    }
    else {
        const_1.ELEMENT.CHAT_CONTAINER.prepend(userContent);
        scrollRenderElement();
    }
}
exports.companionMessageToDOM = companionMessageToDOM;
function scrollLastElement() {
    const ELEMENTS = document.querySelector(".chat__Container");
    const LAST_MESSAGE = ELEMENTS.lastElementChild;
    LAST_MESSAGE.scrollIntoView(false);
}
function scrollRenderElement() {
    const_1.ELEMENT.SCROl.scrollTop = 890;
}
