"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_js_1 = require("./constants.js");
const render_js_1 = require("./render.js");
const modal_js_1 = require("./modal.js");
const api_js_1 = require("./api.js");
const js_cookie_1 = __importDefault(require("js-cookie"));
window.addEventListener('DOMContentLoaded', pageLoadHandler);
constants_js_1.ELEMENTS.settingsButton.addEventListener('click', settingsButtonHandler);
constants_js_1.ELEMENTS.logButton.addEventListener('click', logButtonHandler);
async function pageLoadHandler() {
    const token = constants_js_1.COOKIES.getUserToken();
    if (!token) {
        initAuthorization();
        return;
    }
    const userLogged = await login();
    if (!userLogged) {
        alert(constants_js_1.ALERTS.loginFail);
        return;
    }
    addSessionData(userLogged);
    const socket = (0, api_js_1.openChatSocket)(constants_js_1.ENDPOINTS.SOCKET, constants_js_1.COOKIES.getUserToken());
    const history = await (0, render_js_1.returnHistoryElementsArr)();
    const render = initMessagesRender(history, socket);
    constants_js_1.ELEMENTS.midSection.addEventListener('scroll', () => {
        chatScrollHandler(render);
    });
    constants_js_1.ELEMENTS.msgForm.addEventListener('submit', (e) => {
        e.preventDefault();
        messageFormHandler(e, socket);
    });
}
function settingsButtonHandler() {
    (0, modal_js_1.createModal)(constants_js_1.MODAL_CASES.SETTINGS.purpose);
}
function logButtonHandler() {
    const userToken = constants_js_1.COOKIES.getUserToken();
    if (!userToken) {
        (0, modal_js_1.createModal)(constants_js_1.MODAL_CASES.AUTH.purpose);
        return;
    }
    else {
        logout();
    }
}
function chatScrollHandler(renderPart) {
    const scrollArea = constants_js_1.ELEMENTS.midSection;
    let scrollT = scrollArea.scrollTop;
    let scrollH = scrollArea.scrollHeight;
    let scrollCl = scrollArea.clientHeight;
    if (Math.abs(scrollT) + scrollCl >= Math.ceil(scrollH)) {
        console.log('reached end');
        renderPart();
    }
}
function messageFormHandler(e, socket) {
    const input = constants_js_1.ELEMENTS.msgInput;
    if (!input.value) {
        return;
    }
    (0, api_js_1.sendSocketMessage)(input.value, socket);
    e.target.reset();
}
async function login() {
    const logButton = constants_js_1.ELEMENTS.logButton;
    logButton.textContent = constants_js_1.LOG_BUTTON_TEXT.logout;
    let userData = await (0, api_js_1.getData)(constants_js_1.ENDPOINTS.GET_USER);
    return userData;
}
function initAuthorization() {
    const logButton = constants_js_1.ELEMENTS.logButton;
    logButton.textContent = constants_js_1.LOG_BUTTON_TEXT.login;
    (0, modal_js_1.createModal)(constants_js_1.MODAL_CASES.AUTH.purpose);
    return;
}
function addSessionData(userLogged) {
    constants_js_1.LOGGED_IN_USER.name = userLogged.name;
    constants_js_1.LOGGED_IN_USER.email = userLogged.email;
    alert(constants_js_1.ALERTS.loginSuccess + ' ' + constants_js_1.LOGGED_IN_USER.name);
}
function initMessagesRender(history, socket) {
    const renderer = new render_js_1.MessageRenderer(history, socket);
    renderer.renderSocketMessage();
    const renderFirstPart = renderer.partialRender(0, 20);
    renderFirstPart();
    const renderNextParts = renderer.partialRender(20, 20);
    return renderNextParts;
}
function logout() {
    js_cookie_1.default.remove(constants_js_1.COOKIES.cookiesKey);
    window.location.reload();
}
