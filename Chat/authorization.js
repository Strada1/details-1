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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
exports.__esModule = true;
var Cookies = require("js-cookie");
var const_1 = require("./const");
var requests_1 = require("./requests");
var AUTH_FORM = {
    confirmBg: document.querySelector(".confirm__bg"),
    confirm: document.querySelector(".confirm"),
    auth: document.querySelector(".auth")
};
function authPopupStyle(elements) {
    elements.confirmBg.classList.add("active");
    elements.confirm.classList.add('active');
    elements.auth.classList.add("active");
}
function formAuth(event) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    return [4 /*yield*/, (0, requests_1.setToken)(const_1.DATA.email)];
                case 1:
                    _a.sent();
                    const_1.DATA.email = "";
                    authPopupStyle(AUTH_FORM);
                    return [2 /*return*/];
            }
        });
    });
}
var authForm = document.querySelector("#form-auth");
authForm === null || authForm === void 0 ? void 0 : authForm.addEventListener("submit", formAuth);
var CONFIRM_FORM = {
    formConfirm: document.querySelector("#form-confirm"),
    chatBg: document.querySelector(".chat"),
    container: document.querySelector(".container"),
    inputConfirm: document.querySelector(".input-confirm")
};
function confirmPopupStyle(elements) {
    elements.chatBg.classList.add('active');
    elements.container.classList.add('active');
    AUTH_FORM.confirmBg.classList.remove('active');
    AUTH_FORM.confirm.classList.remove('active');
}
function submitConfirm(event) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    Cookies.set("email", CONFIRM_FORM.inputConfirm.value, { expires: 7 });
                    return [4 /*yield*/, (0, requests_1.getDataUser)(const_1.DATA.urlGet)];
                case 1:
                    _a.sent();
                    confirmPopupStyle(CONFIRM_FORM);
                    return [2 /*return*/];
            }
        });
    });
}
(_a = CONFIRM_FORM.formConfirm) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", submitConfirm);
// const exit = document.querySelector("#exit");
// const authBg = document.querySelector(".auth__bg");
// const auths = document.querySelector(".auth");
//
// exit.addEventListener("click", (e) => {
//     e.preventDefault();
//
//
//     // auths.classList.add('auth');
//
// })
