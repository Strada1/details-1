import { format } from 'date-fns'
import {ELEMENT} from "./view.js";
// import { getDataUser } from "./authorization.js";

ELEMENT.SEND_MESSAGE.addEventListener("submit", addMessageToDOM)

function nowTime() {
	const timeNow = format(new Date(), "kk ':' mm")
	return timeNow;
}

function addMessageToDOM (event) {
	event.preventDefault();
	const message = ELEMENT.INPUT_MESSAGE.value;
	// const userName = getDataUser().name

	if(!message) {
		alert('Пустая строка, введите сообщение!')
	} else {
		const userContent = document.createElement('div');
		userContent.append(ELEMENT.TEMPLATE.content.cloneNode(true));
		const contentMyMessage = userContent.querySelector(".text__my__SMS")
		const timeMyMessage = userContent.querySelector(".time__SMS")

		contentMyMessage.textContent = `${message}`;
		timeMyMessage.textContent = nowTime();
		
		ELEMENT.CHAT_CONTAINER.append(userContent);
		event.target.reset();
		scrollLastElement()
	}
}

function scrollLastElement() {
    const ELEMENTS = document.querySelector(".chat__Container");
    const LAST_MESSAGE = ELEMENTS.lastElementChild;
    LAST_MESSAGE.scrollIntoView(false);
}