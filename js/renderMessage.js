import { format } from "date-fns";
import { ELEMENT, CLASS_NAME } from "./const.js";

ELEMENT.SEND_MESSAGE.addEventListener("submit", getMessageInput);

function nowTime() {
  const timeNow = format(new Date(), "kk':'mm");
  return timeNow;
}

function getMessageInput(event) {
  event.preventDefault();
  const message = ELEMENT.INPUT_MESSAGE.value;

  if (!message) {
    alert("Пустая строка, введите сообщение!");
  } else {
    event.target.reset();
    const time = nowTime();
    addMessageToDOM(message, time);
  }
}

export function addMessageToDOM(message, time) {
  const userContent = document.createElement("div");
  userContent.append(ELEMENT.TEMPLATE.content.cloneNode(true));
  const contentMyMessage = userContent.querySelector(".text__my__SMS");
  const timeMyMessage = userContent.querySelector(".time__SMS");

  contentMyMessage.textContent = `${message}`;
  timeMyMessage.textContent = time;

  ELEMENT.CHAT_CONTAINER.append(userContent);
  scrollLastElement();
}

export function companionMessageToDOM(message, time, name) {
  const userContent = document.createElement("div");
  userContent.append(ELEMENT.TEMPLATE_COMPANION.content.cloneNode(true));
  const contentMyMessage = userContent.querySelector(".text__his_SMS");
  const timeMyMessage = userContent.querySelector(".time__SMS");

  contentMyMessage.textContent = `${name}: ${message}`;
  timeMyMessage.textContent = time;

  ELEMENT.CHAT_CONTAINER.append(userContent);
  scrollLastElement();
}

function scrollLastElement() {
  const ELEMENTS = document.querySelector(".chat__Container");
  const LAST_MESSAGE = ELEMENTS.lastElementChild;
  LAST_MESSAGE.scrollIntoView(false);
}
