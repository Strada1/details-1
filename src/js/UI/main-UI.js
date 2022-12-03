import Cookies from 'js-cookie';
import { addingTokenCookie } from '../cookie';
import { callNotification } from './notification';
import { closeAllModal, openModal } from './modal';
import {
  addMessageHistory,
  changeName,
  processingResultsAuthorization,
} from '../requests/processingResultsRequest';
import { renderMessage } from './messages';
import { getSpliceMessages } from '../helps';
import {
  COOKIE_NAME,
  ELEMENTS_UI,
  MODAL,
  MODAL_DETAILS,
  NOTIFICATION_MESSAGE,
} from '../const';

function authorization() {
  const email = MODAL_DETAILS.INPUT_AUTHORIZATION.value;
  Cookies.set(COOKIE_NAME.CLIENT_EMAIL, email);
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
  changeName(name, Cookies.get(COOKIE_NAME.AUTHORIZATION_TOKEN));
});

ELEMENTS_UI.BUTTON_SETTINGS.addEventListener('click', () =>
  openModal(MODAL.SETTINGS)
);

ELEMENTS_UI.BUTTON_ENTER.addEventListener('click', () => {
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

ELEMENTS_UI.LIST_MESSAGE.addEventListener('scroll', (event) => {
  infiniteScrolling(event);
});
