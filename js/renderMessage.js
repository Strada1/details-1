// import { format } from "date-fns";
import { ELEMENT } from "./const.js";
import {getDataUser} from "./authorization.js"

// ELEMENT.SEND_MESSAGE.addEventListener("submit", getMessageInput);
ELEMENT.SEND_MESSAGE.addEventListener("submit", sendMessage);
console.log('ELEMENT.SEND_MESSAGE: ', ELEMENT.SEND_MESSAGE);
async function getToken() {
  let token = await getDataUser()
  token = token.token
  return token
}

const socket = new WebSocket(`ws://edu.strada.one/websockets?${ getToken()}`);

function sendMessage() {
  alert("start")
  const message = ELEMENT.INPUT_MESSAGE.value;
  socket.send(JSON.stringify({ 
      text: message,
  }));   
};

// function sendMessageWebSocet(event) {
//   event.preventDefault();
//   alert("start")
//   const messageee = ELEMENT.INPUT_MESSAGE.value;
//   console.log('messageee: ', messageee);
// 	socket.send(JSON.stringify({ text: `${messageee}` }));
// }

socket.onmessage = function(event) { console.log("event.data: ", event.data) };

function nowTime() {
  // const timeNow = format(new Date(), "kk':'mm");
  return timeNow;
}

function getMessageInput(event) {
  event.preventDefault();
  const message = ELEMENT.INPUT_MESSAGE.value;

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


