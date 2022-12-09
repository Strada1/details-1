import Cookies from 'js-cookie';

import { MODAL_VIEW, FORM, BUTTONS, INPUTS_FORMS, CONTENT_CHAT } from './const';

import { patch } from './fetch';

import { createMessage } from './message';

import { authorization } from './auth';

import { getHistory } from './history';

import { socket } from './webSocket';

import { checkPosition } from './scroll';

document.addEventListener('DOMContentLoaded', () => {
	const cookieUserName = Cookies.get('user');

	if (cookieUserName) {
		const userName = (<HTMLInputElement>document.querySelector('.modal__title')).firstElementChild;

		userName!.textContent = `Имя - ${Cookies.get('userName')}`;

		getHistory();
	} else {
		MODAL_VIEW.AUTH?.classList.remove('hide');

		FORM.AUTH?.addEventListener('submit', evt => authorization(evt));
		getHistory();
	}
});

CONTENT_CHAT.VIEW?.addEventListener('scroll', checkPosition);

CONTENT_CHAT.VIEW?.addEventListener('resize', checkPosition);

BUTTONS.CLOSE_MODAL?.addEventListener('click', () => {
	MODAL_VIEW.SETTINGS?.classList.add('hide');
});

BUTTONS.SETTINGS?.addEventListener('click', () => {
	MODAL_VIEW.SETTINGS?.classList.remove('hide');
});

BUTTONS.CLOSE_AUTH?.addEventListener('click', () => {
	MODAL_VIEW.AUTH?.classList.add('hide');
});

BUTTONS.CLOSE_ACCESS?.addEventListener('click', () => {
	if ((<HTMLInputElement>INPUTS_FORMS.ACCESS)?.value) {
		return MODAL_VIEW.ACCESS?.classList.add('hide');
	}
	return INPUTS_FORMS.ACCESS?.setAttribute('required', '');
});

window.addEventListener('keydown', evt => {
	if (evt.key === 'Escape') {
		MODAL_VIEW.SETTINGS?.classList.add('hide');
	}
});

FORM.SEND_MESSAGE?.addEventListener('submit', event => {
	event.preventDefault();

	createMessage('me', '', (<HTMLInputElement>FORM.MESSAGE_INPUT)?.value);

	socket.send(JSON.stringify({ text: (<HTMLInputElement>FORM.MESSAGE_INPUT)?.value }));

	if (typeof CONTENT_CHAT.VIEW?.scrollTop === 'number') {
		CONTENT_CHAT.VIEW.scrollTop = CONTENT_CHAT.VIEW?.scrollHeight as number;
	}

	(<HTMLInputElement>FORM.MESSAGE_INPUT).value = '';
});

FORM.ACCESS?.addEventListener('submit', evt => {
	evt.preventDefault();

	if ((<HTMLInputElement>INPUTS_FORMS.ACCESS)?.value) {
		Cookies.set('token', (<HTMLInputElement>INPUTS_FORMS.ACCESS)?.value);
	}

	MODAL_VIEW.ACCESS?.classList.add('hide');
});

FORM.SETTINGS?.addEventListener('submit', evt => {
	evt.preventDefault();

	if ((<HTMLInputElement>INPUTS_FORMS.SETTINGS)?.value) {
		patch(Cookies.get('user') as 'string', (<HTMLInputElement>INPUTS_FORMS.SETTINGS)?.value);

		Cookies.set('userName', (<HTMLInputElement>INPUTS_FORMS.SETTINGS)?.value);

		MODAL_VIEW.SETTINGS?.classList.add('hide');

		alert(`Имя изменено: ${(<HTMLInputElement>INPUTS_FORMS.SETTINGS)?.value}`);

		const userName =
			(<HTMLElement>document.querySelector('.modal__title'))?.firstChild?.nodeName || undefined;

		(userName as any).textContent = `Имя - ${(<HTMLInputElement>INPUTS_FORMS.SETTINGS)?.value}`;
	}
});
