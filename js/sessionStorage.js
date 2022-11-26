export const STORAGE_KEY = {
	MESSAGES_HISTORY: 'messagesHistory',
	USER_INFO: 'userINFO'
}

export function setItemInSessionStorage(key, value) {
	sessionStorage.setItem(key, JSON.stringify(value));
}

export function getItemFromSessionStorage(key) {
	return JSON.parse(sessionStorage.getItem(key));
}