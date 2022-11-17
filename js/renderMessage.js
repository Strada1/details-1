import {ELEMENT} from "./view.js"

ELEMENT.SENDMESSAGE.addEventListener("submit", addMessageToDOM)

function addMessageToDOM (event) {
	event.preventDefault();
	const message = ELEMENT.INPUTMESSAGE.value;

	if(!message) {
		alert('Пустая строка, введите сообщение!')
	} else {
		// ELEMENT.TEXTMESSAGE.textContent = message;
		console.log('ELEMENT.TEXTMESSAGE: ', ELEMENT.TEXTMESSAGE);
		console.log('ELEMENT.TEMPLATE: ', ELEMENT.TEMPLATE);


		const elem = document.createElement('div');
		elem.append(ELEMENT.TEMPLATE.content.cloneNode(true));
		document.body.append(elem);
	}

	
}