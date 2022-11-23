import {
    settingsButton,
    popup,
    closeButton,
    mainForm,
    inputForm,
    autorizationForm,
    userEmailForAutorization,
    inputBlock,
    windowChatBlock,
    changeNameForm,
    inputNewName,
    cookieCode,
    inputWriteMessage,
    getUrlSocket
} from './consts.js';
import { sendEmailForm } from './authorization.js';
import { createMessage } from './createMessage.js';
import { changeName } from './changeName.js';
import { loandingHistoryMessage } from './historyMessage.js';
import { setName } from './confirmation.js';
// import { socket } from './socket.js';


settingsButton.addEventListener("click", function () {
    popup.classList.toggle('active');
});

closeButton.addEventListener("click", function () {
    popup.classList.remove('active');
});

export function existsCookie(name) {
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));

    return matches ? decodeURIComponent(matches[1]) : undefined;
}

if (existsCookie('user')) {
    windowChatBlock.style.display = 'flex';
    loandingHistoryMessage(existsCookie('user'));
} else {
    document.querySelector('.autorization__block').style.display = 'block';
}




autorizationForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    sendEmailForm(userEmailForAutorization.value.trim());
    document.cookie = `userEmail=${userEmailForAutorization.value.trim()}`;
    document.querySelector('.autorization__block').style.display = 'none';
    document.querySelector('.input__block').style.display = 'block';
});

mainForm.addEventListener("submit", function (event) {
    event.preventDefault();
    postMessageToServer(inputWriteMessage.value)
    inputWriteMessage.value = "";
});


inputForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    inputBlock.style.display = 'none';
    windowChatBlock.style.display = 'flex';
    setName(cookieCode.value.trim(), userEmailForAutorization.value.trim())
    loandingHistoryMessage(existsCookie('user'));


});

changeNameForm.addEventListener("submit", function (event) {
    event.preventDefault();
    changeName(inputNewName.value.trim(), existsCookie('user'));
    console.log(inputNewName.value.trim());
    popup.classList.remove('active');
});



const socketName = new WebSocket(`${getUrlSocket}${existsCookie('user')}`)

function postMessageToServer(textMessage) {
    socketName.send(JSON.stringify({ text: textMessage }));
}

socketName.onmessage = function (event) {
    const result = JSON.parse(event.data);
    console.log(result);
    if (result.user.email === existsCookie('userEmail')) {
        createMessage(result.text, result.user.name, result.createdAt);
        console.log(result.user.name);
    } else {
        createMessage(result.text, result.user.name, result.createdAt, 'another')

    }
}