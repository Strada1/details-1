import { ELEMENT, METHOD, INDEX_ARRAY, URL } from './const';
import { showPopup, closePopup, createClone, checkPosition, checkHistory, showMessageOwn, showMessageOther } from './UI';
import { addName, sendEmail, getHistoryUser, saveCoockies } from './server';
import Cookies from "cookies-ts";

const cookies = new Cookies();

const socket = new WebSocket(`wss://edu.strada.one/websockets?${cookies.get('authorization')}`);

window.onload = function () {
  saveEmail();

  if (!cookies.get('authorization')) {
    showPopup(ELEMENT.POPUP_EMAIL)
  }
  
  saveHistoryStorage();
}

function saveEmail() {
  getHistoryUser(URL.ME).then((user) => {
    saveCoockies('email', user.email);
  });
}
 
function saveHistoryStorage() {
  getHistoryUser(URL.MESSAGE).then((history) => {
    localStorage.setItem('messages', JSON.stringify(history.messages));

    const HISTORY = JSON.parse(localStorage.getItem('messages') || '').filter((item: any, index: number) => {
      if (INDEX_ARRAY.MIN <= index && index < INDEX_ARRAY.MAX) return item;
    });
    checkHistory(HISTORY);
  });
}

ELEMENT.MAIN?.addEventListener('scroll', checkPosition);
ELEMENT.MAIN?.addEventListener('resize', checkPosition);

ELEMENT.EXIT?.addEventListener('click', () => showPopup(ELEMENT.POPUP_EMAIL));

ELEMENT.CLOSE_EMAIL?.addEventListener('click', () => closePopup(ELEMENT.POPUP_EMAIL));

ELEMENT.CLOSE_CODE?.addEventListener('click', () => closePopup(ELEMENT.POPUP_CODE));

ELEMENT.CLOSE_NAME?.addEventListener('click', () => closePopup(ELEMENT.POPUP_NAME));

ELEMENT.BUTTON_CODE?.addEventListener('click', function(event) {
  event.preventDefault();
  if (!ELEMENT.EMAIL) return;
  sendEmail(ELEMENT.EMAIL.value.trim(), METHOD.POST).then((email) => {
    if (email) {
      closePopup(ELEMENT.POPUP_EMAIL);
      showPopup(ELEMENT.POPUP_CODE);
    }
  });
});

ELEMENT.BUTTON_SETTING?.addEventListener('click', function (event) {
  event.preventDefault();
  showPopup(ELEMENT.POPUP_NAME);
})

ELEMENT.BUTTON_ENTER?.addEventListener('click', function (event) {
  event.preventDefault();
  if (ELEMENT.CODE_INPUT) {
    closePopup(ELEMENT.POPUP_CODE);
    showPopup(ELEMENT.POPUP_NAME);
    saveCoockies('authorization', ELEMENT.CODE_INPUT.value.trim());
  }
})

ELEMENT.BUTTON_NAME?.addEventListener('click', function (event) {
  event.preventDefault();
  if (!ELEMENT.NAME_INPUT) return;
  addName(ELEMENT.NAME_INPUT.value.trim(), METHOD.PATCH).then(name => {
      if (name) closePopup(ELEMENT.POPUP_NAME)
    });
})

ELEMENT.FORM_MESSAGE?.addEventListener('submit', function (event) {
    event.preventDefault();
    sendMessage();
    ELEMENT.FORM_MESSAGE?.reset();
  }
)

function sendMessage() {
  if (!ELEMENT.INPUT_MESSAGE) return;
  socket.send(JSON.stringify({ text: ELEMENT.INPUT_MESSAGE.value })); 
}


socket.onmessage = function(event) {
  const message = JSON.parse(event.data);
  
  if (message.user.email === cookies.get('email')) {
    const cloneOwn = createClone(ELEMENT.TEMPLATE_MESS_OWN);
    showMessageOwn(cloneOwn, message, METHOD.PREPEND);
    return;
  } 
  const cloneOther = createClone(ELEMENT.TEMPLATE_MESS_OTHER);
  showMessageOther(cloneOther, message, METHOD.PREPEND);
};

