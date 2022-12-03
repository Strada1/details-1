import { getSocketUrl, addClassForMe, addClassForAnother } from './consts'
import { createMessage } from './createMessage'
import { getUserInfo } from './getUserInfo'
import { format } from 'date-fns'

const socketName = new WebSocket(`${getSocketUrl}${document.cookie}`)

export function postMessageToServer(textMessage: string): void {
    socketName.send(JSON.stringify({ text: textMessage }));
}

export async function onmessage() {
    socketName.onmessage = async function (event) {
        const result = JSON.parse(event.data);
        const getEmail = await getUserInfo();
        if (result.user.email === getEmail) {
            createMessage(result.text, result.user.name, format(Date.parse(result.createdAt), "HH:mm"), addClassForMe);
        } else {
            createMessage(result.text, result.user.name, format(Date.parse(result.createdAt), "HH:mm"), addClassForAnother);
        }

    }
}