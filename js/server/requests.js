import { ERROR_MESSAGE } from "./errors.js";

export async function registryUser(url, email) {
	const options = {
		method: 'POST',
		body: JSON.stringify({email}),
		headers: {
			'Content-Type': 'application/json'
		},
	}

	try {
		const response = await fetch(url, options);

		if(!response.ok) {
			throw new Error(ERROR_MESSAGE.REGISTRATION);
		}

		return response;

	} catch(error) {
		alert(error.message);
	}
}

export async function changeUserName(url, name, token) {
	const options = {
		method: 'PATCH',
		body: JSON.stringify({name}),
		headers: {
			'Content-Type': 'application/json',
			Authorization: token
		}
	}

	try {
		const response = await fetch(url, options);

		if(!response.ok) {
			throw new Error(ERROR_MESSAGE.NAME_CHANGE);
		}

		return response;

	} catch(error) {
		alert(error.message);
	}
}

export async function getUserInfo(url, token) {
	const options = {
		method: 'GET',
		headers: {
			Authorization: token
		}
	}

	try {
		const response = await fetch(url, options);

		if(!response.ok) {
			throw new Error(ERROR_MESSAGE.GETTING_USER_DATA);
		}

		return await response.json();

	}catch(error) {
		alert(error.message);
	}
}

export async function getMessages(url, token) {
	const options = {
		method: 'GET',
		headers: {
			Authorization: token
		}
	}

	try {
		const response = await fetch(url, options);

		if(!response.ok) {
			throw new Error(ERROR_MESSAGE.GETTING_MESSAGES);
		}

		const body = await response.json();
		
		return body.messages;

	} catch(error) {
		alert(error);
	}
}