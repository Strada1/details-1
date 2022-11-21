import Cookies from 'js-cookie';
import { CookieName } from './cookie';

export const URLS = {
  AUTHORIZATION: new URL('https://edu.strada.one/api/user'),
  USER: new URL('https://edu.strada.one/api/user/me'),
};

export const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
};
// TODO: попробовать сделать класс для запросов
export async function sendRequest(method, URL, body = null) {
  const headers = { 'Content-type': 'application/json; charset=utf-8' };
  const response = await fetch(URL, {
    method,
    body: JSON.stringify(body),
    headers,
  });
  if (response.ok) {
    return response.json();
  }
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
}

getRequestName(
  HTTP_METHOD.GET,
  URLS.USER,
  Cookies.get(CookieName.AUTHORIZATION_TOKEN)
).then((res) => console.log(res));
