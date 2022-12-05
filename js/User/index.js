import Cookies from 'js-cookie';
import Network from '../Network';
import { COOKIE_EMAIL, COOKIE_TOKEN } from '../const';
import log from '../Logger';

export const USER_STATE = {
  unauthorized: 0,
  unverified: 1,
  authorized: 2,
};

class User {
  #calbacks = [];

  #name = '';

  #token = '';

  #state;

  email = '';

  constructor() {
    const email = Cookies.get(COOKIE_EMAIL);
    const token = Cookies.get(COOKIE_TOKEN);

    this.state = USER_STATE.unauthorized;

    if (email) {
      this.email = email;
      this.state = USER_STATE.unverified;
    }

    if (token) {
      this.#token = token;
      this.state = USER_STATE.authorized;
    }
  }

  set state(state) {
    this.#state = state;
    this.#calbacks.forEach((fn) => fn(this));
  }

  get state() {
    return this.#state ?? USER_STATE.unauthorized;
  }

  setName(n) {
    const name = n.trim();
    Network.saveUserName(name).then((res) => {
      this.#name = res.name;
    }).catch(log);
  }

  requestVerification({ email }) {
    Network.requestToken(email).then(() => {
      this.email = email;
      Cookies.set(COOKIE_EMAIL, email);
      this.state = USER_STATE.unverified;
    }).catch(log);
  }

  authorize({ code }) {
    this.#token = code;
    Cookies.set(COOKIE_TOKEN, code);
    this.state = USER_STATE.authorized;
  }

  logout() {
    this.#token = '';
    this.email = '';
    Cookies.remove(COOKIE_EMAIL);
    Cookies.remove(COOKIE_TOKEN);
    this.state = USER_STATE.unauthorized;
  }

  onChangeStatus(callback) {
    this.#calbacks.push(callback);
  }
}

export default new User();
