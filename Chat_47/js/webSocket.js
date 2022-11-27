import { getCookie } from './cookiesFunc.js';
import { renderOtherMessage } from './renderUI.js';

export function connect() {
  const socket = new WebSocket(
    `wss://edu.strada.one/websockets?${getCookie('token')}`
  );

  socket.onopen = function (event) {
    console.log('Соединение установлено');
  };

  socket.onmessage = function (event) {
    const ev = JSON.parse(event.data);
    renderOtherMessage(ev);
  };

  socket.onerror = function (error) {
    console.log(`[error]`);
  };
  return socket;
}

export function postMessageFromSocket(textMessage, socket) {
  if (textMessage) {
    socket.send(JSON.stringify({ text: textMessage.value }));
  }
}
