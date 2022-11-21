import { AUTH } from './auth.js';

window.addEventListener("DOMContentLoaded", () => {
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
        getMessagesFromServer();
    }
});

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
            document.cookie = `${e.target[0].value}; max-age=3600`;
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
    })
}

function addListener(className) {
    document.querySelector(className).addEventListener('click', () => {
        showPopUp(className);
    })
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
    response(email);
    
}
function fixDate(date) {
    const currentTime = new Date();
    if (!date) return `${currentTime.getHours()}:${currentTime.getMinutes()}`;
    date = new Date(date);
    return `${date.getDate()}/${date.getMonth()} - ${date.getHours()}:${date.getMinutes()}`;
}

async function sendMessage(message, user, date) {
    let messageClassName = user ? 'other_messages' : 'my_messages'
    const div = createChild('div', messageClassName);
    const msg = createChild('span', null, user ? `${user}: ${message}` : 'Я: ' + message);
    const time = createChild('span', 'time', fixDate(date));
    const msgBox = createChild('div', user ? 'message_delivered' : 'message_send');
    div.prepend(msgBox);
    msgBox.prepend(time);
    msgBox.prepend(msg);
    document.querySelector('.messages').prepend(div);
}

async function getMessagesFromServer() {
    let response = await fetch(`${AUTH}messages`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: `Bearer ${document.cookie}`,
        },
    });
    let result = await response.json();
    for (let key of result.messages) {
        sendMessage(key.text, key.user.name, key.updatedAt);
    }
}

function createChild(tag, className, content) {
    tag = document.createElement(tag);
    tag.className = className;
    if (Boolean(content)) tag.textContent = content;
    return tag;
}

async function response(mail) {
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
    if (result.ok) {
        showPopUp('.response');
    } else {
        alert(`Произошла ошибка: ${result.message}`)
    } 
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

    if (result.ok) {
        hidePopUp('.settings');
    }
    else {
        showPopUp('.auth');
    }
}
