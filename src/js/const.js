export const ELEMENTS_UI = {
  FORM_MESSAGE: document.querySelector('[data-message-form]'),
  INPUT_MESSAGE: document.querySelector('[data-message-input]'),
  TEMPLATE: document.querySelector('#template-massage'),
  LIST_MESSAGE: document.querySelector('.chat__main'),
  BUTTON_SETTINGS: document.querySelector('.chat__settings'),
  BUTTON_EXIT: document.querySelector('.chat__exit'),
  BUTTON_ENTER: document.querySelector('.chat__enter'),
};

export const POSITION_MESSAGES = {
  RIGHT: 'massage-right',
  LEFT: 'massage-left',
};

export const MODAL = {
  SETTINGS: document.querySelector('#settings'),
  AUTHORIZATION: document.querySelector('#authorization'),
  CONFIRMATION: document.querySelector('#confirmation'),
};
export const MODAL_STATUS = {
  OPEN: 'show',
  CLOSE: 'hide',
};

export const MODAL_DETAILS = {
  CLOSES: document.querySelectorAll('[data-modal-close]'),
  ALL_MODAL: document.querySelectorAll('.modal'),
  FORM_AUTHORIZATION: document.querySelector('[data-authorization-form]'),
  INPUT_AUTHORIZATION: document.querySelector('[data-authorization-input]'),
  FORM_CONFIRMATION: document.querySelector('[data-confirmation-form]'),
  INPUT_CONFIRMATION: document.querySelector('[data-confirmation-input]'),
  FORM_SETTINGS: document.querySelector('[data-settings-form]'),
  INPUT_SETTINGS: document.querySelector('[data-settings-input]'),
};

export const NOTIFICATION_UI = {
  BOX: document.querySelector('.notification'),
  TEXT: document.querySelector('.notification__text'),
};

export const NOTIFICATION_STATUS = {
  ACTIVE: 'notification__active',
  CLOSE: 'notification__close',
};

export const NOTIFICATION_MESSAGE = {
  SAVE_TOKEN: 'Токен сохранен',
  NAME_CHANGE: 'Имя изменено',
};

export const LOCAL_STORAGE_NAME = {
  HISTORY_MESSAGE: 'historyMessage',
};

export const COOKIE_NAME = {
  AUTHORIZATION_TOKEN: 'authorizationToken',
  CLIENT_EMAIL: 'email_user',
};

export const WEBSOCKET_MESSAGES = {
  CLOSE: 'работа закончена',
};

export const URLS = {
  AUTHORIZATION: new URL('https://edu.strada.one/api/user'),
  USER: new URL('https://edu.strada.one/api/user/me'),
  MESSAGES: new URL('https://edu.strada.one/api/messages/'),
};

export const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
};

export const ERROR_MESSAGES = {
  INPUT_NOTHING: 'введите сообщение',
  INPUT_FULL: 'слишком длинное сообщение',
  TOKEN: 'пройдите регистрацию',
};
