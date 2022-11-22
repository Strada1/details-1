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
  
export  function showMessageOther(clone, history, index, template) {
  if (index < 0) return index;

  clone.querySelectorAll(CLASS.OTHER_TEXT).forEach((message) => message.textContent = `${history[index].user.name}: ${history[index].text}`);
  clone.querySelectorAll(ID.OTHER_TIME).forEach((message) => message.textContent = format(new Date(history[index].updatedAt), 'HH:mm'));
  ELEMENT.MAIN.prepend(clone);
  const cloneOther = createClone(template);

  return showMessageOther(cloneOther, history, index - INDEX_SEARCH, template);
}