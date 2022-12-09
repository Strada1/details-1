"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONTENT_CHAT = exports.INPUTS_FORMS = exports.BUTTONS = exports.FORM = exports.MODAL_VIEW = void 0;
exports.MODAL_VIEW = {
    SETTINGS: document.querySelector('.modal'),
    AUTH: document.querySelector('.log-in'),
    ACCESS: document.querySelector('.access'),
};
exports.FORM = {
    SEND_MESSAGE: document.querySelector('.chat-form'),
    MESSAGE_INPUT: document.querySelector('.send-message'),
    AUTH_INPUT: document.querySelector('.auth-input'),
    AUTH: document.querySelector('.log-in__form'),
    ACCESS: document.querySelector('.access__form'),
    SETTINGS: document.querySelector('.modal__form'),
};
exports.BUTTONS = {
    CLOSE_AUTH: document.querySelector('.log-in__settings-close'),
    CLOSE_MODAL: document.querySelector('.modal__settings-close'),
    CLOSE_ACCESS: document.querySelector('.access__settings-close'),
    SETTINGS: document.querySelector('.header__settings'),
};
exports.INPUTS_FORMS = {
    ACCESS: document.querySelector('.access-input'),
    SETTINGS: document.querySelector('.modal-input'),
};
exports.CONTENT_CHAT = {
    VIEW: document.querySelector('.content__chat'),
};
