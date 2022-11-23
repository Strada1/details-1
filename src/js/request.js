import Cookies from 'js-cookie';
import { CookieName } from './cookie';
import { HttpError } from './error/HttpError';
import { callNotification } from './notification';

export const URLS = {
  AUTHORIZATION: new URL('https://edu.strada.one/api/user'),
  USER: new URL('https://edu.strada.one/api/user/me'),
  MESSAGES: new URL('https://edu.strada.one/api/messages/'),
};

export const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
};
// TODO: попробовать сделать класс для запросов
export async function sendRequestAuthorization(method, URL, body = null) {
  const headers = { 'Content-type': 'application/json; charset=utf-8' };
  const response = await fetch(URL, {
    method,
    body: JSON.stringify(body),
    headers,
  });
  if (response.ok) {
    return response.json();
  }
  throw new HttpError(response);
}
export async function sendRequestChangeName(method, URL, token, body = null) {
  const headers = {
    'Content-type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${token}`,
  };
  const response = await fetch(URL, {
    method,
    body: JSON.stringify(body),
    headers,
  });
  if (response.ok) {
    return response.json();
  }
  throw new HttpError(response);
}

export async function getRequestName(method, URL, token) {
  const headers = {
    'Content-type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${token}`,
  };
  const response = await fetch(URL, {
    method,
    headers,
  });
  if (response.ok) {
    return response.json();
  }
  throw new HttpError(response);
}

export async function getMessageHistory(method, URL, token) {
  const headers = {
    'Content-type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${token}`,
  };
  const response = await fetch(URL, {
    method,
    headers,
  });
  if (response.ok) {
    return response.json();
  }
  throw new HttpError(response);
}

getRequestName(
  HTTP_METHOD.GET,
  URLS.USER,
  Cookies.get(CookieName.AUTHORIZATION_TOKEN)
)
  .then((res) => Cookies.set(CookieName.CLIENT_EMAIL, res.email))
  .catch((error) => callNotification(error.message));
