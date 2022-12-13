import './modules/auth.js';
import './modules/settings.js';
import {createNewMessageSelf, createNewMessage} from './modules/messages.js';

const CHAT_DIALOG_WRAP = document.querySelector('.chat__main');
const FORM_SEND_TEXT = document.querySelector('.chat__form--send-message');
const SOCKET = new WebSocket(`wss://edu.strada.one/websockets?${document.cookie.replace('token=', '')}`);

let allMessages: {user: {email: string}, text: string, updatedAt: string}[] = [];
let countMessages: number[] = [];

FORM_SEND_TEXT?.addEventListener('submit', function(this:Element, evt) {
  evt.preventDefault();

  const input = this.querySelector('.chat__input') as HTMLInputElement;
  const textValue = input.value;

  if (textValue.length > 0) {
    SOCKET.send(JSON.stringify({ text: textValue }));

    input.value = '';
  }
})

document.addEventListener('DOMContentLoaded', async function() {
  await fetch('https://edu.strada.one/api/messages/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Bearer ${document.cookie.replace('token=', '')}`
    },
  })
    .then((res) => res.json())
    .then((res) => {
      allMessages = res.messages;
      countMessages = [19, 0];
      renderMessages();
      CHAT_DIALOG_WRAP?.scrollTo(0, CHAT_DIALOG_WRAP.scrollHeight);
  });
});

SOCKET.onmessage = function(event) {
  let data = JSON.parse(event.data);
  getMessages(data);
  CHAT_DIALOG_WRAP?.scrollTo(0, CHAT_DIALOG_WRAP.scrollHeight);
};

function getMessages(data: {user: {email: string}, text: string, updatedAt: string}) {
  if (data.user.email === localStorage.getItem('myEmail')) {
    createNewMessageSelf(data.text, data.updatedAt);
  } else {
    createNewMessage(data.text, data.updatedAt);
  }
}

function renderMessages() {
  for (let i = countMessages[1]; i <= countMessages[0]; i++) {
    getMessages(allMessages[i]);
  }
}

CHAT_DIALOG_WRAP?.addEventListener('scroll', function(this:Element) {
  if (this.scrollTop < 100) {
    if (countMessages[0] <= allMessages.length - 20) {
      countMessages = [countMessages[0] + 20, countMessages[1] + 20];
      renderMessages();
    }
  }
});

// Идеи для улучшений:
// Время с нулем.
// Непрочитанные сообщения.
// Сделать имя пользователя.