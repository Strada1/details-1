import Cookies from 'js-cookie';
import { format } from 'date-fns';
import { CookieName } from '../cookie';

const MESSAGES_ELEMENTS = {
  TEMPLATE: document.querySelector('#template-massage'),
  LIST_MESSAGE: document.querySelector('.chat__main'),
};

const POSITION_MESSAGES = {
  RIGHT: 'massage-right',
  LEFT: 'massage-left',
};

function scrollStartMessages() {
  MESSAGES_ELEMENTS.LIST_MESSAGE.scrollTo(0, 0);
}

export function createMessage(user, message, time, isMessageClient) {
  const elemMessage = MESSAGES_ELEMENTS.TEMPLATE.content.cloneNode(true);
  if (isMessageClient) {
    scrollStartMessages();
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
  const isMessageClient = userEmail === Cookies.get(CookieName.CLIENT_EMAIL);
  MESSAGES_ELEMENTS.LIST_MESSAGE.append(
    createMessage(user, message, time, isMessageClient)
  );
}

export function addMessageUI(user, message, time, userEmail) {
  const isMessageClient = userEmail === Cookies.get(CookieName.CLIENT_EMAIL);
  MESSAGES_ELEMENTS.LIST_MESSAGE.prepend(
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
