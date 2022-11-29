import { ELEMENTS, SYMBOL } from "./const";

window.onload = () => {
    check(ELEMENTS.EQUALS);
}

function check(element: Element | null) {
    if (element !== null) {
        element.addEventListener('click', () => {
            let resultCalc = calc((<HTMLInputElement>ELEMENTS.FIRST_NUMBER).value, (<HTMLInputElement>ELEMENTS.SECOND_NUMBER).value, (<HTMLSelectElement>ELEMENTS.CALC).value);
            if (ELEMENTS.RESULT !== null) {
                render(resultCalc, ELEMENTS.RESULT);
            }
        })
    }
}

function calc(first: string, second: string, calc: string) {
    let firstNumber: number = Number(first.trim());
    let secondNumber: number = Number(second.trim());

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return 'Data entered incorrectly';
    }

    switch (calc) {
        case SYMBOL.ADD:
            return Number((firstNumber + secondNumber).toFixed(10));
          case SYMBOL.SUB:
            return Number((firstNumber - secondNumber).toFixed(10));
          case SYMBOL.MULTI:
            return Number((firstNumber * secondNumber).toFixed(10));
          case SYMBOL.DEL:
            if (secondNumber === 0) {
                return 'Error';
            } else {
                return Number((firstNumber / secondNumber).toFixed(10));
            }
    }
}

function render(result: any, element: any): void {
    element.textContent = result;
}

