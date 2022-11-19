//TODO:
//Разбить на модули
//Автоматическая прокрутка мыши к низу
//Прижатие маленького кол-ва сообщений к низу

import { getHours, getMinutes } from 'date-fns';

const chat = document.querySelector('#chat');
const openSettings = document.querySelector('#open_settings');
const closeSettings = document.querySelector('#close_settings');
const openLogin = document.querySelector('#open_login');
const closeLogin = document.querySelector('#close_auth');
const closeConfirm = document.querySelector('#close_confirm');

const settings = document.querySelector('#settings');
const auth = document.querySelector('#auth');
const confirm = document.querySelector('#confirm');

const sentMessage = document.querySelector('#sent_message');
const sentEmail = document.querySelector('#sent_email');
const sentCode = document.querySelector('#sent_code');
const sentName = document.querySelector('#sent_name');

const message = document.querySelector('#message');

let myName = 'Я';
const heName = 'Мой собеседник';

function sendMessage(name, text) {
  const temp = message.content.cloneNode(true);
  const fetchIsTrue = false;

  if (name === myName) {
    temp.querySelector('div').classList.add('me');
  } else {
    temp.querySelector('div').classList.add('he');
  }

  if (fetchIsTrue) {
    temp.querySelector('.message').classList.add('delivered');
  } else {
    temp.querySelector('.message').classList.add('sent');
  }

  const hours = getHours(Date.now());
  const minutes = getMinutes(Date.now());
  const time = `${hours}:${minutes}`;

  temp.querySelector('p').textContent = `${name}:${text}`;
  temp.querySelector('span').textContent = time;

  chat.appendChild(temp);
}

function getToken() {
  const nameAndToken = document.cookie.split('=');
  return nameAndToken[1];
}

function checkToken() {
  const token = getToken();

  if (token) {
    openLogin.replaceChildren('Выйти');
    getName();
  }
}

function getName() {
  fetch('https://edu.strada.one/api/user/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: 'Bearer ' + getToken(),
    },
  })
    .then((response) => response.json())
    .then((result) => (myName = result.name));
}

openSettings.addEventListener('click', (event) => {
  event.preventDefault();
  settings.classList.add('active');
});

closeSettings.addEventListener('click', (event) => {
  event.preventDefault();
  settings.classList.remove('active');
});

openLogin.addEventListener('click', (event) => {
  event.preventDefault();
  auth.classList.add('active');
});

closeLogin.addEventListener('click', (event) => {
  event.preventDefault();
  auth.classList.remove('active');
});

closeConfirm.addEventListener('click', (event) => {
  event.preventDefault();
  confirm.classList.remove('active');
});

sentEmail.addEventListener('submit', (event) => {
  event.preventDefault();
  const textEmail = sentEmail.children[0].value;
  fetch('https://edu.strada.one/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: 'Bearer ' + getToken(),
    },
    body: JSON.stringify({ email: textEmail }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.status > 400) {
        throw new Error(result.error);
      } else {
        auth.classList.remove('active');
        confirm.classList.add('active');
      }
    })
    .catch((e) => {
      alert(e.message);
    });
});

sentCode.addEventListener('submit', (event) => {
  event.preventDefault();
  const tokenValue = sentCode.children[0].value;
  document.cookie = `token=${tokenValue}`;
  checkToken();
  confirm.classList.remove('active');
});

sentName.addEventListener('submit', (event) => {
  event.preventDefault();
  const newName = sentName.children[0].value;
  fetch('https://edu.strada.one/api/user', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: 'Bearer ' + getToken(),
    },
    body: JSON.stringify({ name: newName }),
  })
    .then((response) => response.json())
    .then((result) => (myName = result.name));
  getName();
  settings.classList.remove('active');
});

sentMessage.addEventListener('submit', (event) => {
  event.preventDefault();
  const textMessage = sentMessage.children[0].value;
  if (textMessage.length > 0) {
    sendMessage(myName, textMessage);
    sentMessage.children[0].value = '';
  }
});

getToken();
checkToken();
