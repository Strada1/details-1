export const ELEMENT = {
	SETTINGS: document.querySelector('.settings'),
	AUTHORIZATION: document.querySelector('.authorization'),
	SEND_MESSAGE: document.querySelector(".chat__form"),
	INPUT_MESSAGE: document.querySelector(".input__message"),
	TEXT_MESSAGE: document.querySelector(".text__my__SMS"),
	CHAT_CONTAINER: document.querySelector(".chat__Container"),
	TEMPLATE: document.getElementById("template"),
	SCROl: document.querySelector(".container-scroll"),
}

export const POPUP = {
	GET_COD: document.querySelector('.popup__authorization__button'),
	INPUT: document.querySelector('.popup__authorization__input'),
	CLOSE_SETTINGS: document.querySelector('.popup__setings__button__exit'),
	CLOSE_AUTHORIZATION: document.querySelector('.popup__authorization__button__exit'),
	SETTINGS: document.getElementById("popupSetings"),
	AUTHORIZATION: document.getElementById("popupAuthorization"),
	CONFIRMATION: document.getElementById("popupConfirmation"),
	CLOSE_CONFIRMATION: document.querySelector('.popup__confirmation__button__exit'),
	LOGIN: document.querySelector('.popup__confirmation__button'),
	INPUT_COD: document.querySelector('.popup__confirmation__input'),
}