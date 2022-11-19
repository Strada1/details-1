import { popupBgAuth, popupAuth, closePopupButtonAuth } from './popup.js'

const ELEMENTES = {
    MESSAGE_FORM: document.querySelector('.form-text'),
    MESSAGE_INPUT: document.querySelector('#text-message'),
    TEMPLATE_MY_MSG: document.querySelector('#my-msg'),
    CHAT: document.querySelector('.chat'),
    EMAIL_FORM: document.querySelector('.popup_auth'),
    EMAIL_INPUT: document.querySelector('#email-input')
}
const myname = 'Я'

window.onload = function() {
    popupAuth.classList.add('active');
    popupBgAuth.classList.add('active');
    closePopupButtonAuth.addEventListener('click',() => { 
        popupBgAuth.classList.remove('active'); 
        popupAuth.classList.remove('active'); 
    });
    ELEMENTES.EMAIL_FORM.addEventListener('submit', (event) => {
        event.preventDefault();
        stradaResponse()
    })
}

async function stradaResponse() {
    const stradaUrl = 'https://edu.strada.one/api/user'
    const email = ELEMENTES.EMAIL_INPUT.value
    ELEMENTES.EMAIL_INPUT.value = ''
    const response = await fetch(stradaUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({email: email})
    })
}
//
function sendMessageHandler() {
    const message = ELEMENTES.TEMPLATE_MY_MSG.content.querySelector('.message-container > span')
    message.textContent = `${myname}: ${ELEMENTES.MESSAGE_INPUT.value}`
    ELEMENTES.MESSAGE_INPUT.value = ''
    ELEMENTES.CHAT.prepend(ELEMENTES.TEMPLATE_MY_MSG.content.cloneNode(true));
}

ELEMENTES.MESSAGE_FORM.addEventListener('submit', (event) => {
    event.preventDefault()
    sendMessageHandler()
});



