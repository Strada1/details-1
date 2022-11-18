import { settingsButton, popup, closeButton, inputWriteMessage, windowChat, mainForm } from './values.js';
import './authorization.js';



settingsButton.addEventListener("click", function () {
    popup.classList.toggle('active');
});

closeButton.addEventListener("click", function () {
    popup.classList.remove('active');
});

mainForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const sampleMessage = document.createElement('div');
    sampleMessage.className = 'message_container user_message';
    sampleMessage.append(tmpl.content.cloneNode(true));
    windowChat.prepend(sampleMessage);
    sampleMessage.querySelector('.message_item').textContent = inputWriteMessage.value.trim();
    sampleMessage.querySelector('.message_time').textContent = `${new Date().getHours()}:${new Date().getMinutes()}`;
    inputWriteMessage.value = '';
});