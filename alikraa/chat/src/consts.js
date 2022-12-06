import { getCookies } from './view';

export const ELEMENTS = {
  DOC: document,
  POP_UP: document.querySelectorAll('.pop-up__content'),
  POP_UP_CLOSE: document.querySelectorAll('.close'),
  SETTINGS: document.querySelector('.chat__buttons-settings'),
  NAME_FORM: document.querySelector('.pop-up__content-input'),
  NAME_INPUT: document.querySelector('.pop-up__content-input-field'),
  CHAT: document.querySelector('.chat__container'),
  CHAT_FORM: document.querySelector('.chat__input'),
  CHAT_INPUT: document.querySelector('.chat__input-field'),
  CHAT_WINDOW: document.querySelector('.chat__container-window'),
  SCROLL: document.querySelector('.chat__container-scroll'),
  TEMPLATE: document.querySelector('.tmpl'),
  AUTH_FORM: document.querySelector('.pop-up__content-input-authorization'),
  EMAIL_INPUT: document.querySelector('.field-authorization'),
  CONFIRM_FORM: document.querySelector('.pop-up__content-input-confirmation'),
  CODE_INPUT: document.querySelector('.field-confirmation'),
  BODY: document.querySelector('body'),
};

export const POP_UP = {
  SETTINGS: 'Настройки',
  AUTHORIZATION: 'Авторизация',
  CONFIRMATION: 'Подтверждение',
};

export const VALUES = {
  SELECTED: 'selected',
  MY_MESSAGE: 'my-message',
  FRIEND_MESSAGE: 'friend-message',
  SENT: 'sent',
  DELIVERED: 'delivered',
  CHAT_CLASS: 'chat__container-message',
  CHAT_CLASSNAME: '.chat__container-message',
  COOKIES_NAME: 'user',
  COOKIES_EMAIL: 'userEmail',
  APPEND: 'append',
  PREPEND: 'prepend',
  CLASS: 'class',
  ATTRIBUTE: 'attribute',
  HIDDEN: 'hidden',
  TRUE: 'true',
  NAME_ERROR: 'Error',
  TIME_TEMPLATE: 'HH:mm',
  HEADER: 'h1',
  HEADER_CLASSNAME: 'header',
  HEADER_ATTRIBUTE: 5000,
  STATUS_MESSAGE: 3000,
  DIV: 'div',
  SENDER: '.sender',
  TEXT: '.text',
  TIME: '.time',
};

export const METHOD = {
  POST: 'POST',
  GET: 'GET',
  PATCH: 'PATCH',
};

export const SERVER = {
  URL: 'https://edu.strada.one/api/user',
  URL_USER: 'https://edu.strada.one/api/user/me',
  URL_MESSAGES: 'https://edu.strada.one/api/messages/',
  WEB_SOCKET: 'wss://edu.strada.one/websockets?',
  HEADER_CONTENT: 'application/json;charset=utf-8',
  AUTHORIZATION_CONTENT: `Bearer ${getCookies(VALUES.COOKIES_NAME)}`,
};

export const COUNTER = {
  START: 0,
  END: 20,
  COUNT: 20,
  MAX_MESSAGES: 300,
};
