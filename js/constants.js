export const ELEMENTS = {
  MESSAGE_FORM: document.querySelector('#messageForm'),
  MESSAGE_INPUT: document.querySelector('#messageInput'),
  MESSAGE_TEMPLATE: document.querySelector('#messageTemplate'),
  MESSAGE_SCREEN: document.querySelector('#messageScreen'),
  MESSAGE_LIST: document.querySelector('#messageList'),
  AUTHORIZATION_BTN: document.querySelector('#authBtn'),
};

export const POPUPS = {
  SETTINGS: document.querySelector('#settingsBtn'),
  SETTINGS_POPUP: document.querySelector('#settings'),
  SETTINGS_CLOSE_BTN: document.querySelector('#settingsCloseBtn'),
  SETTINGS_SEND: document.querySelector('#settingForm'),
  SETTINGS_FIELD: document.querySelector('#settingsPopupField'),

  AUTHORIZATION_BLOCK: document.querySelector('#authorizationBlock'),
  AUTHORIZATION_SEND: document.querySelector('#authForm'),
  AUTHORIZATION_FIELD: document.querySelector('#authPopupField'),

  AUTHORIZATION_CLOSE_BTN: document.querySelector('#authCloseBtn'),

  CONFIRM_BLOCK: document.querySelector('#confirmBlock'),
  CONFIRM_SEND: document.querySelector('#confirmForm'),
  CONFIRM_FIELD: document.querySelector('#confirmPopupField'),
  CONFIRM_CLOSE_BTN: document.querySelector('#confirmCloseBtn'),
};

export const URLS = {
  USER: 'https://edu.strada.one/api/user',
  AUTHORIZATION_USER: 'https://edu.strada.one/api/user/me',
  MESSAGE_HISTORY: 'https://edu.strada.one/api/messages/',
};

export const USERS = {
  USER_NAME: 'Kai',
};

export const STYLES = {
  SHOW_POPUP: 'show-popup',
  MESSAGE_TEMPLATE: 'companion-message',
  MY_MESSAGE: 'user-message',
  COMPANION_MESSAGE: 'companion-message',
};

export const STORAGE = {
  ALL_MESSAGE_HISTORY: {},
};
