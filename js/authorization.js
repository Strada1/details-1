import Cookies from "js-cookie";

export const AUTHORIZATION_COOKIE_KEY = 'auth';
export const authorizationToken = Cookies.get(AUTHORIZATION_COOKIE_KEY);
const AUTHORIZATION_WORD = 'Bearer';

export function getAuthorizationToken(token) {
	return AUTHORIZATION_WORD + ' ' + token;
}