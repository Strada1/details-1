import { getCookieValue } from "./getCookieValue.js";

const receiveMessages = async function() {
    const messageHistory = document.querySelector('.mid');
    const templateMessage = document.querySelector('.template-message');
    const cookieToken = getCookieValue('token');
    const cookieEmail = getCookieValue('email');
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${cookieToken}`
        }
    };
    const response = await fetch('https://edu.strada.one/api/messages/',options);
    const resultMessages = await response.json();
    localStorage.setItem('resultMessages', JSON.stringify(resultMessages));
    const resultMessagesLS = JSON.parse(localStorage.getItem('resultMessages'));
    console.log(resultMessagesLS);
    const messages = (resultMessages.messages).reverse();
    messages.forEach(element => {
        const departureDate = new Date(element.createdAt);
        let departureDateMin = departureDate.getMinutes();
        if (departureDateMin < 10) {
            departureDateMin = '0'+ departureDateMin;
        }
        const contentMessage = templateMessage.content.cloneNode(true);
        if (element.user.email !== cookieEmail) {
            contentMessage.querySelector('div').classList.add('origin-companion');
        }
        else {
            contentMessage.querySelector('div').classList.add('origin-i');
        };
        let userName = element.user.name;
        if (element.user.email === cookieEmail) {
            userName = 'Я';
        };

        contentMessage.querySelector('.message__time').textContent = `${departureDate.getHours()}:${departureDateMin}`;
        contentMessage.querySelector('.message__text').textContent = `${userName}: ${element.text}`;
        messageHistory.append(contentMessage);
    });
    const lastMessage = messageHistory.lastElementChild;
    lastMessage.scrollIntoView({behavior: 'auto', block: 'end', inline: 'end'});
};

export default receiveMessages;