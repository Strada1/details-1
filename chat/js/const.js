const ELEMENTS = {
  container: document.querySelector('.container'),
  settings: document.querySelector('.control__settings'),
  popup: document.querySelector('.popup'),
  chat: document.querySelector('.chat'),
  formSending: document.querySelector('.sending'),
  inputSending: document.querySelector('.sending__input'),
  popupAuthorization: document.querySelector('.authorization'),
  popupConfirm: document.querySelector('.confirm'),
  popupGetName: document.querySelector('.name'),
  popupCloses: document.querySelectorAll('.popup__close'),
  allPopups: document.querySelectorAll('.popup')
}

const popupAuthorization = {
  form: ELEMENTS.popupAuthorization.querySelector('.form-settings'),
  input: ELEMENTS.popupAuthorization.querySelector('.form-settings__input')
}
const popupConfirm = {
  form: ELEMENTS.popupConfirm.querySelector('.form-settings'),
  input: ELEMENTS.popupConfirm.querySelector('.form-settings__input')
}
const popupGetName = {
  form: ELEMENTS.popupGetName.querySelector('.form-settings'),
  input: ELEMENTS.popupGetName.querySelector('.form-settings__input')
}

const URL = {
  post: 'https://edu.strada.one/api/user',
  patch: 'https://edu.strada.one/api/user',
  get: 'https://edu.strada.one/api/user/me',
  messages: 'https://edu.strada.one/api/messages/ ',
}

const USER = {
  email: 'emai'
}
export { ELEMENTS, URL, popupAuthorization, popupConfirm, popupGetName, USER }