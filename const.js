export const ELEMENT = {
  BODY: document.body,
  POPUP: document.querySelector('.popup'),
  POPUP_CLOSE_BUTTONS: document.querySelectorAll('.popup__button'),
  BUTTONS: document.querySelectorAll('.btn'),
  FORM_MESSAGE: document.querySelector('.form-message'),
  INPUT_MESSAGE: document.querySelector('.form-message__input'),
  MAIN: document.querySelector('.main'),
  TEMPLATE_MESS_OWN: document.querySelector('.temlate-message-own'),
  TEMPLATE_MESS_OTHER: document.querySelector('.temlate-message-other'),
  POPUP_EMAIL: document.querySelector('#email'),
  POPUP_CODE: document.querySelector('#code'),
  POPUP_NAME: document.querySelector('#name'),
  EMAIL: document.querySelector('.chat-email__input'),
  EXIT: document.querySelector('.nav__exit'),
  BUTTON_ENTER: document.querySelector('#enter'),
  BUTTON_NAME: document.querySelector('#name-btn'),
  CODE_INPUT: document.querySelector('.chat-code__input'),
  NAME_INPUT: document.querySelector('.chat__input'),
  BUTTON_SETTING: document.querySelector('#setting'),
  CLOSE_EMAIL: document.querySelector('#close-email'),
  CLOSE_CODE: document.querySelector('#close-code'),
  CLOSE_NAME: document.querySelector('#close-name'),
};

export const POPUP_BUTTONS = {SETTINGS: 'Настройки', CODE: 'Получить код', EXIT: 'Выйти'};

export const URL =  {
  ACCEPT: 'https://edu.strada.one/api/user',
  ME: 'https://edu.strada.one/api/user/me',
  MESSAGE: 'https://edu.strada.one/api/messages/'
}

export const CLASS = {
  ACTIVE: 'popup--active',
  OWN_TEXT: '.main__message-own-text',
  OTHER_TEXT: '.main__message-other-text',
}

export const ID = {
  OTHER_TIME: '#other-time',
  OWN_TIME: '#own-time'
}

export const INDEX_SEARCH = 1;
