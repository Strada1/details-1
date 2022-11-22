import Cookies from 'js-cookie';
import { format } from 'date-fns';
import { addMessageUI, ELEMENTS } from './UI';
import { MODAL, openModal } from './modal';
import { callNotification } from './notification';
import { CookieName, isTokenAppStart } from './cookie';
import { getMessageHistory, HTTP_METHOD, URLS } from './request';
import { ERROR_MESSAGES, ValidationError } from './error/ValidationError';

function getCheckMessage(message) {
  if (message.trim().length === 0) {
    throw new ValidationError(ERROR_MESSAGES.INPUT_NOTHING);
  }
  if (message.length > 15) {
    throw new ValidationError(ERROR_MESSAGES.INPUT_FULL);
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
    if (error instanceof ValidationError) {
      callNotification(error.message);
    } else {
      throw error;
    }
  }
}

ELEMENTS.FORM_MESSAGE.addEventListener('submit', (event) => setMessage(event));

if (!isTokenAppStart()) {
  window.onload = () => openModal(MODAL.AUTHORIZATION);
} else {
  getMessageHistory(
    HTTP_METHOD.GET,
    URLS.MESSAGES,
    Cookies.get(CookieName.AUTHORIZATION_TOKEN)
  ).then((history) =>
    history.messages.forEach((message) => {
      addMessageUI(
        message.user.name,
        message.text,
        format(new Date(message.createdAt), 'HH:mm')
      );
    })
  );
}
