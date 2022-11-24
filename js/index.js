import { ELEMENTS, POPUPS, USERS } from './constants';
import { getHours, getMinutes } from 'date-fns';
import { openSettingsHandler } from './popups';
import { showPopup } from './helpers';
import Cookies from 'js-cookie';
import { getUserData } from './data';

let user = USERS.USER_NAME;

window.addEventListener('load', renderApp);

ELEMENTS.MESSAGE_FORM.addEventListener('submit', (event) => addMessage(event));
POPUPS.SETTINGS.addEventListener('click', (event) =>
  openSettingsHandler(event)
);

function renderApp() {
  showPopup(POPUPS.AUTHORIZATION_BLOCK);
  renderButtons(true);
}

function renderButtons(authorization) {
  if (!authorization) {
    ELEMENTS.AUTHORIZATION_BTN.addEventListener('click', () =>
      showPopup(POPUPS.AUTHORIZATION_BLOCK)
    );
    ELEMENTS.AUTHORIZATION_BTN.textContent = 'Войти';
    return;
  }
  ELEMENTS.AUTHORIZATION_BTN.textContent = 'Выход';
  let result = Cookies.get();
  console.log(result);
}

function addMessage(event) {
  event.preventDefault();
  const messagevalue = ELEMENTS.MESSAGE_INPUT.value.trim();
  const hour = getHours(new Date());
  const minute = getMinutes(new Date());
  const messageDate = `${hour}:${minute}`;
  if (messagevalue.length) {
    const template = ELEMENTS.MESSAGE_TEMPLATE.content.cloneNode(true);
    template.querySelector('.author').textContent = `${user}: `;
    template.querySelector('.message-text').append(messagevalue);
    template.querySelector('.message-date').textContent = messageDate;

    ELEMENTS.MESSAGE_LIST.append(template);
    ELEMENTS.MESSAGE_INPUT.value = '';
    scrollToLastMessage();
  } else {
    alert('Поле пустое, введите сообщение');
  }
}

function scrollToLastMessage() {
  const lastMessage = ELEMENTS.MESSAGE_LIST.lastElementChild;
  lastMessage.scrollIntoView(false);
}

// function checkMessage(text) {
//   if (text !== null && typeof text !== 'undefined' && text !== '') {
//     return text;
//   } else {
//     alert('Введите сообщение!');
//   }
// }
