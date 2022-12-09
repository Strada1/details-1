"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHistory = void 0;
const fetch_1 = require("./fetch");
const js_cookie_1 = __importDefault(require("js-cookie"));
const message_1 = require("./message");
const webSocket_1 = require("./webSocket");
function getHistory() {
    const userCookies = js_cookie_1.default.get('user') || '';
    const history = (0, fetch_1.getHistoryMessages)(userCookies);
    webSocket_1.socket.onmessage = function (event) {
        const data = JSON.parse(event.data);
        (0, message_1.createMessage)('companion', data.user.name, data.text, data.updatedAt);
    };
    history
        .then(res => res.json())
        .then(data => {
        localStorage.setItem('messages', JSON.stringify(data.messages));
        const messages = JSON.parse(localStorage.getItem('messages') || '');
        messages.reverse().filter((item, index) => {
            if (0 <= index && index < 20) {
                if (item.user.name === js_cookie_1.default.get('userName')) {
                    return (0, message_1.createMessage)('me', '', item.text, item.updatedAt);
                }
                return (0, message_1.createMessage)('companion', item.user.name, item.text, item.updatedAt);
            }
        });
    })
        .catch(error => console.log('ERROR: ' + error));
}
exports.getHistory = getHistory;
