import Cookies from 'js-cookie';
import { format } from 'date-fns';
import { ELEMENTS } from '../UI/main-UI';
import { CookieName } from '../cookie';
import { MODAL_DETAILS } from '../UI/modal';
import { callNotification } from '../UI/notification';
import { getCheckMessage } from '../helps';
import { ValidationError } from '../error/ValidationError';
import { addMessageUI } from '../UI/messages';

export function openWebSocket() {
  const isCheckToken = Cookies.get(CookieName.AUTHORIZATION_TOKEN);
  if (isCheckToken) {
    const socketURL = `wss://edu.strada.one/websockets?${Cookies.get(
      CookieName.AUTHORIZATION_TOKEN
    )}`;
    return new WebSocket(socketURL);
  }
  return false;
}

let socket = openWebSocket();

socket.onmessage = (event) => {
  const message = JSON.parse(event.data);
  addMessageUI(
    message.user.name,
    message.text,
    format(new Date(message.createdAt), 'HH:mm'),
    message.user.email
  );
};
socket.onerror = (error) => {
  callNotification(error.type);
};

socket.onclose = (event) => {
  callNotification(event.type);
};

MODAL_DETAILS.FORM_CONFIRMATION.addEventListener('submit', () => {
  socket = openWebSocket();
});

function setMessage(event) {
  try {
    event.preventDefault();
    const message = getCheckMessage(ELEMENTS.INPUT_MESSAGE.value);
    ELEMENTS.FORM_MESSAGE.reset();
    socket.send(JSON.stringify({ text: message }));
  } catch (error) {
    if (error instanceof ValidationError) {
      callNotification(error.message);
    } else {
      throw error;
    }
  }
}

ELEMENTS.FORM_MESSAGE.addEventListener('submit', (event) => {
  setMessage(event);
});

ELEMENTS.BUTTON_EXIT.addEventListener('click', () => {
  socket.close(1000, 'работа закончена');
});
