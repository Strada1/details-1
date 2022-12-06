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
			console.log(data);
			localStorage.setItem('messages', JSON.stringify(data.messages));
			JSON.parse(localStorage.getItem('messages')).filter((item, index) => {
				if (0 <= index && index < 20) {
					if (item.user.name === Cookies.get('userName')) {
						return createMessage('me', '', item.text, item.updatedAt);
					}
					return createMessage('companion', item.user.name, item.text, item.updatedAt);
				}
			});
			// data.messages.map(obj => {
			// 	if (obj.user.name === Cookies.get('userName')) {
			// 		return createMessage('me', '', obj.text, obj.updatedAt);
			// 	}
			// 	return createMessage('companion', obj.user.name, obj.text, obj.updatedAt);
			// });
		})
		.catch(error => console.log('ERROR: ' + error));
}
