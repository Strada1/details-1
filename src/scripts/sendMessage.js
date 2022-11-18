const sendMessageForm = document.querySelector('#send_message_form');
const textMessageInput = document.querySelector('#text_message_input');
const outgoingMessageTpl = document.querySelector('#outgoing_message');
const messages = document.querySelector('#messages');

const date = new Date();

const Message = {
  name: 'Alina',
  text: 'А это второе и, кажется, оно очень длинное, чтобы поместиться на одной строке',
  time: `${date.getHours()} : ${date.getMinutes()}`,
}

sendMessageForm.addEventListener('submit', (event) => {
   event.preventDefault();
  const textMessage = textMessageInput.value;
  addMessageInDOM(outgoingMessageTpl, 'outgoing_message', textMessage, 'Alina', Message.time);
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