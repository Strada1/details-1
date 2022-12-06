import { getCookies } from "./view";

interface ELEMENTS {
  DOC: Node | null;
  POP_UP: NodeListOf<Element> | null;
  POP_UP_CLOSE: NodeListOf<Element> | null;
  SETTINGS: Element | null;
  NAME_FORM: Element | null;
  NAME_INPUT: Element | null;
  CHAT: Element | null;
  CHAT_FORM: Element | null;
  CHAT_INPUT: Element | null;
  CHAT_WINDOW: Element | null;
  SCROLL: Element | null;
  TEMPLATE: HTMLTemplateElement | null;
  AUTH_FORM: Element | null;
  EMAIL_INPUT: Element | null;
  CONFIRM_FORM: Element | null;
  CODE_INPUT: Element | null;
  BODY: Element | null;
}

export const ELEMENTS = {
  DOC: document,
  POP_UP: document.querySelectorAll(".pop-up__content"),
  POP_UP_CLOSE: document.querySelectorAll(".close"),
  SETTINGS: document.querySelector(".chat__buttons-settings"),
  NAME_FORM: document.querySelector(".pop-up__content-input"),
  NAME_INPUT: document.querySelector(".pop-up__content-input-field"),
  CHAT: document.querySelector(".chat__container"),
  CHAT_FORM: document.querySelector(".chat__input"),
  CHAT_INPUT: document.querySelector(".chat__input-field"),
  CHAT_WINDOW: document.querySelector(".chat__container-window"),
  SCROLL: document.querySelector(".chat__container-scroll"),
  TEMPLATE: document.querySelector(".tmpl"),
  AUTH_FORM: document.querySelector(".pop-up__content-input-authorization"),
  EMAIL_INPUT: document.querySelector(".field-authorization"),
  CONFIRM_FORM: document.querySelector(".pop-up__content-input-confirmation"),
  CODE_INPUT: document.querySelector(".field-confirmation"),
  BODY: document.querySelector("body"),
};

interface POP_UP {
  SETTINGS: string;
  AUTHORIZATION: string;
  CONFIRMATION: string;
}

export const POP_UP = {
  SETTINGS: "Настройки",
  AUTHORIZATION: "Авторизация",
  CONFIRMATION: "Подтверждение",
};

interface VALUES {
  SELECTED: string;
  MY_MESSAGE: string;
  FRIEND_MESSAGE: string;
  SENT: string;
  DELIVERED: string;
  CHAT_CLASS: string;
  CHAT_CLASSNAME: string;
  COOKIES_NAME: string;
  COOKIES_EMAIL: string;
  APPEND: string;
  PREPEND: string;
  CLASS: string;
  ATTRIBUTE: string;
  HIDDEN: string;
  TRUE: string;
  NAME_ERROR: string;
  TIME_TEMPLATE: string;
  HEADER: string;
  HEADER_CLASSNAME: string;
  HEADER_ATTRIBUTE: number;
  STATUS_MESSAGE: number;
  DIV: string;
  SENDER: string;
  TEXT: string;
  TIME: string;
}

export const VALUES = {
  SELECTED: "selected",
  MY_MESSAGE: "my-message",
  FRIEND_MESSAGE: "friend-message",
  SENT: "sent",
  DELIVERED: "delivered",
  CHAT_CLASS: "chat__container-message",
  CHAT_CLASSNAME: ".chat__container-message",
  COOKIES_NAME: "user",
  COOKIES_EMAIL: "userEmail",
  APPEND: "append",
  PREPEND: "prepend",
  CLASS: "class",
  ATTRIBUTE: "attribute",
  HIDDEN: "hidden",
  TRUE: "true",
  NAME_ERROR: "Error",
  TIME_TEMPLATE: "HH:mm",
  HEADER: "h1",
  HEADER_CLASSNAME: "header",
  HEADER_ATTRIBUTE: 5000,
  STATUS_MESSAGE: 3000,
  DIV: "div",
  SENDER: ".sender",
  TEXT: ".text",
  TIME: ".time",
};

interface METHOD {
  POST: string;
  GET: string;
  PATCH: string;
}

export const METHOD = {
  POST: "POST",
  GET: "GET",
  PATCH: "PATCH",
};

interface SERVER {
  URL: string;
  URL_USER: string;
  URL_MESSAGES: string;
  WEB_SOCKET: string;
  HEADER_CONTENT: string;
  AUTHORIZATION_CONTENT: string;
}

export const SERVER = {
  URL: "https://edu.strada.one/api/user",
  URL_USER: "https://edu.strada.one/api/user/me",
  URL_MESSAGES: "https://edu.strada.one/api/messages/",
  WEB_SOCKET: "wss://edu.strada.one/websockets?",
  HEADER_CONTENT: "application/json;charset=utf-8",
  AUTHORIZATION_CONTENT: `Bearer ${getCookies(VALUES.COOKIES_NAME)}`,
};

interface COUNTER {
  START: number;
  END: number;
  COUNT: number;
  MAX_MESSAGES: number;
}

export const COUNTER = {
  START: 0,
  END: 20,
  COUNT: 20,
  MAX_MESSAGES: 300,
};
