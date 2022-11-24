import { POPUPS, STYLES } from './constants';
import {
  authorizationSendHandler,
  confirmSendHandler,
  changeNameHandler,
} from './data';

import { showPopup, hidePopup } from './helpers';

POPUPS.SETTINGS_CLOSE_BTN.addEventListener('click', (event) =>
  settingsCloseHandler(event)
);

POPUPS.CONFIRM_CLOSE_BTN.addEventListener('click', (event) =>
  confirmCloseHandler(event)
);

POPUPS.AUTHORIZATION_CLOSE_BTN.addEventListener('click', (event) =>
  authCloseHandler(event)
);

POPUPS.AUTHORIZATION_SEND.addEventListener('submit', (event) =>
  authorizationSendHandler(event)
);

POPUPS.CONFIRM_SEND.addEventListener('submit', (event) =>
  confirmSendHandler(event)
);

POPUPS.SETTINGS_SEND.addEventListener('submit', (event) =>
  changeNameHandler(event)
);

export function openSettingsHandler() {
  showPopup(POPUPS.SETTINGS_POPUP);
}

function settingsCloseHandler(event) {
  event.preventDefault();
  hidePopup(POPUPS.SETTINGS_POPUP);
}

function confirmCloseHandler(event) {
  event.preventDefault();
  hidePopup(POPUPS.CONFIRM_BLOCK);
}

function authCloseHandler(event) {
  event.preventDefault();
  hidePopup(POPUPS.AUTHORIZATION_BLOCK);
}
