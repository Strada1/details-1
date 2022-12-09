const urlUser: string = 'https://edu.strada.one/api/user';
const urlMe: string = 'https://edu.strada.one/api/user/me';
const urlMessages: string = 'https://edu.strada.one/api/messages/';

export function post(value: any): Promise<any> {
	return fetch(urlUser, {
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

export function patch(token: string, userName: string = 'new-name'): Promise<any> {
	return fetch(urlUser, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
			Authorization: `Bearer ${token}`,
		},

		body: JSON.stringify({ name: userName }),
	})
		.then(res => res.json())
		.then(data => {
			data;
			get(token);
		})
		.catch(error => alert('ERROR: ' + error));
}

function get(token: string) {
	fetch(urlMe, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
			Authorization: `Bearer ${token}`,
		},
	});
}

export function getHistoryMessages(token: string) {
	return fetch(urlMessages, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
			Authorization: `Bearer ${token}`,
		},
	});
}
