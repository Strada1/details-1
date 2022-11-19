import { ELEMENTS } from './elements.js';
import { getCookie, setCookie } from './cookiesFunc.js';

export function signIn() {
  const emailAdress = ELEMENTS.MAIL_INPUT.value;
  fetch('https://edu.strada.one/api/user', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(emailAdress),
  })
    .then((resp) => {
      console.log(resp.ok);
      if (resp.ok) {
        ELEMENTS.AUTHORIZATION.style.display = 'none';
        ELEMENTS.CODE_WINDOW.classList.remove('display_none');
        ELEMENTS.CODE_WINDOW.classList.add('display_flex');
      }
    })
    .then((resp) => {
      ELEMENTS.BTN_CODE_SEND.addEventListener('click', () => {
        if (ELEMENTS.CODE_INPUT.value === '123') {
          ELEMENTS.CODE_WINDOW.classList.add('display_none');
        }
      });
    });
}
