import { CONTENT_CHAT } from './const';

import Cookies from 'js-cookie';

import { createMessage } from './message';

const history = JSON.parse(localStorage.getItem('messages') || '');
let minIndex: number = 21;
let maxIndex: number = 40;

export function checkPosition() {
	const height: number = CONTENT_CHAT.VIEW?.scrollHeight as number;
	const clientHeight: number = (<HTMLElement>CONTENT_CHAT.VIEW)?.offsetHeight as number;
	const scrolled: number = CONTENT_CHAT.VIEW?.scrollTop as number;
	const threshold: number = height - clientHeight / 4;
	const position: number = scrolled + clientHeight;

	if (position >= threshold) {
		sliceArray(history.reverse());
	}
}

export function sliceArray(historyMessage: Array<any>) {
	const history = historyMessage.filter((item, index) => {
		if (minIndex <= index && index < maxIndex) {
			return item;
		}
	});

	minIndex += 20;
	maxIndex += 20;

	history.forEach(obj => {
		if (obj.user.name === Cookies.get('userName')) {
			return createMessage('me', '', obj.text, obj.updatedAt);
		}
		return createMessage('companion', obj.user.name, obj.text, obj.updatedAt);
	});

	if (0 === history.length) {
		// alert('Все история загружена ');
	}
}
