const UI = {
    template: document.getElementById('template'),
    chatArea: document.querySelector('.chat'),
    inputForm: document.querySelector('.input__form'),
    emailInput: document.querySelector('.input__form-email'),
    sendEmail: document.getElementById('popupMailForm'),
    emailPopup: document.getElementById('popupMail'),
    authPopup: document.getElementById('popupAuth'),
    popupTokenForm: document.getElementById('popupTokenForm'),
    popupTokenInput: document.getElementById('popupTokenInput'),
    popupNameForm: document.getElementById('popupNameForm'),
    popupNameInput: document.getElementById('popupNameInput'),
    currentName: document.getElementById('currentName'),
    settingsButton: document.querySelector('.settings'),
    authButton: document.getElementById('authButton'),
    toTheBeginingButton: document.getElementById('toTheBeginingButtonHolder'),
}
console.log(UI.inputForm.firstChild.textContent)
console.log(UI.sendEmail);
export {UI}