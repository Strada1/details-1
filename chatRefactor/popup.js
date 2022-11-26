import { newKey } from "./localstorage.js";
import { ELEMENTS} from "./const.js";
import {getDataUser, changeName, sendEmail} from "./request.js";
export function popUp(button ) {
    const saveKey = {}
    const nowPOP = {}
    if(button == 'popupSettings') {
        nowPOP.thisPopUp = document.querySelector(`#${button}`)
        nowPOP.thisPopUp.classList.add('popup--active')

        ELEMENTS.CHANGE_NAME.addEventListener('click' , (e) => {
            e.preventDefault()
            changeName(ELEMENTS.NAME_VALUE.value)
        })

        ELEMENTS.POPUP_CLOSE_BUTTONS.forEach((button) => {
            button.addEventListener('click' , (e) => {
            e.preventDefault()
            nowPOP.thisPopUp.classList.remove('popup--active')
             })
        })
    }
    if(button == 'popupSingIn') {
        nowPOP.thisPopUp = document.querySelector(`#${button}`)
        nowPOP.thisPopUp.classList.add('popup--active')

        ELEMENTS.POPUP_CLOSE_BUTTONS.forEach((button) => {
            button.addEventListener('click' , (e) => {
            e.preventDefault()
            nowPOP.thisPopUp.classList.remove('popup--active')
             })
        })
    } else if (button == 'SingIn') {
        if(ELEMENTS.EMAIL.value.trim()) {
            sendEmail(ELEMENTS.EMAIL.value)
            ELEMENTS.EMAIL.value = ''
            nowPOP.thisPopUp = document.querySelector(`#${button}`)
            nowPOP.thisPopUp.classList.add('popup--active')
        } else {
            alert('Введите Email!')
        }
        ELEMENTS.POPUP_CLOSE_BUTTONS.forEach((button) => {
            button.addEventListener('click' , (e) => {
            e.preventDefault()
            nowPOP.thisPopUp.classList.remove('popup--active')
             })
        })
    } else if(button == 'code') {
        nowPOP.thisPopUp = document.querySelector(`#${button}`)
        if(ELEMENTS.CHAT_CODE.value.trim()) {
        saveKey.key = ELEMENTS.CHAT_CODE.value
        newKey.set(ELEMENTS.CHAT_CODE.value)
        getDataUser()
        ELEMENTS.CHAT_CODE.value = ''
  
        return
        } else {
            alert('Введите код!')
        }
    } else {
        nowPOP.thisPopUp = document.querySelector(`#${button}`)
        nowPOP.thisPopUp.classList.add('popup--active')
        ELEMENTS.POPUP_CLOSE_BUTTONS.forEach((button) => {
            button.addEventListener('click' , (e) => {
            e.preventDefault()
            nowPOP.thisPopUp.classList.remove('popup--active')
             })
        })
    }
}