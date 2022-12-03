import {
    settingsButton,
    popup,
    closeButton,
    classActive,
    mainForm,
    inputMessage,
    autorizationForm,
    emailInput,
    autorizationBlock,
    inputBlock,
    inputForm,
    inputPassword,
    chatBlock,
    cookieName
} from './consts'
import { autorization } from './autorization'
import { confirmAutorization } from './confirm'
import { historyMessages } from './addLSHistoryMessages'
import { virtualization } from './virtualization'
import './socket'
import { postMessageToServer } from './socket'
import { onmessage } from './socket'

function loadHistoryMessage(): void {
    if (cookieName) {
        historyMessages(document.cookie);
        virtualization();
        onmessage();
    }
}

if (settingsButton) {
    settingsButton.addEventListener("click", function () {
        settingsPopap()
    });
}

function settingsPopap() {
    if (popup) {
        popup.classList.toggle(classActive);
    }
}


if (closeButton) {
    closeButton.addEventListener("click", function () {
        closeSetingsPopap();
    });
}

function closeSetingsPopap() {
    if (popup) {
        popup.classList.remove(classActive);
    }
}

if (mainForm) {
    mainForm.addEventListener("submit", function (event) {
        event.preventDefault();
        sendMessage();
    });
}

function sendMessage() {
    if (inputMessage) {
        postMessageToServer(inputMessage.value.trim())
        inputMessage.value = '';
    }
}

if (autorizationForm) {
    autorizationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        swicthPopup();
    });
}

function swicthPopup() {
    if (emailInput) {
        autorization(emailInput.value);
        if (autorizationBlock && inputBlock) {
            autorizationBlock.classList.remove(classActive);
            inputBlock.classList.add(classActive);
        }
    }
}

if (inputForm) {
    inputForm.addEventListener("submit", function (event) {
        event.preventDefault();
        switchBlocks();
    });
}

function switchBlocks() {
    if (inputPassword && emailInput) {
        confirmAutorization(inputPassword.value.trim(), emailInput.value);
        if (inputBlock && chatBlock) {
            inputBlock.classList.remove(classActive);
            chatBlock.classList.add(classActive);
            loadHistoryMessage();
        }
    }
}

function checkedAutorization(): void {
    if (document.cookie) {
        if (autorizationBlock && chatBlock) {
            autorizationBlock.classList.remove(classActive);
            chatBlock.classList.add(classActive);
            loadHistoryMessage();
        }
    }
}

checkedAutorization();