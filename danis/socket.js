import { getUrlSocket, getNameUserCoockie, getNameUserEmail } from './consts.js'
import { existsCookie } from './script.js'
import { createMessage } from './createMessage.js'

const socketName = new WebSocket(`${getUrlSocket}${existsCookie(getNameUserCoockie)}`)

export function postMessageToServer(textMessage) {
    socketName.send(JSON.stringify({ text: textMessage }));
}

socketName.onmessage = function (event) {
    const result = JSON.parse(event.data);
    if (result.user.email === existsCookie(getNameUserEmail)) {
        createMessage(result.text, result.user.name, result.createdAt);
    } else {
        createMessage(result.text, result.user.name, result.createdAt, 'another')
    }
}