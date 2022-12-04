"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOG_BUTTON_TEXT = exports.LOGGED_IN_USER = exports.ALERTS = exports.OPTIONS = exports.ENDPOINTS = exports.COOKIES = exports.MODAL_CASES = exports.ELEMENTS = void 0;
const js_cookie_1 = __importDefault(require("js-cookie"));
exports.ELEMENTS = {
    chatScreen: document.getElementById('chat-screen'),
    midSection: document.getElementById('mid-section'),
    msgInput: document.getElementById('message-input'),
    msgForm: document.getElementById('message-form'),
    msgTemplate: document.getElementById('message-template'),
    msgContainer: document.getElementById('message-container'),
    endEl: document.querySelector('.end-el'),
    modalTemplate: document.getElementById('modal'),
    settingsButton: document.getElementById('settings-button'),
    logButton: document.getElementById('log-button'),
};
exports.MODAL_CASES = {
    SETTINGS: {
        purpose: 'settings',
        modalTitle: 'Настройки',
        formTitle: 'Имя в чате:',
        buttonTitle: 'Сохранить'
    },
    AUTH: {
        purpose: 'auth',
        modalTitle: 'Авторизация',
        formTitle: 'Почта:',
        buttonTitle: 'Получить код'
    },
    VERIFY: {
        purpose: 'verify',
        modalTitle: 'Подтверждение',
        formTitle: 'Код:',
        buttonTitle: 'Войти'
    }
};
exports.COOKIES = {
    cookiesKey: 'userToken',
    getUserToken() {
        return js_cookie_1.default.get(this.cookiesKey);
    },
};
exports.ENDPOINTS = {
    PATCH_NAME: 'https://edu.strada.one/api/user',
    POST_EMAIL: 'https://edu.strada.one/api/user',
    GET_USER: 'https://edu.strada.one/api/user/me',
    GET_HIST: 'https://edu.strada.one/api/messages',
    SOCKET: 'wss://edu.strada.one/websockets?'
};
exports.OPTIONS = {
    METHOD: {
        post: 'POST',
        patch: 'PATCH'
    },
    HEADERS: {
        auth: 'Authorization',
        contentType: 'Content-Type'
    },
    HEADERS_VALUES: {
        bearer: `Bearer ${exports.COOKIES.getUserToken()}`,
        typeJSON: 'application/json;charset=utf-8'
    }
};
exports.ALERTS = {
    cantChangeName: 'Невозможно изменить имя - вы не авторизованы!',
    loginSuccess: 'Произведен вход! Имя пользователя:',
    loginFail: 'Ошибка входа',
    tokenRequestSuccess: 'Код отправлен! Проверьте вашу эл. почту',
    tokenRequestFail: 'Ошибка при отправке запроса'
};
exports.LOGGED_IN_USER = {
    name: null,
    email: null,
};
exports.LOG_BUTTON_TEXT = {
    login: 'Войти',
    logout: 'Выйти',
};
