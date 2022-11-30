import { ELEMENT, OPERATION } from "./const.js";

ELEMENT.BUTTON?.addEventListener("click", () => {
	const firstOperand: number | boolean = getOperand(ELEMENT.FIRST_INPUT);
	const secondOperand: number | boolean = getOperand(ELEMENT.SECOND_INPUT);

	if (!firstOperand || !secondOperand) {
		alert("Введите число!");
		return;
	}

	const result: string | boolean = calc(firstOperand, secondOperand);

	if (!result) {
		alert("Операция не поддерживается!");
		return;
	}

    ELEMENT.RESULT!.textContent = result;
});

function getOperand(input) {
	const inputValue: string = (<HTMLInputElement>input).value;
	if (!checkNumber(inputValue)) {
		return false;
	}
	return +inputValue;
}

function checkNumber(inputValue) {
	if (inputValue === "") {
		return false;
	}

	const operand: number = +inputValue;
	if (isNaN(operand)) {
		return false;
	}

	return true;
}

function calc(firstOperand: number, secondOperand: number) {
	const operation: string = getOperation();

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
	return (<HTMLSelectElement>ELEMENT.OPERATION).value;
}