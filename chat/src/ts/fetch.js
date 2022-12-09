"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHistoryMessages = exports.patch = exports.post = void 0;
const urlUser = 'https://edu.strada.one/api/user';
const urlMe = 'https://edu.strada.one/api/user/me';
const urlMessages = 'https://edu.strada.one/api/messages/';
function post(value) {
    return fetch(urlUser, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ email: value.trim() }),
    })
        .then(res => res.json())
        .then(data => data)
        .catch(error => alert('ERROR: ' + error));
}
exports.post = post;
function patch(token, userName = 'new-name') {
    return fetch(urlUser, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: userName }),
    })
        .then(res => res.json())
        .then(data => {
        data;
        get(token);
    })
        .catch(error => alert('ERROR: ' + error));
}
exports.patch = patch;
function get(token) {
    fetch(urlMe, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: `Bearer ${token}`,
        },
    });
}
function getHistoryMessages(token) {
    return fetch(urlMessages, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: `Bearer ${token}`,
        },
    });
}
exports.getHistoryMessages = getHistoryMessages;
