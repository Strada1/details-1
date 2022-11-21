import { ELEMENTS } from './elements.js';

export function renderMyMessage() {
  if (ELEMENTS.MY_MESSAGE_INPUT.value) {
    let elem = document.createElement('div');
    elem.append(ELEMENTS.TEMPLATE_MY_MESSAGE.content.cloneNode(true));
    const myMessageView = elem.querySelector('.my_message_view');
    const timeMessage = elem.querySelector('.time_message');
    myMessageView.textContent = ELEMENTS.MY_MESSAGE_INPUT.value;
    ELEMENTS.MY_MESSAGE_INPUT.value = '';
    timeMessage.textContent = '18:45';
    ELEMENTS.MESSAGE_WINDOW.append(elem);
    elem.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.log('Нельзя вводить пустую строку ');
  }
}

export function renderOtherMessage(messages) {
  let elem = document.createElement('div');
  elem.append(ELEMENTS.TEMPLATE_OTHER_MESSAGE.content.cloneNode(true));
  const otherMessageView = elem.querySelector('.message_other');
  const timeMessage = elem.querySelector('.time-message');
  const nameOther = elem.querySelector('.name_other');
  otherMessageView.textContent = messages.messages[0].text;
  timeMessage.textContent = '18:45';
  nameOther.textContent = messages.messages[0].user.name;
  ELEMENTS.MESSAGE_WINDOW.append(elem);
  elem.scrollIntoView({ behavior: 'smooth' });
}
