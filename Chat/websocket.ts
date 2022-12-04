import  * as Cookies from "js-cookie";
import {DATA} from "./const";

const socket : any = new WebSocket(`${DATA.websocket}${Cookies.get('email')}`);

function sentMessage (message : string ) {
    socket.send(JSON.stringify({text: message}));
    console.log("[open] Соединение установлено");
    return message;
}

function getMessage(event : any ) {
    try {
        console.log( "[message] Данные получены с сервера:" , event.data)
        return JSON.parse(event.data);
    } catch (e : any ) {
        new Error(e.message)
    }

}

export {socket, sentMessage, getMessage};