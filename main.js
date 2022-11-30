"use strict";
var _a;
exports.__esModule = true;
var const_1 = require("./const");
var getOperand = function (element) {
    var operand;
    if (element !== null) {
        operand = Number(element.value);
    }
    else
        operand = false;
    return operand;
};
var getOperator = function (element) {
    var operator;
    if (element !== null) {
        operator = element.value;
    }
    return operator;
};
var math = function () {
    var mathResult;
    var firstOperand = getOperand(const_1.ELEMENTS.firstNumber);
    var secondOperand = getOperand(const_1.ELEMENTS.secondNumber);
    var operator = getOperator(const_1.ELEMENTS.operator);
    if (firstOperand && secondOperand) {
        switch (operator) {
            case const_1.SYMBOLS.add:
                mathResult = firstOperand + secondOperand;
                break;
            case const_1.SYMBOLS.sub:
                mathResult = firstOperand - secondOperand;
                break;
            case const_1.SYMBOLS.multi:
                mathResult = firstOperand * secondOperand;
                break;
            case const_1.SYMBOLS.div:
                mathResult = firstOperand / secondOperand;
                break;
        }
    }
    else
        mathResult = 'АШЫБКАжужуж';
    if (const_1.ELEMENTS.result !== null) {
        const_1.ELEMENTS.result.textContent = mathResult;
    }
};
(_a = const_1.ELEMENTS.btnEqual) === null || _a === void 0 ? void 0 : _a.addEventListener('click', math);
