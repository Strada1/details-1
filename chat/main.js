const chat = document.querySelector(".middle");
chat.scrollTop = chat.scrollHeight;
const message = document.querySelector('#enter_message')

//Настройки - модалка
const settingsButton = document.querySelector("#settings")
const settingsModal = document.querySelector("#settingsModal")
const settingsModalCloseButton = document.querySelector("#settingsModal").querySelector("#close")
settingsButton.addEventListener('click', () => settingsModal.classList.add('active'))
settingsModalCloseButton.addEventListener('click', () => settingsModal.classList.remove('active'))

//Авторизация - модалка
const autorizationButton = document.querySelector("#autorization")
const autorizationModal = document.querySelector("#autorizationModal")
const autorizationModalCloseButton = document.querySelector("#autorizationModal").querySelector("#close")
autorizationButton.addEventListener('click', () => autorizationModal.classList.add('active'))
autorizationModalCloseButton.addEventListener('click', () => autorizationModal.classList.remove('active'))
const email = document.querySelector('#enter_email')
const sendCode = document.querySelector('#email')
sendCode.addEventListener('submit', sendAuth)

//Авторизация - функция
async function sendAuth(env){
    env.preventDefault()
    const authUrl = '//edu.strada.one/api/user'
    const emailValue = email.value
    let response = await fetch(authUrl, {
        method: 'POST',
        body: JSON.stringify({email: emailValue}),
        headers: {
            'Content-Type': 'application/json',
            Accept : "application/json",
            mode : 'no-cors'
        },
    })
    const data = await response.json();
    return data
}

//Подтверждение - модалка
const confirmationButton = document.querySelector("#confirmation")
const confirmationModal = document.querySelector("#confirmationModal")
const confirmationModalCloseButton = document.querySelector("#confirmationModal").querySelector("#close")
confirmationButton.addEventListener('click', () => confirmationModal.classList.add('active'))
confirmationModalCloseButton.addEventListener('click', () => confirmationModal.classList.remove('active'))

//Авторизация

const createMessage = (isOutgingMessage, text, time) =>{
    const template = document.querySelector(isOutgingMessage ? '#outgoing_message' : '#incoming_message');
    let newMessage = template.content.cloneNode(true);
    newMessage.querySelector(".message").textContent = text;
    newMessage.querySelector(".time").textContent = new Date(time).toLocaleTimeString();
    chat.prepend(newMessage) 
}

const sendMessage = document.querySelector('.bottom')
sendMessage.addEventListener('submit', send)

function send(env) {
    env.preventDefault()
    nowTime = new Date()
    let textMessage = message.value
    createMessage(true, textMessage, nowTime)
}