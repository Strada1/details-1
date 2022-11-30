import {calcObject} from './calc.js';
import {element} from "./element.js";


function checkInput(firstNumber: string ,secondNumber : string) {
    let checkInput = (firstNumber === "" || secondNumber === "" )
    if (checkInput) {
        return true;
    }
}

(<HTMLSelectElement>element.clear).addEventListener("click", function (){
    (<HTMLSelectElement>element.firstNumber).value  = '';
    (<HTMLSelectElement>element.secondNumber).value = '';
    (<HTMLSelectElement>element.result).textContent = '';
});

(<HTMLSelectElement>element.equals).addEventListener("click", function () {
    const operation = (<HTMLSelectElement>element.operation).value;
    const firstNumber = (<HTMLSelectElement>element.firstNumber).value;
    const secondNumber = (<HTMLSelectElement>element.secondNumber).value;


    if ( checkInput(firstNumber,secondNumber) ) {
        console.log("Is not number");
        (<HTMLSpanElement>element.result).textContent = "Is not number";
    }  else {
        const calc = calcObject(operation, Number(firstNumber), Number(secondNumber));
        (<HTMLSpanElement>element.result).textContent =  String(Number(calc));
    }
});

function createMyDiv(){
    const div  = document.createElement('div');

    div.addEventListener("click", function () {
        div.remove();
    });

    div.textContent  = (<HTMLSelectElement>element.result).textContent;
    (<HTMLSelectElement>element.history).append(div);
    div.style.cursor = "pointer";
}

(<HTMLSelectElement>element.equals).addEventListener('click', createMyDiv);
