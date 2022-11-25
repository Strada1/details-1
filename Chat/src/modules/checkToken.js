import { getToken } from './getToken';
import { getHistory } from './getHistory';

const openLogin = document.querySelector('#open_login');
const openLogout = document.querySelector('#open_logout');

export function checkToken() {
  if (getToken()) {
    openLogin.classList.remove('active');
    openLogout.classList.add('active');
    getHistory();
    return true;
  } else {
    openLogin.classList.add('active');
    openLogout.classList.remove('active');
    return false;
  }
}
