import Cookies from 'js-cookie';
import { ELEMENTS } from './main-UI';
import { CookieName } from '../cookie';

export function createMessage(user, message, time, isMessageClient) {
  const elemMessage = ELEMENTS.TEMPLATE.content.cloneNode(true);
  if (isMessageClient) {
    elemMessage.querySelector('.massage').classList.remove('massage-left');
    elemMessage.querySelector('.massage').classList.add('massage-right');
  }
  elemMessage.querySelector('.massage__text').textContent = message;
  elemMessage.querySelector('.massage__name').textContent = user;
  elemMessage.querySelector('.massage__time').textContent = time;
  return elemMessage;
}

// TODO: добавить скролл вниз про добавлении сообщений
export function addMessageUI(user, message, time, userEmail) {
  const isMessageClient = userEmail === Cookies.get(CookieName.CLIENT_EMAIL);
  ELEMENTS.LIST_MESSAGE.prepend(
    createMessage(user, message, time, isMessageClient)
  );
}
