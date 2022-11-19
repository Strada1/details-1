import { UI, DATE_FORMAT } from "./view.js";
import { Storage } from "./storage.js";
import { DATA_MESSAGES } from "./data_messages.js";
import { MEMBERS } from "./members.js";
import {  } from "./ui_service.js";
import { renderCurrentMessage, renderMyMessage, renderOutMessage, renderPeriod, dateFormation } from "./render.js";

let user = {};
let booleanResult;
let publicDate = DATA_MESSAGES[0].date;
let membersStorage = new Storage('members', 'local');
let messagesStorage = new Storage ('messages', 'session');

const arrMembers = ['Daria Ovsiannykova 🌱', 'Danis', 'ᅠ', 'соня', 'илназ','Egor Sychev','Павел Строгов','Timofey Tarasov','Михаил', 'боря китаев','Michael Korolev', 'Kseniya','Alex Rusakov', 'Vitalik', 'Banan 🍌 Baldja','Ya Rolly 🔱', 'Artem Dimitrov', 'Yaroslav Shishkin'];

for(let i = 0; i < arrMembers.length; i++) {
    assignIcon(arrMembers[i]);
}

UI.CHAT.INPUT.addEventListener('submit', (event) => handlerGetMessage(event));

UI.CHAT.EXIT.click();
renderMessages();

function handlerGetMessage(event) {
    event.preventDefault();
    if(!UI.CHAT.MESSAGE.value.trim()) {
        UI.CHAT.MESSAGE.value = '';
        UI.CHAT.MESSAGE.focus();
        return;
    }
    let message = UI.CHAT.MESSAGE.value;
    renderCurrentMessage(message);
    const letter = {id: new Date(), name: message};
    let myMessages = messagesStorage.get();
    messagesStorage.isEmpty()
    ? myMessages = [letter]
    : myMessages = [...myMessages, letter];
    messagesStorage.set(myMessages);
};

function renderMessages() {
    renderPeriod(dateFormation(publicDate));
    DATA_MESSAGES.forEach(message => {
        dateDetection(message);
        if(message.nikName === 'Dmitry S') {
            renderMyMessage(message);
        } else {
            const chatMembers = membersStorage.get();
            renderOutMessage(message, chatMembers);
        }
    })
};

function dateDetection(message) {
    const currentDate = message.date;
    if(new Date(publicDate).getMonth() < new Date(currentDate).getMonth() ||
        new Date(publicDate).getMonth() === new Date(currentDate).getMonth() &&
        new Date(publicDate).getDate() < new Date(currentDate).getDate()) {
        publicDate = currentDate;
        renderPeriod(dateFormation(publicDate));
        return publicDate;
    }
};

function assignIcon(nameReceived) {
    for (let i = 0; i < MEMBERS.length; i++) {
        if(MEMBERS[i].name.includes(nameReceived)) {
            user.icon = MEMBERS[i].icon;
            user.name = nameReceived;
            user.color = MEMBERS[i].color;
            const chatMembers = membersStorage.get();
            if(membersStorage.isEmpty()) {
                chatMembers.push(user)
                membersStorage.set(chatMembers); 
            }
            chatMembers.forEach(member => {
                booleanResult += (user.name === member.name);  
            });
            if(booleanResult === 0) {
                chatMembers.push(user);
                membersStorage.set(chatMembers);
            }
            booleanResult = 0;
            return;
        }
    };
};

function getCurrentTime() {
    const dateTimeNow = new Date().toLocaleTimeString('nu', DATE_FORMAT.TIME);
    const dateDayNow = new Date().toLocaleDateString('nu', DATE_FORMAT.DAY);
    UI.CHAT.TIME.innerText = dateTimeNow;
    UI.CHAT.DAY.innerText = dateDayNow;
};

getCurrentTime();
setInterval(getCurrentTime, 1000);

