import { cookieGet } from "./cookie";
export const ELEMENTS = {
    BUTTON_EXIT: document.querySelector(".btn-exit"),
    SCROLL_BLOCK: document.querySelector(".message-window"),
    SMILE: document.querySelector(".best-smile-ever"),
    CODE: cookieGet("code"),
};
export const MESSAGES = {
    MESSAGE_FORM: document.querySelector(".message_form"),
    MESSAGE_INPUT: document.querySelector(".my_message-input"),
    TEMPLATE: document.querySelector("#template_other_message"),
    MESSAGE_BLOCK: document.querySelector(".other_message-block"),
    TIME: document.querySelector(".time_message"),
    MAIL: "sonalavrushina@gmail.com",
};
export const SETTINGS = {
    SETTINGS_WRAPPER: document.querySelector(".settings_wrapper"),
    BUTTON_SETTINGS: document.querySelector(".btn-settings"),
    BUTTON_CLOSE_SETTINGS: document.querySelector("#settings-btn"),
    CHANGE_NAME_FORM: document.querySelector(".settings-form"),
    CHANGE_NAME_INPUT: document.querySelector("#change-name"),
    MESSAGE_CHANGE_NAME: document.querySelector(".result-message"),
};
export const AUTHORIZATION = {
    AUTHORIZATION_WRAPPER: document.querySelector(".authorization_wrapper"),
    AUTHORIZATION_FORM: document.querySelector(".authorization-form"),
    AUTHORIZATION_MESSAGE: document.querySelector(".message-authorization"),
    BUTTONS_GET_CODE: document.querySelectorAll(".btn-get-code"),
    INPUT_MAIL: document.querySelector("#input-for-mail"),
};
export const CONFIRMATION = {
    CODE_INPUT: document.querySelector("#input-for-code"),
    CONFIRMATION_WRAPPER: document.querySelector(".confirmation_wrapper"),
    FORM_CONFIRMATION: document.querySelector(".confirmation-form"),
};
export const ANSWER_REQUEST = {
    ERROR_REQUEST: "Произошла ошибка!",
    ERROR_CHANGE_NAME: "Ошибка! Имя не сменилось на:",
    GET_CODE_SUCCES: "Код на почте!",
    CHANGE_NAME_SUCCES: "Ваше имя успешно сменилось на:",
};
export const SCROLL_RENDER_VALUES = {
    SCROLL_BACK: 600,
    START: 20,
    END: 40,
    INCREASE_NUMBER: 20,
    ALL_MESSAGES: 300,
};
export const HISTORY_RENDER_VALUES = {
    START: 0,
    END: 20,
};
export const URL_STRADA = {
    EMAIL: "https://edu.strada.one/api/user",
    ME: "https://edu.strada.one/api/user/me",
    MESSAGES: "https://edu.strada.one/api/messages/",
};
export const COLOR_MESSAGE = {
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
export const REQUEST_METHOD = {
    POST: "POST",
    PATCH: "PATCH",
    GET: "GET",
};
