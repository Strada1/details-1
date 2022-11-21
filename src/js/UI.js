import Cookies from 'js-cookie';
import { MODAL, MODAL_DETAILS, openModal, closeAllModal } from './modal';
import {
  sendRequest,
  HTTP_METHOD,
  URLS,
  sendRequestChangeName,
} from './request';
import { callNotification } from './notification';
import { addingTokenCookie, CookieName } from './cookie';

export const ELEMENTS = {
  FORM_MESSAGE: document.querySelector('[data-message-form]'),
  INPUT_MESSAGE: document.querySelector('[data-message-input]'),
  TEMPLATE: document.querySelector('#template-massage'),
  LIST_MESSAGE: document.querySelector('.chat__main'),
  BUTTON_SETTINGS: document.querySelector('.chat__settings'),
};

export function createMessage(who, message, time) {
  const elemMessage = ELEMENTS.TEMPLATE.content.cloneNode(true);
  elemMessage.querySelector('.massage__text').textContent = message;
  elemMessage.querySelector('.massage__name').textContent = who;
  elemMessage.querySelector('.massage__time').textContent = time;
  return elemMessage;
}

export function addMessageUI(who, message, time) {
  ELEMENTS.LIST_MESSAGE.prepend(createMessage(who, message, time));
}

ELEMENTS.BUTTON_SETTINGS.addEventListener('click', () =>
  openModal(MODAL.SETTINGS)
);

function authorization() {
  sendRequest(HTTP_METHOD.POST, URLS.AUTHORIZATION, {
    email: MODAL_DETAILS.INPUT_AUTHORIZATION.value,
  })
    .then(() => {
      closeAllModal();
      openModal(MODAL.CONFIRMATION);
    })
    .catch((error) => callNotification(error.message));
}

MODAL_DETAILS.FORM_AUTHORIZATION.addEventListener('submit', (event) => {
  event.preventDefault();
  authorization();
});

MODAL_DETAILS.FORM_CONFIRMATION.addEventListener('submit', (event) => {
  event.preventDefault();
  addingTokenCookie(MODAL_DETAILS.INPUT_CONFIRMATION.value);
  closeAllModal();
  callNotification('Токен сохранен');
});

function changeNameUser() {
  const name = { name: MODAL_DETAILS.INPUT_SETTINGS.value };
  sendRequestChangeName(
    HTTP_METHOD.PATCH,
    URLS.AUTHORIZATION,
    Cookies.get(CookieName.AUTHORIZATION_TOKEN),
    name
  )
    .then(() => {
      closeAllModal();
      callNotification('Имя изменено');
    })
    .catch((error) => {
      callNotification(error.message);
    });
}

MODAL_DETAILS.FORM_SETTINGS.addEventListener('submit', (event) => {
  event.preventDefault();
  changeNameUser();
});
