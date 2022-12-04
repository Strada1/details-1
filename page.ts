import { format } from 'date-fns';
import { ChatClient } from './api';
import { Message } from "./message";

const POPUP_ID_SETTINGS = 'popup-settings';
const POPUP_ID_CONFIRMATION = 'confirmation';
const POPUP_ID_AUTHORIZATION = 'authorization';

function getHTMLElementById(elementId: string): HTMLElement {
    const element = document.getElementById(elementId);
    if (!element) {
        throw new Error(`Cannot find element by id: ${elementId}`);
    }
    return element;
}

export function initPage(client: ChatClient) {
    document.addEventListener('DOMContentLoaded', function () {
        const btnSettings = getHTMLElementById('btn-settings');
        btnSettings.onclick = () => openPopup('popup-settings');

        const btnSettingsClose = getHTMLElementById('btn-settings-close');
        btnSettingsClose.onclick = () => hidePopup('popup-settings');

        const sendForm = getHTMLElementById('send-form');
        sendForm.onsubmit = (e) => onMessageSubmit(e, client);

        const authForm = getHTMLElementById('authorization-form');
        authForm.onsubmit = (e) => onEmailSubmit(e, client);

        const confirmForm = getHTMLElementById('confirmation-form');
        confirmForm.onsubmit = (e) => onCodeSubmit(e, client);

        const usernameForm = getHTMLElementById('popup-settings-form');
        usernameForm.onsubmit = (e) => onUsernameSubmit(e, client);

        const divMessages = getHTMLElementById('messages');
        divMessages.addEventListener('scroll', (e) => {
            if (divMessages.scrollTop === 0) {
                const messages = client.getNextHistoryMessages();
                if (messages.length > 0) {
                    const firstMessage = getFirstMessage();
                    messages.forEach(message => addMessage(message, false));
                    if (firstMessage) scrollTo(firstMessage, false);
                }

            }
        })
    });
}

export function onAuth(isAuthorized: boolean) {
    console.log(`isAuthorized: ${isAuthorized}`);
    hidePopup(POPUP_ID_SETTINGS);
    hidePopup(POPUP_ID_CONFIRMATION);
    if (isAuthorized) {
        hidePopup(POPUP_ID_AUTHORIZATION);
    } else {
        openPopup(POPUP_ID_AUTHORIZATION);
    }
}

export function openPopup(name: string) {
    popup(name, true);
}

export function hidePopup(name: string) {
    popup(name, false);
}

function popup(popupId: string, open: boolean) {
    const popupElement = getHTMLElementById(popupId);
    popupElement.style.display = open ? 'block' : 'none';
}

export function addMessage(message: Message, addToEnd: boolean): HTMLElement {
    const t = getHTMLElementById('tmpl-message') as HTMLTemplateElement;
    const template = t.content.cloneNode(true) as HTMLElement;

    if (message.isMyMessage) {
        const div: HTMLElement | null = template.querySelector('.message');
        div?.classList.add('me');
    }

    const divMsg = template.querySelector('.msg-text');
    divMsg.textContent = `${message.username}: ${message.text}`;

    const divTime = template.querySelector('.msg-time');
    divTime.textContent = format(message.timestamp, "HH:mm");

    const divMessages = getHTMLElementById('messages');
    if (addToEnd) {
        divMessages.append(template);
    } else {
        divMessages.prepend(template);
    }

    return divMsg as HTMLElement;
}

export function scrollSmoothTo(element: HTMLElement) {
    scrollTo(element, true);
}

export function scrollTo(element: HTMLElement, smooth: boolean) {
    element.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
}

export function addHistoryMessages(messages: Array<Message>): number {
    if (messages.length === 0) return 0;

    messages.forEach(message => addMessage(message, false));
    return messages.length;
}

export function getFirstMessage(): HTMLElement | null | undefined {
    return document.querySelector('.message')?.querySelector('.msg-text');
}

export function getLastMessage(): HTMLElement | null | undefined {
    const msgList = document.querySelectorAll('.message');
    const lastMsg = msgList[msgList.length - 1];
    return lastMsg.querySelector('.msg-text') as HTMLElement | null | undefined;
}

function onMessageSubmit(e: Event, client: ChatClient) {
    e.preventDefault();
    try {
        const text = getInputValueAndClear('input-msg');
        client.sendMessage(text);
    } catch (err) {
        console.error(err);
    }
}

function onEmailSubmit(e: Event, client: ChatClient) {
    e.preventDefault();
    try {
        const email = getInputValueAndClear('input-email');
        client.requestCodeToEmail(email)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('Cannot request code to email');
                }
                hidePopup(POPUP_ID_AUTHORIZATION);
                openPopup(POPUP_ID_CONFIRMATION);
            })
            .catch(err => console.error(err));
    } catch (err) {
        console.error(err);
    }
}

function onCodeSubmit(e: Event, client: ChatClient) {
    e.preventDefault();
    try {
        const code = getInputValueAndClear('input-code');
        client.verifyCode(code)
            .then(token => client.setToken(token))
            .then(() => client.authorize())
            .catch(err => console.error(err));
    } catch (err) {
        console.error(err);
    }
}

function onUsernameSubmit(e: Event, client: ChatClient) {
    e.preventDefault();
    try {
        const username = getInputValueAndClear('input-name');
        client.changeUsername(username)
            .then(response => {
                if (response.status === 200) {
                    client.setUsername(username);
                    hidePopup(POPUP_ID_SETTINGS);
                }
            });
    } catch (err) {
        console.error(err);
    }
}

function getInputValueAndClear(inputId: string): string {
    const input = getHTMLElementById(inputId) as HTMLInputElement;
    const value = input.value;
    input.value = "";
    return value;
}
