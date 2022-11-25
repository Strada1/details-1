export const ELEMENT = {
    POPUP: document.querySelector(".popup"),
    POPUP_CLOSE_BUTTONS: document.querySelectorAll(".popup__button"),
    SettingsButton: document.querySelector(".settingsButton"),
    BUTTONS: document.querySelectorAll(".chat__button"),
    tmpl: document.getElementById("tmpl"),
    inputMessage: document.getElementById("myForm"),
    messagesArea: document.querySelector(".messagesArea"),
    CONTAINER: document.querySelector(".container"),
    CHAT: document.querySelector(".box"),
    formMessage: document.querySelector(".chat__input"),
    INTERLOCUTOR_MESSAGE_TEMPLATE: document.getElementById("interlocutorMessageTemplate"),
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

export const User = {
    me: {
        name: "Kate",
        email: "krokhmall@ya.ru",
    }
}