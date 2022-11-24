import { format } from 'date-fns'

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

    let user = {
        email: ""
    };

    user.email = emailText;

    let response = await fetch('https://edu.strada.one/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    });

    let result = await response.json();
    alert(result.message);
}