"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataUser = void 0;
const js_cookie_1 = __importDefault(require("js-cookie"));
const const_1 = require("./const");
const POPUP_1 = require("./POPUP");
const_1.POPUP.GET_COD?.addEventListener("click", sendCod);
const_1.POPUP.LOGIN?.addEventListener("click", loginSetCookie);
const_1.POPUP.SAVE_NAME?.addEventListener("click", setName);
async function sendCod(event) {
    event.preventDefault();
    const userEmail = const_1.POPUP.INPUT.value.trim();
    js_cookie_1.default.set("email", `${userEmail}`);
    const response = await fetch("https://edu.strada.one/api/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: `Bearer ${js_cookie_1.default.get("authorizationCod")}`,
        },
        body: JSON.stringify({ email: `${userEmail}` }),
    });
    if (!response.ok) {
        alert("Email не коректный, поробуйте снова");
        (0, POPUP_1.closePopupConfirmation)();
        (0, POPUP_1.openPopupAuthorization)();
    }
}
function loginSetCookie(event) {
    event.preventDefault();
    const cod = const_1.POPUP.INPUT_COD?.value.trim();
    js_cookie_1.default.set("authorizationCod", `${cod}`);
    console.log("All cookies: ", js_cookie_1.default.get());
    (0, POPUP_1.closePopupConfirmation)();
    (0, POPUP_1.openPopupSettings)();
}
async function setName(event) {
    event.preventDefault();
    console.log("start");
    const name = const_1.POPUP.INPUT_NAME?.value.trim();
    const response = await fetch("https://edu.strada.one/api/user", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${js_cookie_1.default.get("authorizationCod")}`,
        },
        body: JSON.stringify({ name: `${name}` }),
    });
    const result = await response.json();
    console.log("result: ", result);
    console.log("response: ", response.ok);
    (0, POPUP_1.closePopupSettings)();
    getDataUser();
}
async function getDataUser() {
    const response = await fetch("https://edu.strada.one/api/user/me", {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: `Bearer ${js_cookie_1.default.get("authorizationCod")}`,
        },
    });
    const result = await response.json();
    // console.log('result: ', result);
    // console.log("response: ", response.ok);
    return result;
}
exports.getDataUser = getDataUser;
