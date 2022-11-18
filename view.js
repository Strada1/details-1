import { ELEMENT } from "./const.js";

export function showPopup(popupType) {
    const popup = createPopup(popupType);
    ELEMENT.CONTAINER.append(popup);
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
    messageBlock.querySelector('.message__text').textContent = `Я: ${messageText}`;
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

function createPopup(popupType) {
    const popup = document.getElementById("popupTemplate").content.cloneNode(true);
    popup.querySelector(".popup__title").textContent = popupType.TITLE;
    popup.querySelector(".popup__input-title").textContent = popupType.INPUT_TITLE;
    popup.querySelector(".popup__button").textContent = popupType.BUTTON;
    popup.querySelector(".popup__form").id = popupType.FORM_ID;
    popup.querySelector(".popup__button--close").id = popupType.CLOSE_BUTTON_ID;
    return popup;
}