import { addMessageUI, ELEMENTS } from './UI';
import { MODAL, openModal } from './modal';
import { callNotification } from './notification';
import { isTokenAppStart } from './cookie';
// TODO: добавить в переменные сообщения ошибок
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
  try {
    event.preventDefault();
    const message = getCheckMessage(ELEMENTS.INPUT_MESSAGE.value);
    ELEMENTS.FORM_MESSAGE.reset();
    addMessageUI('я', message, '18:43');
  } catch (error) {
    callNotification(error.message);
  }
}

ELEMENTS.FORM_MESSAGE.addEventListener('submit', (event) => setMessage(event));

if (!isTokenAppStart()) {
  window.onload = () => openModal(MODAL.AUTHORIZATION);
}
