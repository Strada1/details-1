import {format} from "date-fns";
import {scrollLastElement} from "./scrollMessages";
import {sentMessage, socket} from "./websocket";


function renderClient(array: string[]): void {
    // const array = getItemStorage();
    array.forEach((obj: string) => {
        if (obj) {
            const HTMLTemplateElements = document.querySelector('.client-message');
            if (HTMLTemplateElements === null) {
                return;
            }
            const cloneNodes = (<HTMLTemplateElement>HTMLTemplateElements).content.cloneNode(true);
            const message = (<HTMLElement>cloneNodes).querySelector('.client-span-message');
            const date = (<HTMLElement>cloneNodes).querySelector('.date-interlocutor');
            const clientName = (<HTMLElement>cloneNodes).querySelector(".no-select");

            if (clientName && message && date && contentMessages) {
                const {user, text, createdAt}: any = obj;
                clientName.textContent = `${user.name}: `;
                message.textContent = text;
                date.textContent = format(new Date(createdAt), 'k:m');
                contentMessages.append(cloneNodes);
            }
        }
    });

    // scrollLastElement();
}

const inputMessage = document.querySelector('#post-name');
const contentMessages = document.querySelector('.content-message');

function renderUserMessage(event: Event) {
    event.preventDefault();
    const myMessage = (<HTMLInputElement>inputMessage).value.trim()
    socket.onopen = sentMessage(myMessage);
    const HTMLTemplateElement = document.querySelector('.user-message');
    if (HTMLTemplateElement === null) {
        return;
    }

    const cloneNode = (<HTMLTemplateElement>HTMLTemplateElement).content.cloneNode(true);
    const message = (<HTMLElement>cloneNode).querySelector('.user-span-message');
    const date = (<HTMLElement>cloneNode).querySelector('.date-me');

    if (message !== null && date !== null && contentMessages !== null && inputMessage !== null) {
        message.textContent = myMessage;
        date.textContent = format(new Date(), 'k:m');
        contentMessages.append(cloneNode);
        inputMessage.textContent = '';

        scrollLastElement();
        console.log("sadasdasd" + inputMessage.textContent)
    }




}

export {renderClient, renderUserMessage};