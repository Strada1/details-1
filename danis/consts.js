const settingsButton = document.querySelector('.hero__block-buttons-head-setings button');
const closeButton = document.querySelector('.popup__buttons_head-close button');
const popup = document.querySelector('.popup');
const inputWriteMessage = document.querySelector('.hero__block-buttons-bottom-input input');
const windowChat = document.querySelector('.hero__block_window-chat');
const mainForm = document.querySelector('.hero__block-form');
const autorizationForm = document.querySelector('.autorization__form');
const urlPost = 'https://edu.strada.one/api/user';
const userEmailForAutorization = document.querySelector('.autorization__block-main-input input');
const inputForm = document.querySelector('.input__form');
const cookieCode = document.querySelector('.input__block-main-input input');
const urlGetInfoUser = 'https://edu.strada.one/api/user/me';
const inputBlock = document.querySelector('.input__block');
const windowChatBlock = document.querySelector('.chat__block');
const userName = document.querySelector('.user_user_name');
const changeNameForm = document.querySelector('.popup__form');
const inputNewName = document.querySelector('.new_name');
const getHistoryMessageUrl = 'https://edu.strada.one/api/messages/';
const getUrlSocket = 'ws://edu.strada.one/websockets?';
const getNameUserCoockie = 'user';
const getNameUserEmail = 'userEmail';


export {
    settingsButton,
    closeButton,
    popup,
    inputWriteMessage,
    windowChat,
    mainForm,
    autorizationForm,
    urlPost,
    userEmailForAutorization,
    inputForm,
    cookieCode,
    urlGetInfoUser,
    inputBlock,
    windowChatBlock,
    userName,
    changeNameForm,
    inputNewName,
    getHistoryMessageUrl,
    getUrlSocket,
    getNameUserCoockie,
    getNameUserEmail
}