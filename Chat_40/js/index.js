import { ELEMENTS } from './elements.js';
import { closePopupsSettings } from './popup.js';
import { renderMessage } from './renderUI.js';
import { signIn } from './authorization.js';

console.log(ELEMENTS.SETTINGS_WRAPPER.parentElement);

ELEMENTS.BTN_SETTINGS.addEventListener('click', closePopupsSettings);

ELEMENTS.CLOSE_WINDOW.addEventListener('click', closePopupsSettings);

ELEMENTS.BTN_MAIL_SEND.addEventListener('click', signIn);

ELEMENTS.FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  renderMessage();
});
