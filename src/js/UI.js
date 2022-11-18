import { MODAL, MODAL_DETAILS, openModal, closeAllModal } from './modal';
import { sendRequest, HTTP_METHOD, URLS } from './request';

export const ELEMENTS = {
  FORM_MESSAGE: document.querySelector('.chat__footer>.chat-form'),
  INPUT_MESSAGE: document.querySelector('.chat__footer .chat-form__input'),
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

MODAL_DETAILS.FORM_AUTHORIZATION.addEventListener('submit', (event) => {
  event.preventDefault();
  sendRequest(HTTP_METHOD.POST, URLS.AUTHORIZATION, {
    email: MODAL_DETAILS.INPUT_AUTHORIZATION.value,
  })
    .then(() => {
      closeAllModal();
      openModal(MODAL.CONFIRMATION);
    })
    // TODO: окно для ошибок
    .catch((error) => console.log(error));
});
