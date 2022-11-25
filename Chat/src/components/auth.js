import { Fetch } from '../modules/fetch';

const auth = document.querySelector('#auth');
const openLogin = document.querySelector('#open_login');
const confirm = document.querySelector('#confirm');
const closeLogin = document.querySelector('#close_auth');
const sentEmail = document.querySelector('#sent_email');

openLogin.addEventListener('click', () => {
  auth.classList.add('active');
});

closeLogin.addEventListener('click', () => {
  auth.classList.remove('active');
});

sentEmail.addEventListener('submit', (event) => {
  event.preventDefault();
  const textEmail = sentEmail.children[0].value;
  new Fetch('https://edu.strada.one/api/user', 'POST', {
    email: textEmail,
  })
    .then((response) => (response.ok ? response.json() : Promise.reject(response)))
    .then((result) => {
      auth.classList.remove('active');
      confirm.classList.add('active');
      return result;
    })
    .catch((e) => {
      auth.classList.remove('active');
      alert(e.message);
    });
});
