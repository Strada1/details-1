import { getCookieValue } from "./getCookieValue.js";
import sendMessage from "./sendMessage.js";


let socket = null;

const webSocketConnect = function() {
    const token = getCookieValue('token');
    socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);
    socket.addEventListener('open', ()=>{console.log('Соед уст')});
    socket.onmessage = sendMessage;
    socket.onclose = function(event) {
        if (event.code === 1006) {
            console.log('Соединение закрыто 1006');
            webSocketConnect();
        }
    }
};

const webSocketSend = function() {
    const textInput = document.querySelector('.send__input');
    socket.send(JSON.stringify({text: textInput.value}));

}

const webSocketClose = function() {
    socket.close(1000, "работа закончена");
    console.log('Соединение закрыто 1000');
}

export { webSocketConnect, webSocketSend, webSocketClose };