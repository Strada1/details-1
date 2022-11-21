//TODO:
//Разбить на модули
//Прижатие маленького кол-ва сообщений к низу
//Исправить обработчик ошибок

import { getHours, getMinutes } from 'date-fns';

const chat = document.querySelector('#chat');
const openSettings = document.querySelector('#open_settings');
const closeSettings = document.querySelector('#close_settings');
const openLogin = document.querySelector('#open_login');
const openLogout = document.querySelector('#open_logout');
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

class Fetch {
  constructor(url, method, ...body) {
    this.url = url;
    this.method = method;
    this.body = JSON.stringify(body);

    if (method === 'GET') {
      return fetch(this.url, {
        method: this.method,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: 'Bearer ' + getToken(),
        },
      });
    } else {
      return fetch(this.url, {
        method: this.method,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: 'Bearer ' + getToken(),
        },
        body: this.body,
      });
    }
  }
}

function sendMessage(name, text) {
  const temp = message.content.cloneNode(true);

  if (name === myName) {
    temp.querySelector('div').classList.add('me');
  } else {
    temp.querySelector('div').classList.add('he');
  }

  temp.querySelector('.message').classList.add('sent');

  const hours = getHours(Date.now());
  const minutes = getMinutes(Date.now());
  const time = `${hours}:${minutes}`;

  temp.querySelector('p').textContent = `${name}:${text}`;
  temp.querySelector('span').textContent = time;

  chat.appendChild(temp);
  chat.scrollTop += 9999999999999;
}

function getToken() {
  const nameAndToken = document.cookie.split('=');
  if (nameAndToken[0] === 'token') {
    return nameAndToken[1];
  } else {
    return false;
  }
}

function checkToken() {
  const token = getToken();

  if (token) {
    openLogin.classList.remove('active');
    openLogout.classList.add('active');
    getName();
    return true;
  } else {
    openLogin.classList.add('active');
    openLogout.classList.remove('active');
    return false;
  }
}

function getName() {
  new Fetch('https://edu.strada.one/api/user/me', 'GET')
    .then((response) => response.json())
    .then((result) => (myName = result.name));
}

function getHistory() {
  new Fetch('https://edu.strada.one/api/messages/', 'GET')
    .then((response) => response.json())
    .then((result) => {
      const temp = message.content.cloneNode(true);
      let messages = result.messages;
      messages.forEach((message) => {
        let name = message.user.name;
        let text = message.text;
        let date = message.createdAt;
        let hours = getHours(new Date(date));
        let minutes = getMinutes(new Date(date));
        let time = `${hours}:${minutes}`;

        if (name === myName) {
          temp.querySelector('div').classList.add('me');
        } else {
          temp.querySelector('div').classList.add('he');
        }

        temp.querySelector('p').textContent = `${name}:${text}`;
        temp.querySelector('span').textContent = time;

        chat.appendChild(temp);
        chat.scrollTop += 9999999999999;
      });
    });
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

openLogout.addEventListener('click', (event) => {
  event.preventDefault();
  document.cookie = '';
  checkToken();
});

closeConfirm.addEventListener('click', (event) => {
  event.preventDefault();
  confirm.classList.remove('active');
});

sentEmail.addEventListener('submit', (event) => {
  event.preventDefault();
  const textEmail = sentEmail.children[0].value;
  new Fetch('https://edu.strada.one/api/user', 'POST', {
    email: textEmail,
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.status >= 300) {
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
  new Fetch('https://edu.strada.one/api/user', 'PATCH', {
    name: newName,
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
getHistory();
