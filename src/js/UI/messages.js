import Cookies from 'js-cookie';
import { format } from 'date-fns';
import { CookieName } from '../cookie';

const MESSAGES_ELEMENTS = {
  TEMPLATE: document.querySelector('#template-massage'),
  LIST_MESSAGE: document.querySelector('.chat__main'),
};

export function createMessage(user, message, time, isMessageClient) {
  const elemMessage = MESSAGES_ELEMENTS.TEMPLATE.content.cloneNode(true);
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
  MESSAGES_ELEMENTS.LIST_MESSAGE.append(
    createMessage(user, message, time, isMessageClient)
  );
}

export function renderMessage(array) {
  array.forEach((message) => {
    addMessageUI(
      message.user.name,
      message.text,
      format(new Date(message.createdAt), 'HH:mm'),
      message.user.email
    );
  });
}
