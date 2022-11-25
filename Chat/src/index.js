//TODO:
//Прижатие маленького кол-ва сообщений к низу
//Доразбить на модули
//Провести рефакторинг для уменьшения кода, улучшения оптимизации
//и исправления ошибок

import { getTime } from './modules/getTime';
import { checkToken } from './modules/checkToken';
import { getToken } from './modules/getToken';
import { addHistory } from './modules/addHistory';

const chat = document.querySelector('#chat');
const sentMessage = document.querySelector('#sent_message');
const message = document.querySelector('#message');

const socket = new WebSocket(`wss://edu.strada.one/websockets?${getToken()}`);

function sendMessage(text) {
  socket.send(JSON.stringify({ text: text }));
}

socket.onmessage = function (event) {
  let temp = message.content.cloneNode(true);

  let messageWS = JSON.parse(event.data);
  let name = messageWS.user.name;
  let text = messageWS.text;
  let date = messageWS.createdAt;

  if (messageWS.user.email === 'vladvladilin@mail.ru') {
    temp.querySelector('div').classList.add('me');
  } else {
    temp.querySelector('div').classList.add('he');
  }

  temp.querySelector('p').textContent = `${name}:${text}`;
  temp.querySelector('span').textContent = getTime(date);

  chat.appendChild(temp);
  chat.scrollTop += 9999999999999;
};

sentMessage.addEventListener('submit', (event) => {
  event.preventDefault();
  const textMessage = sentMessage.children[0].value;
  if (textMessage.length > 0) {
    sendMessage(textMessage);
    sentMessage.children[0].value = '';
  }
});

function resize() {
  let scrolled = chat.scrollTop;
  if (chat.scrollHeight >= 17562) {
    return false;
  } else if (scrolled === 0) {
    setTimeout(() => {
      addHistory();
      chat.scrollTop += 1200;
    }, 500);
  }
  console.log(chat.scrollHeight);
}

checkToken();
addHistory();

chat.scrollTop += 9999999999999;
chat.addEventListener('scroll', resize);
