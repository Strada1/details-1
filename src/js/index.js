import { addMessageUI, ELEMENTS } from './UI';
import { MODAL, openModal } from './modal';

function getCheckMessage(message) {
  if (message.trim().length === 0) {
    throw Error('слишком короткое сообщение');
  }
  if (message.length > 20) {
    throw Error('слишком длинное сообщение');
  }
  return message;
}

function setMessage(event) {
  // TODO: добавить проверку на ошибку
  event.preventDefault();
  const message = getCheckMessage(ELEMENTS.INPUT_MESSAGE.value);
  ELEMENTS.FORM_MESSAGE.reset();
  addMessageUI('я', message, '18:43');
}

ELEMENTS.FORM_MESSAGE.addEventListener('submit', (event) => setMessage(event));

openModal(MODAL.AUTHORIZATION);
