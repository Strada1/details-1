"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sliceArray = exports.checkPosition = void 0;
const const_1 = require("./const");
const js_cookie_1 = __importDefault(require("js-cookie"));
const message_1 = require("./message");
const history = JSON.parse(localStorage.getItem('messages') || '');
let minIndex = 21;
let maxIndex = 40;
function checkPosition() {
    var _a, _b, _c;
    const height = (_a = const_1.CONTENT_CHAT.VIEW) === null || _a === void 0 ? void 0 : _a.scrollHeight;
    const clientHeight = (_b = const_1.CONTENT_CHAT.VIEW) === null || _b === void 0 ? void 0 : _b.offsetHeight;
    const scrolled = (_c = const_1.CONTENT_CHAT.VIEW) === null || _c === void 0 ? void 0 : _c.scrollTop;
    const threshold = height - clientHeight / 4;
    const position = scrolled + clientHeight;
    if (position >= threshold) {
        sliceArray(history.reverse());
    }
}
exports.checkPosition = checkPosition;
function sliceArray(historyMessage) {
    const history = historyMessage.filter((item, index) => {
        if (minIndex <= index && index < maxIndex) {
            return item;
        }
    });
    minIndex += 20;
    maxIndex += 20;
    history.forEach(obj => {
        if (obj.user.name === js_cookie_1.default.get('userName')) {
            return (0, message_1.createMessage)('me', '', obj.text, obj.updatedAt);
        }
        return (0, message_1.createMessage)('companion', obj.user.name, obj.text, obj.updatedAt);
    });
    if (0 === history.length) {
        // alert('Все история загружена ');
    }
}
exports.sliceArray = sliceArray;
