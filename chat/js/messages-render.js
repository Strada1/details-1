import { getData } from './data-api.js';
import {
  getDateString,
  getTimeStringWithoutSeconds,
  isToday
} from './date.js';
import { getCookie, COOKIE_NAMES } from './cookies.js';
import { showError, ERROR_MESSAGES_LIST } from './error.js';
import {
  scroll
} from './scroll.js';


const GET_MESSAGES_URL = 'https://edu.strada.one/api/messages/';
const MESSEGES_COUNT_TO_UPPLOAD = 20;

const messagesWrapperElement = document.querySelector('.messenger__messages-wrapper');
const messageListElement = document.querySelector('.messenger__message-list');
const messageTemplate = document.querySelector('#message-template')
  .content
  .querySelector('.messenger__message');


const getMessageElement = ({text, updatedAt, user}, myEmail) => {
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


const renderMessages = (messages, myEmail) => {
  if (!messages) {
    return;
  }

  const messagesFragment = document.createDocumentFragment();

  messages.forEach((message) => messagesFragment.append(getMessageElement(message, myEmail)));
  messageListElement.append(messagesFragment);
};


const createScrollHandler = (parentElement, childElement, scrollCallback) => {
  let interval;

  return (e) => {
    const eventType = e.type;

    if (eventType === 'mouseup') {
      clearInterval(interval);
      return;
    }

    if (eventType === 'mousedown') {
      const scrollButtonElement = e.target.closest('button[data-scroll]');

      if (!scrollButtonElement) {
        return;
      }

      const scrollDirection = scrollButtonElement.dataset.scroll;

      interval = setInterval(() => {
        const topOffset = scroll(parentElement, childElement, scrollDirection);

        if (topOffset === 0) {
          scrollCallback();
        }
      }, 30);
    }
  };
};


const createMessagesUploader = (messages, myEmail) => {
  const messagesCount = messages.length;
  let startMessageIndex = 0;

  return () => {
    if (startMessageIndex === messagesCount) {
      return;
    }

    const endMessageIndex = Math.min(startMessageIndex + MESSEGES_COUNT_TO_UPPLOAD, messagesCount);
    const uploadedMessages = messages.slice(startMessageIndex, endMessageIndex);
    startMessageIndex = endMessageIndex;
    renderMessages(uploadedMessages, myEmail);
  };
};


const onSuccessGetMessages = (messages) => {
  const myEmail = getCookie(COOKIE_NAMES.EMAIL);

  const uploadMessages = createMessagesUploader(messages.messages, myEmail);
  uploadMessages();
  const scrollHandler = createScrollHandler(messagesWrapperElement, messageListElement, uploadMessages);
  document.addEventListener('mousedown', scrollHandler);
  document.addEventListener('mouseup', scrollHandler);
};

const initMessageList = (token) => {
  getData(
    onSuccessGetMessages,
    showError,
    GET_MESSAGES_URL,
    {'Authorization': `Bearer ${token}`},
    ERROR_MESSAGES_LIST.GET_MESSAGES_ERROR
  );
};


export { initMessageList, getMessageElement };
