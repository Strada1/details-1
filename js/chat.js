import { cookieGet, cookieSet } from "./cookie.js";
import {
  SETTINGS,
  AUTHORIZATION,
  CONFIRMATION,
  MY_MESSAGES,
  OTHER_MESSAGES,
} from "./const.js";

import {
  mailRequest,
  changeNameRequest,
  userDataRequest,
  messageDataRequest,
} from "./request.js";

import { format } from "date-fns";
import Cookies from "js-cookie";

AUTHORIZATION.AUTHORIZATION_FORM.addEventListener("submit", mailRequest);
CONFIRMATION.FORM_CONFIRMATION.addEventListener("submit", saveUserCode);
SETTINGS.CHANGE_NAME_FORM.addEventListener("submit", changeName);
MY_MESSAGES.MESSAGE_FORM.addEventListener("submit", renderMyMessage);

function renderMyMessage(event) {
  event.preventDefault();
  if (MY_MESSAGES.MESSAGE_INPUT.value === "") {
    alert("Введите сообщение!");
  } else {
    const spanMessage =
      MY_MESSAGES.TEMPLATE.content.querySelector(".my_message_view");
    spanMessage.textContent = MY_MESSAGES.MESSAGE_INPUT.value;
    const cloneMessages = MY_MESSAGES.TEMPLATE.content.cloneNode(true);
    MY_MESSAGES.MY_MESSAGES.append(cloneMessages);
    MY_MESSAGES.MY_MESSAGES.scrollTop = MY_MESSAGES.MY_MESSAGES.scrollHeight;
    MY_MESSAGES.MESSAGE_INPUT.value = "";
  }
}

export function renderOtherMessage(value, name, time) {
  const message = OTHER_MESSAGES.TEMPLATE.content.querySelector(
    ".other_message_view"
  );
  message.textContent = value;
  const timeMessage =
    OTHER_MESSAGES.TEMPLATE.content.querySelector(".time-message");
  timeMessage.textContent = format(new Date(time), "k:mm");
  OTHER_MESSAGES.COMPANION_NAME.textContent = name;

  const cloneMessages = OTHER_MESSAGES.TEMPLATE.content.cloneNode(true);
  OTHER_MESSAGES.MESSAGE_BLOCK.append(cloneMessages);
  OTHER_MESSAGES.MESSAGE_BLOCK.scrollTop =
    OTHER_MESSAGES.MESSAGE_BLOCK.scrollHeight;
}

function saveUserCode(event) {
  event.preventDefault();
  const codeInput = CONFIRMATION.CODE_INPUT.value;
  cookieSet("code", codeInput);
  const cookieCode = cookieGet("code");
  messageDataRequest(cookieCode);
}

function changeName(event) {
  event.preventDefault();
  const inputName = SETTINGS.CHANGE_NAME_INPUT.value;
  const cookieCode = cookieGet("code");
  changeNameRequest(inputName, cookieCode);
  SETTINGS.CHANGE_NAME_INPUT.value = "";
  userDataRequest(cookieCode);
}

export function changeNameMessage(message, name) {
  SETTINGS.MESSAGE_CHANGE_NAME.textContent = `${message} ${name}`;
}

export function deleteAccountHistory() {
  document.location.reload();
  Cookies.remove("code");
}
