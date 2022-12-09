"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.socket = void 0;
const js_cookie_1 = __importDefault(require("js-cookie"));
const token = js_cookie_1.default.get('user');
const url = `wss://edu.strada.one/websockets?${token}`;
exports.socket = new WebSocket(url);
