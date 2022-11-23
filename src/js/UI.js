import Cookies from 'js-cookie';
import { MODAL, MODAL_DETAILS, openModal, closeAllModal } from './modal';
import {
  sendRequestAuthorization,
  HTTP_METHOD,
  URLS,
  sendRequestChangeName,
} from './request';
import { callNotification } from './notification';
import { addingTokenCookie, CookieName } from './cookie';
import { getCheckMessage } from './helps';
import { socket } from './WebSocket';
import { ValidationError } from './error/ValidationError';

export const ELEMENTS = {
  FORM_MESSAGE: document.querySelector('[data-message-form]'),
  INPUT_MESSAGE: document.querySelector('[data-message-input]'),
  TEMPLATE: document.querySelector('#template-massage'),
  LIST_MESSAGE: document.querySelector('.chat__main'),
  BUTTON_SETTINGS: document.querySelector('.chat__settings'),
};

export function setMessage(event) {
  try {
    event.preventDefault();
    const message = getCheckMessage(ELEMENTS.INPUT_MESSAGE.value);
    ELEMENTS.FORM_MESSAGE.reset();
    socket.send(JSON.stringify({ text: message }));
  } catch (error) {
    if (error instanceof ValidationError) {
      callNotification(error.message);
    } else {
      throw error;
    }
  }
}

ELEMENTS.FORM_MESSAGE.addEventListener('submit', (event) => setMessage(event));

export function createMessage(user, message, time, isMessageClient) {
  const elemMessage = ELEMENTS.TEMPLATE.content.cloneNode(true);
  if (isMessageClient) {
    elemMessage.querySelector('.massage').classList.remove('massage-left');
    elemMessage.querySelector('.massage').classList.add('massage-right');
  }
  elemMessage.querySelector('.massage__text').textContent = message;
  elemMessage.querySelector('.massage__name').textContent = user;
  elemMessage.querySelector('.massage__time').textContent = time;
  return elemMessage;
}

export function addMessageUI(user, message, time, userEmail) {
  const isMessageClient = userEmail === Cookies.get(CookieName.CLIENT_EMAIL);
  ELEMENTS.LIST_MESSAGE.prepend(
    createMessage(user, message, time, isMessageClient)
  );
}

ELEMENTS.BUTTON_SETTINGS.addEventListener('click', () =>
  openModal(MODAL.SETTINGS)
);

function authorization() {
  sendRequestAuthorization(HTTP_METHOD.POST, URLS.AUTHORIZATION, {
    email: MODAL_DETAILS.INPUT_AUTHORIZATION.value,
  })
    .then(() => {
      closeAllModal();
      openModal(MODAL.CONFIRMATION);
    })
    .catch((error) => {
      callNotification(error.message);
    });
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
// TODO: убрать строку
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
