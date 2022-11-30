import { ELEMENT, OPERATION } from "./const.js";
ELEMENT.BUTTON?.addEventListener("click", () => {
    const firstOperand = getOperand(ELEMENT.FIRST_INPUT);
    const secondOperand = getOperand(ELEMENT.SECOND_INPUT);
    if (!firstOperand || !secondOperand) {
        alert("Введите число!");
        return;
    }
    const result = calc(firstOperand, secondOperand);
    if (!result) {
        alert("Операция не поддерживается!");
        return;
    }
    ELEMENT.RESULT.textContent = result;
});
function getOperand(input) {
    const inputValue = input.value;
    if (!checkNumber(inputValue)) {
        return false;
    }
    return +inputValue;
}
function checkNumber(inputValue) {
    if (inputValue === "") {
        return false;
    }
    const operand = +inputValue;
    if (isNaN(operand)) {
        return false;
    }
    return true;
}
function calc(firstOperand, secondOperand) {
    const operation = getOperation();
    switch (operation) {
        case OPERATION.ADD:
            return (firstOperand + secondOperand).toFixed(2);
        case OPERATION.SUBSTRACT:
            return (firstOperand - secondOperand).toFixed(2);
        case OPERATION.MULTI:
            return (firstOperand * secondOperand).toFixed(2);
        case OPERATION.DIVIDE:
            return (firstOperand / secondOperand).toFixed(2);
        default:
            return false;
    }
}
function getOperation() {
    return ELEMENT.OPERATION.value;
}
