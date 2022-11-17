//TODO:
//Когда мало сообщений, прилепить их к низу;
//Реализовать автоматическую прокрутку к началу при
//добавлении сообщения;

import { getHours, getMinutes } from 'date-fns';

const chat = document.querySelector('#chat');
const openSettings = document.querySelector('#open_settings');
const settings = document.querySelector('#settings');
const closeSettings = document.querySelector('#close_settings');
const sentMessage = document.querySelector('#sentMessage');
const message = document.querySelector('#message');

const myName = 'Я';
const heName = 'Мой собеседник';

function setMessage(name, text) {
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

sentMessage.addEventListener('submit', (event) => {
  event.preventDefault();
  let textMessage = sentMessage.children[0].value;
  if (textMessage.length > 0) {
    setMessage(myName, textMessage);
    sentMessage.children[0].value = '';
  }
});
