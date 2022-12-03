"use strict";
exports.__esModule = true;
var consts_1 = require("./consts");
var autorization_1 = require("./autorization");
var confirm_1 = require("./confirm");
var addLSHistoryMessages_1 = require("./addLSHistoryMessages");
var virtualization_1 = require("./virtualization");
require("./socket");
var socket_1 = require("./socket");
var socket_2 = require("./socket");
function loadHistoryMessage() {
    if (consts_1.cookieName) {
        (0, addLSHistoryMessages_1.historyMessages)(document.cookie);
        (0, virtualization_1.virtualization)();
        (0, socket_2.onmessage)();
    }
}
if (consts_1.settingsButton) {
    consts_1.settingsButton.addEventListener("click", function () {
        settingsPopap();
    });
}
function settingsPopap() {
    if (consts_1.popup) {
        consts_1.popup.classList.toggle(consts_1.classActive);
    }
}
if (consts_1.closeButton) {
    consts_1.closeButton.addEventListener("click", function () {
        closeSetingsPopap();
    });
}
function closeSetingsPopap() {
    if (consts_1.popup) {
        consts_1.popup.classList.remove(consts_1.classActive);
    }
}
if (consts_1.mainForm) {
    consts_1.mainForm.addEventListener("submit", function (event) {
        event.preventDefault();
        sendMessage();
    });
}
function sendMessage() {
    if (consts_1.inputMessage) {
        (0, socket_1.postMessageToServer)(consts_1.inputMessage.value.trim());
        consts_1.inputMessage.value = '';
    }
}
if (consts_1.autorizationForm) {
    consts_1.autorizationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        swicthPopup();
    });
}
function swicthPopup() {
    if (consts_1.emailInput) {
        (0, autorization_1.autorization)(consts_1.emailInput.value);
        if (consts_1.autorizationBlock && consts_1.inputBlock) {
            consts_1.autorizationBlock.classList.remove(consts_1.classActive);
            consts_1.inputBlock.classList.add(consts_1.classActive);
        }
    }
}
if (consts_1.inputForm) {
    consts_1.inputForm.addEventListener("submit", function (event) {
        event.preventDefault();
        switchBlocks();
    });
}
function switchBlocks() {
    if (consts_1.inputPassword && consts_1.emailInput) {
        (0, confirm_1.confirmAutorization)(consts_1.inputPassword.value.trim(), consts_1.emailInput.value);
        if (consts_1.inputBlock && consts_1.chatBlock) {
            consts_1.inputBlock.classList.remove(consts_1.classActive);
            consts_1.chatBlock.classList.add(consts_1.classActive);
            loadHistoryMessage();
        }
    }
}
function checkedAutorization() {
    if (document.cookie) {
        if (consts_1.autorizationBlock && consts_1.chatBlock) {
            consts_1.autorizationBlock.classList.remove(consts_1.classActive);
            consts_1.chatBlock.classList.add(consts_1.classActive);
            loadHistoryMessage();
        }
    }
}
checkedAutorization();
