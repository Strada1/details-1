import { getHistoryMessages } from './fetch';

import Cookies from 'js-cookie';

import { createMessage } from './message';

import { socket } from './webSocket';

export function getHistory() {
	const history = getHistoryMessages(Cookies.get('user'));

	socket.onmessage = function (event) {
		const data = JSON.parse(event.data);

		createMessage('companion', data.user.name, data.text, data.updatedAt);
	};

	history
		.then(res => res.json())
		.then(data => {
			localStorage.setItem('messages', JSON.stringify(data.messages));
			const messages = JSON.parse(localStorage.getItem('messages'));
			console.log(messages.length);
			messages.reverse().filter((item, index) => {
				if (0 <= index && index < 20) {
					if (item.user.name === Cookies.get('userName')) {
						return createMessage('me', '', item.text, item.updatedAt);
					}
					return createMessage('companion', item.user.name, item.text, item.updatedAt);
				}
			});
		})
		.catch(error => console.log('ERROR: ' + error));
}
