import { windowChat, messagesCount } from './consts.js'
import { existsCookie } from './script.js'
import { createMessage } from './createMessage.js';

let countOne = 20;
let countTwo = messagesCount * 2;

    const arrayMessages = JSON.parse(localStorage.getItem('messages'));

    windowChat.addEventListener("scroll", function () {
        scrollLurking();
    });

    let sliceArrayMessages = arrayMessages.slice(0, messagesCount);

    function scrollLurking() {
        if (windowChat.scrollTop === 0) {
            sliceArrayMessages = arrayMessages.slice(countOne, countTwo);
            renderMessages(sliceArrayMessages);
            countOne = countOne + messagesCount;
            countTwo = countTwo + messagesCount;   
        }
    }

    renderMessages(sliceArrayMessages)

    function renderMessages(array) {
        array.map(function (item, index) {
            if (array[index].user.email === existsCookie('userEmail')) {
                createMessage(array[index].text, array[index].user.name, array[index].createdAt.substr(5, 11));
            } else {
                createMessage(array[index].text, array[index].user.name, array[index].createdAt.substr(5, 11), 'another');
            }
        });
    }

