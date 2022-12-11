import {
  ELEMENTS,
  POPUPS,
  STYLES,
  USERS,
  MESSAGES,
  STORAGE,
  METHOD,
} from './constants';
import { format } from 'date-fns';
import { openSettingsHandler } from './popups';
import { showPopup } from './helpers';
import Cookies from 'js-cookie';
import { getUserData, saveCookies, getMessageHistory } from './data';

const socket = new WebSocket(
  `ws://edu.strada.one/websockets?${Cookies.get('authorizationCode')}`
);

let minIndex = 20;
let maxIndex = 40;

window.addEventListener('load', renderApp);

ELEMENTS.MESSAGE_LIST.addEventListener('scroll', function () {
  let scrollBotton =
    ELEMENTS.MESSAGE_LIST.scrollHeight -
    Math.abs(ELEMENTS.MESSAGE_LIST.scrollTop) -
    ELEMENTS.MESSAGE_LIST.clientHeight;
  console.log(scrollBotton);
  if (scrollBotton === 1) {
    console.log('END!');
    getChunkMessages(STORAGE.ALL_MESSAGE_HISTORY);
  }
});

ELEMENTS.MESSAGE_FORM.addEventListener('submit', (event) => addMessage(event));
POPUPS.SETTINGS.addEventListener('click', (event) =>
  openSettingsHandler(event)
);

function renderApp() {
  getUserData().then((user) => {
    saveCookies('email', user.email);
    console.log(user);
  });

  if (!Cookies.get('authorizationCode')) {
    showPopup(POPUPS.AUTHORIZATION_BLOCK);
  }
  saveHisotyLocalStorage();
}

function saveHisotyLocalStorage() {
  getMessageHistory().then((history) => {
    localStorage.setItem('messages', JSON.stringify(history.messages));
  });
  const historyMessage = JSON.parse(localStorage.getItem('messages')).filter(
    (item, index) => {
      if (
        MESSAGES.MIN_HISTORY_INDEX <= index &&
        MESSAGES.MAX_HISTORY_INDEX > index
      ) {
        return item;
      }
    }
  );

  useHistory(historyMessage, METHOD.PREPEND);
}

function getChunkMessages(historyMessage) {
  const messages = historyMessage.filter((item, index) => {
    if (minIndex <= index && index < maxIndex) return item;
  });
  minIndex += MESSAGES.STEP_INDEX;
  maxIndex += MESSAGES.STEP_INDEX;
  useHistory(messages, METHOD.APPEND);

  if (history.length === 0) {
    alert('ВСЁ!');
  }
}

// function renderButtons(authorization) {
//   if (!authorization) {
//     ELEMENTS.AUTHORIZATION_BTN.addEventListener('click', () =>
//       showPopup(POPUPS.AUTHORIZATION_BLOCK)
//     );
//     ELEMENTS.AUTHORIZATION_BTN.textContent = 'Войти';
//     return;
//   }
//   ELEMENTS.AUTHORIZATION_BTN.textContent = 'Выход';
//   let result = Cookies.get();
//   console.log(result);
// }

function addMessage(event) {
  event.preventDefault();
  const messagevalue = ELEMENTS.MESSAGE_INPUT.value.trim();

  if (messagevalue.length) {
    sendMessage(messagevalue);
    ELEMENTS.MESSAGE_INPUT.value = '';
    scrollToLastMessage();
  } else {
    alert('Поле пустое, введите сообщение');
  }
}

function sendMessage(message) {
  socket.send(JSON.stringify({ text: message }));
}

socket.onmessage = function (event) {
  const message = JSON.parse(event.data);

  if (message.user.email === Cookies.get('email')) {
    renderMessage(message, STYLES.MY_MESSAGE, METHOD.APPEND);
    return;
  }
  renderMessage(message, STYLES.COMPANION_MESSAGE, METHOD.APPEND);
};

function renderMessage(data, style, method) {
  let message = data.text ?? data;
  const messageDate = format(new Date(data.updatedAt), 'HH:mm dd/MM/yyyy');
  const template = cloneTemplate(ELEMENTS.MESSAGE_TEMPLATE);
  const element = document.createElement('li');
  element.classList.add('message-item', `${style}`);
  template.querySelector('.author').textContent = `${data.user.name}: `;
  template.querySelector('.message-text').append(message);
  template.querySelector('.message-date').textContent = messageDate;
  element.append(template);

  if ((method = METHOD.APPEND)) {
    ELEMENTS.MESSAGE_LIST.append(element);
    return;
  }

  ELEMENTS.MESSAGE_LIST.prepend(element);
  scrollToLastMessage();
}

function useHistory(messages, method) {
  messages.forEach((currentUser) => {
    if (currentUser.user.email === Cookies.get('email')) {
      renderMessage(currentUser, STYLES.MY_MESSAGE, method);

      scrollToLastMessage();
      return;
    }
    renderMessage(currentUser, STYLES.COMPANION_MESSAGE, method);

    scrollToLastMessage();
  });
}

function cloneTemplate(template) {
  return template.content.cloneNode(true);
}

function scrollToLastMessage() {
  const lastMessage = ELEMENTS.MESSAGE_LIST.firstElementChild;
  lastMessage.scrollIntoView({ block: 'start' });
}

// function checkMessage(text) {
//   if (text !== null && typeof text !== 'undefined' && text !== '') {
//     return text;
//   } else {
//     alert('Введите сообщение!');
//   }
// }
