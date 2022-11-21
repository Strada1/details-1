import { getCookie, setCookie } from './cookiesFunc.js';
import { ELEMENTS } from './elements.js';
import { renderOtherMessage } from './renderUI.js';

export function changeNikName(nikName, token) {
  fetch(`https://edu.strada.one/api/user`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: `${nikName}`,
    }),
  }).then((resp) => resp.json().then((resp) => console.log(resp)));
}

export async function getInfoUser(token) {
  const promise = await fetch(`https://edu.strada.one/api/user/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  const result = await promise.json();
  console.log(result);
  console.log('get request');
}

export async function getMessage(token) {
  const promise = await fetch(`https://edu.strada.one/api/messages/ `, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  const messages = await promise.json();
  renderOtherMessage(messages);
}
