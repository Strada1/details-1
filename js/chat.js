import { cookieGet, cookieSet } from "./cookie.js";
import {
  SETTINGS,
  AUTHORIZATION,
  CONFIRMATION,
  MESSAGES,
  ELEMENTS,
} from "./const.js";

import { mailRequest, changeNameRequest, messagesRequest } from "./request.js";

import { format } from "date-fns";
import Cookies from "js-cookie";

AUTHORIZATION.AUTHORIZATION_FORM.addEventListener("submit", mailRequest);
CONFIRMATION.FORM_CONFIRMATION.addEventListener("submit", saveUserCode);
SETTINGS.CHANGE_NAME_FORM.addEventListener("submit", changeName);
MESSAGES.MESSAGE_FORM.addEventListener("submit", sendMessage);


export function RenderMessages(data, whereInsert) {
  const authorMessage = MESSAGES.TEMPLATE.content.querySelector(
    ".other-name-message"
  );
  if (data.user.email === "sonalavrushina@gmail.com") {
    authorMessage.style.color = "palevioletred";
  } else {
    authorMessage.style.color = "olive";
  }
  const message = MESSAGES.TEMPLATE.content.querySelector(
    ".other_message_view"
  );
  message.textContent = data.text;
  const timeMessage = MESSAGES.TEMPLATE.content.querySelector(".time-message");
  timeMessage.textContent = format(new Date(data.createdAt), "k:mm");
  authorMessage.textContent = data.user.name;
  const cloneMessages = MESSAGES.TEMPLATE.content.cloneNode(true);
  const methodInsert = whereInsert;

  if (methodInsert === "append") {
    MESSAGES.MESSAGE_BLOCK.append(cloneMessages);
  } else {
    MESSAGES.MESSAGE_BLOCK.prepend(cloneMessages);
    ELEMENTS.SCROLL_BLOCK.scrollTop === 300;
  }
}

function saveUserCode(event) {
  event.preventDefault();
  const codeInput = CONFIRMATION.CODE_INPUT.value;
  cookieSet("code", codeInput);
  const cookieCode = cookieGet("code");
  messagesRequest(cookieCode);
}

const cookieCode = cookieGet("code");
const socket = new WebSocket(`wss://edu.strada.one/websockets?${cookieCode}`);
socket.onmessage = function (event) {
  RenderMessages(JSON.parse(event.data), "append");
  MESSAGES.MESSAGE_BLOCK.scrollIntoView(false);
};

function sendMessage(event) {
  event.preventDefault();
  const message = MESSAGES.MESSAGE_INPUT.value;
  socket.send(JSON.stringify({ text: message }));
  MESSAGES.MESSAGE_INPUT.value = "";
}

function changeName(event) {
  event.preventDefault();
  const inputName = SETTINGS.CHANGE_NAME_INPUT.value;
  const cookieCode = cookieGet("code");
  changeNameRequest(inputName, cookieCode);
  SETTINGS.CHANGE_NAME_INPUT.value = "";
}

export function changeNameMessage(message, name) {
  SETTINGS.MESSAGE_CHANGE_NAME.textContent = `${message} ${name}`;
}

export function deleteAccountHistory() {
  document.location.reload();
  Cookies.remove("code");
}

export function loadHistoryMessage(array) {
  for (let i = 0; i < 20; i++) {
    RenderMessages(array.messages[i], "prepend");
    MESSAGES.MESSAGE_BLOCK.scrollIntoView(false);
  }
  ELEMENTS.SCROLL_BLOCK.addEventListener("scroll", function () {
    if (ELEMENTS.SCROLL_BLOCK.scrollTop === 0) {
      scrollRender(array);
    }
  });
}

let start = 20;
let end = 40;

//scrollTop = 600, чтобы во время рендера истории скрол спускался чуть вниз, 
//а не осталавался на месте.

function scrollRender(array) {
  for (let i = start; i < end; i++) {
    RenderMessages(array.messages[i], "prepend");
    ELEMENTS.SCROLL_BLOCK.scrollTop = 600;
  }
  start = end;
  end = end + 20;
  if (start === 300) {
    alert("Все выгрузилось!");
  }
}
