import { calculate } from "./operation";

const ELEMENTS: {
    firstNumber: Element | null;
    secondNumber: Element | null;
    operation: Element | null;
    totalResult: Element | null;
    buttonResult: Element | null;
    zero: Element | null;
  } = {
    firstNumber: document.querySelector(".number1"),
    secondNumber: document.querySelector(".number2"),
    operation: document.querySelector(".operation"),
    totalResult: document.querySelector(".result"),
    buttonResult: document.querySelector(".button"),
    zero: document.body.querySelector(".zero"),
  };

  function addResult() {
    let a = Number((ELEMENTS.firstNumber as HTMLInputElement).value);
    let b = Number((ELEMENTS.secondNumber as HTMLInputElement).value);
    let operation = (ELEMENTS.operation as HTMLSelectElement).value;
  
    let result = String(calculate(a, b, operation));
  
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