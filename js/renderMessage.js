import { format } from "date-fns";
import { ELEMENT } from "./const.js";
import Cookies from "js-cookie";
ELEMENT.SEND_MESSAGE.addEventListener("submit", getMessageInput);

const socket = new WebSocket(`wss://edu.strada.one/websockets?${Cookies.get("authorizationCod")}`);

function sendMessageWebSocet(message) {
	socket.send(JSON.stringify({ text: `${message}` }));
}

socket.onmessage = async function(event) {
  let myEmail = Cookies.get("email")
  let message = JSON.parse(event.data)
  let text = message.text
  let userEmail = message.user.email;
  let time = message.createdAt;
  let userName = message.user.name;
  time = format(new Date(time), "kk':'mm");
  if (userEmail == myEmail) {
    addMessageToDOM(text, time);
  } else {
    companionMessageToDOM(text, time, userName);
  }
};

function getMessageInput(event) {
  event.preventDefault()
  const message = ELEMENT.INPUT_MESSAGE.value;
  if (!message) {
    alert("Пустая строка, введите сообщение!");
  } else {
    sendMessageWebSocet(message)
    event.target.reset();
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
  // scrollLastElement();
}

export function companionMessageToDOM(message, time, name) {
  const userContent = document.createElement("div");
  userContent.append(ELEMENT.TEMPLATE_COMPANION.content.cloneNode(true));
  const contentMyMessage = userContent.querySelector(".text__his_SMS");
  const timeMyMessage = userContent.querySelector(".time__SMS");

  contentMyMessage.textContent = `${name}: ${message}`;
  timeMyMessage.textContent = time;

  ELEMENT.CHAT_CONTAINER.append(userContent);
  // scrollLastElement();
}

function scrollLastElement() {
  const ELEMENTS = document.querySelector(".chat__Container");
  const LAST_MESSAGE = ELEMENTS.lastElementChild;
  LAST_MESSAGE.scrollIntoView(false);
}


