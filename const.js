export const ELEMENTS = {
  MESSAGE_FORM: document.querySelector(".form-text"),
  MESSAGE_INPUT: document.querySelector("#text-message"),
  TEMPLATE_MY_MSG: document.querySelector("#my-msg"),
  TEMPLATE_FRIEND_MSG: document.querySelector("#friend-msg"),
  CHAT: document.querySelector(".chat"),
  EMAIL_FORM: document.querySelector(".popup_auth"),
  EMAIL_INPUT: document.querySelector("#email-input"),
  KOD_FORM: document.querySelector(".popup_kod"),
  KOD_INPUT: document.querySelector("#kod-input"),
  SETTING_BUTTON: document.querySelector("#settings"),
  SETTING_FORM: document.querySelector(".popup"),
  SETTING_INPUT: document.querySelector("#name-input"),
  SETTING_NAME: document.querySelector("#name"),
  TIME: document.querySelector("#time"),
  EXIT_BUTTON: document.querySelector("#exit"),
};

export const STRADA_URL = new URL("https://edu.strada.one/api/user");
export const USER_URL = new URL("/api/user/me", STRADA_URL);
export const HISTORY_URL = new URL("/api/messages", STRADA_URL);
export const MY_EMAIL = "timofiei.tarasov@gmail.com";
