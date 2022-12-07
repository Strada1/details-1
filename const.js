"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INDEX_ARRAY = exports.METHOD = exports.NEW_ELEMENT = exports.NUMBER = exports.HISTORY_MESSAGE = exports.ID = exports.CLASS = exports.URL = exports.ELEMENT = void 0;
exports.ELEMENT = {
    BODY: document.body,
    FORM_MESSAGE: document.querySelector('.form-message'),
    INPUT_MESSAGE: document.querySelector('.form-message__input'),
    MAIN: document.querySelector('.main'),
    TEMPLATE_MESS_OWN: document.querySelector('.temlate-message-own'),
    TEMPLATE_MESS_OTHER: document.querySelector('.temlate-message-other'),
    POPUP_EMAIL: document.querySelector('#email'),
    POPUP_CODE: document.querySelector('#code'),
    POPUP_NAME: document.querySelector('#name'),
    EMAIL: document.querySelector('.chat-email__input'),
    EXIT: document.querySelector('.nav__exit'),
    BUTTON_ENTER: document.querySelector('#enter'),
    BUTTON_CODE: document.querySelector('#add_code'),
    BUTTON_NAME: document.querySelector('#name-btn'),
    CODE_INPUT: document.querySelector('.chat-code__input'),
    NAME_INPUT: document.querySelector('.chat__input'),
    BUTTON_SETTING: document.querySelector('#setting'),
    CLOSE_EMAIL: document.querySelector('#close-email'),
    CLOSE_CODE: document.querySelector('#close-code'),
    CLOSE_NAME: document.querySelector('#close-name'),
};
exports.URL = {
    ACCEPT: 'https://edu.strada.one/api/user',
    ME: 'https://edu.strada.one/api/user/me',
    MESSAGE: 'https://edu.strada.one/api/messages/'
};
exports.CLASS = {
    ACTIVE: 'popup--active',
    OWN_TEXT: '.main__message-own-text',
    OTHER_TEXT: '.main__message-other-text',
};
exports.ID = {
    OTHER_TIME: '#other-time',
    OWN_TIME: '#own-time'
};
const isValid = (value) => [null, undefined, ""].includes(value);
const HISTORY_MESSAGE = () => {
    const value = localStorage.getItem('messages');
    if (!isValid(value)) {
        return undefined;
    }
    return JSON.parse(value);
};
exports.HISTORY_MESSAGE = HISTORY_MESSAGE;
exports.NUMBER = {
    NEXT_INDEX: 20,
};
exports.NEW_ELEMENT = {
    CLASS_END: '.messages-end',
    NEW_CLASS_END: 'messages-end',
    DIV: 'div',
    P: 'p',
    TEXT: 'Вся история загружена'
};
exports.METHOD = {
    PREPEND: 'prepend',
    APPEND: 'append',
    POST: 'POST',
    PATCH: 'PATCH'
};
exports.INDEX_ARRAY = {
    MIN: 0,
    MAX: 19
};
