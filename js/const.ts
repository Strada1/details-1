import { cookieGet } from "./cookie";

export const ELEMENTS = {
  BUTTON_EXIT: <HTMLButtonElement>document.querySelector(".btn-exit"),
  SCROLL_BLOCK: <HTMLDivElement>document.querySelector(".message-window"),
  SMILE: <HTMLButtonElement>document.querySelector(".best-smile-ever"),
  CODE: cookieGet("code"),
};


export const MESSAGES = {
  MESSAGE_FORM: <HTMLFormElement>document.querySelector(".message_form"),
  MESSAGE_INPUT: <HTMLInputElement>document.querySelector(".my_message-input"),
  TEMPLATE: <HTMLTemplateElement>document.querySelector("#template_other_message"),
  MESSAGE_BLOCK: <HTMLDivElement>document.querySelector(".other_message-block"),
  TIME: <HTMLParagraphElement>document.querySelector(".time_message"),
  MAIL: "sonalavrushina@gmail.com",
};

export const SETTINGS = {
  SETTINGS_WRAPPER: <HTMLDivElement>document.querySelector(".settings_wrapper"),
  BUTTON_SETTINGS: <HTMLButtonElement>document.querySelector(".btn-settings"),
  BUTTON_CLOSE_SETTINGS: <HTMLButtonElement>document.querySelector("#settings-btn"),
  CHANGE_NAME_FORM: <HTMLFormElement>document.querySelector(".settings-form"),
  CHANGE_NAME_INPUT: <HTMLInputElement>document.querySelector("#change-name"),
  MESSAGE_CHANGE_NAME: <HTMLParagraphElement>document.querySelector(".result-message"),
};

export const AUTHORIZATION = {
  AUTHORIZATION_WRAPPER: <HTMLDivElement>document.querySelector(".authorization_wrapper"),
  AUTHORIZATION_FORM: <HTMLFormElement>document.querySelector(".authorization-form"),
  AUTHORIZATION_MESSAGE: <HTMLParagraphElement>document.querySelector(".message-authorization"),
  BUTTONS_GET_CODE: document.querySelectorAll(".btn-get-code"),
  INPUT_MAIL: <HTMLInputElement>document.querySelector("#input-for-mail"),
};

export const CONFIRMATION = {
  CODE_INPUT: <HTMLInputElement>document.querySelector("#input-for-code"),
  CONFIRMATION_WRAPPER: <HTMLDivElement>document.querySelector(".confirmation_wrapper"),
  FORM_CONFIRMATION: <HTMLFormElement>document.querySelector(".confirmation-form"),
};

interface TYPE_ANSWER_REQUEST {
  ERROR_REQUEST: string,
  ERROR_CHANGE_NAME: string,
  GET_CODE_SUCCES: string,
  CHANGE_NAME_SUCCES: string,
}

export const ANSWER_REQUEST:TYPE_ANSWER_REQUEST = {
  ERROR_REQUEST: "Произошла ошибка!",
  ERROR_CHANGE_NAME: "Ошибка! Имя не сменилось на:",
  GET_CODE_SUCCES: "Код на почте!",
  CHANGE_NAME_SUCCES: "Ваше имя успешно сменилось на:",
};

interface TYPE_SCROLL_RENDER_VALUES {
  SCROLL_BACK: number,
  START: number,
  END: number,
  INCREASE_NUMBER: number,
  ALL_MESSAGES: number,
}

export const SCROLL_RENDER_VALUES:TYPE_SCROLL_RENDER_VALUES = {
  SCROLL_BACK: 600,
  START: 20,
  END: 40,
  INCREASE_NUMBER: 20,
  ALL_MESSAGES: 300,
};

interface TYPE_HISTORY_RENDER_VALUES {
    START: number,
    END: number,
}

export const HISTORY_RENDER_VALUES:TYPE_HISTORY_RENDER_VALUES = {
  START: 0,
  END: 20,
};

interface TYPE_URL_STRADA {
  EMAIL: string
  ME: string,
  MESSAGES: string,  
}

export const URL_STRADA:TYPE_URL_STRADA = {
  EMAIL: "https://edu.strada.one/api/user",
  ME: "https://edu.strada.one/api/user/me",
  MESSAGES: "https://edu.strada.one/api/messages/",
};

interface TYPE_COLOR_MESSAGE {
    MY: string,
    OTHER: string,
}

export const COLOR_MESSAGE:TYPE_COLOR_MESSAGE = {
  MY: "palevioletred",
  OTHER: "olive",
};

export const REQUEST_HEADERS = {
  DEFAULT_HEADERS: {
    "Content-Type": "application/json; charset=utf-8",
  },
  AUTHORIZATION_HEADERS: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: `Bearer ${ELEMENTS.CODE}`,
  },
};

interface TYPE_REQUEST_METHOD {
    POST: string,
    PATCH: string,
    GET: string, 
}

export const REQUEST_METHOD:TYPE_REQUEST_METHOD = {
  POST: "POST",
  PATCH: "PATCH",
  GET: "GET",
};