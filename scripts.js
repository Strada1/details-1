import { AUTH } from './auth.js';
const socket = new WebSocket(`ws://edu.strada.one/websockets?${document.cookie}`);

window.onload = function() {
    addListener('.settings');
    addListener('.exit');
    addListener('.auth');
    document.querySelector('.form').addEventListener('submit', (message) => {
        message.preventDefault();
        const msg = document.querySelector('.input');
        msg.value ? sendMessage(msg.value) : alert("ошибка отправки пустого сообщения");
        msg.value = '';

    });

    if (!document.cookie) {
        showPopUp('.auth');
    } else {
        getOwnUser(document.cookie);
        getMessagesFromServer(document.cookie);
    }
}

socket.onmessage = function(event) {
    const temp = JSON.parse(event.data);
    console.log(temp);
    sendMessage(temp.text, temp.user.name, temp.createdAt, temp.user.email);
}

function sendOwnMessage(message) {
    socket.send(JSON.stringify({ 'text': message }));
}

function showPopUp(className) {
    const tag = document.querySelector(`${className}-menu`);
    tag.parentElement.classList.add('modal-show');
    const main = document.querySelector('.main');
    main.classList.add('blur');
    tag.children[0].children[1].addEventListener('click', () => hidePopUp(className));

    if (className === '.auth') {
        tag.children[2].addEventListener('submit', (e) => {
            hidePopUp(className);
            autorize(e);            
        });
    } else if (className === '.response') {
        tag.children[2].addEventListener('submit', (e) => {
            e.preventDefault();
            document.cookie = `${e.target[0].value}; max-age=93600`;
            hidePopUp(className);
            setName(e.target[0].value);
        });
    }
}

function setName(token) {
    showPopUp('.settings');
    document.querySelector('.settings-menu').addEventListener('submit', (e) => {
        e.preventDefault();
        hidePopUp('.response');
        sendUser(token, e.target[0].value);
    });
}

function addListener(className) {
    document.querySelector(className).addEventListener('click', () => {
        showPopUp(className);
    });
}

function hidePopUp(className) {
    const tag = document.querySelector(`${className}-menu`);
    tag.parentElement.classList.remove('modal-show');
    const main = document.querySelector('.main');
    main.classList.remove('blur');
}

async function autorize(e) {
    e.preventDefault();
    let email = document.querySelector('#autorize').children[0].value;
    sendEmail(email);
    
}

function fixDate(date) {
    const currentTime = new Date();
    if (!date) return `${currentTime.getHours()}:${currentTime.getMinutes()}`;
    date = new Date(date);

    if (currentTime.getFullYear() === date.getFullYear() && 
        currentTime.getMonth() === date.getMonth() &&
        currentTime.getDate() === date.getDate()) {
            return `${date.getHours()}:${date.getMinutes()}`;
        }

    return `${date.getDate()}/${date.getMonth()} - ${date.getHours()}:${date.getMinutes()}`;
}

async function sendMessage(message, user, date, email) {
    let messageClassName = user && email != sessionStorage.getItem('email') ? 'other_messages' : 'my_messages';
    const div = createChild('div', messageClassName);
    const msg = createChild('span', null, user && email != sessionStorage.getItem('email') ? `${user}: ${message}` : 
                                                                                             `Я: ${message}`);
    const time = createChild('span', 'time', fixDate(date));
    const msgBox = createChild('div', user ? 'message_delivered' : 'message_send');
    div.prepend(msgBox);
    msgBox.prepend(time);
    msgBox.prepend(msg);
    document.querySelector('.messages').prepend(div);

    if (messageClassName === 'my_messages' && msgBox.className === 'message_send') {
        sendOwnMessage(message);
        div.remove();
    }
}

// а тут отправка через POST и она на считывается websocet'ом
async function sendMessageToServer(message, element, token) {
    let msg;
    try {
        msg = await fetch(`${AUTH}messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                'text': message,
                'user.name': sessionStorage.getItem('name'),
                'user.email': sessionStorage.getItem('email'),
            }),
        });
    } catch(err) {
        console.log(err);
    }

    if (msg.ok) {
        element.className = 'message_delivered';
    } else alert(`ошибка отправки сообщения: ${msg.message}`);
}

async function getMessagesFromServer(token) {
    let response;
    try {
        response = await fetch(`${AUTH}messages`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: `Bearer ${token}`,
            },
        });
    } catch(err) {
        console.log(err);
    }

    if (response && response.ok) {
        let result = await response.json();
        console.log(result);
        for (let key of result.messages) {
            sendMessage(key.text, key.user.name, key.createdAt, key.user.email);
        }
    } else alert(`ошибка получания истории: ${response.message}`);
}

function createChild(tag, className, content) {
    tag = document.createElement(tag);
    tag.className = className;
    if (Boolean(content)) tag.textContent = content;
    return tag;
}

async function sendEmail(mail) {
    let result;
    try{
        result = await fetch(`${AUTH}user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({'email': mail}),
        });
    } catch(err) {
        console.log(err);
    }

    if (result && result.ok) {
        showPopUp('.response');
        sessionStorage.setItem('email', mail);
    } else {
        alert(`Произошла ошибка: ${result.message}`)
    } 
}

async function getOwnUser(token) {
    let response;
    try {
        response = await fetch(`${AUTH}user/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: `Bearer ${token}`,
            },
        });
    } catch(err) {
        console.log(err);
    }

    if (response && response.ok) {
        const user = await response.json();
        sessionStorage.setItem('email', user.email);
        sessionStorage.setItem('name', user.name);
    } else alert(`ошибка запроса пользователя: ${response.message}`);
}

async function sendUser(token, myname) {
    let result;
    try {
        result = await fetch(`${AUTH}user`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({'name': myname}),
        });
    } catch (err) {
        console.log(err);
    }

    if (result && result.ok) {
        hidePopUp('.settings');
        sessionStorage.setItem('name', myname);
    }
    else {
        showPopUp('.auth');
    }
}
