const settingsButton = document.querySelector('.hero__block-buttons-head-setings button');
const closeButton = document.querySelector('.popup__buttons_head-close button');
const popup = document.querySelector('.popup');
const inputWriteMessage = document.querySelector('.hero__block-buttons-bottom-input input');
const windowChat = document.querySelector('.hero__block_window-chat');
const mainForm = document.querySelector('.hero__block-form');
const autorizationForm = document.querySelector('.autorization__form');
const urlPost = 'https://edu.strada.one/api/user';
const userEmailForAutorization = document.querySelector('.autorization__block-main-input input');

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
}