 export const ELEMENTS = {
    modalButtonName: document.querySelector(".modal-name"),
    modalName: document.querySelector("#modal-name"),
    modals: document.querySelectorAll("[data-modal]"),
    buttonsClose: document.querySelectorAll("[data-modal-close]"),
    modalWindow: document.querySelectorAll(".modal__window"),
    textArea: document.querySelector(".input-message"),
    contentWindow: document.querySelector(".content"),
    contentWrapper: document.querySelector(".content__wrapper"),
    messageForm: document.querySelector(".texting-area__wrapper"),
    scrollDown: document.querySelector(".scroll-down"),
    modalAuthorization: document.querySelector("#modal-authorization"),
    modalCode: document.querySelector("#modal-code"),
    getCodeButton: document.querySelector("#modal-authorization  .button"),
    authorizationForm: document.querySelector("#modal-authorization .input-data"),
    emailInput: document.querySelector("#modal-authorization .modal__input"),
    codeForm: document.querySelector("#modal-code .input-data"),
    code: document.querySelector("#modal-code .modal__input"),
    nameForm: document.querySelector("#modal-name .input-data"),
    name: document.querySelector("#modal-name .modal__input"),
    URL: "https://edu.strada.one/api",
    hiddenClass: "hidden",
    closestModal: "[data-modal]",
    codeWarning: document.querySelector("#modal-code .modal__warning"),
    nameWarning: document.querySelector("#modal-name .modal__warning"),
    myMessages: ["message", "message--user-me", "message--sent"],
    interlocutorMessages: ["message", "message--interlocutor"],
  };
  
 export const ELEM_HEIGHTS = {
    windowHeight: document.documentElement.clientHeight,
    headerHeight: document.querySelector(".header").clientHeight,
    messageMargin: 15,
    inputMessageHeight: 50,
    inputMessagePadding: 42.5,
  };

  export const MESSAGE = {
    step: 20,
  }
  
 export const METHOD = {
    POST: "POST",
    PATCH: "PATCH",
    GET: "GET",
  };