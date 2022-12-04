"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSocketMessage = exports.openChatSocket = exports.requestToken = exports.requestNameChange = exports.getData = void 0;
const constants_js_1 = require("./constants.js");
async function fetchData(endpoint, options) {
    try {
        let response = await fetch(endpoint, options);
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        let result = await response.json();
        return result;
    }
    catch (e) {
        console.log(e.message);
    }
}
// enables to get User or Message History
async function getData(endpoint) {
    const response = await fetchData(endpoint, {
        headers: {
            [constants_js_1.OPTIONS.HEADERS.auth]: constants_js_1.OPTIONS.HEADERS_VALUES.bearer,
        },
    });
    return response;
}
exports.getData = getData;
async function requestNameChange(newName) {
    const response = await fetchData(constants_js_1.ENDPOINTS.PATCH_NAME, {
        method: constants_js_1.OPTIONS.METHOD.patch,
        headers: {
            [constants_js_1.OPTIONS.HEADERS.auth]: constants_js_1.OPTIONS.HEADERS_VALUES.bearer,
            [constants_js_1.OPTIONS.HEADERS.contentType]: constants_js_1.OPTIONS.HEADERS_VALUES.typeJSON,
        },
        body: JSON.stringify({ name: newName })
    });
    return response;
}
exports.requestNameChange = requestNameChange;
async function requestToken(email) {
    const response = await fetchData(constants_js_1.ENDPOINTS.POST_EMAIL, {
        method: constants_js_1.OPTIONS.METHOD.post,
        headers: {
            [constants_js_1.OPTIONS.HEADERS.contentType]: constants_js_1.OPTIONS.HEADERS_VALUES.typeJSON,
        },
        body: JSON.stringify({ email: email })
    });
    return response;
}
exports.requestToken = requestToken;
function openChatSocket(endpoint, token) {
    const socket = new WebSocket(`${endpoint}${token}`);
    return socket;
}
exports.openChatSocket = openChatSocket;
function sendSocketMessage(message, socket) {
    socket.send(JSON.stringify({ text: message }));
}
exports.sendSocketMessage = sendSocketMessage;
