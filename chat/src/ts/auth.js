"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorization = void 0;
const const_1 = require("./const");
const fetch_1 = require("./fetch");
function authorization(evt) {
    var _a, _b;
    evt.preventDefault();
    (0, fetch_1.post)(const_1.FORM.AUTH_INPUT.value);
    (_a = const_1.FORM.AUTH) === null || _a === void 0 ? void 0 : _a.classList.add('hide');
    (_b = const_1.MODAL_VIEW.ACCESS) === null || _b === void 0 ? void 0 : _b.classList.remove('hide');
}
exports.authorization = authorization;
