import { checkToken } from '../modules/checkToken';

const confirm = document.querySelector('#confirm');
const closeConfirm = document.querySelector('#close_confirm');
const sentCode = document.querySelector('#sent_code');

closeConfirm.addEventListener('click', () => {
  confirm.classList.remove('active');
});

sentCode.addEventListener('submit', (event) => {
  event.preventDefault();
  const tokenValue = sentCode.children[0].value;
  document.cookie = `token=${tokenValue}`;
  checkToken();
  confirm.classList.remove('active');
});
