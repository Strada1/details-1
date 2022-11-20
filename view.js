import { ELEMENT, classes, USER } from "./const.js";

export function showPopup(popupType) {
	closePopup();
	hideChat();
	const popup = createPopup(popupType);
	ELEMENT.CONTAINER.append(popup);
}

export function closePopup() {
	if (document.querySelector(".popup")) {
		document.querySelector(".popup").remove();
	}
	showChat();
}

export function showChat() {
	if (Array.from(ELEMENT.CHAT.classList).includes(classes.chatDisable)) {
		ELEMENT.CHAT.classList.remove(classes.chatDisable);
	}
}

export function hideChat() {
	if (!Array.from(ELEMENT.CHAT.classList).includes(classes.chatDisable)) {
		ELEMENT.CHAT.classList.add(classes.chatDisable);
	}

}

export function scrollMessagesToEnd() {
	ELEMENT.MESSAGES.scrollTop = ELEMENT.MESSAGES.scrollHeight;
}

export function addMessage() {
	const messageText = ELEMENT.MESSAGE_INPUT.textContent;
	if (messageText.trim() === "") {
		return;
	}

	const messageBlock = createMessage(messageText);
	ELEMENT.MESSAGE_INPUT.textContent = "";
	ELEMENT.MESSAGES.append(messageBlock);
	scrollMessagesToEnd();
}

function createMessage(messageText) {
	const time = getTime();

	const messageBlock = ELEMENT.TEMPLATE.content.cloneNode(true);
	messageBlock.querySelector(".message__text").textContent = `${USER.ME.NAME}: ${messageText}`;
	messageBlock.querySelector(".message__time").textContent = time;
	return messageBlock;
}

function getTime() {
	const time = new Date();

	const hours = time.getHours();
	let minutes = time.getMinutes();
	if (minutes < 10) {
		minutes = `0${time.getMinutes()}`;
	}

	return `${hours}:${minutes}`;
}

function createPopup(popupType) {
	const popup = document.getElementById("popupTemplate").content.cloneNode(true);
	popup.querySelector(".popup__title").textContent = popupType.TITLE;
	popup.querySelector(".popup__input-title").textContent = popupType.INPUT_TITLE;
	popup.querySelector(".popup__button").textContent = popupType.BUTTON;
	popup.querySelector(".popup__form").id = popupType.FORM_ID;
	popup.querySelector(".popup__input").type = popupType.INPUT_TYPE;
	popup.querySelector(".popup__button--close").id = popupType.CLOSE_BUTTON_ID;
	return popup;
}