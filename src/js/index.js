/* const template = document.querySelector('#template-massage');

console.log(template.content);

const newElem = template.content.cloneNode(true);

console.log(newElem.querySelector('.massage__text')); */
import { addMessageUI, createMessage, ELEMENTS } from './UI';

function getCheckMessage(from) {
  const message = from.value.trim();
  if (message.length === 0) {
    throw Error('слишком короткое сообщение');
  }
  if (message.length > 20) {
    throw Error('слишком длинное сообщение');
  }
  return from.value;
}

function setMessage(event) {
  event.preventDefault();
  const message = getCheckMessage(ELEMENTS.INPUT_MESSAGE);
  ELEMENTS.FORM_MESSAGE.reset();
  addMessageUI('я', message, '18:43');
}

ELEMENTS.FORM_MESSAGE.addEventListener('submit', (event) => setMessage(event));
