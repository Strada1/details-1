"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_1 = require("./operation");

const ELEMENTS = {
    firstNumber: document.querySelector(".number1"),
    secondNumber: document.querySelector(".number2"),
    operation: document.querySelector(".operation"),
    totalResult: document.querySelector(".result"),
    buttonResult: document.querySelector(".button"),
    zero: document.body.querySelector(".zero"),
};
function addResult() {
    let a = Number(ELEMENTS.firstNumber.value);
    let b = Number(ELEMENTS.secondNumber.value);
    let operation = ELEMENTS.operation.value;
    let result = String((0, operation_1.calculate)(a, b, operation));
    let div = document.createElement("div");
    div.className = "operation-result";
    div.innerHTML = result;
    if (ELEMENTS.totalResult) {
        ELEMENTS.totalResult.append(div);
    }
    div.addEventListener("click", () => div.remove());
}
function deleteZero() {
    if (ELEMENTS.zero && ELEMENTS.buttonResult) {
        ELEMENTS.zero.remove();
        ELEMENTS.buttonResult.removeEventListener("click", deleteZero);
    }
}
if (ELEMENTS.buttonResult) {
    ELEMENTS.buttonResult.addEventListener("click", deleteZero);
    ELEMENTS.buttonResult.addEventListener("click", addResult);
}
