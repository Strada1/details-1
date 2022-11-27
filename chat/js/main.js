import { initMessenger } from './messenger.js';
import { initMessageList } from './messages-render.js';
import { initAuthorization, initSettings } from './auth.js';
import { getCookie, setCookie, COOKIE_NAMES } from './cookies.js';
import { createWebSocket } from './web-socket.js';


window.addEventListener('DOMContentLoaded', () => {
  const token = getCookie(COOKIE_NAMES.BEARER);

  if (token) {
    setCookie(COOKIE_NAMES.BEARER, token, {secure: true});

    const socket = createWebSocket(token);
    socket.onopen = () => {
      initMessenger(socket);
    };

    initMessageList(token);
    initSettings();
  } else {
    initAuthorization();
  }
});
