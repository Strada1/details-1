import { FORM, INPUT, POPUPS, EXIT_BUTTON, MESSAGES_DISPLAY } from './ui/elements.js';
import { getScrollPosition } from './ui/getScrollPosition.js';
import { renderMessage, renderMessagesHistory } from './ui/message.js';
import { showPopup, closePopup, initPopup } from './ui/popup.js';
import { registryUser, changeUserName, getUserInfo, getMessages } from './server/requests.js';
import { URL_DIRECTORY, getUrl, WEBSOKETS_URL } from './server/url.js'
import { AUTHORIZATION_COOKIE_KEY, authorizationToken, getAuthorizationToken } from './authorization.js';
import Cookies from 'js-cookie';

async function registryHandler() {
	const emailValue = INPUT.EMAIL.value;

	if (!emailValue) return;

	const response = await registryUser(getUrl(URL_DIRECTORY.USER), emailValue);

	if (!response.ok) return;

	closePopup(POPUPS.REGISTRATION);
	showPopup(POPUPS.AUTHORIZATION);
	FORM.REGISTRATION.reset();
}

function authorizationHandler() {
	const authorizationToken = INPUT.TOKEN.value;

	if (!authorizationToken) return;

	Cookies.set(AUTHORIZATION_COOKIE_KEY, authorizationToken);
	closePopup(POPUPS.AUTHORIZATION);
	FORM.AUTHORIZATION.reset();
}

async function changeNameHandler() {
	const name = INPUT.NAME.value;

	if (!name) return;

	const response = await changeUserName(
		getUrl(URL_DIRECTORY.USER),
		name,
		getAuthorizationToken(authorizationToken)
	);

	if (!response.ok) return;

	closePopup(POPUPS.SETTINGS.POPUP);
	FORM.CHANGE_NAME.reset();
}

let arrayItemFrom = 20;
let arrayItemTo = 40;

async function scrollHandler() {
	const isScrolledToTop = getScrollPosition();

	if (isScrolledToTop) {
		const ALL_MESSAGES_LOAD = 'Вся история загружена';

		const messagesHistory = await getMessages(
			getUrl(URL_DIRECTORY.MESSAGES),
			getAuthorizationToken(authorizationToken)
		);

		const messagesHistoryChunk = messagesHistory.slice(arrayItemFrom, arrayItemTo);
		const step = 20;

		renderMessagesHistory(messagesHistoryChunk, index = 0, userInfo.email);

		arrayItemFrom += step;
		arrayItemTo += step;

		console.log(messagesHistoryChunk.length)

		if(messagesHistoryChunk.length === 0) {
			alert(ALL_MESSAGES_LOAD);
		}
	}
}

function eventListeners() {
	FORM.ALL_FORMS.forEach(form => {
		form.addEventListener('submit', event => {
			event.preventDefault();
		})
	});
	FORM.REGISTRATION.addEventListener('submit', registryHandler);
	FORM.AUTHORIZATION.addEventListener('submit', authorizationHandler);
	FORM.CHANGE_NAME.addEventListener('submit', changeNameHandler);
	MESSAGES_DISPLAY.addEventListener('scroll', scrollHandler)
}

async function onDomLoad() {
	initPopup(POPUPS.SETTINGS.POPUP, POPUPS.SETTINGS.TRIGGER, POPUPS.SETTINGS.CLOSE_BUTTON);
	eventListeners();

	if (!authorizationToken) {
		showPopup(POPUPS.REGISTRATION);
		return;
	}

	const messagesHistory = await getMessages(
		getUrl(URL_DIRECTORY.MESSAGES),
		getAuthorizationToken(authorizationToken)
	);

	const messagesHistoryChunk = messagesHistory.slice(0, 20);

	renderMessagesHistory(messagesHistoryChunk, index = 0, userInfo.email);
}

async function onAppStart() {
	if (!authorizationToken) return;

	userInfo = await getUserInfo(
		getUrl(URL_DIRECTORY.USER_INFO),
		getAuthorizationToken(authorizationToken)
	);

	const CLOSE_CONNECTION_MESSAGE = 'Соединение с чатом прервано';
	const socket = new WebSocket(WEBSOKETS_URL + authorizationToken);

	function sendMessageSubmitHandler() {
		const text = INPUT.MESSAGE.value;

		if (!text) return;

		socket.send(JSON.stringify({ text }))

		FORM.SEND_MESSAGE.reset();
	}

	function onSocketOpen() {
		FORM.SEND_MESSAGE.addEventListener('submit', sendMessageSubmitHandler);
	}

	function onSocketMessage(event) {
		const { text: message, createdAt: date, user: { name, email } } = JSON.parse(event.data);

		renderMessage({ message, date, name, email, currentUserEmail: userInfo.email }, true);
	}

	function onSocketClose() {
		alert(CLOSE_CONNECTION_MESSAGE);
	}

	socket.onopen = onSocketOpen;
	socket.onmessage = onSocketMessage;
	socket.onclose = onSocketClose;

	EXIT_BUTTON.addEventListener('click', () => socket.close());
}

onAppStart();
document.addEventListener('DOMContentLoaded', onDomLoad);
