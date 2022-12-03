import Cookies from 'js-cookie';
import { format } from 'date-fns';
import { callNotification } from '../UI/notification';
import { addMessageUI } from '../UI/messages';
import {
  COOKIE_NAME,
  ELEMENTS_UI,
  MODAL_DETAILS,
  WEBSOCKET_MESSAGES,
} from '../const';

export function openWebSocket() {
  const isCheckToken = Cookies.get(COOKIE_NAME.AUTHORIZATION_TOKEN);
  if (isCheckToken) {
    const socketURL = `wss://edu.strada.one/websockets?${Cookies.get(
      COOKIE_NAME.AUTHORIZATION_TOKEN
    )}`;
    return new WebSocket(socketURL);
  }
  return false;
}

let socket = openWebSocket();

export function sendWebSocket(data) {
  try {
    socket.send(JSON.stringify({ text: data }));
  } catch (error) {
    callNotification(error);
  }
}

socket.onmessage = (event) => {
  try {
    const message = JSON.parse(event.data);
    addMessageUI(
      message.user.name,
      message.text,
      format(new Date(message.createdAt), 'HH:mm'),
      message.user.email
    );
  } catch (error) {
    callNotification(error.message);
  }
};
socket.onerror = (error) => {
  callNotification(error.type);
  socket = openWebSocket();
};

socket.onclose = (event) => {
  callNotification(event.type);
};

MODAL_DETAILS.FORM_CONFIRMATION.addEventListener('submit', () => {
  socket = openWebSocket();
});

ELEMENTS_UI.BUTTON_EXIT.addEventListener('click', () => {
  socket.close(1000, WEBSOCKET_MESSAGES.CLOSE);
});
