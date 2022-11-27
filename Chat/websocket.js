import Cookies from "js-cookie";
import {DATA} from "./const.js";

const socket = new WebSocket(`${DATA.websocket}${Cookies.get('email')}`);
function sentMessage (message,e) {
    socket.send(JSON.stringify({text: message}));
    console.log("[open] Соединение установлено");
}

function getMessage(event) {
    console.log( "[message] Данные получены с сервера:" , event.data)
    return JSON.parse(event.data);
}

export {socket, sentMessage, getMessage};