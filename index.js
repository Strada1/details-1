import { ELEMENT, POPUP, URL, USER } from "./const.js";
import { showPopup, closePopup, addMessage, showChat } from "./view.js";



window.onload = function () {
	ELEMENT.SETTING_BUTTON.addEventListener("click", () => {
		settings();
	});

	ELEMENT.EXIT_BUTTON.addEventListener("click", () => {
		authorization();
	});

	if (document.cookie) {
		updateUser();
		showChat();
		const result = getMessages();
		result
			.then(responce => responce.json())
			.then(messages => messages.messages)
			.then(messages => {
				messages.forEach(message => {
					addMessage(message.text, message.user.name, message.createdAt, message.user.email);
				});
			});
		socket();
	} else {
		authorization();
	}

};

function socket() {
	const socket = new WebSocket(`ws://edu.strada.one/websockets?${document.cookie}`);
    
	socket.onmessage = function (event) {
		const data = JSON.parse(event.data);
		addMessage(data.text, data.user.name, data.createdAt, data.user.email);
	};

	ELEMENT.SEND_MESSAGE_FORM.addEventListener("submit", (event) => {
		event.preventDefault();
		const messageText = ELEMENT.MESSAGE_INPUT.textContent;
		socket.send(JSON.stringify({ text: messageText }));
	});

	ELEMENT.MESSAGE_INPUT.addEventListener("keydown", event => {
		if (event.code === "Enter") {
			event.preventDefault();
			const messageText = ELEMENT.MESSAGE_INPUT.textContent;
			socket.send(JSON.stringify({text: messageText}));
		}
	});
}

async function authorization() {
	showPopup(POPUP.AUTHORIZATION);

	document.getElementById(POPUP.AUTHORIZATION.FORM_ID).addEventListener("submit", (event) => {
		event.preventDefault();

		const email = getValueFromInput(POPUP.AUTHORIZATION);
		if (!email) {
			alert("Не введена почта!");
			return;
		}

		const result = getCode(email);
		if (result) {
			confirmation();
		}
	});

}

async function confirmation() {
	showPopup(POPUP.CONFIRMATION);

	document.getElementById(POPUP.CONFIRMATION.FORM_ID).addEventListener("submit", (event) => {
		event.preventDefault();

		const token = getValueFromInput(POPUP.CONFIRMATION);
		if (!token) {
			alert("Не введен код!");
			return;
		}

		saveToken(token);
		updateUser();

		if (USER.ME.TOKEN === token) {
			closePopup();
			const result = getMessages();
			result
				.then(responce => responce.json())
				.then(messages => messages.messages)
				.then(messages => {
					messages.forEach(message => {
						addMessage(message.text, message.user.name, message.createdAt, message.user.email);
					});
				});
			socket();
		}

	});
}

async function settings() {
	showPopup(POPUP.SETTINGS);
	document.getElementById(POPUP.SETTINGS.FORM_ID).addEventListener("submit", (event) => {
		event.preventDefault();
		const name = getValueFromInput(POPUP.SETTINGS);
		if (!name) {
			alert("Не введено имя!");
			return;
		}

		changeName(name);
		updateUser();
		closePopup();
	});
	document.getElementById(POPUP.SETTINGS.CLOSE_BUTTON_ID).addEventListener("click", () => {
		closePopup();
	});

}

async function getCode(email) {
	try {
		const responce = await fetch(URL.USER, {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8"
			},
			body: JSON.stringify({ email })
		});
		return responce.ok;
	} catch (error) {
		alert(error);
	}
}

async function getUser() {
	try {
		const responce = await fetch(URL.USER_ME, {
			method: "GET",
			headers: {
				"Authorization": `Bearer ${document.cookie}`
			}
		});
		return responce;
	} catch (error) {
		alert(error);
	}

}

async function changeName(name) {
	try {
		const responce = await fetch(URL.USER, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
				"Authorization": `Bearer ${document.cookie}`
			},
			body: JSON.stringify({ name })
		});
		return responce;
	} catch (error) {
		alert(error);
	}
}

async function getMessages() {
	try {
		const responce = await fetch(URL.MESSAGES, {
			method: "GET",
			headers: {
				"Authorization": `Bearer ${document.cookie}`
			}
		});
		return responce;
	} catch (error) {
		alert(error);
	}
}

async function updateUser() {
	const result = getUser();
	result
		.then(responce => responce.json())
		.then(user => {
			USER.ME.TOKEN = user.token;
			USER.ME.NAME = user.name;
			USER.ME.EMAIL = user.email;
		});
}

function saveToken(token) {
	document.cookie = token;
}

function getValueFromInput(popupType) {
	const form = document.getElementById(popupType.FORM_ID);
	const input = form.querySelector(".popup__input");
	const inputText = input.value;
	if (inputText === "") {
		return false;
	}
	return inputText;
}

