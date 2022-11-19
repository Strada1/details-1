import { validateMessage } from './validation.js';


const messagesListElement = document.querySelector('.messenger__message-list');
const messageFormElement = document.querySelector('.messenger__form');
const messageInputElement = messageFormElement.querySelector('.messenger__input');
const messageTemplate = document.querySelector('#message-template')
  .content
  .querySelector('.messenger__message');


const sendMessage = (message) => {
  const messageElement = messageTemplate.cloneNode(true);
  const messageNickElement = messageElement.querySelector('.message__nick');
  const messageTimeElement = messageElement.querySelector('.message__time');
  const messageTextElement = messageElement.querySelector('.message__text');

  const nick = 'Неопознанный енот';
  const time = '18:45';

  messageNickElement.textContent = nick;
  messageTimeElement.textContent = time;
  messageTextElement.textContent = message;

  messagesListElement.prepend(messageElement);
};


const onMessageFormSubmit = (e) => {
  e.preventDefault();

  const message = messageInputElement.value;

  if (!validateMessage(message)) {
    return;
  }

  messageInputElement.value = '';
  sendMessage(message);
};


const initForm = () => {
  messageFormElement.addEventListener('submit', onMessageFormSubmit);
};

export { initForm };
