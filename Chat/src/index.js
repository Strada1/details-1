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

const message = document.querySelector('#message');

const myName = 'Я';
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

  auth.classList.remove('active');
  confirm.classList.add('active');
  fetch('https://edu.strada.one/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({ email: textEmail }),
  })
    .then((response) => response.json())
    .then((result) => console.log(result));
});

sentCode.addEventListener('submit', (event) => {
  event.preventDefault();
  confirm.classList.remove('active');
});

sentMessage.addEventListener('submit', (event) => {
  event.preventDefault();
  let textMessage = sentMessage.children[0].value;
  if (textMessage.length > 0) {
    sendMessage(myName, textMessage);
    sentMessage.children[0].value = '';
  }
});
