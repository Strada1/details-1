"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessage = void 0;
const date_fns_1 = require("date-fns");
const const_1 = require("./const");
function createMessage(user = 'me', userName = '', inputValue, timeValue = new Date()) {
    var _a;
    const myMessage = document.createElement('div');
    const content = document.createElement('div');
    const text = document.createElement('p');
    const time = document.createElement('div');
    const timeText = document.createElement('span');
    myMessage.classList.add(`content__${user}`);
    myMessage.classList.add('message');
    content.classList.add('content__message');
    time.classList.add('content__time');
    myMessage.append(content);
    content.append(text);
    content.append(time);
    time.append(timeText);
    user === 'me'
        ? (text.textContent = inputValue)
        : (text.textContent = `${userName}: ${inputValue}`);
    timeText.textContent = (0, date_fns_1.format)(new Date(timeValue), 'HH:mm');
    return (_a = const_1.CONTENT_CHAT.VIEW) === null || _a === void 0 ? void 0 : _a.append(myMessage);
}
exports.createMessage = createMessage;
