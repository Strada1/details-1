import { UI, DATE_FORMAT } from "./view.js";
import { Storage } from "./storage.js";
import { MEMBERS } from "./members.js";
import { } from "./ui_service.js";
import { sendMessage } from "./network.js";
import { renderCurrentMessage, renderMyMessage, renderOutMessage, renderPeriod, dateFormation } from "./render.js";

export { renderMessages, userStorage };

let user = {};
let booleanResult;
let publicDate = "2022-11-04T12:28:53.553Z";
let membersStorage = new Storage('members', 'local');
let messagesStorage = new Storage('messages', 'session');
let userStorage = new Storage('user', 'local');

const arrMembers = ['art@strada.one', 'dariannyko@gmail.com','hollywood7878@yandex.ru', 'ᅠ', 'соня', "sonalavrushina@gmail.com",'kamkinaz64@gmail.com',"ilnazrt@mail.ru",'hunky@list.ru', 'tighineanu00@mail.ru','hamit.magic@gmail.com', '237x237@gmail.com','Egor Sychev','Павел Строгов', 'timofiei.tarasov@gmail.com','Михаил', 'боря китаев','Michael Korolev', 'Kseniya','Alex Rusakov', 'Vitalik', 'Banan 🍌 Baldja','Ya Rolly 🔱', 'Artem Dimitrov', 'Yaroslav Shishkin'];

for(let i = 0; i < arrMembers.length; i++) {
    assignIcon(arrMembers[i]);
}

UI.CHAT.INPUT.addEventListener('submit', (event) => handlerGetMessage(event));

UI.CHAT.EXIT.click();

function handlerGetMessage(event) {
    event.preventDefault();
    if(!UI.CHAT.MESSAGE.value.trim()) {
        UI.CHAT.MESSAGE.value = '';
        UI.CHAT.MESSAGE.focus();
        return;
    }
    let message = UI.CHAT.MESSAGE.value;
    // const myMessage = renderCurrentMessage(message);
    sendMessage(message);
    UI.CHAT.MESSAGE.value = '';
    UI.CHAT.MESSAGE.focus();
    // messagesStorage.set(myMessage);
};

function renderMessages(MESSAGES) {
    // renderPeriod(dateFormation(publicDate));
    MESSAGES.forEach(message => {
        publicDate = dateDetection(message, publicDate);
        if(message.user.email === userStorage.get()) {
            renderMyMessage(message);
        } else {
            const chatMembers = membersStorage.get();
            renderOutMessage(message, chatMembers);
        }
    });
};

function dateDetection(message, publicDate) {
    const currentDate = message.createdAt;
    if(new Date(publicDate).getMonth() < new Date(currentDate).getMonth() ||
        new Date(publicDate).getMonth() === new Date(currentDate).getMonth() &&
        new Date(publicDate).getDate() < new Date(currentDate).getDate()) {
        publicDate = currentDate;
        renderPeriod(dateFormation(publicDate));
        return publicDate;
    }
    return publicDate;
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

// function recursionRender(DATA_MESSAGES, publicDate, count) {
//     const lengthList = DATA_MESSAGES.length;
//     const message = DATA_MESSAGES[count];
//     if (count === lengthList) return;
//     dateDetection(message, publicDate);
//     if(message.user.name === 'Dmitry S') {
//         renderMyMessage(message);
//     } else {
//         const chatMembers = membersStorage.get();
//         renderOutMessage(message, chatMembers);
//     }
//     count++
//     recursionRender(DATA_MESSAGES, publicDate, count);
// }

