import {  ELEMENT, POPUP, URL, USER } from "./const.js";
import { showPopup, closePopup, addMessage,  } from "./view.js";

window.onload = function () {
	ELEMENT.SETTING_BUTTON.addEventListener("click", () => {
		settings();
	});

	ELEMENT.EXIT_BUTTON.addEventListener("click", () => {
		authorization();
	});
	authorization();
};

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
				"Authorization": document.cookie
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
				"Authorization": document.cookie
			},
			body: JSON.stringify({name})
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
		});
}

function saveToken(token) {
	document.cookie = `Bearer ${token}`;
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

ELEMENT.SEND_MESSAGE_FORM.addEventListener("submit", event => {
	event.preventDefault();
	addMessage();
});

ELEMENT.MESSAGE_INPUT.addEventListener("keydown", event => {
	if (event.code === "Enter") {
		event.preventDefault();
		addMessage();
	}
});
