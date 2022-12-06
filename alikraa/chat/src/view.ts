import { ELEMENTS, VALUES, COUNTER } from "./consts";
import Cookies from "js-cookie";
import { format } from "date-fns";

export function openPopUp(item: Element | null) {
  item?.classList.add(VALUES.SELECTED);
}

export function closePopUp(item: Element | null) {
  item?.classList.remove(VALUES.SELECTED);
}

export function findPopUp(func: Function, item: string) {
  ELEMENTS.POP_UP?.forEach(function (popUp) {
    if (popUp) {
      popUp.textContent?.includes(item) ? func(popUp) : false;
    }
  });
}

export class RequestError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Error";
  }
}

export function setCookies(key: string, value: Element | null) {
  const check = checkInput(value);
  return check ? Cookies.set(key, check, { expires: 7 }) : false;
}

export function getCookies(key: string) {
  return Cookies.get(key);
}

export interface MessageStructure {
  message: string;
  time: Date;
  name: string;
  sender: string;
  position: string;
}

export function addMessage(element: MessageStructure) {
  const div: HTMLDivElement | null = document.createElement("div");
  if (getCookies(VALUES.COOKIES_EMAIL) === element.sender) {
    div.classList.add(VALUES.CHAT_CLASS, VALUES.MY_MESSAGE, VALUES.SENT);
  } else {
    div.classList.add(VALUES.CHAT_CLASS, VALUES.FRIEND_MESSAGE, VALUES.SENT);
  }

  if (ELEMENTS.TEMPLATE instanceof HTMLTemplateElement) {
    div.append(ELEMENTS.TEMPLATE.content.cloneNode(true));
  }

  (
    div.querySelector(VALUES.SENDER) as HTMLDivElement
  ).textContent = `${element.name}: `;
  (div.querySelector(VALUES.TEXT) as HTMLDivElement).textContent =
    element.message;
  (div.querySelector(VALUES.TIME) as HTMLDivElement).textContent = convertDate(
    element.time
  );

  if (element.position === VALUES.APPEND) {
    ELEMENTS.CHAT_WINDOW?.append(div);
  } else {
    ELEMENTS.CHAT_WINDOW?.prepend(div);
  }

  div.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  statusMessage({ item: div, type: VALUES.CLASS });
}

interface StyleMessage {
  item: Element | null;
  type?: string;
}

function statusMessage(element: StyleMessage) {
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

export function checkInput(input: Element | null) {
  if (input instanceof HTMLInputElement) {
    return input.value.trim();
  } else {
    alert("Заполните поле ввода!");
  }
}

export function clearInput(input: Element | null) {
  if (input instanceof HTMLInputElement) {
    input.value = "";
  }
}

export function render() {
  const messages = document.querySelectorAll(VALUES.CHAT_CLASSNAME);
  messages.forEach((item) => item.remove());
}

interface DataMessage {
  text: string;
  createdAt: Date;
  user: {
    name: string;
    email: string;
  };
}

export function renderHistoryMessages(data: DataMessage[]) {
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

function convertDate(time: Date) {
  return format(new Date(time), VALUES.TIME_TEMPLATE);
}

function endHistoryMessages() {
  const header = document.createElement(VALUES.HEADER);
  header.className = VALUES.HEADER_CLASSNAME;
  header.textContent = "Вся история сообщений успешно загружена";
  ELEMENTS.BODY?.prepend(header);

  statusMessage({ item: header });
}
