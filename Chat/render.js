import {format} from "date-fns";
import {scrollLastElement} from "./scrollMessages.js";
import {sentMessage, socket} from "./websocket.js";

function renderClient(array) {
    // const array = getItemStorage();

    array.forEach((obj) => {
        const HTMLTemplateElements = document.querySelector('.client-message');
        const cloneNodes = HTMLTemplateElements.content.cloneNode(true);
        const message = cloneNodes.querySelector('.client-span-message');
        const date = cloneNodes.querySelector('.date-interlocutor');
        const clientName = cloneNodes.querySelector(".no-select");

        clientName.textContent = `${obj.user.name}: `;
        message.textContent =  obj.text;
        date.textContent = format(new Date(obj.createdAt), 'k:m');
        contentMessages.append(cloneNodes);
    });

    scrollLastElement();
}

const inputMessage = document.querySelector('#post-name');
const contentMessages = document.querySelector('.content-message');

function renderUserMessage(event) {
    event.preventDefault();
    const myMessage = inputMessage.value.trim()

    socket.onopen  = sentMessage(myMessage);
    const HTMLTemplateElement = document.querySelector('.user-message');
    const cloneNode = HTMLTemplateElement.content.cloneNode(true);
    const message = cloneNode.querySelector('.user-span-message');
    const date = cloneNode.querySelector('.date-me');

    message.textContent = myMessage;
    date.textContent = format(new Date(), 'k:m');
    contentMessages.append(cloneNode);
    inputMessage.value = '';
    scrollLastElement();
}

export {renderClient, renderUserMessage};