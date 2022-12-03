"use strict";
exports.__esModule = true;
exports.autorization = void 0;
var consts_1 = require("./consts");
function autorization(email) {
    var result = fetch(consts_1.getMessageUrl, {
        method: consts_1.httpRequests.POST,
        headers: {
            'Content-Type': consts_1.headerApplication
        },
        body: JSON.stringify({ email: email })
    });
}
exports.autorization = autorization;
