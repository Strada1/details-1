import { getCookieValue } from "./getCookieValue.js";

//Функция эдд мессадж ирл
const sendMessage = function(event) {
    console.log(event.data);
    const cookieEmail = getCookieValue('email');
    const messageHistory = document.querySelector('.mid');
    const templateMessage = document.querySelector('.template-message');
    const contentMessage = templateMessage.content.cloneNode(true);
    const parsedEvent = JSON.parse(event.data);

    const date = new Date(parsedEvent.createdAt);
    let dateMinutes = date.getMinutes();
    if (dateMinutes < 10) {
        dateMinutes = '0'+ dateMinutes;
    }
    let userName = parsedEvent.user.name;

    if (parsedEvent.user.email === cookieEmail) {
        userName = 'Я';
    };
    
    if (parsedEvent.user.email !== cookieEmail) {
        contentMessage.querySelector('div').classList.add('origin-companion');
    }
    else {
        contentMessage.querySelector('div').classList.add('origin-i')
    };
    
    contentMessage.querySelector('.message__text').textContent = `${userName}: ${parsedEvent.text}`;
    contentMessage.querySelector('.message__time').textContent = `${date.getHours()}:${dateMinutes}`;
    messageHistory.append(contentMessage);

    const midOver = document.querySelector('.mid_overflow');
    const height = midOver.scrollHeight - midOver.scrollTop;

    if (height > 889) return;

    const lastMessage = messageHistory.lastElementChild;
    lastMessage.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'end'});
};


export default sendMessage;
