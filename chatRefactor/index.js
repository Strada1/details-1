import { ELEMENTS,POPAPS, scrollValue, nowPOP } from "./const.js";
import {getMessages,getDataUser,sendMessageOnServer, ALL_MESSAGES} from "./request.js";
import { popUp } from "./popup.js";
import { format } from 'date-fns'

ELEMENTS.BUTTONS.forEach((button) => {
    button.addEventListener('click' , (e) => {
    e.preventDefault()
    if(POPAPS.hasOwnProperty(button.classList[2])) {
        popUp(button.classList[2])
    } else if(ELEMENTS.INPUT_MESSAGE.value.trim()) {
        sendMessageOnServer()
    } else {
        alert('Введите сообщение!')
    }
    })
})

export function loadHistoryMessage(result) {
    for(let i = 0; i < 20; i++) {
        renderMessages(result.messages[i], 'Old')
    }
}

function scrollRecentlyMessages(start, end) {
    if(end === 300) {
        return alert("Сообщений больше нет!")
    }
    for(let i = start; i < end; i++) {
        renderMessages(ALL_MESSAGES[0].messages[i] , 'Old')
    }
    scrollValue.start = end
    scrollValue.end = end + 20
}

ELEMENTS.MAIN.addEventListener('scroll' , () => {
    const scrollBottom = ELEMENTS.MAIN.scrollHeight - Math.abs(ELEMENTS.MAIN.scrollTop)
    if(scrollBottom === 425) {
        return scrollRecentlyMessages(scrollValue.start, scrollValue.end)
    }
})

export function renderMessages(message, typeMessage = 'new') {
    const messageTemplate = {}
    message.user.email === 'tighineanu00@mail.ru' 
    ? messageTemplate.user = ELEMENTS.TEMPLATE_MESS_OWN.content.cloneNode(true) 
    : messageTemplate.user = ELEMENTS.TEMPLATE_MESS_OTHER.content.cloneNode(true)
    messageTemplate.user.querySelector('p').textContent = `${message.user.name}:${message.text}`
    messageTemplate.user.querySelector('.main__time').textContent = format(new Date(message.createdAt),'k:mm')
    typeMessage === 'new' 
    ? ELEMENTS.MAIN.prepend(messageTemplate.user)
    : ELEMENTS.MAIN.append(messageTemplate.user)
}

window.onload = getDataUser()
window.onload = getMessages()

