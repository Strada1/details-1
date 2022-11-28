import { ELEMENT, User } from './const'

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

export function addMessage(messageText, name = User.me.name, time = "", email = User.me.email, firstScroll = 'true') {
	time = getTime(time);
	if (messageText.trim() === "") {
		return;
	}

	const messageBlock = createMessage(messageText, name, time, email); 
	if (firstScroll !== 'true'){
		ELEMENT.messagesArea.prepend(messageBlock);
	} else {
		ELEMENT.messagesArea.append(messageBlock);
		scrollMessagesToEnd();
	}
	
	
}

function scrollMessagesToEnd() {
    ELEMENT.messagesArea.scrollTop = ELEMENT.messagesArea.scrollHeight;
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

 
