import { ELEMENT, POPUP, User } from './const'


if (!document.cookie) {
    showPopup(POPUP.AUTHORIZATION);
    document.getElementById(POPUP.AUTHORIZATION.FORM_ID).addEventListener("submit", (event) => {
        event.preventDefault();
        getTheCode();
        document.querySelector(".popup").remove();
        showPopup(POPUP.CONFIRMATION);
        document.getElementById(POPUP.CONFIRMATION.CLOSE_BUTTON_ID).addEventListener("click", () => {
            document.querySelector(".popup").remove();
            showPopup(POPUP.AUTHORIZATION);
        })
        document.querySelector(".popup").addEventListener("submit", (event) => {
            event.preventDefault();
            authorization();
            document.querySelector(".popup").remove();
            console.log(ELEMENT.CHAT);
            ELEMENT.CHAT.classList.remove("chat__inner--disabled");
        })
    });
    socket()
}

async function getTheCode() {
    const form = document.getElementById(POPUP.AUTHORIZATION.FORM_ID);
    const input = form.querySelector(".popup__input");
    const emailText = input.value;

    const responce = await fetch("https://edu.strada.one/api/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify({email: emailText})
    });
}

async function setNewName() {
    const form = document.getElementById(POPUP.SETTINGS.FORM_ID);
    const input = form.querySelector(".popup__input");
    const newName = input.value;

    const responce = await fetch("https://edu.strada.one/api/user", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${document.cookie}`,
        },
        body: JSON.stringify({ name: newName })
    });
    const get = await fetch("https://edu.strada.one/api/user/me", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${document.cookie}`,
        }
    });
    const result = await get.json()
    console.log(result);
}

async function getMessagesHistory() {

    const responce = await fetch("https://edu.strada.one/api/messages", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${document.cookie}`,
        }
    });
    const result = await responce.json()
    return result;
}

showAllMessages()
function showAllMessages() {
    const result = getMessagesHistory()
    result
        .then(messages => messages.messages)
        .then(messages => {
            messages.slice().reverse()
                .forEach(message => {
                    addMessage(message.text, message.user.name, message.createdAt, message.user.email);
                });
        });
    socket();
}


function addMessage(messageText, name = User.me.name, time = "", email = User.me.email) {
	time = getTime(time);
	if (messageText.trim() === "") {
		return;
	}

	const messageBlock = createMessage(messageText, name, time, email);
	ELEMENT.messagesArea.append(messageBlock);
	scrollMessagesToEnd();
}

function authorization() {
    const form = document.getElementById(POPUP.CONFIRMATION.FORM_ID);
    const input = form.querySelector(".popup__input");
    const token = input.value;
    saveToken(token);
}


function createMessage(messageText, name, time, email) {
	let messageBlock;
	if (email !== User.me.email) {
		messageBlock = ELEMENT.INTERLOCUTOR_MESSAGE_TEMPLATE.content.cloneNode(true);
		messageBlock.querySelector(".message__text").textContent = `${name}: ${messageText}`;
	} else {
		messageBlock = ELEMENT.tmpl.content.cloneNode(true);
		messageBlock.querySelector(".message__text").textContent = `${messageText}`;
	}
	messageBlock.querySelector(".message__time").textContent = time;
    ELEMENT.formMessage.value = "";
	return messageBlock;
}

export function showPopup(popupType) {
    const popup = createPopup(popupType);
    ELEMENT.CONTAINER.append(popup);
}

export function closePopup() {
    ELEMENT.POPUP.classList.remove("popup--active");
}


ELEMENT.SettingsButton.addEventListener("click", (event) => {
    event.preventDefault()
    ELEMENT.CHAT.classList.add("chat__inner--disabled");
    showPopup(POPUP.SETTINGS);
    console.log(document.querySelector('.popup__button'));
    
    document.getElementById(POPUP.SETTINGS.CLOSE_BUTTON_ID).addEventListener("click", () => {
        document.querySelector(".popup").remove();
        ELEMENT.CHAT.classList.remove("chat__inner--disabled");
        //event.preventDefault()
    })
    document.querySelector('.popup__button').addEventListener("click", (event) => {
        event.preventDefault()
        setNewName();
    })
})

ELEMENT.POPUP_CLOSE_BUTTONS.forEach(button => {
    button.addEventListener("click", closePopup);
});

function getTime(time) {
    if (time) {
        time = new Date(time);
    } else {
        time = new Date();
    }

    const hours = time.getHours();
    let minutes = time.getMinutes();
    if (minutes < 10) {
        minutes = `0${time.getMinutes()}`;
    }

    return `${hours}:${minutes}`;
}

function scrollMessagesToEnd() {
    ELEMENT.messagesArea.scrollTop = ELEMENT.messagesArea.scrollHeight;
}

function createPopup(popupType) {
    const popup = document.getElementById("popupTemplate").content.cloneNode(true);
    popup.querySelector(".popup__title").textContent = popupType.TITLE;
    popup.querySelector(".popup__input-title").textContent = popupType.INPUT_TITLE;
    popup.querySelector(".popup__button").textContent = popupType.BUTTON;
    popup.querySelector(".popup__form").id = popupType.FORM_ID;
    popup.querySelector(".popup__button--close").id = popupType.CLOSE_BUTTON_ID;
    return popup;
}

function saveToken(token) {
	document.cookie = token;
}

function socket() {
    const socket = new WebSocket(`ws://edu.strada.one/websockets?${document.cookie}`);

    socket.onmessage = function (event) {

		const data = JSON.parse(event.data);
        console.log(data.user.email)
		addMessage(data.text, data.user.name, data.createdAt, data.user.email);
	};
    
    ELEMENT.inputMessage.addEventListener("submit", (event) => {
        event.preventDefault();
        const msg = ELEMENT.formMessage.value;
        if (msg.trim()) {
            socket.send(JSON.stringify({ text: msg }));
            
        } else alert ('Please enter smth');
        
    })

    socket.onerror = function(error) {
        console.log(JSON.stringify({error}));
    };
}
