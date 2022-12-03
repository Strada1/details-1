"use strict";
exports.__esModule = true;
exports.messagesCountEnd = exports.messagesCountStart = exports.userNameSelector = exports.messageTimeSelector = exports.messageItemSelector = exports.addClassForAnother = exports.addClassForMe = exports.getUserInfoUrl = exports.getSocketUrl = exports.localStorageNameHistoryMessages = exports.cookieName = exports.httpRequests = exports.urlGetHistoryMessages = exports.chatBlock = exports.urlGetInfoUser = exports.inputForm = exports.inputPassword = exports.inputBlock = exports.autorizationBlock = exports.autorizationForm = exports.headerApplication = exports.getMessageUrl = exports.emailInput = exports.inputMessage = exports.tmpl = exports.windowChat = exports.mainForm = exports.classActive = exports.closeButton = exports.popup = exports.settingsButton = void 0;
var settingsButton = document.querySelector('.hero__block-buttons-head-setings');
exports.settingsButton = settingsButton;
var popup = document.querySelector('.popup');
exports.popup = popup;
var closeButton = document.querySelector('.popup__buttons_head-close button');
exports.closeButton = closeButton;
var classActive = 'active';
exports.classActive = classActive;
var mainForm = document.querySelector('.hero__block-form');
exports.mainForm = mainForm;
var windowChat = document.querySelector('.hero__block_window-chat');
exports.windowChat = windowChat;
var tmpl = document.getElementById('tmpl');
exports.tmpl = tmpl;
var inputMessage = document.querySelector('.input__message');
exports.inputMessage = inputMessage;
var emailInput = document.querySelector('.email__input');
exports.emailInput = emailInput;
var getMessageUrl = 'https://edu.strada.one/api/user';
exports.getMessageUrl = getMessageUrl;
var headerApplication = 'application/json;charset=utf-8';
exports.headerApplication = headerApplication;
var autorizationForm = document.querySelector('.autorization__form');
exports.autorizationForm = autorizationForm;
var autorizationBlock = document.querySelector('.autorization__block');
exports.autorizationBlock = autorizationBlock;
var inputBlock = document.querySelector('.input__block');
exports.inputBlock = inputBlock;
var inputPassword = document.querySelector('.input__password-code');
exports.inputPassword = inputPassword;
var inputForm = document.querySelector('.input__form');
exports.inputForm = inputForm;
var chatBlock = document.querySelector('.chat__block');
exports.chatBlock = chatBlock;
var urlGetInfoUser = 'https://edu.strada.one/api/user';
exports.urlGetInfoUser = urlGetInfoUser;
var urlGetHistoryMessages = 'https://edu.strada.one/api/messages/';
exports.urlGetHistoryMessages = urlGetHistoryMessages;
var cookieName = 'user';
exports.cookieName = cookieName;
var localStorageNameHistoryMessages = 'lcHistoryMessage';
exports.localStorageNameHistoryMessages = localStorageNameHistoryMessages;
var getSocketUrl = 'wss://edu.strada.one/websockets?';
exports.getSocketUrl = getSocketUrl;
var getUserInfoUrl = 'https://edu.strada.one/api/user/me/';
exports.getUserInfoUrl = getUserInfoUrl;
var addClassForMe = 'myMessage';
exports.addClassForMe = addClassForMe;
var addClassForAnother = 'anotherMessage';
exports.addClassForAnother = addClassForAnother;
var messageItemSelector = '.message_item';
exports.messageItemSelector = messageItemSelector;
var messageTimeSelector = '.message_time';
exports.messageTimeSelector = messageTimeSelector;
var userNameSelector = '.user_name';
exports.userNameSelector = userNameSelector;
var messagesCountStart = 20;
exports.messagesCountStart = messagesCountStart;
var messagesCountEnd = 40;
exports.messagesCountEnd = messagesCountEnd;
var httpRequests = {
    GET: "GET",
    POST: "POST",
    PATCH: "PATCH"
};
exports.httpRequests = httpRequests;
