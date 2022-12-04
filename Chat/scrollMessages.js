"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lazyLoad = exports.spliceArr = exports.scrollLastElement = void 0;
const storage_1 = require("./storage");
const render_1 = require("./render");
function scrollLastElement() {
    const ELEMENTS = document.querySelector('.content-message');
    if (ELEMENTS === null) {
        return;
    }
    const LAST_MESSAGE = ELEMENTS.lastElementChild;
    if (LAST_MESSAGE) {
        LAST_MESSAGE.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
}
exports.scrollLastElement = scrollLastElement;
function spliceArr() {
    const array = (0, storage_1.getItemStorage)();
    if (!array) {
        return;
    }
    const newArr = array.splice(0, countEnd);
    (0, render_1.renderClient)(newArr);
    scrollLastElement();
}
exports.spliceArr = spliceArr;
let item = 0;
const countEnd = 20;
function lazyLoad() {
    const array = (0, storage_1.getItemStorage)();
    for (let i = 0; i <= countEnd; i++) {
        (0, render_1.renderClient)([array[item]]);
        item++;
    }
}
exports.lazyLoad = lazyLoad;
