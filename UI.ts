import {  ELEMENT, CLASS, ID, HISTORY_MESSAGE, NUMBER, NEW_ELEMENT, METHOD } from './const';
import { format } from 'date-fns';
import Cookies from "cookies-ts";

const cookies = new Cookies();

let minIndex: number = 20;
let maxIndex: number = 40;

export  function showPopup(element: Element | null) {
  if (element === null) return;
  element.classList.add(CLASS.ACTIVE);
}
  
export  function closePopup(element: Element | null) {
  if (element === null) return;
  element.classList.remove(CLASS.ACTIVE);
}

export function createClone(template: any) {
  return template.content.cloneNode(true);
}
  
type userElement = {
  text: string;
  updatedAt: string;
}

export  function showMessageOwn(clone: HTMLTemplateElement | null, user: userElement, method: string) {
  if (clone === null) return;
  clone.querySelectorAll(CLASS.OWN_TEXT).forEach((message) => message.textContent = user.text);
  clone.querySelectorAll(ID.OWN_TIME).forEach((message) => message.textContent = format(new Date(user.updatedAt), 'HH:mm'));
  if (ELEMENT.MAIN === null) return;
  if (method === METHOD.APPEND) {
    ELEMENT.MAIN.append(clone);
    return;
  }
  ELEMENT.MAIN.prepend(clone);
}
  
export  function showMessageOther(clone: HTMLTemplateElement | null, user: any, method: string) {
  if (clone === null) return;
  clone.querySelectorAll(CLASS.OTHER_TEXT).forEach((message) => message.textContent = `${user.user.name}: ${user.text}`);
  clone.querySelectorAll(ID.OTHER_TIME).forEach((message) => message.textContent = format(new Date(user.updatedAt), 'HH:mm'));

  if (ELEMENT.MAIN === null) return;
  if (method === METHOD.APPEND) {
    ELEMENT.MAIN.append(clone);
    return;
  }
  ELEMENT.MAIN.prepend(clone);
}

export function checkPosition() {
  if (ELEMENT.MAIN === null) return;
  let scrollBottom = ELEMENT.MAIN.scrollHeight - Math.abs(ELEMENT.MAIN.scrollTop) - ELEMENT.MAIN.clientHeight;
  if (scrollBottom === 0) {
    sliceArray(HISTORY_MESSAGE);
  } 
}

export function sliceArray(historyMessage: any) {
  const history = historyMessage.filter((item: object, index: number) => {
    if (minIndex <= index && index < maxIndex) return item;
  });
  minIndex+=NUMBER.NEXT_INDEX;
  maxIndex+=NUMBER.NEXT_INDEX;
  checkHistory(history);

  if (0 === history.length) {
    showEndMessage();
   }
}

export function checkHistory(history: any) {
  history.forEach((history: any) => {
    if (history.user.email === cookies.get('email')) {
      const cloneOwn = createClone(ELEMENT.TEMPLATE_MESS_OWN);
      showMessageOwn(cloneOwn, history, METHOD.APPEND);
    } else {
      const cloneOther = createClone(ELEMENT.TEMPLATE_MESS_OTHER);
      showMessageOther(cloneOther, history, METHOD.APPEND);
    }
  })
}

function showEndMessage() {
  if (ELEMENT.MAIN === null) return;
  if(!document.querySelector(NEW_ELEMENT.CLASS_END)) {
    let div = document.createElement(NEW_ELEMENT.DIV);
    div.classList.add(NEW_ELEMENT.NEW_CLASS_END);
    
    let p = document.createElement(NEW_ELEMENT.P);
    p.textContent = NEW_ELEMENT.TEXT;
    div.append(p);
    ELEMENT.MAIN.append(div);
  }
}
