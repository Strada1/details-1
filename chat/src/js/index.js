import { format } from 'date-fns';

import { MODAL_VIEW, FORM, BUTTONS } from './const';

import { post } from './fetch';

const close = document.querySelector('.modal__settings-close');

BUTTONS.CLOSE_MODAL.addEventListener('click', () => {
	MODAL_VIEW.SETTINGS.classList.add('hide');
});

window.addEventListener('keydown', evt => {
	if (evt.key === 'Escape') {
		MODAL_VIEW.SETTINGS.classList.add('hide');
	}
});

BUTTONS.SETTINGS.addEventListener('click', () => {
	MODAL_VIEW.SETTINGS.classList.remove('hide');
});

BUTTONS.CLOSE_AUTH.addEventListener('click', () => {
	MODAL_VIEW.AUTH.classList.add('hide');
});

function createMessage(inputValue, timeValue = new Date()) {
	const myMessage = document.createElement('div');
	const content = document.createElement('div');
	const text = document.createElement('p');
	const time = document.createElement('div');
	const timeText = document.createElement('span');

	myMessage.classList.add('content__me');
	myMessage.classList.add('message');
	content.classList.add('content__message');
	time.classList.add('content__time');

	myMessage.append(content);
	content.append(text);
	content.append(time);
	time.append(timeText);

	text.textContent = inputValue;
	timeText.textContent = format(timeValue, 'HH:mm');

	const chat = document.querySelector('.content__chat');

	chat.append(myMessage);

	return (chat.scrollTop = chat.scrollHeight);
}

FORM.SEND_MESSAGE.addEventListener('submit', event => {
	event.preventDefault();

	createMessage(FORM.MESSAGE_INPUT.value);
	FORM.MESSAGE_INPUT.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
	MODAL_VIEW.AUTH.classList.remove('hide');

	FORM.AUTH.addEventListener('submit', evt => {
		evt.preventDefault();

		post(FORM.AUTH_INPUT.value);
	});
});
