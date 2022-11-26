const URL = 'https://edu.strada.one/api/';
export const WEBSOKETS_URL = `wss://edu.strada.one/websockets?`;

export const URL_DIRECTORY = {
	USER: 'user',
	MESSAGES: 'messages',
	USER_INFO: 'user/me',
}

export function getUrl(directory) {
	return URL + directory;
}