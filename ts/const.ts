interface elements {
  modalButtonName: HTMLButtonElement | null;
  modalName: Element | null;
  modals: NodeList;
  modalWindow: NodeList;
  modalAuthorization: Element | null;
  modalCode: Element | null;
  closestModal: string;
  buttonsClose: NodeList;
  buttonExit: HTMLButtonElement | null;
  textArea: HTMLTextAreaElement | null;
  contentWindow: HTMLElement | null;
  contentWrapper: Element | null;
  messageForm: HTMLFormElement | null;
  scrollDown: HTMLElement | null;
  getCodeButton: Element | null;
  authorizationForm: HTMLFormElement | null;
  emailInput: HTMLInputElement | null;
  codeForm: HTMLFormElement | null;
  code: HTMLInputElement | null;
  nameForm: HTMLFormElement | null;
  name: HTMLInputElement | null;
  hiddenClass: string;
  codeWarning: Element | null;
  nameWarning: Element | null;
  myMessages: string[];
  interlocutorMessages: string[];
  URL: string;
  authorizationWord: string;
  template: HTMLTemplateElement | null;
}

export const ELEMENTS: elements = {
  modalButtonName: document.querySelector(".modal-name"),
  modalName: document.querySelector("#modal-name"),
  modals: document.querySelectorAll("[data-modal]"),
  modalWindow: document.querySelectorAll(".modal__window"),
  modalAuthorization: document.querySelector("#modal-authorization"),
  modalCode: document.querySelector("#modal-code"),
  closestModal: "[data-modal]",
  buttonsClose: document.querySelectorAll("[data-modal-close]"),
  buttonExit: document.querySelector(".inline-button-exit"),
  textArea: document.querySelector(".input-message"),
  contentWindow: document.querySelector(".content"),
  contentWrapper: document.querySelector(".content__wrapper"),
  messageForm: document.querySelector(".texting-area__wrapper"),
  scrollDown: document.querySelector(".scroll-down"),
  getCodeButton: document.querySelector("#modal-authorization  .button"),
  authorizationForm: document.querySelector("#modal-authorization .input-data"),
  emailInput: document.querySelector("#modal-authorization .modal__input"),
  codeForm: document.querySelector("#modal-code .input-data"),
  code: document.querySelector("#modal-code .modal__input"),
  nameForm: document.querySelector("#modal-name .input-data"),
  name: document.querySelector("#modal-name .modal__input"),
  hiddenClass: "hidden",
  codeWarning: document.querySelector("#modal-code .modal__warning"),
  nameWarning: document.querySelector("#modal-name .modal__warning"),
  myMessages: ["message", "message--user-me", "message--sent"],
  interlocutorMessages: ["message", "message--interlocutor"],
  URL: "https://edu.strada.one/api",
  authorizationWord: "Bearer",
  template: document.querySelector("#tmpl"),
};

interface elementsHeights {
  windowHeight: number;
  headerHeight: number;
  inputMessageHeight: number;
  messageMargin: number;
  inputMessagePadding: number;
}

export const ELEM_HEIGHTS: elementsHeights = {
  windowHeight: document.documentElement.clientHeight,
  headerHeight: (document.querySelector(".header") as HTMLElement).clientHeight,
  inputMessageHeight: 50,
  messageMargin: 15,
  inputMessagePadding: 42.5,
};

interface message {
  step: number;
}
export const MESSAGE: message = {
  step: 20,
};

interface requestMethod {
  POST: string;
  PATCH: string;
  GET: string;
}
export const METHOD: requestMethod = {
  POST: "POST",
  PATCH: "PATCH",
  GET: "GET",
};
