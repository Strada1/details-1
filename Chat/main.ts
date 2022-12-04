import {format} from 'date-fns';
import {setUserName} from "./requests";
import {inputValue} from "./const";
import {socket} from "./websocket";
import {getItemStorage, setItemStorage} from "./storage";
import {lazyLoad, scrollLastElement, spliceArr} from "./scrollMessages";
import {renderClient, renderUserMessage} from "./render";

const formMessage = document.querySelector('#setMessage');
const contentMessages = document.querySelector('.content-message');

formMessage?.addEventListener('submit', renderUserMessage);

setItemStorage();
//const array = getItemStorage();

//renderClient(array);

socket.onmessage = function getMessage(event: any) {
    console.log("[message] Данные получены с сервера:", event.data);

    const array = JSON.parse(event.data);
    console.log(array)

    // TODO: сделать проверку
    if (array.user.email !== "me@varensev.ru") {
        const HTMLTemplateElements = document.querySelector('.client-message');
        if (HTMLTemplateElements === null) {
            return;
        }
        const cloneNodes = (<HTMLTemplateElement>HTMLTemplateElements).content.cloneNode(true);
        const message = (<HTMLElement>cloneNodes).querySelector('.client-span-message');
        const date = (<HTMLElement>cloneNodes).querySelector('.date-interlocutor');
        const clientName = (<HTMLElement>cloneNodes).querySelector(".no-select");

        if (clientName && message && date && contentMessages) {
            clientName.textContent = `${array.user.name}: `;
            message.textContent = array.text;
            date.textContent = format(new Date(array.createdAt), 'k:m');
            contentMessages.append(cloneNodes);
            scrollLastElement();
        }
    }
};

async function setName(event: Event) {
    event.preventDefault();
    const name = (<HTMLInputElement>inputValue.userName).value.trim();
    console.log(name)
    await setUserName(name)
    // await getDataUser();
}

const formInputName = document.querySelector("#form-popup");
formInputName?.addEventListener("submit", setName);


const historyLoaded = document.querySelector(".historyLoaded");

contentMessages?.addEventListener('scroll', function () {
    if (historyLoaded === null) {
        return;
    }
    console.log(contentMessages.scrollTop)
    if (contentMessages.scrollTop === 0) {
        contentMessages.textContent = "Вся история загружена";
    } else {
        contentMessages.textContent = "";
        lazyLoad();
    }

})

window.onload = ((event) => {
    spliceArr();
});


