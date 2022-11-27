import { format } from 'date-fns';
import { setUserName } from "./requests.js";
import { inputValue } from "./const.js";
import { socket } from "./websocket.js";
import { getItemStorage, setItemStorage } from "./storage.js";
import { scrollLastElement } from "./scrollMessages.js";
import { renderClient, renderUserMessage } from "./render.js";

const formMessage = document.querySelector('#setMessage');
const contentMessages = document.querySelector('.content-message');

formMessage.addEventListener('submit', renderUserMessage);

setItemStorage();
const array = getItemStorage();
renderClient(array);

socket.onmessage = function getMessage(event) {
    console.log( "[message] Данные получены с сервера:" , event.data);

    const array  =  JSON.parse(event.data);
    console.log(array)

    if(array.user.email !== "me@varensev.ru"){
        const HTMLTemplateElements = document.querySelector('.client-message');
        const cloneNodes = HTMLTemplateElements.content.cloneNode(true);
        const message = cloneNodes.querySelector('.client-span-message');
        const date = cloneNodes.querySelector('.date-interlocutor');
        const clientName = cloneNodes.querySelector(".no-select");

        clientName.textContent = `${array.user.name}: `;
        message.textContent =  array.text;
        date.textContent = format(new Date(array.createdAt), 'k:m');
        contentMessages.append(cloneNodes);
        scrollLastElement();
    }

};

async function setName (event){
    event.preventDefault();
    const name = inputValue.userName.value.trim();
    console.log(name)
    await setUserName(name)
   // await getDataUser();
}
const formInputName = document.querySelector("#form-popup");
formInputName.addEventListener("submit", setName);


