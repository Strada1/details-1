import { ELEMENTS } from './elements.js';
import { closePopupsSettings } from './popup.js';
import { renderMyMessage } from './renderUI.js';
import { signIn } from './authorization.js';
import { changeNikName, getInfoUser, getMessage } from './changeName.js';
import { viewModal } from './view_modal.js';
import { getCookie } from './cookiesFunc.js';

if (getCookie('token')) {
  viewModal(ELEMENTS.AUTHORIZATION);
  viewModal(ELEMENTS.CODE_WINDOW);
  getMessage(getCookie('token'));
} else {
  ELEMENTS.BTN_MAIL_SEND.addEventListener('click', () => {
    signIn(ELEMENTS.MAIL_INPUT.value);
  });
}
ELEMENTS.BTN_SETTINGS.addEventListener('click', closePopupsSettings);

ELEMENTS.CLOSE_WINDOW.addEventListener('click', closePopupsSettings);

ELEMENTS.FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  renderMyMessage();
});

ELEMENTS.BTN_NAME_CHAT.addEventListener('click', () => {
  const name = document.querySelector('.name_input');
  changeNikName(name.value, getCookie('token'));
  getInfoUser(getCookie('token'));
});
