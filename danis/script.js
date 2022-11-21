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
} from './consts.js';
import { sendEmailForm } from './authorization.js';
import { createMessage } from './createMessage.js';
import { changeName } from './changeName.js';
import { loandingHistoryMessage } from './historyMessage.js';
import { setName } from './confirmation.js';


settingsButton.addEventListener("click", function () {
    popup.classList.toggle('active');
});

closeButton.addEventListener("click", function () {
    popup.classList.remove('active');
});

autorizationForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    sendEmailForm(userEmailForAutorization.value.trim());
    document.querySelector('.autorization__block').style.display = 'none';
    document.querySelector('.input__block').style.display = 'block';
});

mainForm.addEventListener("submit", function (event) {
    event.preventDefault();
    createMessage(inputWriteMessage.value.trim());
    inputWriteMessage.value="";
});

inputForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    inputBlock.style.display = 'none';
    windowChatBlock.style.display = 'flex';
    setName(cookieCode.value.trim(), userEmailForAutorization.value.trim())
    loandingHistoryMessage();
});

changeNameForm.addEventListener("submit", function (event) {
    event.preventDefault();
    changeName(inputNewName.value.trim());
    popup.classList.remove('active');
});