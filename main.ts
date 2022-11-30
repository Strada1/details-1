import { ELEMENTS, SYMBOLS } from "./const";

const getOperand = (element) => {
  let operand;
  if (element !== null) {
  operand = Number(element.value)
  } else operand = false;
  return operand;
};

const getOperator = (element) : string => {
  let operator;
  if (element !== null) {
    operator = element.value;
  }
  return operator;
};


const math = () => {
  let mathResult;
  const firstOperand = getOperand(ELEMENTS.firstNumber);
  const secondOperand = getOperand(ELEMENTS.secondNumber);
  const operator = getOperator(ELEMENTS.operator);
  if (firstOperand && secondOperand) {
    switch (operator) {
      case SYMBOLS.add :
         mathResult = firstOperand + secondOperand;
         break;
      case SYMBOLS.sub :
         mathResult = firstOperand - secondOperand;
         break;
      case SYMBOLS.multi :
         mathResult = firstOperand * secondOperand;
         break;
      case SYMBOLS.div :
         mathResult = firstOperand / secondOperand;
         break;
    } 
  } else mathResult = 'АШЫБКАжужуж';
  if (ELEMENTS.result !== null) {
    ELEMENTS.result.textContent = mathResult;
  }
}

ELEMENTS.btnEqual?.addEventListener('click', math);
  

