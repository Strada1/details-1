import { format } from 'date-fns'
import { even } from 'prelude-ls';
import {ELEMENT} from "./view.js";

ELEMENT.SENDMESSAGE.addEventListener("submit", addMessageToDOM)

function nowTime() {
	const timeNow = format(new Date(), "kk ':' mm")
	return timeNow;
}

function addMessageToDOM (event) {
	event.preventDefault();
	const message = ELEMENT.INPUTMESSAGE.value;

	if(!message) {
		alert('Пустая строка, введите сообщение!')
	} else {
		const userContent = document.createElement('div');
		userContent.append(ELEMENT.TEMPLATE.content.cloneNode(true));
		const contentMyMessage = userContent.querySelector(".text__my__SMS")
		const timeMyMessage = userContent.querySelector(".time__SMS")

		contentMyMessage.textContent = message;
		timeMyMessage.textContent = nowTime();
		
		contentMyMessage.scrollIntoView();

		ELEMENT.CHATCONTAINER.append(userContent);
		event.target.reset();
	}
}