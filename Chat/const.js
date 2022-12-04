"use strict";
exports.__esModule = true;
exports.buttonSetting = exports.inputValue = exports.DATA = void 0;
var inputEmail = document.querySelector(".input-auth");
var DATA = {
    urlPost: "https://edu.strada.one/api/user",
    urlGet: "https://edu.strada.one/api/user/me",
    urlMessage: "https://edu.strada.one/api/messages/",
    email: inputEmail.value.trim(),
    websocket: "wss://edu.strada.one/websockets?"
};
exports.DATA = DATA;
var inputValue = {
    userName: document.querySelector(".input-popup")
};
exports.inputValue = inputValue;
var buttonSetting = {
    popupBg: document.querySelector('.popup__bg'),
    popup: document.querySelector('.popup'),
    openPopupButton: document.querySelector('#setting'),
    closePopupButton: document.querySelector('.close-popup')
};
exports.buttonSetting = buttonSetting;
