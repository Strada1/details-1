import { ELEMENTS } from './elements.js';
import { getCookie, setCookie } from './cookiesFunc.js';
import { viewModal } from './view_modal.js';
import { getMessage } from './changeName.js';

export function signIn(getEmail) {
  fetch('https://edu.strada.one/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: getEmail }),
  }).then((resp) => {
    if (resp.ok) {
      viewModal(ELEMENTS.AUTHORIZATION, ELEMENTS.CODE_WINDOW);
    }
    ELEMENTS.BTN_CODE_SEND.addEventListener('click', () => {
      ELEMENTS.CODE_WINDOW.classList.add('hidden');
      setCookie('token', ELEMENTS.CODE_INPUT.value);
      getMessage(getCookie('token'));
    });
  });
}
