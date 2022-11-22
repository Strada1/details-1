import { format } from 'date-fns'

const btnSettings = document.getElementById('btnSettings');
const btnWindowSettingsExit = document.getElementById('btnWindowSettingsExit');
const windowChat = document.getElementsByClassName('windowChat');
const windowSettings = document.getElementById('windowSettings');

btnSettings.addEventListener("click", () => { windowSettings.style.display = 'flex'; });
btnWindowSettingsExit.addEventListener("click", () => { windowSettings.style.display = 'none'; });

document.getElementById("msgEnterForm").onsubmit = function () { sendMessage(this.inputMessage.value); this.inputMessage.value = ""; return false };

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