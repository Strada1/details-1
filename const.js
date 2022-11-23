export const ELEMENT = {
	POPUP: document.querySelector(".popup"),
	POPUP_CLOSE_BUTTONS: document.querySelectorAll(".popup__button"),
	SETTING_BUTTON: document.getElementById("settingsButton"),
	EXIT_BUTTON: document.getElementById("exitButton"),
	MESSAGES: document.querySelector(".chat__main"),
	MESSAGE_TEMPLATE: document.getElementById("messageTemplate"),
	INTERLOCUTOR_MESSAGE_TEMPLATE: document.getElementById("interlocutorMessageTemplate"),
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
		CLOSE_BUTTON_ID: "closeSetting",
		INPUT_TYPE: "text"
	},
	AUTHORIZATION: {
		TITLE: "Авторизация",
		INPUT_TITLE: "Почта",
		BUTTON: "Получить код",
		FORM_ID: "popupAuthorization",
		CLOSE_BUTTON_ID: "closeAuthorization",
		INPUT_TYPE: "email"
	},
	CONFIRMATION: {
		TITLE: "Подтверждение",
		INPUT_TITLE: "Код",
		BUTTON: "Войти",
		FORM_ID: "popupConfirmation",
		CLOSE_BUTTON_ID: "closeConfirmation",
		INPUT_TYPE: "text"
	}
};

export const classes = {
	chatDisable: "chat__inner--disabled",
	messageFromInterlocutor: "message--interlocutor",
	messageSent: "message--sent"
};

export const URL = {
	USER: "https://edu.strada.one/api/user",
	USER_ME: "https://edu.strada.one/api/user/me",
	MESSAGES: "https://edu.strada.one/api/messages/",
	WEB_SOCKET: "ws://edu.strada.one/websockets?"
};

export const USER = {
	ME: {
		TOKEN: "",
		NAME: "",
		EMAIL: ""
	}
};