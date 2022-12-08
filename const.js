export const SETTINGS = {
    OPEN: document.querySelector('#settingsBtn'),
    POPUP: document.querySelector('#settings'),
    CLOSE: document.querySelector('#closeSettingsBtn'),
    FORM: document.getElementById('changeUserForm'),
    BUTTON: document.getElementById('profileNameBtn')
}

export const AUTHORIZATION = {
    OPEN: document.querySelector('#quitBtn'),
    POPUP: document.querySelector('#autorization'),
    CLOSE: document.querySelector('#closeAuthorizationBtn'),
    INPUT: document.getElementById('inputEmail'),
    FORM: document.getElementById('authorizationForm'),
    BUTTON: document.getElementById('getAuthCodeBtn')
}

export const CONFIRM = {
    OPEN: document.querySelector('#getAuthCodeBtn'),
    POPUP: document.querySelector('#confirm'),
    CLOSE: document.querySelector('#closeConfirmBtn'),
    INPUT: document.getElementById('inputCode'),
    FORM: document.getElementById('confirmationForm'),
    BUTTON: document.getElementById('signInBtn')
}

export const CHAT_MESSAGE = {
    INPUT: document.getElementById('inputMessage'),
    SCREEN: document.querySelector('.chatScreen'),
    FORM: document.getElementById('sendMessageForm'),
    BUTTON: document.getElementById('sendButton')
}

export const URL = {
    CHANGE_USER: "https://edu.strada.one/api/user",
    GET_USER: "https://edu.strada.one/api/user/me",
    GET_MESSAGES: "https://edu.strada.one/api/messages/"
};

