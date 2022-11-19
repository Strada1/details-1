const ELEMENT = {
    POPUP: document.querySelector(".popup"),
    POPUP_CLOSE_BUTTONS: document.querySelectorAll(".popup__button"),
    BUTTONS: document.querySelectorAll(".chat__button"),
    SettingsButton: document.querySelector(".settingsButton"),
    tmpl: document.getElementById("tmpl"),
    inputMessage: document.getElementById("myForm"),
    messagesArea: document.querySelector(".messagesArea"),
};


ELEMENT.inputMessage.addEventListener("submit", (event) => {
    event.preventDefault()
    const msg = document.querySelector(".chat__input").value
    if (msg.trim()) {
        createMessage(msg);
    } else alert ('Please enter smth')
    
    
    
})


    


function createMessage(msg) {
    const time = getTime();

    const messageBlock = ELEMENT.tmpl.content.cloneNode(true);
    messageBlock.querySelector('.message__text').innerHTML = `Я: ${msg}`;
    messageBlock.querySelector(".message__time").textContent = time;
    
    ELEMENT.messagesArea.append(messageBlock);
    scrollMessagesToEnd()
}

function showPopup() {
    ELEMENT.POPUP.classList.add("popup--active");
}

function closePopup() {
    ELEMENT.POPUP.classList.remove("popup--active");
}


ELEMENT.SettingsButton.addEventListener("click", showPopup);


ELEMENT.POPUP_CLOSE_BUTTONS.forEach(button => {
    button.addEventListener("click", closePopup);
});

function getTime() {
    const time = new Date();

    const hours = time.getHours();
    let minutes = time.getMinutes();
    if (minutes < 10) {
        minutes = `0${time.getMinutes()}`;
    }

    return `${hours}:${minutes}`;
}

scrollMessagesToEnd()

function scrollMessagesToEnd() {
    ELEMENT.messagesArea.scrollTop = ELEMENT.messagesArea.scrollHeight;
}