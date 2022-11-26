import {  ELEMENT, CLASS, ID, HISTORY_MESSAGE, NUMBER } from './const.js';
import { format } from 'date-fns';
import Cookies from 'js-cookie';

let minIndex = 20;
let maxIndex = 40;

export  function showPopup(element) {
  element.classList.add(CLASS.ACTIVE);
}
  
export  function closePopup(element) {
  element.classList.remove(CLASS.ACTIVE);
}

export function createClone(template) {
  return template.content.cloneNode(true);
}
  
export  function showMessageOwn(clone, user) {
    clone.querySelectorAll(CLASS.OWN_TEXT).forEach((message) => message.textContent = user.text);
    clone.querySelectorAll(ID.OWN_TIME).forEach((message) => message.textContent = format(new Date(user.updatedAt), 'HH:mm'));
    ELEMENT.MAIN.append(clone);
}
  
export  function showMessageOther(clone, user) {
  clone.querySelectorAll(CLASS.OTHER_TEXT).forEach((message) => message.textContent = `${user.user.name}: ${user.text}`);
  clone.querySelectorAll(ID.OTHER_TIME).forEach((message) => message.textContent = format(new Date(user.updatedAt), 'HH:mm'));
  ELEMENT.MAIN.append(clone);
}

export  function showCurrentMessageOwn(clone, user) {
  clone.querySelectorAll(CLASS.OWN_TEXT).forEach((message) => message.textContent = user.text);
  clone.querySelectorAll(ID.OWN_TIME).forEach((message) => message.textContent = format(new Date(user.updatedAt), 'HH:mm'));
  ELEMENT.MAIN.prepend(clone);
}

export  function showCurrentMessageOther(clone, user) {
clone.querySelectorAll(CLASS.OTHER_TEXT).forEach((message) => message.textContent = `${user.user.name}: ${user.text}`);
clone.querySelectorAll(ID.OTHER_TIME).forEach((message) => message.textContent = format(new Date(user.updatedAt), 'HH:mm'));
ELEMENT.MAIN.prepend(clone);
}


export function checkPosition() {
  let scrollBottom = ELEMENT.MAIN.scrollHeight - Math.abs(ELEMENT.MAIN.scrollTop) - ELEMENT.MAIN.clientHeight;
  if (scrollBottom === 0) {
    sliceArray(HISTORY_MESSAGE);
  } 
}

export function sliceArray(historyMessage) {
  const history = historyMessage.slice(minIndex, maxIndex);
  console.log(historyMessage.slice(minIndex, maxIndex));
  minIndex+=NUMBER.NEXT_INDEX;
  maxIndex+=NUMBER.NEXT_INDEX;
  checkHistory(history);

  if (0 === history.length) {
    alert('Вся история загружена');
   }
}

export function checkHistory(history) {
  history.forEach((history) => {
    if (history.user.email === Cookies.get('email')) {
      const cloneOwn = createClone(ELEMENT.TEMPLATE_MESS_OWN);
      showMessageOwn(cloneOwn, history);
    } else {
      const cloneOther = createClone(ELEMENT.TEMPLATE_MESS_OTHER);
      showMessageOther(cloneOther, history);
    }
  })
}

