"use strict";
exports.__esModule = true;
exports.calcObject = void 0;
var operations = {
    add: 'add',
    multi: 'multi',
    subtract: 'subtract',
    divide: 'divide'
};
function calcObject(operation, firstNumber, secondNumber) {
    var secondNum = document.querySelector(".secondNumber").value;
    var result = document.querySelector(".result");
    switch (operation) {
        case (operations.add):
            return (firstNumber + secondNumber).toFixed(5);
        case (operations.multi):
            return (firstNumber * secondNumber).toFixed(5);
        case (operations.subtract):
            return (firstNumber - secondNumber).toFixed(5);
        case (operations.divide):
            if (secondNum === "0") {
                result.textContent = "can't divide by zero";
            }
            else {
                return (firstNumber / secondNumber).toFixed(5);
            }
        default:
            return "unknown operation";
    }
}
exports.calcObject = calcObject;
