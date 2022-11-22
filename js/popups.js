import { POPUPS } from './elements';
import {
  authorizationSendHandler,
  confirmSendHandler,
  changeNameHandler,
} from './data';

POPUPS.SETTINGS_CLOSE_BTN.addEventListener('click', (event) =>
  settingsCloseHandler(event)
);
POPUPS.AUTHORIZATION_SEND.addEventListener('submit', (event) =>
  authorizationSendHandler(event)
);

POPUPS.CONFIRM_CLOSE_BTN.addEventListener('click', (event) =>
  confirmCloseHandler(event)
);

POPUPS.AUTHORIZATION_CLOSE_BTN.addEventListener('click', (event) =>
  authCloseHandler(event)
);

POPUPS.CONFIRM_SEND.addEventListener('submit', (event) =>
  confirmSendHandler(event)
);

POPUPS.SETTINGS_SEND.addEventListener('submit', (event) =>
  changeNameHandler(event)
);

export function openSettingsHandler() {
  POPUPS.SETTINGS_POPUP.style.display = 'block';
}

function settingsCloseHandler(event) {
  event.preventDefault();
  POPUPS.SETTINGS_POPUP.style.display = 'none';
}

function confirmCloseHandler(event) {
  event.preventDefault();
  POPUPS.CONFIRM_BLOCK.style.display = 'none';
}

function authCloseHandler(event) {
  event.preventDefault();
  POPUPS.AUTHORIZATION_BLOCK.style.display = 'none';
}
