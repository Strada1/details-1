/**
 * Чтобы запрос код на почту используйте этот эндпоинт POST https://edu.strada.one/api/user { email: ‘my@eamil.com’ }
 * и из кук прикладывайте в заголовки к каждому запросу Authorization: `Bearer ${token}`
 * А вот и эндпоинт: PATCH https://edu.strada.one/api/user { name: ‘new-name’ }
 *
 * Так же можете попробовать запрос GET https://edu.strada.one/api/user/me чтобы получить данные о своем пользователе
 * Получить историю от сервера GET https://edu.strada.one/api/messages/
 *
 * const socket = new WebSocket(`ws://edu.strada.one/websockets?${token}`);
 * socket.send(JSON.stringify({ text: ‘тестовый тест’ }));
 * socket.onmessage = function(event) { console.log(event.data) };
 */
import Cookies from 'js-cookie';
import splashLoader from '../Modal/SplashLoader';
import log from '../Logger';
import { COOKIE_TOKEN } from '../const';

const API_URL = 'https://edu.strada.one/api';
const WSS_URL = 'wss://edu.strada.one/websockets';

const makeRequest = async (url, options = {}) => {
  try {
    splashLoader.open();
    const res = await fetch(url, {
      ...options,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    splashLoader.close();
    if (res.ok) {
      return await res.json();
    }
    return Promise.reject(res.statusText);
  } catch (e) {
    log(e);
    return Promise.reject(e.message);
  }
};

const makeAuthorizedRequest = (url, options = {}) => {
  const token = Cookies.get(COOKIE_TOKEN);
  return makeRequest(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });
};

export default class Network {
  static getSocker() {
    const token = Cookies.get(COOKIE_TOKEN);
    return new WebSocket(`${WSS_URL}?${token}`);
  }

  static async requestToken(email) {
    return makeRequest(`${API_URL}/user`, {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  static async saveUserName(name) {
    return makeAuthorizedRequest(`${API_URL}/user`, {
      method: 'PATCH',
      body: JSON.stringify({ name }),
    });
  }

  static async getUser() {
    return makeAuthorizedRequest(`${API_URL}/user/me`);
  }

  static async getMessages() {
    return makeAuthorizedRequest(`${API_URL}/messages`);
  }
}
