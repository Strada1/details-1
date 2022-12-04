"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModal = void 0;
const constants_js_1 = require("./constants.js");
const api_js_1 = require("./api.js");
const js_cookie_1 = __importDefault(require("js-cookie"));
function createModal(purpose) {
    const template = constants_js_1.ELEMENTS.modalTemplate;
    const newModal = template.content.cloneNode(true);
    document.body.prepend(newModal);
    switch (purpose) {
        case constants_js_1.MODAL_CASES.SETTINGS.purpose:
            addModalTitles(constants_js_1.MODAL_CASES.SETTINGS);
            addSettingsLogic();
            break;
        case constants_js_1.MODAL_CASES.AUTH.purpose:
            addModalTitles(constants_js_1.MODAL_CASES.AUTH);
            addAuthLogic();
            break;
        case constants_js_1.MODAL_CASES.VERIFY.purpose:
            addModalTitles(constants_js_1.MODAL_CASES.VERIFY);
            addVerifyLogic();
            break;
    }
    renderModal();
}
exports.createModal = createModal;
function renderModal() {
    const modElements = getModalElements();
    setTimeout(() => {
        modElements.modalBody.classList.remove('hidden');
        modElements.modalContainer.classList.remove('hidden');
    }, 0);
    modElements.modalClose.addEventListener('click', closeModal);
    modElements.modalBody.addEventListener('click', (e) => {
        if (e.target === modElements.modalBody) {
            closeModal();
        }
    });
}
function addModalTitles(titlesObj) {
    const titleElems = getModalTitlesElems();
    titleElems.modalTitleEl.textContent = titlesObj.modalTitle;
    titleElems.formTitleEl.textContent = titlesObj.formTitle;
    titleElems.buttonEl.textContent = titlesObj.buttonTitle;
}
function getModalElements() {
    const modalElements = {
        modalBody: document.querySelector('.modal-body'),
        modalContainer: document.querySelector('.modal-container'),
        modalClose: document.querySelector('.modal-close'),
        modalForm: document.querySelector('.modal-form'),
        modalInput: document.querySelector('.modal-input'),
        modalShortcut: document.querySelector('.modal-shortcut-button')
    };
    return modalElements;
}
function getModalTitlesElems() {
    const elems = {
        modalTitleEl: document.querySelector('.modal-title'),
        formTitleEl: document.querySelector('.form-title'),
        buttonEl: document.querySelector('.modal-button'),
    };
    return elems;
}
function closeModal() {
    const modElements = getModalElements();
    requestAnimationFrame(() => {
        modElements.modalBody.classList.add('hidden');
        modElements.modalContainer.classList.add('hidden');
    });
    modElements.modalBody.addEventListener('transitionend', () => {
        modElements.modalBody.remove();
    });
}
;
function addSettingsLogic() {
    const modElements = getModalElements();
    modElements.modalForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const token = constants_js_1.COOKIES.getUserToken();
        if (!token) {
            alert(constants_js_1.ALERTS.cantChangeName);
            return;
        }
        const newName = modElements.modalInput.value;
        const isChanged = await (0, api_js_1.requestNameChange)(newName);
        if (!isChanged) {
            return;
        }
        window.location.reload();
    });
}
function addAuthLogic() {
    enableVerifyShortcut();
    const modElements = getModalElements();
    modElements.modalForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const newEmail = modElements.modalInput.value;
        const emailSent = await (0, api_js_1.requestToken)(newEmail);
        if (!emailSent) {
            alert(constants_js_1.ALERTS.tokenRequestFail);
            return;
        }
        alert(constants_js_1.ALERTS.tokenRequestSuccess);
        closeModal();
        createModal(constants_js_1.MODAL_CASES.VERIFY.purpose);
    });
}
function addVerifyLogic() {
    const modElements = getModalElements();
    modElements.modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newToken = modElements.modalInput.value;
        js_cookie_1.default.set(constants_js_1.COOKIES.cookiesKey, newToken, { expires: 5, path: '' });
        constants_js_1.ELEMENTS.logButton.textContent = constants_js_1.LOG_BUTTON_TEXT.logout;
        window.location.reload();
    });
}
function enableVerifyShortcut() {
    const modElements = getModalElements();
    modElements.modalShortcut.classList.remove('shortcut-hidden');
    modElements.modalShortcut.addEventListener('click', () => {
        closeModal();
        createModal(constants_js_1.MODAL_CASES.VERIFY.purpose);
    });
}
