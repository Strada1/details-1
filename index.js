import { ELEMENT, POPUP_BUTTONS} from './const.js';
import { showPopup, closePopup, createClone, createClone, showMessageOwn, showMessageOther } from './UI.js';
import { getUser, addName, sendEmail, getHistory, saveCode } from './server.js';
import Cookies from 'js-cookie';

window.onload = function () {
  getUser();

  getHistory().then((history) => {
    ELEMENT.TEMPLATE_MESS_OTHER.forEach((template) => {
        const cloneOther = createClone(template);
        showMessageOther(cloneOther, history.messages, history.messages.length);
      })
  });

  if (!Cookies.get('authorization')) {
    showPopup(ELEMENT.POPUP_EMAIL)
  }
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
    saveCode();
  }
})

ELEMENT.BUTTON_NAME.addEventListener('click', function (event) {
  event.preventDefault();
    addName(ELEMENT.NAME_INPUT.value.trim());
})

ELEMENT.FORM_MESSAGE.onsubmit = function (event) {
  event.preventDefault();
  const cloneOwn = createClone(ELEMENT.TEMPLATE_MESS_OWN);
  showMessageOwn(cloneOwn);
};