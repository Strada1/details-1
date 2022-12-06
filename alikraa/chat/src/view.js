import Cookies from 'js-cookie';
import { format } from 'date-fns';
import { ELEMENTS, VALUES, COUNTER } from './consts';

export function openPopUp(item) {
  item?.classList.add(VALUES.SELECTED);
}

export function closePopUp(item) {
  item?.classList.remove(VALUES.SELECTED);
}

export function findPopUp(func, item) {
  ELEMENTS.POP_UP?.forEach((popUp) => {
    if (popUp) {
      popUp.textContent?.includes(item) ? func(popUp) : false;
    }
  });
}

export class RequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'Error';
  }
}

export function setCookies(key, value) {
  const check = checkInput(value);
  return check ? Cookies.set(key, check, { expires: 7 }) : false;
}

export function getCookies(key) {
  return Cookies.get(key);
}

export function addMessage(element) {
  const div = document.createElement('div');
  if (getCookies(VALUES.COOKIES_EMAIL) === element.sender) {
    div.classList.add(VALUES.CHAT_CLASS, VALUES.MY_MESSAGE, VALUES.SENT);
  } else {
    div.classList.add(VALUES.CHAT_CLASS, VALUES.FRIEND_MESSAGE, VALUES.SENT);
  }

  if (ELEMENTS.TEMPLATE instanceof HTMLTemplateElement) {
    div.append(ELEMENTS.TEMPLATE.content.cloneNode(true));
  }

  div.querySelector(VALUES.SENDER).textContent = `${element.name}: `;
  div.querySelector(VALUES.TEXT).textContent = element.message;
  div.querySelector(VALUES.TIME).textContent = convertDate(element.time);

  if (element.position === VALUES.APPEND) {
    ELEMENTS.CHAT_WINDOW?.append(div);
  } else {
    ELEMENTS.CHAT_WINDOW?.prepend(div);
  }

  div.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  statusMessage({ item: div, type: VALUES.CLASS });
}

function statusMessage(element) {
  if (element.type === VALUES.CLASS) {
    setTimeout(() => {
      element.item?.classList.add(VALUES.DELIVERED);
    }, 3000);
  } else {
    setTimeout(() => {
      element.item?.setAttribute(VALUES.HIDDEN, VALUES.TRUE);
    }, 5000);
  }
}

export function checkInput(input) {
  if (input instanceof HTMLInputElement) {
    return input.value.trim();
  }
  alert('Заполните поле ввода!');
}

export function clearInput(input) {
  if (input instanceof HTMLInputElement) {
    input.value = '';
  }
}

export function render() {
  const messages = document.querySelectorAll(VALUES.CHAT_CLASSNAME);
  messages.forEach((item) => item.remove());
}

export function renderHistoryMessages(data) {
  for (let i = COUNTER.START; i < COUNTER.END; i++) {
    const message = data[i];
    addMessage({
      message: message.text,
      time: message.createdAt,
      name: message.user.name,
      sender: message.user.email,
      position: VALUES.PREPEND,
    });
  }

  COUNTER.START += COUNTER.COUNT;
  COUNTER.END += COUNTER.COUNT;

  if (COUNTER.START === COUNTER.MAX_MESSAGES) {
    endHistoryMessages();
  }
}

function convertDate(time) {
  return format(new Date(time), VALUES.TIME_TEMPLATE);
}

function endHistoryMessages() {
  const header = document.createElement(VALUES.HEADER);
  header.className = VALUES.HEADER_CLASSNAME;
  header.textContent = 'Вся история сообщений успешно загружена';
  ELEMENTS.BODY?.prepend(header);

  statusMessage({ item: header });
}
