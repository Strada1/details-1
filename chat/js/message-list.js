import { getData } from './data-api.js';
import {
  getDateString,
  getTimeStringWithoutSeconds,
  isToday
} from './date.js';
import { showError, ERROR_MESSAGES_LIST } from './error.js';


const GET_MESSAGES_URL = 'https://edu.strada.one/api/messages/';

const messageListElement = document.querySelector('.messenger__message-list');
const messageTemplate = document.querySelector('#message-template')
  .content
  .querySelector('.messenger__message');

const myEmail = 'art@strada.one';


const getMessageElement = ({text, updatedAt, user}) => {
  const messageElement = messageTemplate.cloneNode(true);
  const nickElement = messageElement.querySelector('.message__nick');
  const timeElement = messageElement.querySelector('.message__time');
  const textElement = messageElement.querySelector('.message__text');

  const userName = user.name;
  const userEmail = user.email;
  const dateString = getDateString(updatedAt);
  const timeString = getTimeStringWithoutSeconds(updatedAt);

  nickElement.textContent = userName;
  timeElement.textContent = isToday(dateString) ? `${timeString}` : `${dateString} ${timeString}`;
  textElement.textContent = text;

  if (userEmail === myEmail) {
    messageElement.classList.add('message--my');
  }

  return messageElement;
};


const renderMessages = (messages) => {
  if (!messages || messages.messages.length === 0) {
    return;
  }

  const messagesFragment = document.createDocumentFragment();
  const messageItems = messages.messages;

  messageItems.forEach((message) => messagesFragment.prepend(getMessageElement(message)));

  const updatedMessageListElement = document.createElement('div');
  updatedMessageListElement.classList.add('messenger__message-list');
  updatedMessageListElement.append(messagesFragment);
  messageListElement.replaceWith(updatedMessageListElement);
};

/*
const getMessagesFragmentByRecursion = (messages, messageNumber = 0) => {
  if (messageNumber === messages.length) {
    return document.createDocumentFragment();
  }

  const elementsFragment = getMessagesFragmentByRecursion(messages, messageNumber + 1);
  elementsFragment.append(getMessageElement(messages[messageNumber]));
  return elementsFragment;
}


const renderMessages = (messages) => {
  if (!messages || messages.messages.length === 0) {
    return;
  }

  const messageItems = messages.messages;
  const messagesFragment = getMessagesFragmentByRecursion(messageItems);

  const updatedMessageListElement = document.createElement('div');
  updatedMessageListElement.classList.add('messenger__message-list');
  updatedMessageListElement.append(messagesFragment);
  messageListElement.replaceWith(updatedMessageListElement);
};
*/


const initMessageList = (token) => {
  getData(
    renderMessages,
    showError,
    GET_MESSAGES_URL,
    {'Authorization': `Bearer ${token}`},
    ERROR_MESSAGES_LIST.GET_MESSAGES_ERROR
  );
};

export { initMessageList, getMessageElement };
