import { ELEMENTS, POPUP_BUTTONS,POPAPS, URL } from "./const.js";
import {getMessages,sendMessageOnServer ,getDataUser, changeName, sendEmail, ALL_MESSAGES} from "./request.js";
import { popUp } from "./popup.js";

ELEMENTS.BUTTONS.forEach((button) => {
    button.addEventListener('click' , (e) => {
    e.preventDefault()
    if(POPAPS.hasOwnProperty(button.classList[2])) {
        popUp(button.classList[2])
    } else {
        sendMessageOnServer()
    }
    })
})


export function checkHistoryMessages(result, scroll) {
    // result.messages.reverse()
    console.log(result)
    for(let i = 0; i < 20; i++) {
        renderLiveMessages(result.messages[i])
    }


}

const value = {start:20,end:40,}

function asd(start, end) {
    for(let i = start; i < end; i++) {
        renderLiveMessages(ALL_MESSAGES[0].messages[i])
    }
    console.log(value)
    value.start = end
    value.end = end + 20
    console.log(value)
}

ELEMENTS.MAIN.addEventListener('scroll' , () => {
    const scrollBottom = ELEMENTS.MAIN.scrollHeight - Math.abs(ELEMENTS.MAIN.scrollTop)
    console.log(scrollBottom)
    if(scrollBottom === 425) {

        return asd(value.start, value.end)
    }
})

export function renderLiveMessages(message) {
    console.log(message)
    if(message.user.email == 'tighineanu00@mail.ru') {
        renderMyMessage(message)
    }else {
        renderOtherMessage(message.user.name , message.text)
    }
}
export function renderLiveNewMessages(message) {
    if(message.user.email == 'tighineanu00@mail.ru') {
        const myMessages = ELEMENTS.TEMPLATE_MESS_OWN.content.cloneNode(true)
        myMessages.querySelector('p').textContent = `${message.user.name}:${message.text}`
        ELEMENTS.MAIN.prepend(myMessages)
    }else {
        const otherMessage = ELEMENTS.TEMPLATE_MESS_OTHER.content.cloneNode(true)
        otherMessage.querySelector('p').textContent = `${massageOwnName}: ${messageText}`
        ELEMENTS.MAIN.prepend(otherMessage)
    }
}
function renderMyMessage(message) {
    const myMessages = ELEMENTS.TEMPLATE_MESS_OWN.content.cloneNode(true)
    myMessages.querySelector('p').textContent = `${message.user.name}:${message.text}`
    ELEMENTS.MAIN.append(myMessages)
}

function renderOtherMessage(massageOwnName , messageText) {
    const otherMessage = ELEMENTS.TEMPLATE_MESS_OTHER.content.cloneNode(true)
    otherMessage.querySelector('p').textContent = `${massageOwnName}: ${messageText}`
    ELEMENTS.MAIN.append(otherMessage)
}


function changeBackground(bgLink) {
    const body = document.body
    body.style.background = `url('${bgLink}')`
    body.style.backgroundRepeat = `no-repeat`
    body.style.backgroundSize = 'cover'
    ELEMENTS.BG_LINK.value = ''
}


ELEMENTS.CHANGE_BG_BTN.addEventListener('click' , () => {
    if(ELEMENTS.BG_LINK.value.trim()) {
        changeBackground(ELEMENTS.BG_LINK.value)
        
    } else {
        alert('Введите ссылку!')
    }

})

window.onload = getMessages()

