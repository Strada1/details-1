import { ELEMENT, popupButtons } from "./const.js";

export function showPopup() {
    ELEMENT.POPUP.classList.add("popup--active");
}

export function closePopup() {
    ELEMENT.POPUP.classList.remove("popup--active");
}

export function scrollMessagesToEnd() {
    ELEMENT.MESSAGES.scrollTop = ELEMENT.MESSAGES.scrollHeight;
}

export function addMessage() {
    const messageText = ELEMENT.MESSAGE_INPUT.textContent;
    if (messageText.trim() === '') {
        return;
    }

    const messageBlock = createMessage(messageText);
    ELEMENT.MESSAGE_INPUT.textContent = '';
    ELEMENT.MESSAGES.append(messageBlock);
    scrollMessagesToEnd();
}

function createMessage(messageText) {
    const time = getTime();

    const messageBlock = ELEMENT.TEMPLATE.content.cloneNode(true);
    messageBlock.querySelector('.message__text').innerHTML = `Я: ${messageText}`;
    messageBlock.querySelector(".message__time").textContent = time;
    return messageBlock;
}

function getTime() {
    const time = new Date();

    const hours = time.getHours();
    let minutes = time.getMinutes();
    if (minutes < 10) {
        minutes = `0${time.getMinutes()}`;
    }

    return `${hours}:${minutes}`;
}

