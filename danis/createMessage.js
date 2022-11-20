import {inputWriteMessage, windowChat} from './consts.js';

export function createMessage() {
    const sampleMessage = document.createElement('div');
    sampleMessage.className = 'message_container user_message';
    sampleMessage.append(tmpl.content.cloneNode(true));
    windowChat.prepend(sampleMessage);
    sampleMessage.querySelector('.message_item').textContent = inputWriteMessage.value.trim();
    sampleMessage.querySelector('.message_time').textContent = `${new Date().getHours()}:${new Date().getMinutes()}`;
    inputWriteMessage.value = '';
}