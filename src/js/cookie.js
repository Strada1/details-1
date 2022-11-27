import Cookies from 'js-cookie';

export const CookieName = {
  AUTHORIZATION_TOKEN: 'authorizationToken',
  CLIENT_EMAIL: 'email_user',
};

export function addingTokenCookie(token) {
  Cookies.set(CookieName.AUTHORIZATION_TOKEN, token);
}

export function isTokenAppStart() {
  return Cookies.get(CookieName.AUTHORIZATION_TOKEN);
}
