import {  ELEMENT, CLASS, ID } from './const.js';
import { format } from 'date-fns';

export  function showPopup(element) {
    element.classList.add(CLASS.ACTIVE);
  }
  
export  function closePopup(element) {
    element.classList.remove(CLASS.ACTIVE);
  }

export function createClone(template) {
    return template.content.cloneNode(true);
  }
  
export  function showMessageOwn(clone){
    if (ELEMENT.INPUT_MESSAGE.value.trim()) {
      clone.querySelectorAll(CLASS.OWN_TEXT).forEach((message) => message.textContent = ELEMENT.INPUT_MESSAGE.value);
      ELEMENT.MAIN.prepend(clone);
    }
  }
  
  export  function showMessageOther(clone, history) {
    if (history[0].text) {
      clone.querySelectorAll(CLASS.OTHER_TEXT).forEach((message) => message.textContent = `${history[0].user.name}: ${history[0].text}`);
      clone.querySelectorAll(ID.OTHER_TIME).forEach((message) => message.textContent = format(new Date(history[0].updatedAt), 'HH:mm'));
      ELEMENT.MAIN.prepend(clone);
    }
  }