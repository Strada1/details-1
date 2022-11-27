import { cookieGet, cookieSet } from "./cookie.js";
import {
  SETTINGS,
  AUTHORIZATION,
  CONFIRMATION,
  MESSAGES,
  ELEMENTS,
  SCROLL_RENDER_VALUES,
  HISTORY_RENDER_VALUES,
  COLOR_MESSAGE,
} from "./const.js";

import { mailRequest, changeNameRequest, messagesRequest } from "./request.js";

import { format } from "date-fns";
import Cookies from "js-cookie";

AUTHORIZATION.AUTHORIZATION_FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  mailRequest();
});
CONFIRMATION.FORM_CONFIRMATION.addEventListener("submit", saveUserCode);
SETTINGS.CHANGE_NAME_FORM.addEventListener("submit", changeName);
MESSAGES.MESSAGE_FORM.addEventListener("submit", sendMessage);

const socket = new WebSocket(`wss://edu.strada.one/websockets?${cookieGet("code")}`);
socket.onmessage = function (event) {
  RenderMessages(JSON.parse(event.data), "append");
  MESSAGES.MESSAGE_BLOCK.scrollIntoView(false);
};

function saveUserCode(event) {
  event.preventDefault();
  cookieSet("code", CONFIRMATION.CODE_INPUT.value);
  messagesRequest(cookieGet("code"));
}

function sendMessage(event) {
  event.preventDefault();
  socket.send(JSON.stringify({ text: MESSAGES.MESSAGE_INPUT.value }));
  MESSAGES.MESSAGE_INPUT.value = ""
}

function changeName(event) {
  event.preventDefault();
  changeNameRequest(SETTINGS.CHANGE_NAME_INPUT.value, cookieGet("code"));
}

export function changeNameMessage(message, name) {
  SETTINGS.MESSAGE_CHANGE_NAME.textContent = `${message} ${name}`;
}

export function deleteAccountHistory() {
  AUTHORIZATION.AUTHORIZATION_WRAPPER.style.display = "flex";
  Cookies.remove("code");
}

export function loadHistoryMessage(array) {
  for (let i = HISTORY_RENDER_VALUES.START; i < HISTORY_RENDER_VALUES.END; i++) {
    RenderMessages(array.messages[i], "prepend");
    MESSAGES.MESSAGE_BLOCK.scrollIntoView(false);
  }
  ELEMENTS.SCROLL_BLOCK.addEventListener("scroll", function () {
    if (ELEMENTS.SCROLL_BLOCK.scrollTop === 0) {
      scrollRender(array);
    }
  });
}

// наверное переборщила с объектами, зато не скажешь мол:
// "а что значит это число, а что это значит"

function scrollRender(array) {
  for (let i = SCROLL_RENDER_VALUES.START; i < SCROLL_RENDER_VALUES.END; i++) {
    RenderMessages(array.messages[i], "prepend");
    ELEMENTS.SCROLL_BLOCK.scrollTop = SCROLL_RENDER_VALUES.SCROLL_BACK;
  }
  SCROLL_RENDER_VALUES.START = SCROLL_RENDER_VALUES.END;
  SCROLL_RENDER_VALUES.END += SCROLL_RENDER_VALUES.INCREASE_NUMBER;
  if (SCROLL_RENDER_VALUES.START === SCROLL_RENDER_VALUES.ALL_MESSAGES) {
    alert("Все выгрузилось!");
  }
}

export function RenderMessages(data, method) {
  const authorMessage = MESSAGES.TEMPLATE.content.querySelector(
    ".other-name-message"
  );
  data.user.email === "sonalavrushina@gmail.com"
    ? (authorMessage.style.color = COLOR_MESSAGE.OTHER)
    : (authorMessage.style.color = COLOR_MESSAGE.MY);
  const message = MESSAGES.TEMPLATE.content.querySelector(
    ".other_message_view"
  );
  message.textContent = data.text;
  const timeMessage = MESSAGES.TEMPLATE.content.querySelector(".time-message");
  timeMessage.textContent = format(new Date(data.createdAt), "k:mm");
  authorMessage.textContent = data.user.name;
  const cloneMessages = MESSAGES.TEMPLATE.content.cloneNode(true);
  const methodInsert = method;

  if (methodInsert === "append") {
    MESSAGES.MESSAGE_BLOCK.append(cloneMessages);
  } else {
    MESSAGES.MESSAGE_BLOCK.prepend(cloneMessages);
  }
}