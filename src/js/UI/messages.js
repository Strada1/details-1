import Cookies from 'js-cookie';
import { format } from 'date-fns';
import { COOKIE_NAME, ELEMENTS_UI, POSITION_MESSAGES } from '../const';

export function scrollStartMessages() {
  ELEMENTS_UI.LIST_MESSAGE.scrollTo(0, 0);
}

export function createMessage(user, message, time, isMessageClient) {
  const elemMessage = ELEMENTS_UI.TEMPLATE.content.cloneNode(true);
  if (isMessageClient) {
    elemMessage
      .querySelector('.massage')
      .classList.remove(POSITION_MESSAGES.LEFT);
    elemMessage
      .querySelector('.massage')
      .classList.add(POSITION_MESSAGES.RIGHT);
  }
  elemMessage.querySelector('.massage__text').textContent = message;
  elemMessage.querySelector('.massage__name').textContent = user;
  elemMessage.querySelector('.massage__time').textContent = time;
  return elemMessage;
}

export function addMessageScroll(user, message, time, userEmail) {
  const isMessageClient = userEmail === Cookies.get(COOKIE_NAME.CLIENT_EMAIL);
  ELEMENTS_UI.LIST_MESSAGE.append(
    createMessage(user, message, time, isMessageClient)
  );
}

export function addMessageUI(user, message, time, userEmail) {
  const isMessageClient = userEmail === Cookies.get(COOKIE_NAME.CLIENT_EMAIL);
  ELEMENTS_UI.LIST_MESSAGE.prepend(
    createMessage(user, message, time, isMessageClient)
  );
}

export function renderMessage(array, scroll) {
  const formatMessages = scroll ? addMessageScroll : addMessageUI;
  array.forEach((message) => {
    formatMessages(
      message.user.name,
      message.text,
      format(new Date(message.createdAt), 'HH:mm'),
      message.user.email
    );
  });
}
