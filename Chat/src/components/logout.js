import { checkToken } from '../modules/checkToken';

const openLogout = document.querySelector('#open_logout');

openLogout.addEventListener('click', () => {
  document.cookie = `token=`;
  checkToken();
});
