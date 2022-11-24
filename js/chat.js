import { cookieGet, cookieSet } from "./cookie.js";
import {
  SETTINGS,
  AUTHORIZATION,
  CONFIRMATION,
  MESSAGES,
} from "./const.js";

import {
  mailRequest,
  changeNameRequest,
  messageDataRequest,
} from "./request.js";

import { format } from "date-fns";
import Cookies from "js-cookie";

AUTHORIZATION.AUTHORIZATION_FORM.addEventListener("submit", mailRequest);
CONFIRMATION.FORM_CONFIRMATION.addEventListener("submit", saveUserCode);
SETTINGS.CHANGE_NAME_FORM.addEventListener("submit", changeName);


export function RenderMesLive(data) {
  MESSAGES.MESSAGE_INPUT.value = ''
  const authorMessage =  MESSAGES.TEMPLATE.content.querySelector('.other-name-message')
  if (data.user.email === 'sonalavrushina@gmail.com') {
    authorMessage.style.color = 'palevioletred'
  } else {
    authorMessage.style.color = 'olive'
  } 
  const message =  MESSAGES.TEMPLATE.content.querySelector(".other_message_view");
  message.textContent = data.text;

  const timeMessage =  MESSAGES.TEMPLATE.content.querySelector(".time-message");
  timeMessage.textContent = format(new Date(data.createdAt), "k:mm");
  authorMessage.textContent = data.user.name
  const cloneMessages =  MESSAGES.TEMPLATE.content.cloneNode(true);
  MESSAGES.MESSAGE_BLOCK.append(cloneMessages);
  MESSAGES.MESSAGE_BLOCK.scrollIntoView(false);
}



function saveUserCode(event) {
  event.preventDefault();
  const codeInput = CONFIRMATION.CODE_INPUT.value;
  cookieSet("code", codeInput);
  const cookieCode = cookieGet("code");
    messageDataRequest(cookieCode);
}

MESSAGES.MESSAGE_FORM.addEventListener("submit", sendMessage);

const cookieCode = cookieGet("code");
const socket = new WebSocket(`wss://edu.strada.one/websockets?${cookieCode}`);
socket.onmessage = function (event) {
  RenderMesLive(JSON.parse(event.data));
};
socket.onopen = function() {
  alert("[open] Соединение установлено");
}

function sendMessage(event) {
  event.preventDefault();
  const message =  MESSAGES.MESSAGE_INPUT.value;
  socket.send(JSON.stringify({ text: message }));
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

export function renderHistory(array) {
  array.messages.reverse()
  array.messages.forEach((item) => {
    RenderMesLive(item);
  });
}