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
  
export  function showMessageOwn(clone, user) {
  if (ELEMENT.INPUT_MESSAGE.value.trim()) {
    clone.querySelectorAll(CLASS.OWN_TEXT).forEach((message) => message.textContent = user.text);
    clone.querySelectorAll(ID.OWN_TIME).forEach((message) => message.textContent = format(new Date(user.updatedAt), 'HH:mm'));
    ELEMENT.MAIN.prepend(clone);
  }
}
  
export  function showMessageOther(clone, user) {
  clone.querySelectorAll(CLASS.OTHER_TEXT).forEach((message) => message.textContent = `${user.user.name}: ${user.text}`);
  clone.querySelectorAll(ID.OTHER_TIME).forEach((message) => message.textContent = format(new Date(user.updatedAt), 'HH:mm'));
  ELEMENT.MAIN.prepend(clone);
}