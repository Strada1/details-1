import Cookies from 'js-cookie'
import { POPUP } from "./view"

POPUP.GET_COD.addEventListener('click', sendCod)
POPUP.LOGIN.addEventListener('click', loginSetCookie)

async function sendCod(event) {
	event.preventDefault();
	const userEmail = POPUP.INPUT.value.trim();

	const response = await fetch('https://edu.strada.one/api/user', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
			'Authorization': `Bearer ${Cookies.get('authorizationCod')}`
		  },
		body: JSON.stringify({email: `${userEmail}`})
	});

	const result = await response.json();
	console.log('result: ', result);
	console.log('response: ', response.ok);
}

function loginSetCookie(event) {
	event.preventDefault();
	const cod = POPUP.INPUT_COD.value.trim();
	Cookies.set('authorizationCod', `${cod}`)
	console.log("All cookies: ",Cookies.get())
}

