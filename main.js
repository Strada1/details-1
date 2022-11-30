"use strict";
var _a;
exports.__esModule = true;
var const_js_1 = require("./const.js");
(_a = const_js_1.ELEMENT.BUTTON) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var firstOperand = getOperand(const_js_1.ELEMENT.FIRST_INPUT);
    var secondOperand = getOperand(const_js_1.ELEMENT.SECOND_INPUT);
    if (!firstOperand || !secondOperand) {
        alert("Введите число!");
        return;
    }
    var result = calc(firstOperand, secondOperand);
    if (!result) {
        alert("Операция не поддерживается!");
        return;
    }
    const_js_1.ELEMENT.RESULT.textContent = result;
});
function getOperand(input) {
    var inputValue = input.value;
    if (!checkNumber(inputValue)) {
        return false;
    }
    return +inputValue;
}
function checkNumber(inputValue) {
    if (inputValue === "") {
        return false;
    }
    var operand = +inputValue;
    if (isNaN(operand)) {
        return false;
    }
    return true;
}
function calc(firstOperand, secondOperand) {
    var operation = getOperation();
    switch (operation) {
        case const_js_1.OPERATION.ADD:
            return (firstOperand + secondOperand).toFixed(2);
        case const_js_1.OPERATION.SUBSTRACT:
            return (firstOperand - secondOperand).toFixed(2);
        case const_js_1.OPERATION.MULTI:
            return (firstOperand * secondOperand).toFixed(2);
        case const_js_1.OPERATION.DIVIDE:
            return (firstOperand / secondOperand).toFixed(2);
        default:
            return false;
    }
}
function getOperation() {
    return const_js_1.ELEMENT.OPERATION.value;
}
