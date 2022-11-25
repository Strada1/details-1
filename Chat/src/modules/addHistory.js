import { getTime } from './getTime';

const message = document.querySelector('#message');

let minLength = 0;
let maxLength = 20;

export function addHistory() {
  const messages = JSON.parse(localStorage.getItem('messages'));

  if (maxLength === messages.length) {
    let h1 = document.createElement('h1');
    let text = document.createTextNode('Вся история загружена');
    h1.appendChild(text);
    chat.prepend(h1);
    return false;
  } else {
    for (let i = minLength; i < maxLength; i++) {
      let temp = message.content.cloneNode(true);
      let name = messages[i].user.name;
      let text = messages[i].text;
      let date = messages[i].createdAt;

      if (messages[i].user.email === 'vladvladilin@mail.ru') {
        temp.querySelector('div').classList.add('me');
      } else {
        temp.querySelector('div').classList.add('he');
      }

      temp.querySelector('p').textContent = `${name}:${text}`;
      temp.querySelector('span').textContent = getTime(date);

      chat.prepend(temp);
    }
    minLength += 20;
    maxLength += 20;
  }
}
