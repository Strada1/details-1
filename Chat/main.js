import { format } from 'date-fns';
import {getDataUser, setUserName} from "./requests.js";
import {DATA, inputValue} from "./const.js";

const formMessage = document.querySelector('#setMessage');
const inputMessage = document.querySelector('#post-name');
const contentMessages = document.querySelector('.content-message');

function scrollLastElement() {
    const ELEMENTS = document.querySelector('.content-message');
    const LAST_MESSAGE = ELEMENTS.lastElementChild;
    LAST_MESSAGE.scrollIntoView({ block: 'end', behavior: 'smooth' });
}

function renderMessage(event) {
  event.preventDefault();

  if (!inputMessage.value) {
    throw new Error('Пустая строка');
  }

  const HTMLTemplateElement = document.querySelector('.user-message');
  const cloneNode = HTMLTemplateElement.content.cloneNode(true);
  const message = cloneNode.querySelector('.user-span-message');
  const date = cloneNode.querySelector('.date-me');

  message.textContent = inputMessage.value.trim();
  date.textContent = format(new Date(), 'k:m');
  contentMessages.append(cloneNode);
  inputMessage.value = '';
  scrollLastElement();
}

formMessage.addEventListener('submit', renderMessage);



async function render() {
    const response = await getDataUser(DATA.urlMessage);
    const array  =  response.messages;

    const HTMLTemplateElements = document.querySelector('.client-message');
    const cloneNodes = HTMLTemplateElements.content.cloneNode(true);
    const message = cloneNodes.querySelector('.client-span-message');
    const date = cloneNodes.querySelector('.date-interlocutor');
    const clientName = cloneNodes.querySelector(".no-select");

    array.forEach((obj) => {
        clientName.textContent = `${obj.user.name}: `;
        message.textContent =  obj.text;
        date.textContent = format(new Date(obj.createdAt), 'k:m');
    });

    contentMessages.append(cloneNodes);
    console.log(response.text)
    scrollLastElement();
}

render();

// function renderMessage (event){
//     event.preventDefault();
//
//     if(inputMessage.value === ""){
//         console.log(`Пустая строка`);
//         return;
//     }
//
//     const HTMLTemplateElement =  document.querySelector(".user-message");
//     const cloneNode = HTMLTemplateElement.content.cloneNode(true);
//
//     const message = cloneNode.querySelector(".user-message");
//     const date = cloneNode.querySelector(".date-me");
//
//     message.textContent = input_value;
//     date.textContent = format( new Date() ,"k:m" );
//     contentMessages.append(cloneNode);
//     inputMessage.value = ""
//     scrollLastElement();
// }


async function setName (event){
    event.preventDefault();
    const name = inputValue.userName.value.trim();
    console.log(name)
    await setUserName(name)
    await getDataUser();
}
const formInputName = document.querySelector("#form-popup");

formInputName.addEventListener("submit", setName);


