import { ELEMENTS, SYMBOLS } from "./const";

const notNull = (element) : HTMLInputElement => {
  let elNotNull;
  if (element !== null) {
    elNotNull = element;
  };
  return elNotNull;
};


const math = () => {
  const firstOperand = Number((notNull(ELEMENTS.firstNumber)).value);
  const secondOperand = Number((notNull(ELEMENTS.secondNumber)).value);
  const operator = notNull(ELEMENTS.operator).value;
  const result = (notNull(ELEMENTS.result));
    switch (operator) {
      case SYMBOLS.add :
         let mathResultAdd : string = String(firstOperand + secondOperand);
         result.textContent = mathResultAdd;
         break;
      case SYMBOLS.sub :
         let mathResultSub : string = String(firstOperand - secondOperand);
         result.textContent = mathResultSub;
         break;
      case SYMBOLS.multi :
        let mathResultMulti : string = String(firstOperand * secondOperand);
        result.textContent = mathResultMulti;
         break;
      case SYMBOLS.div :
        let mathResultDiv : string = String(firstOperand / secondOperand);
        result.textContent = mathResultDiv;
         break;
    } 
}

ELEMENTS.btnEqual?.addEventListener('click', math);
  

