export const ELEMENT = {
    POPUP: document.querySelector(".popup"),
    POPUP_CLOSE_BUTTONS: document.querySelectorAll(".popup__button"),
    SETTING_BUTTON: document.getElementById("settingsButton"),
    BUTTONS: document.querySelectorAll(".chat__button"),
    MESSAGES: document.querySelector(".chat__main"),
    TEMPLATE: document.getElementById("template"),
    SEND_MESSAGE_FORM: document.getElementById("sendMessageForm"),
    MESSAGE_INPUT: document.getElementById("sendMessageForm").querySelector(".chat__input"),
    CONTAINER: document.querySelector(".container"),
    CHAT: document.querySelector(".chat__inner")
};

export const POPUP = {
    SETTINGS: {
        TITLE: "Настройки",
        INPUT_TITLE: "Имя в чате",
        BUTTON: "->",
        FORM_ID: "popupSettings",
        CLOSE_BUTTON_ID: "closeSetting"
    },
    AUTHORIZATION: {
        TITLE: "Авторизация",
        INPUT_TITLE: "Почта",
        BUTTON: "Получить код",
        FORM_ID: "popupAuthorization",
        CLOSE_BUTTON_ID: "closeAuthorization"
    },
    CONFIRMATION: {
        TITLE: "Подтверждение",
        INPUT_TITLE: "Код",
        BUTTON: "Войти",
        FORM_ID: "popupConfirmation",
        CLOSE_BUTTON_ID: "closeConfirmation"
    }
}