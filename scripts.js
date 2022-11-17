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
    showPopUp('.auth');
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
    }
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

function autorize(e) {
    e.preventDefault();
    showPopUp('.response');
}

function sendMessage(message) {
    const div = createChild('div', 'my_messages');
    const msg = createChild('span', null, `Я: ${message}`);
    const time = createChild('span', 'time');
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