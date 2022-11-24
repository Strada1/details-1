import { ELEMENTS, VALUES } from "./elements.js";
import Cookies from "js-cookie";
import { format } from "date-fns";

export function openPopUp(item) {
  item.classList.add(VALUES.SELECTED);
}

export function closePopUp(item) {
  item.classList.remove(VALUES.SELECTED);
}

export function findPopUp(func, item) {
  ELEMENTS.POP_UP.forEach(function (popUp) {
    if (popUp.textContent.includes(item)) {
      func(popUp);
    }
  });
}

export class RequestError extends Error {
  constructor(message) {
    super(message);
    this.name = "Error";
  }
}

export function setCookies(key, value) {
  return Cookies.set(key, value, { expires: 7 });
}

export function getCookies(key) {
  return Cookies.get(key);
}

export function addMessage(
  message,
  time = new Date(),
  name = "Я",
  sender = VALUES.COOKIES_EMAIL
) {
  const div = document.createElement("div");
  if (getCookies(VALUES.COOKIES_EMAIL) === sender) {
    div.classList.add(VALUES.CHAT_CLASS, VALUES.MY_MESSAGE, VALUES.SENT);
  } else {
    div.classList.add(VALUES.CHAT_CLASS, VALUES.FRIEND_MESSAGE, VALUES.SENT);
  }

  div.append(ELEMENTS.TEMPLATE.content.cloneNode(true));

  div.querySelector(".sender").textContent = `${name}: `;
  div.querySelector(".text").textContent = message;
  div.querySelector(".time").textContent = convertDate(time);

  ELEMENTS.CHAT_WINDOW.append(div);

  scrollLastMessage();
  statusMessage(div, VALUES.DELIVERED);
}

function scrollLastMessage() {
  ELEMENTS.SCROLL.scrollIntoView({
    behavior: "smooth",
  });
}

function statusMessage(item, status) {
  setTimeout(() => {
    item.classList.add(status);
  }, 3000);
}

export function checkInput(input, func) {
  try {
    if (input.value.trim()) {
      return func;
    } else {
      throw new Error("заполните поле ввода!");
    }
  } catch (error) {
    alert(`${error.name}: ${error.message}`);
  }
}

export function render() {
  const messages = document.querySelectorAll(".chat__container-message");
  messages.forEach((item) => item.remove());
}

export function renderHistoryMessages(data) {
  data.reverse();

  data.forEach((item) => {
    addMessage(item.text, item.createdAt, item.user.name, item.user.email);
  });
}

function convertDate(time) {
  return format(new Date(time), "HH:mm");
}
