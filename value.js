export const ELEMENT = {
  BODY: document.body,
  POPUP: document.querySelector('.popup'),
  POPUP_CLOSE_BUTTONS: document.querySelectorAll('.popup__button'),
  BUTTONS: document.querySelectorAll('.btn'),
  FORM_MESSAGE: document.querySelector('.form-message'),
  INPUT_MESSAGE: document.querySelector('.form-message__input'),
  MAIN: document.querySelector('.main'),
  TEMPLATE_MESS_OWN: document.querySelector('.temlate-message-own'),
  TEMPLATE_MESS_OTHER: document.querySelectorAll('.temlate-message-other'),
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
};
export const POPUP_BUTTONS = {SETTINGS: 'Настройки', CODE: 'Получить код', EXIT: 'Выйти'};
export const URL =  'https://edu.strada.one/api/user';
export const URL_ME = 'https://edu.strada.one/api/user/me'
