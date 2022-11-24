import { ELEMENTS } from './elements.js';
import { format, parseISO } from 'date-fns';

export function renderMyMessage(messages) {
  let elem = document.createElement('div');
  elem.append(ELEMENTS.TEMPLATE_MY_MESSAGE.content.cloneNode(true));
  const myMessageView = elem.querySelector('.my_message_view');
  const timeMessage = elem.querySelector('.time_message');
  myMessageView.textContent = messages.text;
  timeMessage.textContent = format(parseISO(messages.createdAt), 'HH:mm');
  ELEMENTS.MESSAGE_WINDOW.append(elem);
  elem.scrollIntoView({ behavior: 'smooth' });
  ELEMENTS.MY_MESSAGE_INPUT.value = '';
}

export function renderOtherMessage(messages) {
  if (messages.user.email !== 'inal-lukyaev@mail.ru') {
    let elem = document.createElement('div');
    elem.append(ELEMENTS.TEMPLATE_OTHER_MESSAGE.content.cloneNode(true));
    const otherMessageView = elem.querySelector('.message_other');
    const timeMessage = elem.querySelector('.time-message');
    const nameOther = elem.querySelector('.name_other');
    otherMessageView.textContent = messages.text;
    timeMessage.textContent = format(parseISO(messages.createdAt), 'HH:mm');
    nameOther.textContent = messages.user.name;
    ELEMENTS.MESSAGE_WINDOW.append(elem);
    elem.scrollIntoView({ behavior: 'smooth' });
  } else {
    renderMyMessage(messages);
  }
}
