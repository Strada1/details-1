interface MODAL_VIEW {
	SETTINGS: Element | null;
	AUTH: Element | null;
	ACCESS: Element | null;
}

export const MODAL_VIEW = {
	SETTINGS: document.querySelector('.modal'),
	AUTH: document.querySelector('.log-in'),
	ACCESS: document.querySelector('.access'),
};

interface FORM {
	SEND_MESSAGE: Element | null;
	MESSAGE_INPUT: Element | null;
	AUTH_INPUT: Element | null;
	AUTH: Element | null;
	ACCESS: Element | null;
	SETTINGS: Element | null;
}

export const FORM = {
	SEND_MESSAGE: document.querySelector('.chat-form'),
	MESSAGE_INPUT: document.querySelector('.send-message'),
	AUTH_INPUT: document.querySelector('.auth-input'),
	AUTH: document.querySelector('.log-in__form'),
	ACCESS: document.querySelector('.access__form'),
	SETTINGS: document.querySelector('.modal__form'),
};

interface BUTTONS {
	CLOSE_AUTH: Element | null;
	CLOSE_MODAL: Element | null;
	CLOSE_ACCESS: Element | null;
	SETTINGS: Element | null;
}

export const BUTTONS = {
	CLOSE_AUTH: document.querySelector('.log-in__settings-close'),
	CLOSE_MODAL: document.querySelector('.modal__settings-close'),
	CLOSE_ACCESS: document.querySelector('.access__settings-close'),
	SETTINGS: document.querySelector('.header__settings'),
};

interface INPUTS_FORMS {
	ACCESS: HTMLInputElement | null;
	SETTINGS: HTMLInputElement | null;
}

export const INPUTS_FORMS = {
	ACCESS: document.querySelector('.access-input'),
	SETTINGS: document.querySelector('.modal-input'),
};

interface CONTENT_CHAT {
	VIEW: HTMLElement | null;
}

export const CONTENT_CHAT = {
	VIEW: document.querySelector('.content__chat'),
};
