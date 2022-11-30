var button_result = document.querySelector(".button");
var inputNumber1 = document.getElementById("number1");
var inputNumber2 = document.getElementById("number2");
var selectOperation = document.querySelector(".select_operation");
button_result === null || button_result === void 0 ? void 0 : button_result.addEventListener('click', getData);
function getData() {
    var number1 = inputNumber1 === null || inputNumber1 === void 0 ? void 0 : inputNumber1.value;
    var number2 = inputNumber2 === null || inputNumber2 === void 0 ? void 0 : inputNumber2.value;
    var operation = selectOperation === null || selectOperation === void 0 ? void 0 : selectOperation.value;
    if (number1 === "" || number2 === "") {
        alert("Заполните пустые поля");
    }
    else {
        console.log(calc(number1, number2, operation));
    }
}
function calc(number1, number2, operation) {
    switch (operation) {
        case "+":
            return (Number(number1) + Number(number2));
        case "-":
            return (Number(number1) - Number(number2));
        case "*":
            return (Number(number1) * Number(number2));
        case "/":
            if (Number(number2) === 0) {
                alert("На ноль делить нельзя!");
                return 0;
            }
            else {
                return (Number(number1) / Number(number2));
            }
    }
}
