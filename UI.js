import {  ELEMENT, CLASS, ID, HISTORY_MESSAGE, NUMBER, NEW_ELEMENT, METHOD } from './const.js';
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
  
export  function showMessageOwn(clone, user, method) {
    clone.querySelectorAll(CLASS.OWN_TEXT).forEach((message) => message.textContent = user.text);
    clone.querySelectorAll(ID.OWN_TIME).forEach((message) => message.textContent = format(new Date(user.updatedAt), 'HH:mm'));

    if (method === METHOD.APPEND) {
      ELEMENT.MAIN.append(clone);
      return;
    }
    ELEMENT.MAIN.prepend(clone);
}
  
export  function showMessageOther(clone, user, method) {
  clone.querySelectorAll(CLASS.OTHER_TEXT).forEach((message) => message.textContent = `${user.user.name}: ${user.text}`);
  clone.querySelectorAll(ID.OTHER_TIME).forEach((message) => message.textContent = format(new Date(user.updatedAt), 'HH:mm'));

  if (method === METHOD.APPEND) {
    ELEMENT.MAIN.append(clone);
    return;
  }
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
  minIndex+=NUMBER.NEXT_INDEX;
  maxIndex+=NUMBER.NEXT_INDEX;
  checkHistory(history);

  if (0 === history.length) {
    showEndMessage();
   }
}

export function checkHistory(history) {
  history.forEach((history) => {
    if (history.user.email === Cookies.get('email')) {
      const cloneOwn = createClone(ELEMENT.TEMPLATE_MESS_OWN);
      showMessageOwn(cloneOwn, history, METHOD.APPEND);
    } else {
      const cloneOther = createClone(ELEMENT.TEMPLATE_MESS_OTHER);
      showMessageOther(cloneOther, history, METHOD.APPEND);
    }
  })
}

function showEndMessage() {
  if(!document.querySelector(NEW_ELEMENT.CLASS_END)) {
    let div = document.createElement(NEW_ELEMENT.DIV);
    div.classList.add(NEW_ELEMENT.NEW_CLASS_END);
    
    let p = document.createElement(NEW_ELEMENT.P);
    p.textContent = NEW_ELEMENT.TEXT;
    div.append(p);
    ELEMENT.MAIN.append(div);
  }
}
