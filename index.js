"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const const_1 = require("./const");
const UI_1 = require("./UI");
const server_1 = require("./server");
const cookies_ts_1 = __importDefault(require("cookies-ts"));
const cookies = new cookies_ts_1.default();
const socket = new WebSocket(`wss://edu.strada.one/websockets?${cookies.get('authorization')}`);
window.onload = function () {
    saveEmail();
    if (!cookies.get('authorization')) {
        (0, UI_1.showPopup)(const_1.ELEMENT.POPUP_EMAIL);
    }
    saveHistoryStorage();
};
function saveEmail() {
    (0, server_1.getHistoryUser)(const_1.URL.ME).then((user) => {
        (0, server_1.saveCoockies)('email', user.email);
    });
}
function saveHistoryStorage() {
    (0, server_1.getHistoryUser)(const_1.URL.MESSAGE).then((history) => {
        localStorage.setItem('messages', JSON.stringify(history.messages));
        const HISTORY = JSON.parse(localStorage.getItem('messages') || '').filter((item, index) => {
            if (const_1.INDEX_ARRAY.MIN <= index && index < const_1.INDEX_ARRAY.MAX)
                return item;
        });
        (0, UI_1.checkHistory)(HISTORY);
    });
}
const_1.ELEMENT.MAIN?.addEventListener('scroll', UI_1.checkPosition);
const_1.ELEMENT.MAIN?.addEventListener('resize', UI_1.checkPosition);
const_1.ELEMENT.EXIT?.addEventListener('click', () => (0, UI_1.showPopup)(const_1.ELEMENT.POPUP_EMAIL));
const_1.ELEMENT.CLOSE_EMAIL?.addEventListener('click', () => (0, UI_1.closePopup)(const_1.ELEMENT.POPUP_EMAIL));
const_1.ELEMENT.CLOSE_CODE?.addEventListener('click', () => (0, UI_1.closePopup)(const_1.ELEMENT.POPUP_CODE));
const_1.ELEMENT.CLOSE_NAME?.addEventListener('click', () => (0, UI_1.closePopup)(const_1.ELEMENT.POPUP_NAME));
const_1.ELEMENT.BUTTON_CODE?.addEventListener('click', function (event) {
    event.preventDefault();
    if (!const_1.ELEMENT.EMAIL)
        return;
    (0, server_1.sendEmail)(const_1.ELEMENT.EMAIL.value.trim(), const_1.METHOD.POST).then((email) => {
        if (email) {
            (0, UI_1.closePopup)(const_1.ELEMENT.POPUP_EMAIL);
            (0, UI_1.showPopup)(const_1.ELEMENT.POPUP_CODE);
        }
    });
});
const_1.ELEMENT.BUTTON_SETTING?.addEventListener('click', function (event) {
    event.preventDefault();
    (0, UI_1.showPopup)(const_1.ELEMENT.POPUP_NAME);
});
const_1.ELEMENT.BUTTON_ENTER?.addEventListener('click', function (event) {
    event.preventDefault();
    if (const_1.ELEMENT.CODE_INPUT) {
        (0, UI_1.closePopup)(const_1.ELEMENT.POPUP_CODE);
        (0, UI_1.showPopup)(const_1.ELEMENT.POPUP_NAME);
        (0, server_1.saveCoockies)('authorization', const_1.ELEMENT.CODE_INPUT.value.trim());
    }
});
const_1.ELEMENT.BUTTON_NAME?.addEventListener('click', function (event) {
    event.preventDefault();
    if (!const_1.ELEMENT.NAME_INPUT)
        return;
    (0, server_1.addName)(const_1.ELEMENT.NAME_INPUT.value.trim(), const_1.METHOD.PATCH).then(name => {
        if (name)
            (0, UI_1.closePopup)(const_1.ELEMENT.POPUP_NAME);
    });
});
const_1.ELEMENT.FORM_MESSAGE?.addEventListener('submit', function (event) {
    event.preventDefault();
    sendMessage();
    const_1.ELEMENT.FORM_MESSAGE?.reset();
});
function sendMessage() {
    if (!const_1.ELEMENT.INPUT_MESSAGE)
        return;
    socket.send(JSON.stringify({ text: const_1.ELEMENT.INPUT_MESSAGE.value }));
}
socket.onmessage = function (event) {
    const message = JSON.parse(event.data);
    if (message.user.email === cookies.get('email')) {
        const cloneOwn = (0, UI_1.createClone)(const_1.ELEMENT.TEMPLATE_MESS_OWN);
        (0, UI_1.showMessageOwn)(cloneOwn, message, const_1.METHOD.PREPEND);
        return;
    }
    const cloneOther = (0, UI_1.createClone)(const_1.ELEMENT.TEMPLATE_MESS_OTHER);
    (0, UI_1.showMessageOther)(cloneOther, message, const_1.METHOD.PREPEND);
};
