"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", { value: true });
const js_cookie_1 = __importDefault(require("js-cookie"));
const const_1 = require("./const");
const fetch_1 = require("./fetch");
const message_1 = require("./message");
const auth_1 = require("./auth");
const history_1 = require("./history");
const webSocket_1 = require("./webSocket");
const scroll_1 = require("./scroll");
document.addEventListener('DOMContentLoaded', () => {
    var _a, _b;
    const cookieUserName = js_cookie_1.default.get('user');
    if (cookieUserName) {
        const userName = document.querySelector('.modal__title').firstElementChild;
        userName.textContent = `Имя - ${js_cookie_1.default.get('userName')}`;
        (0, history_1.getHistory)();
    }
    else {
        (_a = const_1.MODAL_VIEW.AUTH) === null || _a === void 0 ? void 0 : _a.classList.remove('hide');
        (_b = const_1.FORM.AUTH) === null || _b === void 0 ? void 0 : _b.addEventListener('submit', evt => (0, auth_1.authorization)(evt));
        (0, history_1.getHistory)();
    }
});
(_a = const_1.CONTENT_CHAT.VIEW) === null || _a === void 0 ? void 0 : _a.addEventListener('scroll', scroll_1.checkPosition);
(_b = const_1.CONTENT_CHAT.VIEW) === null || _b === void 0 ? void 0 : _b.addEventListener('resize', scroll_1.checkPosition);
(_c = const_1.BUTTONS.CLOSE_MODAL) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
    var _a;
    (_a = const_1.MODAL_VIEW.SETTINGS) === null || _a === void 0 ? void 0 : _a.classList.add('hide');
});
(_d = const_1.BUTTONS.SETTINGS) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
    var _a;
    (_a = const_1.MODAL_VIEW.SETTINGS) === null || _a === void 0 ? void 0 : _a.classList.remove('hide');
});
(_e = const_1.BUTTONS.CLOSE_AUTH) === null || _e === void 0 ? void 0 : _e.addEventListener('click', () => {
    var _a;
    (_a = const_1.MODAL_VIEW.AUTH) === null || _a === void 0 ? void 0 : _a.classList.add('hide');
});
(_f = const_1.BUTTONS.CLOSE_ACCESS) === null || _f === void 0 ? void 0 : _f.addEventListener('click', () => {
    var _a, _b, _c;
    if ((_a = const_1.INPUTS_FORMS.ACCESS) === null || _a === void 0 ? void 0 : _a.value) {
        return (_b = const_1.MODAL_VIEW.ACCESS) === null || _b === void 0 ? void 0 : _b.classList.add('hide');
    }
    return (_c = const_1.INPUTS_FORMS.ACCESS) === null || _c === void 0 ? void 0 : _c.setAttribute('required', '');
});
window.addEventListener('keydown', evt => {
    var _a;
    if (evt.key === 'Escape') {
        (_a = const_1.MODAL_VIEW.SETTINGS) === null || _a === void 0 ? void 0 : _a.classList.add('hide');
    }
});
(_g = const_1.FORM.SEND_MESSAGE) === null || _g === void 0 ? void 0 : _g.addEventListener('submit', event => {
    var _a, _b, _c, _d;
    event.preventDefault();
    (0, message_1.createMessage)('me', '', (_a = const_1.FORM.MESSAGE_INPUT) === null || _a === void 0 ? void 0 : _a.value);
    webSocket_1.socket.send(JSON.stringify({ text: (_b = const_1.FORM.MESSAGE_INPUT) === null || _b === void 0 ? void 0 : _b.value }));
    if (typeof ((_c = const_1.CONTENT_CHAT.VIEW) === null || _c === void 0 ? void 0 : _c.scrollTop) === 'number') {
        const_1.CONTENT_CHAT.VIEW.scrollTop = (_d = const_1.CONTENT_CHAT.VIEW) === null || _d === void 0 ? void 0 : _d.scrollHeight;
    }
    const_1.FORM.MESSAGE_INPUT.value = '';
});
(_h = const_1.FORM.ACCESS) === null || _h === void 0 ? void 0 : _h.addEventListener('submit', evt => {
    var _a, _b, _c;
    evt.preventDefault();
    if ((_a = const_1.INPUTS_FORMS.ACCESS) === null || _a === void 0 ? void 0 : _a.value) {
        js_cookie_1.default.set('token', (_b = const_1.INPUTS_FORMS.ACCESS) === null || _b === void 0 ? void 0 : _b.value);
    }
    (_c = const_1.MODAL_VIEW.ACCESS) === null || _c === void 0 ? void 0 : _c.classList.add('hide');
});
(_j = const_1.FORM.SETTINGS) === null || _j === void 0 ? void 0 : _j.addEventListener('submit', evt => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    evt.preventDefault();
    if ((_a = const_1.INPUTS_FORMS.SETTINGS) === null || _a === void 0 ? void 0 : _a.value) {
        (0, fetch_1.patch)(js_cookie_1.default.get('user'), (_b = const_1.INPUTS_FORMS.SETTINGS) === null || _b === void 0 ? void 0 : _b.value);
        js_cookie_1.default.set('userName', (_c = const_1.INPUTS_FORMS.SETTINGS) === null || _c === void 0 ? void 0 : _c.value);
        (_d = const_1.MODAL_VIEW.SETTINGS) === null || _d === void 0 ? void 0 : _d.classList.add('hide');
        alert(`Имя изменено: ${(_e = const_1.INPUTS_FORMS.SETTINGS) === null || _e === void 0 ? void 0 : _e.value}`);
        const userName = ((_g = (_f = document.querySelector('.modal__title')) === null || _f === void 0 ? void 0 : _f.firstChild) === null || _g === void 0 ? void 0 : _g.nodeName) || undefined;
        userName.textContent = `Имя - ${(_h = const_1.INPUTS_FORMS.SETTINGS) === null || _h === void 0 ? void 0 : _h.value}`;
    }
});
