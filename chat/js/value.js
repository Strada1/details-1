export const ELEMENTS = {
  body: document.querySelector("body"),
  formMessage: document.querySelector(".input-message"),
  tamplate: document.querySelector(".tpl-message"),
  textMessage: document.querySelector(".form-message"),
  listMessages: document.querySelector(".messages"),
  btnSendMail: document.querySelector(".input-mail"),
  formMail: document.querySelector(".form-mail"),
  btnSendCode: document.querySelector(".input-code"),
  formCode: document.querySelector(".form-code"),
  btnChangeName: document.querySelector(".input-name"),
  formName: document.querySelector(".form-name"),
};
export const SERVER = {
  getCode: "https://edu.strada.one/api/user",
  infoUser: " https://edu.strada.one/api/user/me",
  histMessages: "https://edu.strada.one/api/messages/",
};
