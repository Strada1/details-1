"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.METHOD = exports.MESSAGE = exports.ELEM_HEIGHTS = exports.ELEMENTS = void 0;
exports.ELEMENTS = {
    modalButtonName: document.querySelector(".modal-name"),
    modalName: document.querySelector("#modal-name"),
    modals: document.querySelectorAll("[data-modal]"),
    modalWindow: document.querySelectorAll(".modal__window"),
    modalAuthorization: document.querySelector("#modal-authorization"),
    modalCode: document.querySelector("#modal-code"),
    closestModal: "[data-modal]",
    buttonsClose: document.querySelectorAll("[data-modal-close]"),
    buttonExit: document.querySelector(".inline-button-exit"),
    textArea: document.querySelector(".input-message"),
    contentWindow: document.querySelector(".content"),
    contentWrapper: document.querySelector(".content__wrapper"),
    messageForm: document.querySelector(".texting-area__wrapper"),
    scrollDown: document.querySelector(".scroll-down"),
    getCodeButton: document.querySelector("#modal-authorization  .button"),
    authorizationForm: document.querySelector("#modal-authorization .input-data"),
    emailInput: document.querySelector("#modal-authorization .modal__input"),
    codeForm: document.querySelector("#modal-code .input-data"),
    code: document.querySelector("#modal-code .modal__input"),
    nameForm: document.querySelector("#modal-name .input-data"),
    name: document.querySelector("#modal-name .modal__input"),
    hiddenClass: "hidden",
    codeWarning: document.querySelector("#modal-code .modal__warning"),
    nameWarning: document.querySelector("#modal-name .modal__warning"),
    myMessages: ["message", "message--user-me", "message--sent"],
    interlocutorMessages: ["message", "message--interlocutor"],
    URL: "https://edu.strada.one/api",
    authorizationWord: "Bearer",
    template: document.querySelector('#tmpl'),
};
exports.ELEM_HEIGHTS = {
    windowHeight: document.documentElement.clientHeight,
    headerHeight: document.querySelector(".header").clientHeight,
    inputMessageHeight: 50,
    messageMargin: 15,
    inputMessagePadding: 42.5,
};
exports.MESSAGE = {
    step: 20,
};
exports.METHOD = {
    POST: "POST",
    PATCH: "PATCH",
    GET: "GET",
};
