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
    clone.querySelectorAll(CLASS.OWN_TEXT).forEach((message) => message.textContent = user.text);
    clone.querySelectorAll(ID.OWN_TIME).forEach((message) => message.textContent = format(new Date(user.updatedAt), 'HH:mm'));
    ELEMENT.MAIN.prepend(clone);
}
  
export  function showMessageOther(clone, user) {
  clone.querySelectorAll(CLASS.OTHER_TEXT).forEach((message) => message.textContent = `${user.user.name}: ${user.text}`);
  clone.querySelectorAll(ID.OTHER_TIME).forEach((message) => message.textContent = format(new Date(user.updatedAt), 'HH:mm'));
  ELEMENT.MAIN.prepend(clone);
}

// export  function showHistoryMessageOther(cloneOwn1, cloneOther1, history, index, templateOwn, templateOther) {
//   if (index < 0) return index;
  
//   if (history[index].user.email === Cookies.get('email')) {
//     cloneOwn1.querySelectorAll(CLASS.OWN_TEXT).forEach((message) => message.textContent = history[index].text);
//     cloneOwn1.querySelectorAll(ID.OWN_TIME).forEach((message) => message.textContent = format(new Date(history[index].updatedAt), 'HH:mm'));
//     ELEMENT.MAIN.prepend(cloneOwn);
//     const cloneOwn = createClone(templateOwn);

//     return showHistoryMessageOther(cloneOwn, cloneOther, history, index - INDEX_SEARCH, templateOwn, templateOther);
//   } 
//   else {
//     cloneOther1.querySelectorAll(CLASS.OTHER_TEXT).forEach((message) => message.textContent = `${history[index].user.name}: ${history[index].text}`);
//     cloneOther1.querySelectorAll(ID.OTHER_TIME).forEach((message) => message.textContent = format(new Date(history[index].updatedAt), 'HH:mm'));
//     ELEMENT.MAIN.prepend(cloneOther);
//     const cloneOther = createClone(templateOther);
  
//     return showHistoryMessageOther(cloneOwn, cloneOther, history, index - INDEX_SEARCH, templateOwn, templateOther);
//   }
// }
