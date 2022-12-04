"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemStorage = exports.setItemStorage = void 0;
const requests_1 = require("./requests");
const const_1 = require("./const");
async function setItemStorage() {
    try {
        const response = await (0, requests_1.getDataUser)(const_1.DATA.urlMessage);
        const array = response.messages;
        const localArray = JSON.stringify(array.reverse());
        localStorage.setItem("messages", localArray);
    }
    catch (e) {
        new Error(e.message);
    }
}
exports.setItemStorage = setItemStorage;
function getItemStorage() {
    const array = localStorage.getItem("messages");
    if (array === null) {
        return;
    }
    try {
        return JSON.parse(array);
    }
    catch (e) {
        new Error(e.message);
    }
}
exports.getItemStorage = getItemStorage;
