"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessage = exports.sentMessage = exports.socket = void 0;
const Cookies = require("js-cookie");
const const_1 = require("./const");
const socket = new WebSocket(`${const_1.DATA.websocket}${Cookies.get('email')}`);
exports.socket = socket;
function sentMessage(message) {
    socket.send(JSON.stringify({ text: message }));
    console.log("[open] Соединение установлено");
    return message;
}
exports.sentMessage = sentMessage;
function getMessage(event) {
    try {
        console.log("[message] Данные получены с сервера:", event.data);
        return JSON.parse(event.data);
    }
    catch (e) {
        new Error(e.message);
    }
}
exports.getMessage = getMessage;
