"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MESSAGE = exports.URL = exports.POPUP = exports.ELEMENT = exports.NUMBERS = exports.CLASS_NAME = void 0;
exports.CLASS_NAME = {
    SETTINGS: ".settings",
    authorization: ".authorization",
    chatForm: ".chat__form",
    SCROLL: ".container-scroll"
};
exports.NUMBERS = {
    TWENTY: 20,
    ZERO: 0
};
exports.ELEMENT = {
    SETTINGS: document.querySelector(exports.CLASS_NAME.SETTINGS),
    AUTHORIZATION: document.querySelector(exports.CLASS_NAME.authorization),
    SEND_MESSAGE: document.querySelector(".chat__form"),
    INPUT_MESSAGE: document.querySelector(".input__message"),
    TEXT_MESSAGE: document.querySelector(".text__my__SMS"),
    CHAT_CONTAINER: document.querySelector(".chat__Container"),
    TEMPLATE: document.getElementById("template"),
    TEMPLATE_COMPANION: document.getElementById("templateCompanion"),
    SCROl: document.querySelector(exports.CLASS_NAME.SCROLL),
};
exports.POPUP = {
    GET_COD: document.querySelector(".popup__authorization__button"),
    INPUT: document.querySelector(".popup__authorization__input"),
    CLOSE_SETTINGS: document.querySelector(".popup__setings__button__exit"),
    INPUT_NAME: document.querySelector(".popup__setings__input"),
    SAVE_NAME: document.querySelector(".popup__setings__button"),
    CLOSE_AUTHORIZATION: document.querySelector(".popup__authorization__button__exit"),
    SETTINGS: document.getElementById("popupSetings"),
    AUTHORIZATION: document.getElementById("popupAuthorization"),
    CONFIRMATION: document.getElementById("popupConfirmation"),
    CLOSE_CONFIRMATION: document.querySelector(".popup__confirmation__button__exit"),
    LOGIN: document.querySelector(".popup__confirmation__button"),
    INPUT_COD: document.querySelector(".popup__confirmation__input"),
};
exports.URL = {
    HISTORY_SERVER: "https://edu.strada.one/api/messages/",
    SOCET: "ws://edu.strada.one/websockets?"
};
exports.MESSAGE = {};
