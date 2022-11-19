import { ELEMENTS } from './elements.js';

export function renderMessage() {
  if (ELEMENTS.MY_MESSAGE_INPUT.value) {
    let elem = document.createElement('div');
    elem.append(ELEMENTS.TEMPLATE_MY_MESSAGE.content.cloneNode(true));
    const myMessageView = elem.querySelector('.my_message_view');
    const timeMessage = elem.querySelector('.time_message');
    myMessageView.textContent = ELEMENTS.MY_MESSAGE_INPUT.value;
    ELEMENTS.MY_MESSAGE_INPUT.value = '';
    timeMessage.textContent = '18:45';
    ELEMENTS.MESSAGE_WINDOW.append(elem);
    elem.scrollIntoView();
  } else {
    console.log('Нельзя вводить пустую строку ');
  }
}
