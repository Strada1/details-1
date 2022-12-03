import Cookies from 'js-cookie';
import { COOKIE_NAME } from './const';

export function addingTokenCookie(token) {
  Cookies.set(COOKIE_NAME.AUTHORIZATION_TOKEN, token);
}

export function isTokenAppStart() {
  return Cookies.get(COOKIE_NAME.AUTHORIZATION_TOKEN);
}
