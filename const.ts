type htmlElements = {
  firstNumber : HTMLInputElement | null,
  secondNumber : HTMLInputElement | null,
  operator : HTMLSelectElement | null,
  btnEqual : HTMLButtonElement | null,
  result : HTMLElement | null,
};
const ELEMENTS : htmlElements = {
  firstNumber : document.querySelector('.firstNumber'),
  secondNumber : document.querySelector('.secondNumber'),
  operator : document.querySelector('.operator'),
  btnEqual : document.querySelector('.button'),
  result : document.querySelector('.result'),
};

type operators = {add : string, sub : string, multi : string, div : string};
const SYMBOLS : operators = {
  add : '+',
  sub : '-',
  multi : '*',
  div : '/',
};

export {ELEMENTS, SYMBOLS};
