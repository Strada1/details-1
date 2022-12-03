"use strict";
exports.__esModule = true;
var calc_js_1 = require("./calc.js");
var element_js_1 = require("./element.js");
function checkInput(firstNumber, secondNumber) {
    var checkInput = (firstNumber === "" || secondNumber === "");
    if (checkInput) {
        return true;
    }
}
element_js_1.element.clear.addEventListener("click", function () {
    element_js_1.element.firstNumber.value = '';
    element_js_1.element.secondNumber.value = '';
    element_js_1.element.result.textContent = '';
});
element_js_1.element.equals.addEventListener("click", function () {
    var operation = element_js_1.element.operation.value;
    var firstNumber = element_js_1.element.firstNumber.value;
    var secondNumber = element_js_1.element.secondNumber.value;
    if (checkInput(firstNumber, secondNumber)) {
        console.log("Is not number");
        element_js_1.element.result.textContent = "Is not number";
    }
    else {
        var calc = (0, calc_js_1.calcObject)(operation, Number(firstNumber), Number(secondNumber));
        element_js_1.element.result.textContent = String(Number(calc));
    }
});
function createMyDiv() {
    var div = document.createElement('div');
    div.addEventListener("click", function () {
        div.remove();
    });
    div.textContent = element_js_1.element.result.textContent;
    element_js_1.element.history.append(div);
    div.style.cursor = "pointer";
}
element_js_1.element.equals.addEventListener('click', createMyDiv);
