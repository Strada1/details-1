import { POPUP } from "./view"

POPUP.GET_COD.addEventListener('click', sendCod)

async function sendCod(event) {
	event.preventDefault();
	const userEmail = POPUP.INPUT.value;
	console.log('userEmail: ', userEmail);

	const response = await fetch('https://edu.strada.one/api/user', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		  },
		body: JSON.stringify({email: `${userEmail}`})
	});

	const result = await response.json();
	console.log('result: ', result);

	console.log('response: ', response.ok);
}

