import {windowChat} from './consts.js';

export function createMessage(textContent, userName="Я", date=`${new Date().getHours()}:${new Date().getMinutes()}`, className="") {
    const sampleMessage = document.createElement('div');
    sampleMessage.className = `message_container user_message ${className}`;
    sampleMessage.append(tmpl.content.cloneNode(true));
    windowChat.prepend(sampleMessage);
    sampleMessage.scrollIntoView();
    sampleMessage.querySelector('.message_item').textContent = textContent;
    sampleMessage.querySelector('.message_time').textContent = date;
    sampleMessage.querySelector('.user_name').textContent = userName;
}