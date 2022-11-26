//Окно авторизации

import {openSettings, closeSettings, openAuth, closeAuth, openVerif, closeVerif} from "./modules/popup.js"
import sendEmail from "./modules/sendEmail.js";
import putCodeInCookie from "./modules/putCodeInCookie.js";
import changeNickname from "./modules/changeNickname.js";
import start from "./modules/start.js";
import receiveMessages from "./modules/receiveMessages.js";
import exit from "./modules/exit.js";
import {webSocketConnect, webSocketSend} from "./modules/webSocket.js"
import showNewMessages from "./modules/showPrevMessages.js";


//Раздел главной страницы
const btnSettingsOpen = document.querySelector('.settings__btn');
btnSettingsOpen.addEventListener('click', openSettings);

const formMessage = document.querySelector('.send__form-message');
const submitHandlerMessage = function(event) {
    webSocketSend();
    const clearInput = function() {
        const textInput = document.querySelector('.send__input');
        textInput.value = '';
    };
    clearInput();
    event.preventDefault();
}
formMessage.addEventListener('submit', submitHandlerMessage);

const btnExit = document.querySelector('.exit__btn');
btnExit.addEventListener('click', exit);

const midOver = document.querySelector('.mid_overflow');
const showHandlerPrevMes = function() {
    let firstHeight = midOver.scrollHeight;
    let height = midOver.scrollTop;
    let resultMessagesLS = JSON.parse(localStorage.getItem('resultMessages'));
    if (height === 0) {
    showNewMessages(resultMessagesLS.messages);
    let secondHeight = midOver.scrollHeight;
    let stayHeight = secondHeight - firstHeight;
    midOver.scrollBy(0, stayHeight);
    }
};
midOver.addEventListener('scroll', showHandlerPrevMes);


//Раздел попапа авторизации
const formAuth = document.querySelector('.send__form-auth');
formAuth.addEventListener('submit', sendEmail);//Клоз авт и опен вериф в фии sendEmail


//Раздел попапа верификации
const sendForm = document.querySelector('.send__form-verif');
const submitHandlerVerif = function(event) {
    putCodeInCookie();
    receiveMessages();
    closeVerif();
    webSocketConnect();
    event.preventDefault();
};
sendForm.addEventListener('submit', submitHandlerVerif);


//Раздел попапа настроек
const formNickname = document.querySelector('.send__form-nickname')
formNickname.addEventListener('submit', changeNickname)

const btnSettingsClose = document.querySelector('.popup-set__btn');
btnSettingsClose.addEventListener('click', closeSettings);



window.addEventListener('load', start);







