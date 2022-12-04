"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHistory = void 0;
const date_fns_1 = require("date-fns");
const const_1 = require("./const");
const js_cookie_1 = __importDefault(require("js-cookie"));
const renderMessage_1 = require("./renderMessage");
const authorization_1 = require("./authorization");
window.addEventListener("load", getHistory);
const_1.ELEMENT.SCROl.addEventListener('scroll', loadScroll);
async function getHistory(event) {
    console.log('start gethistory');
    const response = await fetch(const_1.URL.HISTORY_SERVER, {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: `Bearer ${js_cookie_1.default.get("authorizationCod")}`,
        },
    });
    let result = await response.json();
    console.log("result: ", result);
    console.log("response: ", response.ok);
    let myEmail = await (0, authorization_1.getDataUser)();
    myEmail = myEmail.email;
    localStorage.setItem('myEmail', myEmail);
    let lengthArray = result.messages.length;
    lengthArray = Number(lengthArray) - 1;
    result = result.messages;
    localStorage.setItem('result', JSON.stringify(result));
    // getMessagesResult(result, lengthArray, myEmail)
    localStorage.setItem('number1', 0);
    localStorage.setItem('number2', 20);
    sliceArray(result, 0, 20);
}
exports.getHistory = getHistory;
async function getMessagesResult(result, lengthArray, myEmail) {
    if (lengthArray == -1) {
        return;
    }
    else {
        let message: string = result[lengthArray].text;
        let time = result[lengthArray].createdAt;
        let userEmail = result[lengthArray].user.email;
        let userName = result[lengthArray].user.name;
        time = (0, date_fns_1.format)(new Date(time), "kk':'mm");
        if (userEmail == myEmail) {
            if (Number(localStorage.getItem("number1")) == 0) {
                let method = 1;
                (0, renderMessage_1.addMessageToDOM)(message, time, method);
            }
            else {
                let method = 0;
                (0, renderMessage_1.addMessageToDOM)(message, time, method);
            }
        }
        else {
            if (Number(localStorage.getItem("number1")) == 0) {
                let method = 1;
                // переписать на принятие обьекта, а не 4 аргументов
                (0, renderMessage_1.companionMessageToDOM)(message, time, userName, method);
            }
            else {
                let method = 0;
                (0, renderMessage_1.companionMessageToDOM)(message, time, userName, method);
            }
        }
        lengthArray--;
        getMessagesResult(result, lengthArray, myEmail);
    }
}
async function loadScroll(event) {
    let topBorder = const_1.ELEMENT.SCROl.scrollTop;
    topBorder = Number(topBorder);
    if (topBorder == 0) {
        let result = JSON.parse(localStorage.getItem('result'));
        let number1 = 0;
        let number2 = 20;
        localStorage.setItem('number1', +localStorage.getItem('number1') + 20);
        localStorage.setItem('number2', +localStorage.getItem('number2') + 20);
        sliceArray(result, localStorage.getItem('number1'), localStorage.getItem('number2'));
    }
}
async function sliceArray(array, number1, number2) {
    const new_array = array.slice(number1, number2);
    let lengthArray = new_array.length;
    lengthArray = Number(lengthArray) - 1;
    let myEmail = await (0, authorization_1.getDataUser)();
    myEmail = myEmail.email;
    console.log('new_array: ', new_array);
    if (!(+localStorage.getItem("number1") == 0)) {
        new_array.reverse();
    }
    if (new_array.length == 0) {
        alert("Вся история загружена");
    }
    getMessagesResult(new_array, lengthArray, myEmail);
}
