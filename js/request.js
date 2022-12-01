"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRequest = exports.getCookie = exports.setCookie = void 0;
const const_1 = require("./const");
const ui_1 = require("./ui");
function setCookie(name, value, age = 1728000) {
    if (value !== "") {
        document.cookie = `${name}=${value}; max-age= ${age}`;
    }
    else {
        (0, ui_1.showWarning)(const_1.ELEMENTS.codeWarning);
    }
}
exports.setCookie = setCookie;
function getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
exports.getCookie = getCookie;
function sendRequest(item) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield fetch(item.URL, Object.assign({ method: item.method, headers: Object.assign({ "Content-Type": "application/json" }, item.headers) }, item.body));
            if (!response.ok) {
                alert("Ошибка запроса:" + response.status);
            }
            let result = yield response.json();
            return result;
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.sendRequest = sendRequest;
