"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NEW = exports.MY_EMAIL = exports.HISTORY_URL = exports.USER_URL = exports.STRADA_URL = exports.ELEMENTS = void 0;
exports.ELEMENTS = {
    MESSAGE_FORM: document.querySelector(".form-text"),
    MESSAGE_INPUT: document.querySelector("#text-message"),
    TEMPLATE_MY_MSG: document.querySelector("#my-msg"),
    TEMPLATE_FRIEND_MSG: document.querySelector("#friend-msg"),
    CHAT: document.querySelector(".chat"),
    EMAIL_FORM: document.querySelector(".popup_auth"),
    EMAIL_INPUT: document.querySelector("#email-input"),
    CODE_FORM: document.querySelector(".popup_code"),
    CODE_INPUT: document.querySelector("#code-input"),
    SETTING_BUTTON: document.querySelector("#settings"),
    SETTING_FORM: document.querySelector(".popup"),
    SETTING_INPUT: document.querySelector("#name-input"),
    SETTING_NAME: document.querySelector("#name"),
    EXIT_BUTTON: document.querySelector("#exit"),
};
exports.STRADA_URL = new URL("https://edu.strada.one/api/user");
exports.USER_URL = new URL("/api/user/me", exports.STRADA_URL);
exports.HISTORY_URL = new URL("/api/messages", exports.STRADA_URL);
exports.MY_EMAIL = "timofiei.tarasov@gmail.com";
exports.NEW = "NEW";
