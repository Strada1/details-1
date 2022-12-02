import {
  SETTINGS,
  AUTHORIZATION,
  CONFIRMATION,
  MESSAGES,
  ELEMENTS,
  SCROLL_RENDER_VALUES,
  HISTORY_RENDER_VALUES,
  COLOR_MESSAGE,
  URL_STRADA,
} from "./const.js";

import { mailRequest, changeNameRequest, messagesRequest } from "./request.js";

import { format } from "date-fns";
import { cookieSet } from "./cookie.js";
import Cookies from "js-cookie";

AUTHORIZATION.AUTHORIZATION_FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  mailRequest(AUTHORIZATION.INPUT_MAIL.value, URL_STRADA.EMAIL);
});
CONFIRMATION.FORM_CONFIRMATION.addEventListener("submit", saveUserCode);
SETTINGS.CHANGE_NAME_FORM.addEventListener("submit", changeName);
MESSAGES.MESSAGE_FORM.addEventListener("submit", sendMessage);

const socket = new WebSocket(
  `wss://edu.strada.one/websockets?${ELEMENTS.CODE}`
);
socket.onmessage = function (event) {
  try{
    RenderMessages(JSON.parse(event.data), "append");
  } catch(error) {
    console.log(error.message)
  }
  MESSAGES.MESSAGE_BLOCK.scrollIntoView(false);
};

ELEMENTS.SMILE.addEventListener("click", function () {
  MESSAGES.MESSAGE_INPUT.value = "😔";
});

function saveUserCode(event) {
  event.preventDefault();
  cookieSet("code", CONFIRMATION.CODE_INPUT.value);
  messagesRequest(URL_STRADA.MESSAGES);
}

function sendMessage(event) {
  event.preventDefault();
  try{
    socket.send(JSON.stringify({ text: MESSAGES.MESSAGE_INPUT.value }));
    MESSAGES.MESSAGE_INPUT.value = "";
  } catch(error) {
    console.log(error.message)
  }
}

function changeName(event) {
  event.preventDefault();
  changeNameRequest(
    SETTINGS.CHANGE_NAME_INPUT.value,
    URL_STRADA.EMAIL
  );
}

export function changeNameMessage(message, name) {
  SETTINGS.MESSAGE_CHANGE_NAME.textContent = `${message} ${name}`;
}

export function deleteAccountHistory() {
  AUTHORIZATION.AUTHORIZATION_WRAPPER.style.display = "flex";
  Cookies.remove("code");
}

export function loadHistoryMessage(array) {
  for (
    let i = HISTORY_RENDER_VALUES.START;
    i < HISTORY_RENDER_VALUES.END;
    i++
  ) {
    RenderMessages(array.messages[i], "prepend");
    MESSAGES.MESSAGE_BLOCK.scrollIntoView(false);
  }
  ELEMENTS.SCROLL_BLOCK.addEventListener("scroll", function () {
    if (ELEMENTS.SCROLL_BLOCK.scrollTop === 0) {
      scrollRender(array);
    }
  });
}

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
  const authorMessage = MESSAGES.TEMPLATE.content.querySelector(".other-name-message");
  data.user.email === MESSAGES.MAIL
    ? (authorMessage.style.color = COLOR_MESSAGE.MY)
    : (authorMessage.style.color = COLOR_MESSAGE.OTHER);
  const message = MESSAGES.TEMPLATE.content.querySelector(".other_message_view");
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
