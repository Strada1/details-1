const WS_PROTOCOL = 'wss';
const WS_URL = 'edu.strada.one/websockets';


const createWebSocket = (token) => new WebSocket(`${WS_PROTOCOL}://${WS_URL}?${token}`);

const sendMessageByWebSocket = (socket, message) => socket.send(JSON.stringify({ text: message }));

const setSocketOnMessage = (socket, onGetMessage) => {
  socket.onmessage = (event) => onGetMessage(event.data)
};


export {
  createWebSocket,
  sendMessageByWebSocket,
  setSocketOnMessage
}
