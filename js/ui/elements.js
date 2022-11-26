export const POPUPS = {
	REGISTRATION: document.querySelector('#registration-popup'),
	AUTHORIZATION: document.querySelector('#authorization-popup'),
	SETTINGS: {
		POPUP: document.querySelector('#settings-popup'),
		TRIGGER: document.querySelector('#settings-button'),
		CLOSE_BUTTON: document.querySelector('#settings-popup .popup__close'),
	}
}

export const FORM = {
	ALL_FORMS: document.querySelectorAll('form'),
	REGISTRATION: document.querySelector('#registration-form'),
	AUTHORIZATION: document.querySelector('#autorization-form'),
	CHANGE_NAME: document.querySelector('#change-name-form'),
	SEND_MESSAGE: document.querySelector('#send-message-form')
}

export const INPUT = {
	EMAIL: document.querySelector('#email-input'),
	TOKEN:  document.querySelector('#token-input'),
	NAME: document.querySelector('#name-input'),
	MESSAGE: document.querySelector('#message-input')
}

export const EXIT_BUTTON = document.querySelector('#exit-button');
export const MESSAGES_DISPLAY = document.querySelector('.display__inner');