"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkHistory = exports.sliceArray = exports.checkPosition = exports.showMessageOther = exports.showMessageOwn = exports.createClone = exports.closePopup = exports.showPopup = void 0;
const const_1 = require("./const");
const date_fns_1 = require("date-fns");
const cookies_ts_1 = __importDefault(require("cookies-ts"));
const cookies = new cookies_ts_1.default();
let minIndex = 20;
let maxIndex = 40;
function showPopup(element) {
    if (element === null)
        return;
    element.classList.add(const_1.CLASS.ACTIVE);
}
exports.showPopup = showPopup;
function closePopup(element) {
    if (element === null)
        return;
    element.classList.remove(const_1.CLASS.ACTIVE);
}
exports.closePopup = closePopup;
function createClone(template) {
    return template.content.cloneNode(true);
}
exports.createClone = createClone;
function showMessageOwn(clone, user, method) {
    if (clone === null)
        return;
    clone.querySelectorAll(const_1.CLASS.OWN_TEXT).forEach((message) => message.textContent = user.text);
    clone.querySelectorAll(const_1.ID.OWN_TIME).forEach((message) => message.textContent = (0, date_fns_1.format)(new Date(user.updatedAt), 'HH:mm'));
    if (const_1.ELEMENT.MAIN === null)
        return;
    if (method === const_1.METHOD.APPEND) {
        const_1.ELEMENT.MAIN.append(clone);
        return;
    }
    const_1.ELEMENT.MAIN.prepend(clone);
}
exports.showMessageOwn = showMessageOwn;
function showMessageOther(clone, user, method) {
    if (clone === null)
        return;
    clone.querySelectorAll(const_1.CLASS.OTHER_TEXT).forEach((message) => message.textContent = `${user.user.name}: ${user.text}`);
    clone.querySelectorAll(const_1.ID.OTHER_TIME).forEach((message) => message.textContent = (0, date_fns_1.format)(new Date(user.updatedAt), 'HH:mm'));
    if (const_1.ELEMENT.MAIN === null)
        return;
    if (method === const_1.METHOD.APPEND) {
        const_1.ELEMENT.MAIN.append(clone);
        return;
    }
    const_1.ELEMENT.MAIN.prepend(clone);
}
exports.showMessageOther = showMessageOther;
function checkPosition() {
    if (const_1.ELEMENT.MAIN === null)
        return;
    let scrollBottom = const_1.ELEMENT.MAIN.scrollHeight - Math.abs(const_1.ELEMENT.MAIN.scrollTop) - const_1.ELEMENT.MAIN.clientHeight;
    if (scrollBottom === 0) {
        sliceArray(const_1.HISTORY_MESSAGE);
    }
}
exports.checkPosition = checkPosition;
function sliceArray(historyMessage) {
    const history = historyMessage.filter((item, index) => {
        if (minIndex <= index && index < maxIndex)
            return item;
    });
    minIndex += const_1.NUMBER.NEXT_INDEX;
    maxIndex += const_1.NUMBER.NEXT_INDEX;
    checkHistory(history);
    if (0 === history.length) {
        showEndMessage();
    }
}
exports.sliceArray = sliceArray;
function checkHistory(history) {
    history.forEach((history) => {
        if (history.user.email === cookies.get('email')) {
            const cloneOwn = createClone(const_1.ELEMENT.TEMPLATE_MESS_OWN);
            showMessageOwn(cloneOwn, history, const_1.METHOD.APPEND);
        }
        else {
            const cloneOther = createClone(const_1.ELEMENT.TEMPLATE_MESS_OTHER);
            showMessageOther(cloneOther, history, const_1.METHOD.APPEND);
        }
    });
}
exports.checkHistory = checkHistory;
function showEndMessage() {
    if (const_1.ELEMENT.MAIN === null)
        return;
    if (!document.querySelector(const_1.NEW_ELEMENT.CLASS_END)) {
        let div = document.createElement(const_1.NEW_ELEMENT.DIV);
        div.classList.add(const_1.NEW_ELEMENT.NEW_CLASS_END);
        let p = document.createElement(const_1.NEW_ELEMENT.P);
        p.textContent = const_1.NEW_ELEMENT.TEXT;
        div.append(p);
        const_1.ELEMENT.MAIN.append(div);
    }
}
