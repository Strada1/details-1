import { ELEMENTS } from './elements';
import { getHours, getMinutes } from 'date-fns';

let user = 'Kai';

ELEMENTS.MESSAGE_FORM.addEventListener('submit', (event) => addMessage(event));

function addMessage(event) {
  event.preventDefault();
  const messagevalue = ELEMENTS.MESSAGE_INPUT.value.trim();
  const hour = getHours(new Date());
  const minute = getMinutes(new Date());
  const messageDate = `${hour}:${minute}`;
  if (messagevalue.length) {
    console.log(ELEMENTS.MESSAGE_TEMPLATE);
    const template = ELEMENTS.MESSAGE_TEMPLATE.content.cloneNode(true);
    template.querySelector('.author').textContent = `${user}`;
    template.querySelector('.message-text').textContent = messagevalue;
    template.querySelector('.message-date').textContent = messageDate;

    ELEMENTS.MESSAGE_LIST.append(template);
    ELEMENTS.MESSAGE_INPUT.value = '';
  }
}

// function checkMessage(text) {
//   if (text !== null && typeof text !== 'undefined' && text !== '') {
//     return text;
//   } else {
//     alert('Введите сообщение!');
//   }
// }
