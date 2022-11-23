console.log("start render meseged ор ")
getHistory()
import { format } from "date-fns";
import { ELEMENT } from "./const.js";
import Cookies from "js-cookie";
import {getHistory} from "./loadingHistory.js"

ELEMENT.SEND_MESSAGE.addEventListener("submit", getMessageInput);

const socket = new WebSocket(`ws://edu.strada.one/websockets?${Cookies.get("authorizationCod")}`);
console.log('socket: ', socket);

function sendMessageWebSocet(message) {
  console.log('message WebSocet: ', message);
	socket.send(JSON.stringify({ text: `${message}` }));
}

socket.onmessage = function(event) { getHistory() };

function nowTime() {
  const timeNow = format(new Date(), "kk':'mm");
  return timeNow;
}

function getMessageInput(event) {
  const message = ELEMENT.INPUT_MESSAGE.value;
  console.log('message: ', message);

  if (!message) {
    alert("Пустая строка, введите сообщение!");
  } else {
    sendMessageWebSocet(message)
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


