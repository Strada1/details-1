import { ELEMENT, POPUP_BUTTONS} from './const.js';
import { showPopup, closePopup, createClone, createClone, showMessageOwn, showMessageOther, showHistoryMessageOther } from './UI.js';
import { getUser, addName, sendEmail, getHistory, saveCoockies } from './server.js';
import Cookies from 'js-cookie';

const socket = new WebSocket(`wss://edu.strada.one/websockets?${Cookies.get('authorization')}`);

window.onload = function () {
  getUser().then((user) => {
    saveCoockies('email', user.email);
  });

  if (!Cookies.get('authorization')) {
    showPopup(ELEMENT.POPUP_EMAIL)
  }

  checkHistory();
}

function checkHistory() {
  getHistory().then((history) => {
    history.messages.forEach((historyUser) => {
      if (historyUser.user.email === Cookies.get('email')) {
        const cloneOwn = createClone(ELEMENT.TEMPLATE_MESS_OWN);
        showMessageOwn(cloneOwn, historyUser);
        return;
      }
      const cloneOther = createClone(ELEMENT.TEMPLATE_MESS_OTHER);
      showMessageOther(cloneOther, historyUser);
    })
  });
}


ELEMENT.EXIT.addEventListener('click', () => showPopup(ELEMENT.POPUP_EMAIL));

ELEMENT.CLOSE_EMAIL.addEventListener('click', () => closePopup(ELEMENT.POPUP_EMAIL));

ELEMENT.CLOSE_CODE.addEventListener('click', () => closePopup(ELEMENT.POPUP_CODE));

ELEMENT.CLOSE_NAME.addEventListener('click', () => closePopup(ELEMENT.POPUP_NAME));

ELEMENT.BUTTONS.forEach((button) => {
  if (POPUP_BUTTONS.CODE === button.textContent) {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      sendEmail(ELEMENT.EMAIL.value.trim());
    });
  }
});

ELEMENT.BUTTON_SETTING.addEventListener('click', function (event) {
  event.preventDefault();
  showPopup(ELEMENT.POPUP_NAME);
})

ELEMENT.BUTTON_ENTER.addEventListener('click', function (event) {
  event.preventDefault();
  if (ELEMENT.CODE_INPUT.value.trim()) {
    closePopup(ELEMENT.POPUP_CODE);
    showPopup(ELEMENT.POPUP_NAME);
    saveCoockies('authorization', ELEMENT.CODE_INPUT.value);
  }
})

ELEMENT.BUTTON_NAME.addEventListener('click', function (event) {
  event.preventDefault();
    addName(ELEMENT.NAME_INPUT.value.trim());
})

ELEMENT.FORM_MESSAGE.onsubmit = function (event) {
  event.preventDefault();
  sendMessage();
  ELEMENT.FORM_MESSAGE.reset();
};

function sendMessage() {
    socket.send(JSON.stringify({ text: ELEMENT.INPUT_MESSAGE.value })); 
}


socket.onmessage = function(event) {
  const message = JSON.parse(event.data);
  
  if (message.user.email === Cookies.get('email')) {
    const cloneOwn = createClone(ELEMENT.TEMPLATE_MESS_OWN);
    showMessageOwn(cloneOwn, message);
    return;
  } 
  const cloneOther = createClone(ELEMENT.TEMPLATE_MESS_OTHER);
  showMessageOther(cloneOther, message);
};
