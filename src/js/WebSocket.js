import Cookies from 'js-cookie';
import { format } from 'date-fns';
import { CookieName } from './cookie';
import { callNotification } from './notification';
import { addMessageUI } from './UI';

const socketURL = `wss://edu.strada.one/websockets?${Cookies.get(
  CookieName.AUTHORIZATION_TOKEN
)}`;

export const socket = new WebSocket(socketURL);

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
