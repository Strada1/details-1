import { cookieGet, cookieSet } from "./cookie.js";
import {
  SETTINGS,
  ELEMENTS,
  AUTHORIZATION,
  CONFIRMATION,
  CHAT,
} from "./const.js";
import { closePopups } from "./popup.js";
import { mailRequest, changeNameRequest, userDataRequest } from "./request.js";
import { USER } from "./const.js";

CHAT.MESSAGE_FORM.addEventListener("submit", renderMyMessage);

// SETTINGS.BUTTON_SETTINGS.addEventListener("click", function () {
//   closePopups(SETTINGS.SETTINGS_WRAPPER);
// });

// SETTINGS.BUTTON_CLOSE_SETTINGS.addEventListener("click", function () {
//   closePopups(SETTINGS.SETTINGS_WRAPPER);
// });

// AUTHORIZATION.BUTTON_CLOSE_AUTHORIZATION.addEventListener("click", function () {
//   closePopups(AUTHORIZATION.AUTHORIZATION_WRAPPER);
// });

// CONFIRMATION.BUTTON_CLOSE_CONFIRMATION.addEventListener("click", function () {
//   closePopups(CONFIRMATION.CONFIRMATION_WRAPPER);
// });

// ELEMENTS.BUTTON_EXIT.addEventListener("click", function () {
//   closePopups(AUTHORIZATION.AUTHORIZATION_WRAPPER);
// });

// AUTHORIZATION.BUTTON_GET_CODE.addEventListener("click", function () {
//   closePopups(CONFIRMATION.CONFIRMATION_WRAPPER);
// });

AUTHORIZATION.AUTHORIZATION_FORM.addEventListener("submit", mailRequest);

CONFIRMATION.FORM_CONFIRMATION.addEventListener("submit", saveUserCode);

SETTINGS.CHANGE_NAME_FORM.addEventListener("submit", changeName);

function renderMyMessage(event) {
  event.preventDefault();
  if (CHAT.MESSAGE_INPUT.value === "") {
    alert("Введите сообщение!");
  } else {
    const spanMessage =
      CHAT.MY_MESSAGE_TEMPLATE.content.querySelector(".my_message_view");
    spanMessage.textContent = CHAT.MESSAGE_INPUT.value;
    const cloneMessages = CHAT.MY_MESSAGE_TEMPLATE.content.cloneNode(true);
    CHAT.MY_MESSAGES.append(cloneMessages);
    CHAT.MY_MESSAGES.scrollTop = CHAT.MY_MESSAGES.scrollHeight;
    CHAT.MESSAGE_INPUT.value = "";
  }
}

function saveUserCode(event) {
  event.preventDefault();
  const codeInput = CONFIRMATION.CODE_INPUT.value;
  cookieSet("code", codeInput);
}

function changeName(event) {
  event.preventDefault();
  const inputName = SETTINGS.CHANGE_NAME_INPUT.value;
  const cookieCode = cookieGet("code");
  changeNameRequest(inputName, cookieCode);
  SETTINGS.CHANGE_NAME_INPUT.value = "";
  userDataRequest(cookieCode);
}

export function changeNameMessage(message) {
  SETTINGS.MESSAGE_CHANGE_NAME.textContent = message;
  SETTINGS.USER_NAME_NOW_UI.textContent = `Ваше имя:  ${USER.name}`;
}
