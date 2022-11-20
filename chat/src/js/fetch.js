const url = 'https://edu.strada.one/api/user';

export async function post(value) {
	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({ email: value.trim() }),
	})
		.then(res => res.json())
		.catch(error => alert('ERROR: ' + error));
}
