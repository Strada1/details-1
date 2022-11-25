import { getDate, getMessagesLocalStorage } from "./script.js";
import { ELEMENTS, USER } from "./const.js"

const createMessage = (email, name, messageInput, date, method) => {
  const sendInput = document.querySelector('.sending__input');
  const template = document.querySelector('template');
  const message = template.content.querySelector('.chate__message');
  const messageText = template.content.querySelector('.message__text');
  const messageTime = template.content.querySelector('.message__time');

  if (email === USER.email) {
    if (message.classList.contains('chate__message_out')) {
      message.classList.remove('chate__message_out')
    }
    messageText.textContent = `Я: ${messageInput}`
  } else {
    message.classList.add('chate__message_out')
    messageText.textContent = `${name}: ${messageInput}`
  }

  messageTime.textContent = getDate(date)
  sendInput.value = ''

  addMessageToDom(template, method)
}

const addMessageToDom = (template, method = 'append') => {
  if (method === 'prepend') {
    ELEMENTS.chat.prepend(template.content.cloneNode(true))
  } else {
    ELEMENTS.chat.append(template.content.cloneNode(true))
  }
}


const addActive = (block, close) => {
  block.classList.add('active')
  ELEMENTS.container.style.display = 'none'
  document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'

  if (close) {
    ELEMENTS.container.style.display = 'block'
    document.body.style.backgroundColor = ''
    block.classList.remove('active')
  }
}

const isValidPlaceClick = (e) => {
  if (e.target.classList.contains('popup__close') || !e.target.closest('.active') && !e.target.classList.contains('control__settings') && (ELEMENTS.popupAuthorization.classList.contains('active') || ELEMENTS.popupConfirm.classList.contains('active') || ELEMENTS.popupGetName.classList.contains('active'))) {
    addActive(document.querySelector('.active'), true)
  }
  return
}

const checkScrollHeight = () => {
  const heightBlock = parseInt(window.getComputedStyle(ELEMENTS.chat).height)

  if ((ELEMENTS.chat.scrollHeight + ELEMENTS.chat.scrollTop) <= heightBlock) {
    getMessagesLocalStorage()
  }

}

const showFinishMessage = () => {
  if (ELEMENTS.chat.lastElementChild.classList.contains('finish-message')) {
    return
  }

  const elem = document.createElement('p')
  elem.classList.add('finish-message')
  elem.textContent = 'Вся история загружена'
  ELEMENTS.chat.lastElementChild.after(elem)
}

export { isValidPlaceClick, createMessage, addActive, checkScrollHeight, showFinishMessage }