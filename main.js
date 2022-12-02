import { UI } from "./ui.js";
import {wsOpen, wsListener, wsSend} from "./ws.js"


let socket;

UI.inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // newMessage(UI.inputForm.childNodes[1].value);
    wsSend(socket, UI.inputForm.childNodes[1].value)
    UI.inputForm.childNodes[1].value = '';
})

UI.sendEmail.addEventListener('submit', (e) => {
    e.preventDefault();
    sendTokenRequest();
})

UI.popupTokenForm.addEventListener('submit', (e) => {
    e.preventDefault();
    saveToken();
    socket =  wsOpen();
    wsListener(socket);
})

UI.popupNameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    saveName();
})

UI.settingsButton.addEventListener('click', () => {
    getUserInfo();
})

UI.authButton.addEventListener('click', getToAuthorization)

export function newMessage(text, time = new Date(), userName) {
    let message = UI.template.content.cloneNode(true);
    let div = document.createElement('div');
    div.append(message);
    div.classList.add('message');
    div.childNodes[1].textContent = `${userName}:`;
    // console.log(getCookie('name'));
    if (userName == 'Boris') {
        console.log('aaaaaasssssssssssss');
        div.classList.add('my', 'sent');
        div.childNodes[1].textContent = `Я:`;
    }
    div.childNodes[3].textContent = text;
    const timeStamp = div.childNodes[5];
    // console.log(time.childNodes);
    // const currentDate = new Date();
    timeStamp.childNodes[1].textContent = time.getHours();
    timeStamp.childNodes[5].textContent = time.getMinutes();

    UI.chatArea.prepend(div);
    // UI.chatArea.append(div);
}

function printMessages(messagesArray) {
    // console.log(messagesArray.messages[0]);
    messagesArray.messages.reverse();
    for (let message of messagesArray.messages) {
        const text = message.text;
        const time = new Date(message.createdAt);
        let userName = message.user.name;
        newMessage(text, time, userName);
    }
}

async function sendTokenRequest() {
    try {
        console.log(UI.emailInput.value);
        let userEmail = UI.emailInput.value;
        console.log(userEmail)
        const serverUrl = 'https://edu.strada.one/api/user';

        let response = await fetch(serverUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({ email: userEmail }),
        });
        console.log(response);
        if (response.ok) {
            alert(`Все окей, статус ответа: ${response.status}`);
            getToAuthorization();
            // sendToken()
        }
    } catch {
        console.log(err);
    }
}

function getToAuthorization() {
    UI.emailPopup.classList.add('popup__hidden');
    UI.authPopup.classList.remove('popup__hidden');
}

async function saveToken() {
    const token = UI.popupTokenInput.value;
    console.log(token);
    document.cookie = `token=${token}`;
    console.log(document.cookie);
    UI.authPopup.classList.add('popup__hidden');
    getMessages();
}

function saveName() {
    const newName = UI.popupNameInput.value;
    document.cookie = `name=${newName}`;
    setName();
}

async function setName() {
    const urlPost = ' https://edu.strada.one/api/user';
    const nameUser = getCookie('name');
    const token = getCookie('token');
    console.log(name);
    await fetch(urlPost, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ name: nameUser })
    });
    getUserInfo();
}

// возвращает куки с указанным name,
// или undefined, если ничего не найдено
export function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

async function getUserInfo() {
    const url = `https://edu.strada.one/api/user/me`;
    const token = getCookie('token');
    const nameUser = getCookie('name');
    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json;charset=utf-8',
        },
        // body: JSON.stringify({ name: nameUser })
    })
    const result = await response.json();
    console.log(result);
    UI.currentName.textContent = result.name;
}

async function getMessages() {
    const url = `https://edu.strada.one/api/messages/`;
    const token = getCookie('token');
    const nameUser = getCookie('name');
    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json;charset=utf-8',
        },
        // body: JSON.stringify({ name: nameUser })
    })
    const result = await response.json();
    console.log(result);
    printMessages(result);
}