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
}

export async function getMessage(token) {
  if (token) {
    const promise = await fetch(`https://edu.strada.one/api/messages/ `, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const respMessages = await promise.json();
    let start = 0;
    let finish = 21;

    const respArr = respMessages.messages;
    respArr
      .splice(start, finish)
      .reverse()
      .forEach((element) => {
        renderOtherMessage(element, false);
      });
    ELEMENTS.WINDOW_SCROLL.addEventListener('scroll', () => {
      if (ELEMENTS.WINDOW_SCROLL.scrollTop === 0) {
        if (respArr.length !== 0) {
          respArr.splice(start, finish).forEach((element, i) => {
            renderOtherMessage(element, true);
          });
          if (respArr.length === 0) {
            ELEMENTS.MESSAGES_CLEAR.style.display = 'block';
            ELEMENTS.WINDOW_SCROLL.prepend(ELEMENTS.MESSAGES_CLEAR);
          }
          ELEMENTS.WINDOW_SCROLL.scrollTo(0, 1260);
        }
      }
    });
  }
}
