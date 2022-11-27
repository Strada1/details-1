import { Modal, MODAL_TYPES } from './modal.js';
import { sendData, getData } from './data-api.js';
import {
  setCookie,
  getCookie,
  COOKIE_NAMES
} from './cookies.js';
import { validateEmail, isNotEmptyField } from './validation.js';
import { showError, ERROR_MESSAGES_LIST } from './error.js';


const GET_CODE_URL = 'https://edu.strada.one/api/user';
const GET_USER_URL = 'https://edu.strada.one/api/user/me';

const MODALS = {
  authModal: {},
  confirmModal: {},
  settingsModal: {}
};


const settingsButtonElement = document.querySelector('.messenger__settings-button');


const setNameField = (userName) => MODALS.settingsModal.setInputValue(userName);


const onSuccessGetUser = (user) => {
  setNameField(user.name);
  setCookie(COOKIE_NAMES.EMAIL, user.email, {secure: true});
};


const getUser = () => {
  const token = getCookie(COOKIE_NAMES.BEARER);

  getData(
    onSuccessGetUser,
    showError,
    GET_USER_URL,
    {'Authorization': `Bearer ${token}`},
    ERROR_MESSAGES_LIST.GET_USER_ERROR
  );
};


const onChangeNameSuccess = () => {
  MODALS.settingsModal.enableButton();
  MODALS.settingsModal.closeModal();
};


const onChangeNameFail = (errorText) => {
  MODALS.settingsModal.enableButton();
  showError(errorText);
};


const changeName = (newName) => {
  const formData = JSON.stringify({name: newName});
  const token = getCookie(COOKIE_NAMES.BEARER);

  console.log(token);

  sendData(
    onChangeNameSuccess,
    onChangeNameFail,
    formData,
    GET_CODE_URL,
    'PATCH',
    {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    ERROR_MESSAGES_LIST.CONNECTION_POST_DATA_ERROR
  );
};


const onSettingsButtonClick = () => {
  MODALS.settingsModal.openModal();
};


const initSettings = () => {
  MODALS.settingsModal = new Modal(MODAL_TYPES.get('settings'), changeName, isNotEmptyField);
  settingsButtonElement.addEventListener('click', onSettingsButtonClick);
  getUser();
};


const sendCode = (code) => {
  setCookie(COOKIE_NAMES.BEARER, code, {secure: true});
  MODALS.authModal.enableButton();
  MODALS.confirmModal.closeModal();
  const token = getCookie(COOKIE_NAMES.BEARER);
  initSettings(token);
};


const initConfirmation = () => {
  MODALS.confirmModal = new Modal(MODAL_TYPES.get('confirmation'), sendCode, isNotEmptyField);
  MODALS.confirmModal.openModal();
};


const onSendEmailSuccess = () => {
  MODALS.authModal.enableButton();
  MODALS.authModal.closeModal();
  initConfirmation();
};


const onSendEmailFail = (errorText) => {
  MODALS.authModal.enableButton();
  showError(errorText);
};


const sendEmail = (email) => {
  const formData = JSON.stringify({email: email});

  sendData(
    onSendEmailSuccess,
    onSendEmailFail,
    formData,
    GET_CODE_URL,
    'POST',
    { 'Content-Type': 'application/json' },
    ERROR_MESSAGES_LIST.CONNECTION_POST_DATA_ERROR
  );
};


const initAuthorization = () => {
  MODALS.authModal = new Modal(MODAL_TYPES.get('authorization'), sendEmail, validateEmail);
  MODALS.authModal.openModal();
};

export {
  initAuthorization,
  getUser,
  initSettings
};
