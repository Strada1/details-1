import { validateMessage } from './validation.js';
import { getMessageElement } from './messages-render.js';
import { setSocketOnMessage, sendMessageByWebSocket } from './web-socket.js';
import { getCookie, COOKIE_NAMES } from './cookies.js';


const messagesListElement = document.querySelector('.messenger__message-list');
const messageFormElement = document.querySelector('.messenger__form');
const messageInputElement = messageFormElement.querySelector('.messenger__input');


const getSubmitHandler = (socket) => (e) => {
  e.preventDefault();

  const message = messageInputElement.value;

  if (!validateMessage(message)) {
    return;
  }

  messageInputElement.value = '';
  sendMessageByWebSocket(socket, message);
};


const addMessage = (data) => {
  data = JSON.parse(data)
  const myEmail = getCookie(COOKIE_NAMES.EMAIL);
  const messageElement = getMessageElement(data, myEmail);
  messagesListElement.prepend(messageElement);
};


const initMessenger = (socket) => {
  setSocketOnMessage(socket, addMessage);
  const onMessageFormSubmit = getSubmitHandler(socket);
  messageFormElement.addEventListener('submit', onMessageFormSubmit);
};


export { initMessenger };
