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
exports.__esModule = true;
exports.onmessage = exports.postMessageToServer = void 0;
var consts_1 = require("./consts");
var createMessage_1 = require("./createMessage");
var getUserInfo_1 = require("./getUserInfo");
var date_fns_1 = require("date-fns");
var socketName = new WebSocket("".concat(consts_1.getSocketUrl).concat(document.cookie));
function postMessageToServer(textMessage) {
    socketName.send(JSON.stringify({ text: textMessage }));
}
exports.postMessageToServer = postMessageToServer;
function onmessage() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            socketName.onmessage = function (event) {
                return __awaiter(this, void 0, void 0, function () {
                    var result, getEmail;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                result = JSON.parse(event.data);
                                return [4 /*yield*/, (0, getUserInfo_1.getUserInfo)()];
                            case 1:
                                getEmail = _a.sent();
                                if (result.user.email === getEmail) {
                                    (0, createMessage_1.createMessage)(result.text, result.user.name, (0, date_fns_1.format)(Date.parse(result.createdAt), "HH:mm"), consts_1.addClassForMe);
                                }
                                else {
                                    (0, createMessage_1.createMessage)(result.text, result.user.name, (0, date_fns_1.format)(Date.parse(result.createdAt), "HH:mm"), consts_1.addClassForAnother);
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            };
            return [2 /*return*/];
        });
    });
}
exports.onmessage = onmessage;
