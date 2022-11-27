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
    getNameUserCoockie,
    getNameUserEmail,
} from './consts.js';
import { sendEmailForm } from './authorization.js';
import { changeName } from './changeName.js';
import {setMessagesLocalStorage} from './setMessagesLocalStorage.js';
import { setName } from './confirmation.js';
import { postMessageToServer } from './socket.js';
import './virtualization.js';

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

if (existsCookie(getNameUserCoockie)) {
    windowChatBlock.style.display = 'flex';
} else {
    document.querySelector('.autorization__block').style.display = 'block';
}

autorizationForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    sendEmailForm(userEmailForAutorization.value.trim());
    document.cookie = `${getNameUserEmail}=${userEmailForAutorization.value.trim()}`;
    document.querySelector('.autorization__block').style.display = 'none';
    document.querySelector('.input__block').style.display = 'block';
});

mainForm.addEventListener("submit", function (event) {
    event.preventDefault();
    setMessagesLocalStorage(existsCookie(getNameUserCoockie));
    postMessageToServer(inputWriteMessage.value);
    inputWriteMessage.value = "";
});

inputForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    inputBlock.style.display = 'none';
    windowChatBlock.style.display = 'flex';
    setName(cookieCode.value.trim(), userEmailForAutorization.value.trim());
    setMessagesLocalStorage(existsCookie(getNameUserCoockie));
});

changeNameForm.addEventListener("submit", function (event) {
    event.preventDefault();
    changeName(inputNewName.value.trim(), existsCookie(getNameUserCoockie));
    console.log(inputNewName.value.trim());
    popup.classList.remove('active');
});