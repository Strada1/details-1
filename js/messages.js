"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadHistory = exports.parseJSON = exports.stringifyJSON = exports.addMessage = void 0;
const const_1 = require("./const");
const request_1 = require("./request");
const date_fns_1 = require("date-fns");
const ui_1 = require("./ui");
function addMessage(message) {
    let div = document.createElement("div");
    div.classList.add(...message.userClass);
    if (message.text.trim() !== "") {
        div.append(const_1.ELEMENTS.template.content.cloneNode(true));
        div.querySelector(".message__text").textContent = message.text;
        div.querySelector(".message__delivery-time").textContent = (0, date_fns_1.format)(Date.parse(message.time), "HH:mm");
        if (message.insert && const_1.ELEMENTS.contentWrapper) {
            const_1.ELEMENTS.contentWrapper.append(div);
        }
        else {
            if (const_1.ELEMENTS.contentWrapper) {
                const_1.ELEMENTS.contentWrapper.prepend(div);
            }
        }
    }
    if (message.userName) {
        let span = document.createElement("span");
        span.classList.add("message__user");
        div.prepend(span);
        span.textContent = message.userName;
    }
    else {
        div.scrollIntoView({
            behavior: "smooth",
        });
    }
}
exports.addMessage = addMessage;
function stringifyJSON(item) {
    try {
        return JSON.stringify(item);
    }
    catch (error) {
        alert(error.message);
    }
}
exports.stringifyJSON = stringifyJSON;
function parseJSON(item) {
    try {
        return JSON.parse(item);
    }
    catch (error) {
        alert(error.message);
    }
}
exports.parseJSON = parseJSON;
function downloadHistory(key) {
    const messagesList = parseJSON(localStorage.getItem("history") || '');
    messagesList.slice(0, const_1.MESSAGE.step).forEach((item) => {
        if (item.user.email === (0, request_1.getCookie)(key)) {
            addMessage({ userClass: const_1.ELEMENTS.myMessages, text: item.text, time: item.updatedAt });
        }
        else {
            addMessage({ userClass: const_1.ELEMENTS.interlocutorMessages,
                text: item.text,
                time: item.updatedAt,
                userName: item.user.name });
        }
    });
    const history = messagesList.filter((item, index) => index >= const_1.MESSAGE.step);
    localStorage.setItem("history", stringifyJSON(history) || '');
    if (messagesList.length <= const_1.MESSAGE.step) {
        (0, ui_1.showEndHistory)();
    }
}
exports.downloadHistory = downloadHistory;
