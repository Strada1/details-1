import Cookies from 'js-cookie';
import { addingTokenCookie, CookieName } from '../cookie';
import { callNotification, NOTIFICATION_MESSAGE } from './notification';
import { closeAllModal, MODAL, MODAL_DETAILS, openModal } from './modal';
import {
  addMessageHistory,
  changeName,
  processingResultsAuthorization,
} from '../requests/processingResultsRequest';
import { renderMessage } from './messages';
import { getSpliceMessages } from '../helps';

export const ELEMENTS = {
  FORM_MESSAGE: document.querySelector('[data-message-form]'),
  INPUT_MESSAGE: document.querySelector('[data-message-input]'),
  TEMPLATE: document.querySelector('#template-massage'),
  LIST_MESSAGE: document.querySelector('.chat__main'),
  BUTTON_SETTINGS: document.querySelector('.chat__settings'),
  BUTTON_EXIT: document.querySelector('.chat__exit'),
  BUTTON_ENTER: document.querySelector('.chat__enter'),
};

function authorization() {
  const email = MODAL_DETAILS.INPUT_AUTHORIZATION.value;
  Cookies.set(CookieName.CLIENT_EMAIL, email);
  processingResultsAuthorization(email);
}

MODAL_DETAILS.FORM_AUTHORIZATION.addEventListener('submit', (event) => {
  event.preventDefault();
  authorization();
});

function confirmation() {
  const token = MODAL_DETAILS.INPUT_CONFIRMATION.value;
  addingTokenCookie(token);
  closeAllModal();
  callNotification(NOTIFICATION_MESSAGE.SAVE_TOKEN);
  addMessageHistory(token);
}

MODAL_DETAILS.FORM_CONFIRMATION.addEventListener('submit', (event) => {
  event.preventDefault();
  confirmation();
});

MODAL_DETAILS.FORM_SETTINGS.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = { name: MODAL_DETAILS.INPUT_SETTINGS.value };
  changeName(name, Cookies.get(CookieName.AUTHORIZATION_TOKEN));
});

ELEMENTS.BUTTON_SETTINGS.addEventListener('click', () =>
  openModal(MODAL.SETTINGS)
);

ELEMENTS.BUTTON_ENTER.addEventListener('click', () => {
  openModal(MODAL.AUTHORIZATION);
});

function infiniteScrolling(event) {
  const isScrollHeight =
    (event.currentTarget.scrollHeight / 100) * 65 <
    Math.abs(event.currentTarget.scrollTop);
  if (isScrollHeight) {
    renderMessage(getSpliceMessages(), true);
  }
}

ELEMENTS.LIST_MESSAGE.addEventListener('scroll', (event) => {
  infiniteScrolling(event);
});
