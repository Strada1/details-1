import { AUTH } from './auth.js';

window.addEventListener("DOMContentLoaded", () => {
    addListener('.settings');
    addListener('.exit');
    addListener('.auth');
    document.querySelector('.form').addEventListener('submit', (message) => {
        message.preventDefault();
        const msg = document.querySelector('.input');
        sendMessage(msg.value);
        msg.value = '';

    });
    if (!document.cookie) {
        showPopUp('.auth');
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
            document.cookie = `${e.target[0].value}; max-age=60`;
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
        console.log(e.target[0].value);
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

function sendMessage(message) {
    const div = createChild('div', 'my_messages');
    const msg = createChild('span', null, `Я: ${message}`);
    let date = new Date();
    const time = createChild('span', 'time', `${date.getHours()}:${date.getMinutes()}`);
    const msgBox = createChild('div', 'message_send');
    div.prepend(msgBox);
    msgBox.prepend(time);
    msgBox.prepend(msg);
    document.querySelector('.messages').prepend(div);
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
        result = await fetch(AUTH, {
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
        result = await fetch(AUTH, {
            method: 'PATCH',
            headers: {
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
