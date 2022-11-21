import {  ELEMENT, CLASS, ID, INDEX_SEARCH } from './const.js';
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
  
  export  function showMessageOther(clone, history, index) {
    if (index < 0) return index;
    
    const newIndex = showMessageOther(clone, history, index - INDEX_SEARCH) + INDEX_SEARCH;

    clone.querySelectorAll(CLASS.OTHER_TEXT).forEach((message) => message.textContent = `${history[newIndex].user.name}: ${history[newIndex].text}`);
    clone.querySelectorAll(ID.OTHER_TIME).forEach((message) => message.textContent = format(new Date(history[newIndex].updatedAt), 'HH:mm'));
    ELEMENT.MAIN.prepend(clone);
    
  }