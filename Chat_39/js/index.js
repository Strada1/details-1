import { ELEMENTS } from './elements.js';
import { closePopupsSettings } from './popup.js';
import { renderMessage } from './renderUI.js';

ELEMENTS.BTN_SETTINGS.addEventListener('click', closePopupsSettings);

ELEMENTS.CLOSE_WINDOW.addEventListener('click', closePopupsSettings);

ELEMENTS.FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  renderMessage();
});
