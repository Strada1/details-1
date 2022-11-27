import { ELEMENTS } from './elements.js';
import { format, parseISO } from 'date-fns';
import { getCookie } from './cookiesFunc.js';

export function renderOtherMessage(messages, firstIteration) {
  let elem;
  if (messages.user.email !== getCookie('email')) {
    elem = renderOurMessage(messages, 'other');
  } else {
    elem = renderOurMessage(messages, 'my');
    ELEMENTS.MY_MESSAGE_INPUT.value = '';
  }
  if (firstIteration) {
    ELEMENTS.MESSAGE_WINDOW.prepend(elem);
  } else {
    ELEMENTS.MESSAGE_WINDOW.append(elem);
  }
}

function renderOurMessage(messages, whoIs) {
  let elem = document.createElement('div');
  const OurMessagesTemplate =
    whoIs !== 'my'
      ? ELEMENTS.TEMPLATE_OTHER_MESSAGE
      : ELEMENTS.TEMPLATE_MY_MESSAGE;
  elem.append(OurMessagesTemplate.content.cloneNode(true));
  const OurMessageView = elem.querySelector(`.${whoIs}_message_view`);
  const timeMessage = elem.querySelector('.time-message');
  timeMessage.textContent = format(parseISO(messages.createdAt), 'HH:mm');
  OurMessageView.textContent = messages.text;
  if (whoIs !== 'my') {
    let nameUser = elem.querySelector('.name_other');
    nameUser.textContent = messages.user.name;
  }
  ELEMENTS.MESSAGE_WINDOW.append(elem);
  elem.scrollIntoView({ behavior: 'smooth' });
  return elem;
}
