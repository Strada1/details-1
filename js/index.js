import { FORM, INPUT, POPUPS, EXIT_BUTTON, MESSAGES_DISPLAY } from './ui/elements.js';
import { getScrollPosition } from './ui/getScrollPosition.js';
import { renderMessage, renderMessagesHistory, renderMessagesOnScroll } from './ui/message.js';
import { showPopup, closePopup, initPopup } from './ui/popup.js';
import { registryUser, changeUserName, getUserInfo, getMessages } from './server/requests.js';
import { URL_DIRECTORY, getUrl, WEBSOKETS_URL } from './server/url.js'
import { AUTHORIZATION_COOKIE_KEY, authorizationToken, getAuthorizationToken } from './authorization.js';
import { setItemInSessionStorage, getItemFromSessionStorage, STORAGE_KEY} from './sessionStorage.js';
import { counter } from './helpers/couter.js';
import Cookies from 'js-cookie';

const messagesHistory = getItemFromSessionStorage(STORAGE_KEY.MESSAGES_HISTORY);
const userInfo = getItemFromSessionStorage(STORAGE_KEY.USER_INFO);

async function registryHandler() {
	const emailValue = INPUT.EMAIL.value;

	if (!emailValue) return;

	const response = await registryUser(getUrl(URL_DIRECTORY.USER), emailValue);

	if (!response.ok) return;

	closePopup(POPUPS.REGISTRATION);
	showPopup(POPUPS.AUTHORIZATION);
	initWebSockets();
	FORM.REGISTRATION.reset();
}

function authorizationHandler() {
	const authorizationToken = INPUT.TOKEN.value;

	if (!authorizationToken) return;

	Cookies.set(AUTHORIZATION_COOKIE_KEY, authorizationToken);
	closePopup(POPUPS.AUTHORIZATION);
	initPopup(POPUPS.SETTINGS.POPUP, POPUPS.SETTINGS.TRIGGER, POPUPS.SETTINGS.CLOSE_BUTTON);
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

const increaseArrayIndex = counter(1);

function scrollHandler() {
	const isScrolledToTop = getScrollPosition();

	if (isScrolledToTop) {
		const ALL_MESSAGES_LOADED = 'Вся история загружена';
		let arrayIndex = increaseArrayIndex();
		const allMessagesLoaded = arrayIndex === messagesHistory.length;

		if(allMessagesLoaded) {
			alert(ALL_MESSAGES_LOADED);
		}

		renderMessagesHistory(messagesHistory[arrayIndex], index = 0, userInfo.email);
	}
}

function initWebSockets() {
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

async function startOnAuthorizationUser() {
	if (authorizationToken) {
		const userInfo = await getUserInfo(
			getUrl(URL_DIRECTORY.USER_INFO),
			getAuthorizationToken(authorizationToken)
		);

		const messagesHistory = await getMessages(
			getUrl(URL_DIRECTORY.MESSAGES),
			getAuthorizationToken(authorizationToken),
			userInfo.email
		);

		const firstMessagesChunk = 0;

		renderMessagesHistory(messagesHistory[firstMessagesChunk], index = 0, userInfo.email);

		setItemInSessionStorage(STORAGE_KEY.MESSAGES_HISTORY, messagesHistory);
		setItemInSessionStorage(STORAGE_KEY.USER_INFO, userInfo);

		initPopup(POPUPS.SETTINGS.POPUP, POPUPS.SETTINGS.TRIGGER, POPUPS.SETTINGS.CLOSE_BUTTON);

		initWebSockets();
	}
}

function startOnNotAuhtorizationUser() {
	if (authorizationToken) return;

	showPopup(POPUPS.REGISTRATION);
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
	eventListeners();
	startOnNotAuhtorizationUser();
	startOnAuthorizationUser();
}

document.addEventListener('DOMContentLoaded', onDomLoad);
