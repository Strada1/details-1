import { POPUPS, URLS, USERS } from './elements';
import Cookies from 'js-cookie';

export async function authorizationSendHandler(event) {
  event.preventDefault();
  const userEmail = POPUPS.AUTHORIZATION_FIELD.value.trim();
  console.log(userEmail);

  const response = await fetch(URLS.USER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ email: `${userEmail}` }),
  });

  const result = await response.json();
  console.log(`RESULT: ${result}`);
  console.log(`RESPONSE ${response.ok}`);
  if (response.ok) {
    POPUPS.AUTHORIZATION_BLOCK.style.display = 'none';
    POPUPS.CONFIRM_BLOCK.style.display = 'block';
  }
}

export function confirmSendHandler(event) {
  event.preventDefault();
  const userCode = POPUPS.CONFIRM_FIELD.value.trim();

  Cookies.set('authorizationCode', `${userCode}`);
  console.log('COOKIES', Cookies.get());
  POPUPS.CONFIRM_BLOCK.style.display = 'none';
  POPUPS.SETTINGS_POPUP.style.display = 'block';
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
    POPUPS.SETTINGS_POPUP.style.display = 'none';
    updateUserData();
  }
}

async function getUserData() {
  const response = await fetch(URLS.AUTHORIZATION_USER, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${Cookies.get('authorizationCode')}`,
    },
  });

  console.log(`RESPONSE ${response.ok}`);

  return response;
}

async function updateUserData() {
  const userData = getUserData();
  userData
    .then((response) => response.json())
    .then((user) => {
      USERS.USER_NAME = user.name;
      console.log(USERS.USER_NAME);
    });
}
