"use strict";
exports.__esModule = true;
var const_1 = require("./const");
window.onload = function () {
    check(const_1.ELEMENTS.EQUALS);
};
function check(element) {
    if (element !== null) {
        element.addEventListener('click', function () {
            var resultCalc = calc(const_1.ELEMENTS.FIRST_NUMBER.value, const_1.ELEMENTS.SECOND_NUMBER.value, const_1.ELEMENTS.CALC.value);
            if (const_1.ELEMENTS.RESULT !== null) {
                render(resultCalc, const_1.ELEMENTS.RESULT);
            }
        });
    }
}
function calc(first, second, calc) {
    var firstNumber = Number(first.trim());
    var secondNumber = Number(second.trim());
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return 'Data entered incorrectly';
    }
    switch (calc) {
        case const_1.SYMBOL.ADD:
            return Number((firstNumber + secondNumber).toFixed(10));
        case const_1.SYMBOL.SUB:
            return Number((firstNumber - secondNumber).toFixed(10));
        case const_1.SYMBOL.MULTI:
            return Number((firstNumber * secondNumber).toFixed(10));
        case const_1.SYMBOL.DEL:
            if (secondNumber === 0) {
                return 'Error';
            }
            else {
                return Number((firstNumber / secondNumber).toFixed(10));
            }
    }
}
function render(result, element) {
    element.textContent = result;
}
