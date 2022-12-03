const settingsButton: Element | null = document.querySelector('.hero__block-buttons-head-setings');
const popup: Element | null = document.querySelector('.popup');
const closeButton: Element | null = document.querySelector('.popup__buttons_head-close button');
const classActive: string = 'active';
const mainForm: Element | null = document.querySelector('.hero__block-form');
const windowChat: Element | null = document.querySelector('.hero__block_window-chat');
const tmpl: HTMLElement | null = document.getElementById('tmpl');
const inputMessage: HTMLInputElement | null = document.querySelector('.input__message');
const emailInput: HTMLInputElement | null = document.querySelector('.email__input');
const getMessageUrl: string = 'https://edu.strada.one/api/user';
const headerApplication: string = 'application/json;charset=utf-8';
const autorizationForm: Element | null = document.querySelector('.autorization__form');
const autorizationBlock: Element | null = document.querySelector('.autorization__block');
const inputBlock: Element | null = document.querySelector('.input__block');
const inputPassword: HTMLInputElement | null = document.querySelector('.input__password-code');
const inputForm: Element | null = document.querySelector('.input__form');
const chatBlock: Element | null = document.querySelector('.chat__block');
const urlGetInfoUser: string = 'https://edu.strada.one/api/user';
const urlGetHistoryMessages: string = 'https://edu.strada.one/api/messages/';
const cookieName: string = 'user';
const localStorageNameHistoryMessages: string  = 'lcHistoryMessage';
const getSocketUrl: string = 'wss://edu.strada.one/websockets?'
const getUserInfoUrl: string = 'https://edu.strada.one/api/user/me/';
const addClassForMe: string = 'myMessage';
const addClassForAnother: string = 'anotherMessage';
const messageItemSelector: string = '.message_item';
const messageTimeSelector: string = '.message_time';
const userNameSelector: string = '.user_name';
const messagesCountStart: number = 20;
const messagesCountEnd: number = 40;
const mainClassNameContainer: string = 'message_container user_message';

interface HttpRequest {
    readonly GET: string,
    readonly POST: string,
    readonly PATCH: string
}


const httpRequests: HttpRequest = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH"
}

export {
    settingsButton,
    popup,
    closeButton,
    classActive,
    mainForm,
    windowChat,
    tmpl,
    inputMessage,
    emailInput,
    getMessageUrl,
    headerApplication,
    autorizationForm,
    autorizationBlock,
    inputBlock,
    inputPassword,
    inputForm,
    urlGetInfoUser,
    chatBlock,
    urlGetHistoryMessages,
    httpRequests,
    cookieName,
    localStorageNameHistoryMessages,
    getSocketUrl,
    getUserInfoUrl,
    addClassForMe,
    addClassForAnother,
    messageItemSelector,
    messageTimeSelector,
    userNameSelector,
    messagesCountStart,
    messagesCountEnd,
    mainClassNameContainer
}

