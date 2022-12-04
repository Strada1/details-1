"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnHistoryElementsArr = exports.addEndingTitle = exports.MessageRenderer = void 0;
const constants_js_1 = require("./constants.js");
const api_js_1 = require("./api.js");
const format_1 = __importDefault(require("date-fns/format"));
const parseISO_1 = __importDefault(require("date-fns/parseISO"));
class MessageRenderer {
    history;
    socket;
    constructor(history, socket) {
        this.history = history;
        this.socket = socket;
    }
    ;
    partialRender(initial, partSize) {
        let i = initial;
        const msgHistory = this.history;
        return function () {
            const part = msgHistory.slice(i, i + partSize);
            console.log(part);
            const reversedPart = part.reverse();
            if (reversedPart.length === 0) {
                addEndingTitle();
                return;
            }
            constants_js_1.ELEMENTS.chatScreen.prepend(...reversedPart);
            i += partSize;
        };
    }
    ;
    renderSocketMessage() {
        this.socket.onmessage = function (event) {
            const jsonData = event.data;
            const messageData = JSON.parse(jsonData);
            addDataToTemplate(messageData);
            const template = constants_js_1.ELEMENTS.msgTemplate;
            const newMsg = template.content.cloneNode(true);
            constants_js_1.ELEMENTS.chatScreen.append(newMsg);
        };
    }
    ;
}
exports.MessageRenderer = MessageRenderer;
;
async function returnHistoryElementsArr() {
    const messagesJSON = await (0, api_js_1.getData)(constants_js_1.ENDPOINTS.GET_HIST);
    const messagesArr = messagesJSON.messages;
    const allHistory = messagesArr.map((message) => {
        addDataToTemplate(message);
        const template = constants_js_1.ELEMENTS.msgTemplate;
        const newMsg = template.content.cloneNode(true);
        return newMsg;
    });
    return allHistory;
}
exports.returnHistoryElementsArr = returnHistoryElementsArr;
function addDataToTemplate(message) {
    const elems = getMessageTemplateElems();
    elems.msgText.textContent = message.text;
    elems.msgFrom.textContent = message.user.name;
    elems.msgTime.textContent = formatMsgTime(message.createdAt);
    if (message.user.email !== constants_js_1.LOGGED_IN_USER.email) {
        elems.msgContainer.classList.add('leftify');
    }
    else {
        elems.msgContainer.classList.remove('leftify');
    }
}
function getMessageTemplateElems() {
    const template = constants_js_1.ELEMENTS.msgTemplate;
    const elems = {
        msgText: template.content.querySelector('.message-text'),
        msgFrom: template.content.querySelector('.message-from'),
        msgTime: template.content.querySelector('.message-time'),
        msgContainer: template.content.querySelector('.message-container')
    };
    return elems;
}
function formatMsgTime(time) {
    const toFormat = (0, parseISO_1.default)(time);
    const formatted = (0, format_1.default)(toFormat, 'HH:mm');
    return formatted;
}
function addEndingTitle() {
    if (!document.getElementById('endTitle')) {
        const title = document.createElement('span');
        title.setAttribute('id', 'endTitle');
        title.textContent = 'Конец истории';
        title.classList.add('end-el');
        constants_js_1.ELEMENTS.chatScreen.prepend(title);
    }
    return;
}
exports.addEndingTitle = addEndingTitle;
