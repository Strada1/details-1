import { getCookie } from "./main.js"
import { newMessage } from "./main.js";

export function wsOpen() {
    const token = getCookie('token');
    const socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);

    socket.onopen = function () {
        console.log("[open] Соединение установлено");
    };
    socket.onmessage = function (event) { console.log(event.data) };
    // socket.onmessage = function(e) {
    //     console.log(e.data);
    // }
    return socket;
}

export function wsListener(socket) {
    socket.onmessage = function(e) {
        console.log(e.data);
        const message = JSON.parse(e.data);
        console.log(message);
        newMessage(message.text, new Date(message.createdAt), message.user.name);
    }

}

export function wsSend(socket, text) {
    socket.send(JSON.stringify({ text: `${text}` }));
    console.log('sent');
}

