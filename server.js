"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addName = exports.sendEmail = exports.getHistoryUser = exports.saveCoockies = void 0;
const cookies_ts_1 = __importDefault(require("cookies-ts"));
const const_js_1 = require("./const.js");
const cookies = new cookies_ts_1.default();
class ServerError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}
function saveCoockies(key, value) {
    cookies.set(key, `${value}`);
}
exports.saveCoockies = saveCoockies;
async function getHistoryUser(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${cookies.get('authorization')}`
            }
        });
        if (!response.ok) {
            throw new ServerError('data fetch error');
        }
        return await response.json();
    }
    catch (err) {
        if (err instanceof ServerError) {
            console.log(err.message);
        }
        else {
            throw err;
        }
    }
}
exports.getHistoryUser = getHistoryUser;
async function sendEmail(email, method) {
    try {
        const response = await fetch(const_js_1.URL.ACCEPT, {
            method: method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${cookies.get('authorization')}`
            },
            body: JSON.stringify({ email })
        });
        if (!response.ok) {
            throw new ServerError('request not sent');
        }
        return await response.json();
    }
    catch (err) {
        if (err instanceof ServerError) {
            console.log(err.message);
        }
        else {
            throw err;
        }
    }
}
exports.sendEmail = sendEmail;
async function addName(name, method) {
    try {
        const response = await fetch(const_js_1.URL.ACCEPT, {
            method: method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${cookies.get('authorization')}`
            },
            body: JSON.stringify({ name })
        });
        if (!response.ok) {
            throw new ServerError('request not sent');
        }
        return await response.json();
    }
    catch (err) {
        if (err instanceof ServerError) {
            console.log(err.message);
        }
        else {
            throw err;
        }
    }
}
exports.addName = addName;
