"use strict";
exports.__esModule = true;
exports.historyMessages = void 0;
var consts_1 = require("./consts");
function historyMessages(cookie) {
    fetch(consts_1.urlGetHistoryMessages, {
        method: consts_1.httpRequests.GET,
        headers: {
            'Authorization': "Bearer ".concat(cookie),
            'Content-Type': consts_1.headerApplication
        }
    })
        .then(function (response) { return response.json(); })
        .then(function (result) { return localStorage.setItem('lcHistoryMessage', result); });
}
exports.historyMessages = historyMessages;
