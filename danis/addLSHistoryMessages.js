"use strict";
exports.__esModule = true;
exports.historyMessages = void 0;
var consts_1 = require("./consts");
var virtualization_1 = require("./virtualization");
function historyMessages(cookie) {
    fetch(consts_1.urlGetHistoryMessages, {
        method: consts_1.httpRequests.GET,
        headers: {
            'Authorization': "Bearer ".concat(cookie),
            'Content-Type': consts_1.headerApplication
        }
    })
        .then(function (response) { return response.json(); })
        .then(function (result) { return localStorage.setItem(consts_1.localStorageNameHistoryMessages, JSON.stringify(result)); })
        .then(function (callback) { return (0, virtualization_1.virtualization)(); });
}
exports.historyMessages = historyMessages;
