"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderUserMessage = exports.renderClient = void 0;
const date_fns_1 = require("date-fns");
const scrollMessages_1 = require("./scrollMessages");
const websocket_1 = require("./websocket");
function renderClient(array) {
    // const array = getItemStorage();
    array.forEach((obj) => {
        if (obj) {
            const HTMLTemplateElements = document.querySelector('.client-message');
            if (HTMLTemplateElements === null) {
                return;
            }
            const cloneNodes = HTMLTemplateElements.content.cloneNode(true);
            const message = cloneNodes.querySelector('.client-span-message');
            const date = cloneNodes.querySelector('.date-interlocutor');
            const clientName = cloneNodes.querySelector(".no-select");
            if (clientName && message && date && contentMessages) {
                const { user, text, createdAt } = obj;
                clientName.textContent = `${user.name}: `;
                message.textContent = text;
                date.textContent = (0, date_fns_1.format)(new Date(createdAt), 'k:m');
                contentMessages.append(cloneNodes);
            }
        }
    });
    // scrollLastElement();
}
exports.renderClient = renderClient;
const inputMessage = document.querySelector('#post-name');
const contentMessages = document.querySelector('.content-message');
function renderUserMessage(event) {
    event.preventDefault();
    const myMessage = inputMessage.value.trim();
    websocket_1.socket.onopen = (0, websocket_1.sentMessage)(myMessage);
    const HTMLTemplateElement = document.querySelector('.user-message');
    if (HTMLTemplateElement === null) {
        return;
    }
    const cloneNode = HTMLTemplateElement.content.cloneNode(true);
    const message = cloneNode.querySelector('.user-span-message');
    const date = cloneNode.querySelector('.date-me');
    if (message !== null && date !== null && contentMessages !== null && inputMessage !== null) {
        message.textContent = myMessage;
        date.textContent = (0, date_fns_1.format)(new Date(), 'k:m');
        contentMessages.append(cloneNode);
        inputMessage.textContent = '';
        (0, scrollMessages_1.scrollLastElement)();
        console.log("sadasdasd" + inputMessage.textContent);
    }
}
exports.renderUserMessage = renderUserMessage;
