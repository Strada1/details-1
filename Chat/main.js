"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const requests_1 = require("./requests");
const const_1 = require("./const");
const websocket_1 = require("./websocket");
const storage_1 = require("./storage");
const scrollMessages_1 = require("./scrollMessages");
const render_1 = require("./render");
const formMessage = document.querySelector('#setMessage');
const contentMessages = document.querySelector('.content-message');
formMessage === null || formMessage === void 0 ? void 0 : formMessage.addEventListener('submit', render_1.renderUserMessage);
(0, storage_1.setItemStorage)();
//const array = getItemStorage();
//renderClient(array);
websocket_1.socket.onmessage = function getMessage(event) {
    console.log("[message] Данные получены с сервера:", event.data);
    const array = JSON.parse(event.data);
    console.log(array);
    // TODO: сделать проверку
    if (array.user.email !== "me@varensev.ru") {
        const HTMLTemplateElements = document.querySelector('.client-message');
        if (HTMLTemplateElements === null) {
            return;
        }
        const cloneNodes = HTMLTemplateElements.content.cloneNode(true);
        const message = cloneNodes.querySelector('.client-span-message');
        const date = cloneNodes.querySelector('.date-interlocutor');
        const clientName = cloneNodes.querySelector(".no-select");
        if (clientName && message && date && contentMessages) {
            clientName.textContent = `${array.user.name}: `;
            message.textContent = array.text;
            date.textContent = (0, date_fns_1.format)(new Date(array.createdAt), 'k:m');
            contentMessages.append(cloneNodes);
            (0, scrollMessages_1.scrollLastElement)();
        }
    }
};
async function setName(event) {
    event.preventDefault();
    const name = const_1.inputValue.userName.value.trim();
    console.log(name);
    await (0, requests_1.setUserName)(name);
    // await getDataUser();
}
const formInputName = document.querySelector("#form-popup");
formInputName === null || formInputName === void 0 ? void 0 : formInputName.addEventListener("submit", setName);
const historyLoaded = document.querySelector(".historyLoaded");
contentMessages === null || contentMessages === void 0 ? void 0 : contentMessages.addEventListener('scroll', function () {
    if (historyLoaded === null) {
        return;
    }
    console.log(contentMessages.scrollTop);
    if (contentMessages.scrollTop === 0) {
        contentMessages.textContent = "Вся история загружена";
    }
    else {
        contentMessages.textContent = "";
        (0, scrollMessages_1.lazyLoad)();
    }
});
window.onload = ((event) => {
    (0, scrollMessages_1.spliceArr)();
});
