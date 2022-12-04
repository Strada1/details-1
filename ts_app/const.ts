export const ELEMENTS: {
  MESSAGE_FORM: HTMLFormElement | null;
  MESSAGE_INPUT: HTMLInputElement | null;
  TEMPLATE_MY_MSG: HTMLTemplateElement | null;
  TEMPLATE_FRIEND_MSG: HTMLTemplateElement | null;
  CHAT: HTMLDivElement | null;
  EMAIL_FORM: HTMLFormElement | null;
  EMAIL_INPUT: HTMLInputElement | null;
  CODE_FORM: HTMLButtonElement | null;
  CODE_INPUT: HTMLInputElement | null;
  SETTING_BUTTON: HTMLButtonElement | null;
  SETTING_FORM: HTMLFormElement | null;
  SETTING_INPUT: HTMLInputElement | null;
  SETTING_NAME: HTMLSpanElement | null;
  EXIT_BUTTON: HTMLButtonElement | null;
} = {
  MESSAGE_FORM: document.querySelector(".form-text"),
  MESSAGE_INPUT: <HTMLInputElement>document.querySelector("#text-message"),
  TEMPLATE_MY_MSG: document.querySelector("#my-msg"),
  TEMPLATE_FRIEND_MSG: document.querySelector("#friend-msg"),
  CHAT: document.querySelector(".chat"),
  EMAIL_FORM: document.querySelector(".popup_auth"),
  EMAIL_INPUT: document.querySelector("#email-input"),
  CODE_FORM: document.querySelector(".popup_code"),
  CODE_INPUT: document.querySelector("#code-input"),
  SETTING_BUTTON: document.querySelector("#settings"),
  SETTING_FORM: document.querySelector(".popup"),
  SETTING_INPUT: document.querySelector("#name-input"),
  SETTING_NAME: document.querySelector("#name"),
  EXIT_BUTTON: document.querySelector("#exit"),
};

export const STRADA_URL: URL = new URL("https://edu.strada.one/api/user");
export const USER_URL: URL = new URL("/api/user/me", STRADA_URL);
export const HISTORY_URL: URL = new URL("/api/messages", STRADA_URL);
export const MY_EMAIL: string = "timofiei.tarasov@gmail.com";
export const NEW: string = "NEW"
