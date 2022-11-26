import {  ELEMENT, CLASS, ID, HISTORY_MESSAGE } from './const.js';
import { format } from 'date-fns';
import Cookies from 'js-cookie';

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
    ELEMENT.MAIN.prepend(clone);
}
  
export  function showMessageOther(clone, user) {
  clone.querySelectorAll(CLASS.OTHER_TEXT).forEach((message) => message.textContent = `${user.user.name}: ${user.text}`);
  clone.querySelectorAll(ID.OTHER_TIME).forEach((message) => message.textContent = format(new Date(user.updatedAt), 'HH:mm'));
  ELEMENT.MAIN.prepend(clone);
}

let minIndex = 20;
let maxIndex = 19;
export function checkPosition() {
  let scrollBottom = ELEMENT.MAIN.scrollHeight - Math.abs(ELEMENT.MAIN.scrollTop) - ELEMENT.MAIN.clientHeight;
  if (scrollBottom === 0) {
    // const history = JSON.parse(localStorage.getItem('messages'));
    // history = history.slice(0, 20);
    sliceArray(HISTORY_MESSAGE);
    ELEMENT.MAIN.scrollBy(0, 100);
  } else if (maxIndex === HISTORY_MESSAGE.length) {
   alert('Вся история загружена');
  }
  console.log(scrollBottom);
}

export function sliceArray(historyMessage) {
  historyMessage.slice(0, 20);
  // console.log(history);
  checkHistory(historyMessage);
}

export function checkHistory(history) {
  history.forEach((history) => {
    // console.log(history);
    if (history.user.email === Cookies.get('email')) {
      const cloneOwn = createClone(ELEMENT.TEMPLATE_MESS_OWN);
      showMessageOwn(cloneOwn, history);
    } else {
      const cloneOther = createClone(ELEMENT.TEMPLATE_MESS_OTHER);
      showMessageOther(cloneOther, history);
    }
  })
}
