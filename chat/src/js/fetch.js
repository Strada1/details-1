const urlUser = 'https://edu.strada.one/api/user';
const urlMe = 'https://edu.strada.one/api/user/me';
const urlMessages = 'https://edu.strada.one/api/messages/';

export function post(value) {
	fetch(urlUser, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},

		body: JSON.stringify({ email: value.trim() }),
	})
		.then(res => res.json())
		.then(data => data)
		.catch(error => alert('ERROR: ' + error));
}

export function patch(token, userName = 'new-name') {
	fetch(urlUser, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
			Authorization: `Bearer ${token}`,
		},

		body: JSON.stringify({ name: userName }),
	})
		.then(res => res.json())
		.then(data => data)
		.catch(error => alert('ERROR: ' + error));

	get(token);
}

function get(token) {
	fetch(urlMe, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
			Authorization: `Bearer ${token}`,
		},
	});
}

export function getHistoryMessages(token) {
	return fetch(urlMessages, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
			Authorization: `Bearer ${token}`,
		},
	});
}
