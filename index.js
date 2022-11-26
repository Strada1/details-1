import { format } from 'date-fns'
import { URL_USER_INFORMATION, URL_USER_REGISTRATION } from './const.js';

const windowChat = document.getElementsByClassName('windowChat');
const windowSettings = document.getElementById('windowSettings');

// const btnWindowAuthorizationExit = document.getElementById('btnWindowAuthorizationExit');

btnSettings.onclick = () => { windowSettings.style.display = 'flex'; };
btnWindowSettingsExit.onclick = () => { windowSettings.style.display = 'none'; };
btnAuthorization.onclick = () => { windowAuthorization.style.display = 'flex'; };
btnWindowAuthorizationExit.onclick = () => { windowAuthorization.style.display = 'none'; };

msgEnterForm.onsubmit = function () { sendMessage(this.inputMessage.value); this.inputMessage.value = ""; return false };
emailEnterForm.onsubmit = function () { sendEmail(this.inputEmail.value); this.inputEmail.value = ""; return false };

btnVerification.onclick = () => { windowVerification.style.display = 'flex'; };
btnWindowVerificationExit.onclick = () => { windowVerification.style.display = 'none'; };
codeEnterForm.onsubmit = function () { setCookie(this.inputCode.value) };

nameEnterForm.onsubmit = function () { sendName(this.inputName.value); return false };

btnGetNam.onclick = function () { getName() };

const messages = [];

function Message(text) {
    this.text = text;
    this.date = new Date();
    this.received = false;
    this.author = "Я";
}

function sendMessage(textmessage) {

    if (textmessage === "") return;
    const message = new Message(textmessage);
    messages.push(message);

    showMessage(message);
}

function showMessage(message) {

    let template = `<div class="msgContainer msgOut id="msgContainer">
         <div>
             <span class="msgContainer-author">${message.author}</span>:<span class="msgContainer-text">${message.text}</span>
         </div>
         <div class="msgContainerTime">${format(message.date, "HH:MM")}</div>
    </div>`;

    document.getElementById("main").insertAdjacentHTML('beforeend', template);

}

async function sendEmail(emailText) {

    if (emailText === "") return;

    let user = {
        email: ""
    };

    user.email = emailText;

    let response = await fetch(URL_USER_REGISTRATION, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    });

    let result = await response.json();
    alert(result.message);
}

function setCookie(codeToken) {
    if (codeToken === '') return;
    document.cookie = `token=${encodeURIComponent(codeToken)}; max-age=86400`;
}

function getCookie(name) {
    let cookie = document.cookie;
    if (cookie === '') return;
    return cookie.replace('token=', '');
}

async function sendName(nameText) {

    if (nameText === "") return;

    let token = getCookie('token');

    if (token === "") {
        alert('Code is empty.');
        return
    }

    let user = {
        name: "",
    };

    user.name = nameText;
    console.log(user);

    let response = await fetch(URL_USER_REGISTRATION, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(user)
    });

    let result = await response.json();
    console.log(result);
}

async function getName() {

    console.log("hhh");

    let token = getCookie('token');

    if (token === "") {
        alert('Code is empty.');
        return
    }

    let response = await fetch(URL_USER_INFORMATION, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': `Bearer ${token}`,
        },
    });

    let result = await response.json();
    console.log(result);
}