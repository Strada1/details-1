interface ClassName {
	SETTINGS: string;
	authorization: string;
	chatForm: string;
	SCROLL: string;
}

export const CLASS_NAME: ClassName = {
	SETTINGS: ".settings",
	authorization: ".authorization",
	chatForm: ".chat__form",
	SCROLL: ".container-scroll"
  };
  
interface Numbers {
	TWENTY: number;
	ZERO: number;
}

  export const NUMBERS = {
	TWENTY: 20,
	ZERO: 0
  }
  
  interface Elements {
	SETTINGS: Element | null;
	AUTHORIZATION: Element | null;
	SEND_MESSAGE: Element | null; 
	INPUT_MESSAGE: Element | null;
	TEXT_MESSAGE: Element | null;
	CHAT_CONTAINER: Element | null;
	TEMPLATE: Element | null;
	TEMPLATE_COMPANION: Element | null;
	SCROl: Element | null;
  }

  export const ELEMENT: Elements  = {
	SETTINGS: document.querySelector(CLASS_NAME.SETTINGS),
	AUTHORIZATION: document.querySelector(CLASS_NAME.authorization),
	SEND_MESSAGE: document.querySelector(".chat__form"),
	INPUT_MESSAGE: document.querySelector(".input__message"),
	TEXT_MESSAGE: document.querySelector(".text__my__SMS"),
	CHAT_CONTAINER: document.querySelector(".chat__Container"),
	TEMPLATE: document.getElementById("template"),
	TEMPLATE_COMPANION: document.getElementById("templateCompanion"),
	SCROl: document.querySelector(CLASS_NAME.SCROLL),
  };
  
  interface Popup {
	GET_COD: Element | null;
	INPUT: Element | null;
	CLOSE_SETTINGS: Element | null;
	INPUT_NAME: Element | null;
	SAVE_NAME: Element | null;
	CLOSE_AUTHORIZATION: Element | null;
	SETTINGS: Element | null;
	AUTHORIZATION: Element | null;
	CONFIRMATION: Element | null;
	CLOSE_CONFIRMATION: Element | null;
	LOGIN: Element | null;
	INPUT_COD: Element | null;
  }

  export const POPUP: Popup = {
	GET_COD: document.querySelector(".popup__authorization__button"),
	INPUT: document.querySelector(".popup__authorization__input"),
	CLOSE_SETTINGS: document.querySelector(".popup__setings__button__exit"),
	INPUT_NAME: document.querySelector(".popup__setings__input"),
	SAVE_NAME: document.querySelector(".popup__setings__button"),
	CLOSE_AUTHORIZATION: document.querySelector(
	  ".popup__authorization__button__exit"
	),
	SETTINGS: document.getElementById("popupSetings"),
	AUTHORIZATION: document.getElementById("popupAuthorization"),
	CONFIRMATION: document.getElementById("popupConfirmation"),
	CLOSE_CONFIRMATION: document.querySelector(
	  ".popup__confirmation__button__exit"
	),
	LOGIN: document.querySelector(".popup__confirmation__button"),
	INPUT_COD: document.querySelector(".popup__confirmation__input"),
  };
  
  export const URL = {
	HISTORY_SERVER: "https://edu.strada.one/api/messages/",
	SOCET: "ws://edu.strada.one/websockets?"
  };
  
  export const MESSAGE = {};
  