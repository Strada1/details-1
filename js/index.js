import { ELEMENTS, POPUPS, STYLES, USERS } from './constants';
import { format } from 'date-fns';
import { openSettingsHandler } from './popups';
import { showPopup } from './helpers';
import Cookies from 'js-cookie';
import { getUserData, saveCookies, getMessageHistory } from './data';

let user = getUserData().then((user) => saveCookies('name', user.name));

window.addEventListener('load', renderApp);

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

  useHistory();
  // s
  // renderButtons(true);
  // let res = getUserData();
  // res.then((data) => console.log('DATA', data));
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
    renderMessage(messagevalue, STYLES.MY_MESSAGE, Cookies.get('name'));
    ELEMENTS.MESSAGE_INPUT.value = '';
    scrollToLastMessage();
  } else {
    alert('Поле пустое, введите сообщение');
  }
}
function renderMessage(message, style, author) {
  const messageDate = format(new Date(), 'HH:mm');
  const template = cloneTemplate(ELEMENTS.MESSAGE_TEMPLATE);
  const element = document.createElement('li');
  element.classList.add('message-item', `${style}`);
  template.querySelector('.author').textContent = `${author}: `;
  template.querySelector('.message-text').append(message);
  template.querySelector('.message-date').textContent = messageDate;
  element.append(template);
  ELEMENTS.MESSAGE_LIST.append(element);
}

function useHistory() {
  getMessageHistory().then((history) => {
    history.messages.reverse().forEach((currentUser) => {
      console.log(currentUser.user.email);
      if (currentUser.user.email === Cookies.get('email')) {
        renderMessage(currentUser.text, STYLES.MY_MESSAGE, currentUser.name);
        scrollToLastMessage();
        return;
      }
      renderMessage(
        currentUser.text,
        STYLES.COMPANION_MESSAGE,
        currentUser.user.name
      );
      scrollToLastMessage();
    });
  });
}

function cloneTemplate(template) {
  return template.content.cloneNode(true);
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
