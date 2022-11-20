export const ELEMENTS = {
  BUTTON_EXIT: document.querySelector(".btn-exit"),
  CLOSE_BUTTON: document.querySelectorAll(".close-window"),
  ALL_POPUP: document.querySelector(".allPopup"),
};

export const CHAT = {
  MAIN_BLOCK: document.querySelector(".main-block"),
  MESSAGE_FORM: document.querySelector(".message_form"),
  MESSAGE_INPUT: document.querySelector(".my_message-input"),
  MY_MESSAGES: document.querySelector(".message-window"),
  MY_MESSAGE_TEMPLATE: document.querySelector("#template_my_message"),
};

export const SETTINGS = {
  SETTINGS_WRAPPER: document.querySelector(".settings_wrapper"),
  BUTTON_SETTINGS: document.querySelector(".btn-settings"),
  BUTTON_CLOSE_SETTINGS: document.querySelector("#settings-btn"),
  CHANGE_NAME_FORM: document.querySelector(".settings-form"),
  CHANGE_NAME_INPUT: document.querySelector("#change-name"),
  MESSAGE_CHANGE_NAME: document.querySelector(".result-message"),
  USER_NAME_NOW_UI: document.querySelector(".user-name-now"),
};

export const AUTHORIZATION = {
  AUTHORIZATION_WRAPPER: document.querySelector(".authorization_wrapper"),
  BUTTON_CLOSE_AUTHORIZATION: document.querySelector("#authorization-btn"),
  AUTHORIZATION_FORM: document.querySelector(".authorization-form"),
  AUTHORIZATION_MESSAGE: document.querySelector(".message-authorization"),
  BUTTON_GET_CODE: document.querySelector("#btn-authorization"),
  INPUT_MAIL: document.querySelector("#input-for-mail"),
};

export const CONFIRMATION = {
  CODE_INPUT: document.querySelector("#input-for-code"),
  CONFIRMATION_WRAPPER: document.querySelector(".confirmation_wrapper"),
  BUTTON_CLOSE_CONFIRMATION: document.querySelector("#confirmation-btn"),
  FORM_CONFIRMATION: document.querySelector(".confirmation-form"),
};

export const USER = { name: "user" };
