import {getCookieValue} from './getCookieValue.js';

let a = 0;
let b = 20;

const showNewMessages = function(arr) {
    const messageHistory = document.querySelector('.mid');
    const templateMessage = document.querySelector('.template-message');
    const cookieEmail = getCookieValue('email');

    if (b > 299) return;
    for (let i = a; i < b; i++) {
        const departureDate = new Date(arr[i].createdAt);
        let departureDateMin = departureDate.getMinutes();
            if (departureDateMin < 10) {
                departureDateMin = '0'+ departureDateMin;
            };
        const contentMessage = templateMessage.content.cloneNode(true);
            if (arr[i].user.email !== cookieEmail) {
                contentMessage.querySelector('div').classList.add('origin-companion');
            } else {
                contentMessage.querySelector('div').classList.add('origin-i');
            };
        let userName = arr[i].user.name;
            if (arr[i].user.email === cookieEmail) {
                userName = 'Я';
            };
        contentMessage.querySelector('.message__time').textContent = `${departureDate.getHours()}:${departureDateMin}`;
        contentMessage.querySelector('.message__text').textContent = `${userName}: ${arr[i].text}`;
        messageHistory.prepend(contentMessage);
    };
    a += 20;
    b += 20;
}

export default showNewMessages;