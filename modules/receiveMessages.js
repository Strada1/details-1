import { getCookieValue } from "./getCookieValue.js";
import showNewMessages from "./showPrevMessages.js";

const receiveMessages = async function() {
    const messageHistory = document.querySelector('.mid');
    const cookieToken = getCookieValue('token');
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${cookieToken}`
        }
    };
    const response = await fetch('https://edu.strada.one/api/messages/',options);
    const resultMessages = await response.json();
    localStorage.setItem('resultMessages', JSON.stringify(resultMessages));
    let resultMessagesLS = JSON.parse(localStorage.getItem('resultMessages'));
    showNewMessages(resultMessagesLS.messages);
    const lastMessage = messageHistory.lastElementChild;
    lastMessage.scrollIntoView({behavior: 'auto', block: 'end', inline: 'end'});
};

export default receiveMessages;