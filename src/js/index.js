import Cookies from 'js-cookie';
import { openModal } from './UI/modal';
import { isTokenAppStart } from './cookie';
import { openWebSocket, sendWebSocket } from './requests/webSocket';
import { addMessageHistory } from './requests/processingResultsRequest';
import { COOKIE_NAME, ELEMENTS_UI, MODAL } from './const';
import { getCheckMessage } from './helps';
import { ValidationError } from './error/ValidationError';
import { callNotification } from './UI/notification';
import { scrollStartMessages } from './UI/messages';

export function setMessage(event) {
  try {
    event.preventDefault();
    const message = getCheckMessage(ELEMENTS_UI.INPUT_MESSAGE.value);
    sendWebSocket(message);
    scrollStartMessages();
    ELEMENTS_UI.FORM_MESSAGE.reset();
  } catch (error) {
    if (error instanceof ValidationError) {
      callNotification(error.message);
    } else {
      throw error;
    }
  }
}

ELEMENTS_UI.FORM_MESSAGE.addEventListener('submit', (event) => {
  setMessage(event);
});

if (!isTokenAppStart()) {
  window.onload = () => openModal(MODAL.AUTHORIZATION);
} else {
  addMessageHistory(Cookies.get(COOKIE_NAME.AUTHORIZATION_TOKEN));
}

openWebSocket();
