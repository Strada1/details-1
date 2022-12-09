import { CONTENT_CHAT } from './const';

import Cookies from 'js-cookie';

import { createMessage } from './message';

const history = JSON.parse(localStorage.getItem('messages'));
console.log(history.reverse());
let minIndex = 21;
let maxIndex = 40;

export function checkPosition() {
	const height = CONTENT_CHAT.VIEW.scrollHeight;
	const clientHeight = CONTENT_CHAT.VIEW.offsetHeight;
	const scrolled = CONTENT_CHAT.VIEW.scrollTop;
	const threshold = height - clientHeight / 4;
	const position = scrolled + clientHeight;

	if (position >= threshold) {
		sliceArray(history.reverse());
	}
}

export function sliceArray(historyMessage) {
	const history = historyMessage.filter((item, index) => {
		console.log(`min: ${minIndex},  max: ${maxIndex}`);
		if (minIndex <= index && index < maxIndex) {
			return item;
		}
	});

	console.log(history);
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
