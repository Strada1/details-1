import { currentUser } from './const.js';

const sendMessageForm = document.querySelector('#send_message_form');
const textMessageInput = document.querySelector('#text_message_input');
const outgoingMessageTpl = document.querySelector('#outgoing_message');
const messages = document.querySelector('#messages');

  sendMessageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const textMessage = textMessageInput.value;
  addMessageInDOM(outgoingMessageTpl, 'outgoing_message', textMessage, currentUser.name, getDate());
  textMessageInput.value = '';
});

 function addMessageInDOM (template, classMessage, textMessage, name, date ) {
  const elem = document.createElement('div');
  elem.classList.add(`${classMessage}`);
  const subElem = document.createElement('div');
  subElem.classList.add('wrap_message');
  subElem.attachShadow({mode: 'open'});
  subElem.shadowRoot.append(template.content.cloneNode(true));
  subElem.shadowRoot.getElementById('text_message').innerHTML = textMessage;
  subElem.shadowRoot.getElementById('name_message').innerHTML = name;
  subElem.shadowRoot.getElementById('time_message').innerHTML = date;
  elem.append(subElem);
  messages.append(elem);
}

function getDate () {
  const date = new Date();
  return `${date.getHours()} : ${date.getMinutes()}`;
}