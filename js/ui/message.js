import { MESSAGES_DISPLAY } from "./elements.js";
import dayjs from "dayjs";

const MESSAGE_TEMPLATE_ID = '#message-template';
const MESSAGE_BLOCK_CLASSES = {
	WRAPPER: '.message',
	TIME: '.message__time',
	NAME: '.message__name',
	TEXT: '.message__text'
}
const MESSAGE_INCOMIN_CLASS = 'message--incoming';

export function renderMessage({ message, name, date, email, currentUserEmail }, isMessageFromUi) {
	const isUserMessage = currentUserEmail === email;
	const template = document.querySelector(MESSAGE_TEMPLATE_ID);
	const messageBlock = template.content.cloneNode(true);
	const messageWrapper = messageBlock.querySelector(MESSAGE_BLOCK_CLASSES.WRAPPER);
	const messageTime = messageBlock.querySelector(MESSAGE_BLOCK_CLASSES.TIME);
	const messageName = messageBlock.querySelector(MESSAGE_BLOCK_CLASSES.NAME);
	const messageText = messageBlock.querySelector(MESSAGE_BLOCK_CLASSES.TEXT);

	messageText.textContent = message;
	messageTime.textContent = dayjs(date).format('HH:MM');
	messageName.textContent = name;


	if (!isUserMessage) {
		messageWrapper.classList.add(MESSAGE_INCOMIN_CLASS);
	}

	if (isMessageFromUi) {
		MESSAGES_DISPLAY.prepend(messageBlock);
	}

	MESSAGES_DISPLAY.append(messageBlock);
}

export function renderMessagesHistory(array, index = 0, currentUserEmail) {
	if (!array) return;
	if (array.length === index) return;

	const { createdAt: date, text: message, user: { name, email } } = array[index];

	renderMessage({ message, name, date, email, currentUserEmail }, false);
	renderMessagesHistory(array, ++index, currentUserEmail);
}