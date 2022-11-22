import { Modal, MODAL_TYPES } from './modal.js';
import { sendData, getData } from './data-api.js';
import {
  setCookie,
  getCookie,
  BEARER_COOKIE_NAME
} from './cookies.js';
import { validateEmail, isNotEmptyField } from './validation.js';
import { showError, ERROR_MESSAGES_LIST } from './error.js';


const GET_CODE_URL = 'https://edu.strada.one/api/user';
const GET_USER_URL = 'https://edu.strada.one/api/user/me';

const STORE = {
  authModal: {},
  confirmModal: {},
  settingsModal: {},
  myEmail: ''
};


const settingsButtonElement = document.querySelector('.messenger__settings-button');


const setNameField = (userName) => STORE.settingsModal.setInputValue(userName);


const onSuccessGetUser = (user) => {
  setNameField(user.name);
  STORE.myEmail = user.email;
};


const getUser = () => {
  const token = getCookie(BEARER_COOKIE_NAME);

  getData(
    onSuccessGetUser,
    showError,
    GET_USER_URL,
    {'Authorization': `Bearer ${token}`},
    ERROR_MESSAGES_LIST.GET_USER_ERROR
  );
};


const onChangeNameSuccess = () => {
  STORE.settingsModal.enableButton();
  STORE.settingsModal.closeModal();
};


const onChangeNameFail = (errorText) => {
  STORE.settingsModal.enableButton();
  showError(errorText);
};


const changeName = (newName) => {
  const formData = JSON.stringify({name: newName});
  const token = getCookie(BEARER_COOKIE_NAME);

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
  STORE.settingsModal.openModal();
};


const initSettings = () => {
  STORE.settingsModal = new Modal(MODAL_TYPES.get('settings'), changeName, isNotEmptyField);
  settingsButtonElement.addEventListener('click', onSettingsButtonClick);
  getUser();
};


const sendCode = (code) => {
  setCookie(BEARER_COOKIE_NAME, code, {secure: true});
  STORE.authModal.enableButton();
  STORE.confirmModal.closeModal();
  const token = getCookie(BEARER_COOKIE_NAME);
  initSettings(token);
};


const initConfirmation = () => {
  STORE.confirmModal = new Modal(MODAL_TYPES.get('confirmation'), sendCode, isNotEmptyField);
  STORE.confirmModal.openModal();
};


const onSendEmailSuccess = () => {
  STORE.authModal.enableButton();
  STORE.authModal.closeModal();
  initConfirmation();
};


const onSendEmailFail = (errorText) => {
  STORE.authModal.enableButton();
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
  STORE.authModal = new Modal(MODAL_TYPES.get('authorization'), sendEmail, validateEmail);
  STORE.authModal.openModal();
};

export {
  initAuthorization,
  getUser,
  initSettings
};
