import { ELEMENTS } from './elements.js';
import { closePopupsSettings } from './popup.js';
import { connect, postMessageFromSocket } from './webSocket.js';
import { signIn } from './authorization.js';
import { changeNikName, getInfoUser, getMessage } from './changeName.js';
import { viewModal } from './view_modal.js';
import { getCookie } from './cookiesFunc.js';

if (getCookie('token')) {
  const token = connect();
  viewModal(ELEMENTS.AUTHORIZATION);
  viewModal(ELEMENTS.CODE_WINDOW);
  getMessage(getCookie('token'));
  ELEMENTS.FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    postMessageFromSocket(ELEMENTS.MY_MESSAGE_INPUT, token);
  });
} else {
  ELEMENTS.BTN_MAIL_SEND.addEventListener('click', () => {
    signIn(ELEMENTS.MAIL_INPUT.value);
  });
}
ELEMENTS.BTN_SETTINGS.addEventListener('click', closePopupsSettings);

ELEMENTS.CLOSE_WINDOW.addEventListener('click', closePopupsSettings);

ELEMENTS.BTN_NAME_CHAT.addEventListener('click', () => {
  changeNikName(ELEMENTS.NAME_IN_CHAT.value, getCookie('token'));
  getInfoUser(getCookie('token'));
});
