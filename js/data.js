import { POPUPS, URLS, USERS } from './constants';
import Cookies from 'js-cookie';
import { showPopup, hidePopup } from './helpers';

export function authorizationSendHandler(event) {
  event.preventDefault();
  const userEmail = POPUPS.AUTHORIZATION_FIELD.value.trim();

  if (userEmail) {
    hidePopup(POPUPS.AUTHORIZATION_BLOCK);
    showPopup(POPUPS.CONFIRM_BLOCK);
    sendEmail(userEmail);
  }
}

async function sendEmail(email) {
  const response = await fetch(URLS.USER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ email: `${email}` }),
    Authorization: `Bearer ${Cookies.get('authorizationCode')}`,
  });

  const result = await response.json();
  console.log(`RESULT: ${result}`);
  console.log(`RESPONSE ${response.ok}`);
}

export function confirmSendHandler(event) {
  event.preventDefault();
  const userCode = POPUPS.CONFIRM_FIELD.value.trim();

  saveCookies('authorizationCode', userCode);
  console.log('COOKIES', Cookies.get());
  hidePopup(POPUPS.CONFIRM_BLOCK);
  showPopup(POPUPS.SETTINGS_POPUP);
}

export async function changeNameHandler(event) {
  event.preventDefault();
  console.log('start');
  const userName = POPUPS.SETTINGS_FIELD.value.trim();

  const response = await fetch(URLS.USER, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${Cookies.get('authorizationCode')}`,
    },
    body: JSON.stringify({ name: `${userName}` }),
  });

  const result = await response.json();
  console.log(`RESULT: ${result}`);
  console.log(`RESPONSE ${response.ok}`);
  if (response.ok) {
    hidePopup(POPUPS.SETTINGS_POPUP);
    updateUserData();
  }
}

export async function getUserData() {
  const response = await fetch(URLS.AUTHORIZATION_USER, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${Cookies.get('authorizationCode')}`,
    },
  });

  console.log(`RESPONSE ${response.ok}`);

  const result = await response.json();
  return result;
}

export async function getMessageHistory() {
  const response = await fetch(URLS.MESSAGE_HISTORY, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${Cookies.get('authorizationCode')}`,
    },
  });
  const result = await response.json();
  return result;
}

async function updateUserData() {
  const userData = getUserData();
  userData.then((user) => {
    USERS.USER_NAME = user.name;
    console.log(USERS.USER_NAME);
  });
}

export function saveCookies(key, value) {
  Cookies.set(key, `${value}`);
}
