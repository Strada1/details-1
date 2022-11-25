import { isValidPlaceClick, createMessage, addActive, checkScrollHeight, showFinishMessage } from "./view.js"
import { ELEMENTS, URL, popupAuthorization, popupConfirm, popupGetName, USER } from "./const.js"


const establishSocket = () => {
  const token = document.cookie
  const socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);

  socket.onopen = function (e) {
    ELEMENTS.formSending.addEventListener('submit', () => {
      event.preventDefault()
      sendMessage(socket)
    })
  }

  socket.onmessage = function (event) {
    getMessagesSocket()
  };
}

const sendEmailToServer = async (email) => {
  let response = await fetch(URL.post, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ email })
  })
}

const sendNameToServer = async (name) => {
  let response = await fetch(URL.patch, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Bearer ${document.cookie}`
    },
    body: JSON.stringify({ name })
  })
  getUserServer()
}

const getUserServer = async () => {
  let response = await fetch(URL.get, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${document.cookie}`
    },
  }
  )

  let user = await response.json()
  return user
}

const getDataServer = async (url) => {
  let response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${document.cookie}`
    },
  })

  return response.json()
}

const getEmail = async () => {
  USER.email = (await getUserServer()).email
}

const addToCookie = (files) => {
  document.cookie = `token = ${files}; path=/; expires=Tue, 19 Jan 2038 03:14:07`;
}

const getValueInput = (input) => {
  return input.value
}

const getMessagesServer = async () => {
  const messages = await getDataServer(URL.messages)
  localStorage.setItem('messages', JSON.stringify(messages.messages))

  getMessagesLocalStorage()
}

const getMessagesLocalStorage = () => {
  console.log('br');
  const maxMessages = 20
  const numberMessagesNow = Number(ELEMENTS.chat.querySelectorAll('.chate__message ').length)
  const messages = (JSON.parse(localStorage.getItem('messages')))

  for (let i = 0; i < maxMessages; i++) {

    if (i + numberMessagesNow >= messages.length) {
      showFinishMessage()
    }

    const key = messages[i + numberMessagesNow]
    createMessage(key.user.email, key.user.name, key.text, key.createdAt)
  }
}

const isValidEmail = (email) => {
  if (email.includes('@')) {
    return true
  } else {
    let warning = document.createElement('p')
    warning.classList.add('warning')
    warning.textContent = 'Пожалуйста, введите корректный email.'
    popupAuthorization.input.before(warning)
  }
}

const getDate = (date) => {
  if (date) {
    let time = new Date(date)
    let hours = time.getHours()
    let minutes = (time.getMinutes() > 10) ? time.getMinutes() : `0${time.getMinutes()}`
    return `${hours}:${minutes}`
  } else {
    return `${new Date().getHours()}:${new Date().getMinutes()}`
  }
}

const sendMessage = (socket) => {
  const message = getValueInput(ELEMENTS.inputSending)

  if (message === '') {
    let warning = document.createElement('p')
    warning.classList.add('warning')
    warning.textContent = 'Пожалуйста, введите сообщение.'
    ELEMENTS.formSending.before(warning)
  }

  socket.send(JSON.stringify({ text: message }))
}

const getMessagesSocket = () => {
  const data = JSON.parse(event.data)
  const email = data.user.email
  const name = data.user.name
  const text = data.text
  const date = data.createdAt
  const method = 'prepend'
  createMessage(email, name, text, date, method)
}

popupAuthorization.form.addEventListener('submit', () => {
  event.preventDefault()
  const email = getValueInput(popupAuthorization.input)

  if (isValidEmail(email)) {
    sendEmailToServer(email)
    addActive(ELEMENTS.popupAuthorization, true)
    addActive(ELEMENTS.popupConfirm)
  }
})

popupConfirm.form.addEventListener('submit', () => {
  event.preventDefault()
  const token = getValueInput(popupConfirm.input)
  addToCookie(token)
  addActive(ELEMENTS.popupConfirm, true)
  getEmail()
})

popupGetName.form.addEventListener('submit', () => {
  event.preventDefault()
  const name = getValueInput(popupGetName.input)
  sendNameToServer(name)
  addActive(ELEMENTS.popupGetName, true)
})

ELEMENTS.settings.addEventListener('click', () => {
  addActive(ELEMENTS.popupGetName)
})

document.addEventListener('click', (e) => {
  isValidPlaceClick(e)
})

document.addEventListener('DOMContentLoaded', () => {
  establishSocket()
  addActive(ELEMENTS.popupAuthorization)
  getMessagesServer()
  getEmail()
})

ELEMENTS.chat.addEventListener('scroll', checkScrollHeight)

export { sendEmailToServer, sendNameToServer, getValueInput, getDate, getMessagesLocalStorage }