"use strict";
exports.__esModule = true;
exports.confirmAutorization = void 0;
var consts_1 = require("./consts");
function confirmAutorization(cookieCode, name) {
    document.cookie = cookieCode;
    var result = fetch(consts_1.urlGetInfoUser, {
        method: consts_1.httpRequests.PATCH,
        headers: {
            'Authorization': "Bearer ".concat(cookieCode),
            'Content-Type': consts_1.headerApplication
        },
        body: JSON.stringify({ name: name })
    });
}
exports.confirmAutorization = confirmAutorization;
