export const CLASS_NAME = {
  SETTINGS: ".settings",
  authorization: ".authorization",
  chatForm: ".chat__form",
};

export const ELEMENT = {
  SETTINGS: document.querySelector(CLASS_NAME.SETTINGS),
  AUTHORIZATION: document.querySelector(CLASS_NAME.authorization),
  SEND_MESSAGE: document.querySelector(".chat__form"),
  INPUT_MESSAGE: document.querySelector(".input__message"),
  TEXT_MESSAGE: document.querySelector(".text__my__SMS"),
  CHAT_CONTAINER: document.querySelector(".chat__Container"),
  TEMPLATE: document.getElementById("template"),
  TEMPLATE_COMPANION: document.getElementById("templateCompanion"),
  SCROl: document.querySelector(".container-scroll"),
};

export const POPUP = {
  GET_COD: document.querySelector(".popup__authorization__button"),
  INPUT: document.querySelector(".popup__authorization__input"),
  CLOSE_SETTINGS: document.querySelector(".popup__setings__button__exit"),
  INPUT_NAME: document.querySelector(".popup__setings__input"),
  SAVE_NAME: document.querySelector(".popup__setings__button"),
  CLOSE_AUTHORIZATION: document.querySelector(
    ".popup__authorization__button__exit"
  ),
  SETTINGS: document.getElementById("popupSetings"),
  AUTHORIZATION: document.getElementById("popupAuthorization"),
  CONFIRMATION: document.getElementById("popupConfirmation"),
  CLOSE_CONFIRMATION: document.querySelector(
    ".popup__confirmation__button__exit"
  ),
  LOGIN: document.querySelector(".popup__confirmation__button"),
  INPUT_COD: document.querySelector(".popup__confirmation__input"),
};

export const URL = {
  HISTORY_SERVER: "https://edu.strada.one/api/messages/",
  SOCET: "ws://edu.strada.one/websockets?"
};

export const MESSAGE = {};
