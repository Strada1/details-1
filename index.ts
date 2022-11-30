const button_result: Element | null = document.querySelector(".button");
const inputNumber1: Element | null = document.getElementById("number1");
const inputNumber2: Element | null = document.getElementById("number2");
const selectOperation: Element | null = document.querySelector(".select_operation");

button_result?.addEventListener('click', getData)

function getData() {
	const number1: string = inputNumber1?.value;
	const number2: string = inputNumber2?.value;
	const operation: string = selectOperation?.value;
	if(number1 === "" || number2 === "") {
		alert("Заполните пустые поля")
	} else {
		console.log(calc(number1, number2, operation));
	}
}

function calc(number1: string, number2: string, operation: string) {
	switch(operation) {
		case "+":
			return (Number(number1) + Number(number2));

		case "-":
			return (Number(number1) - Number(number2));

		case "*":
			return (Number(number1) * Number(number2));
				
		case "/":
			if(Number(number2) === 0) {
				alert("На ноль делить нельзя!")
				return 0
			} else {
				return (Number(number1) / Number(number2));
			}	
	}
}