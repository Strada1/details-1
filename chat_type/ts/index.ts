import { ELEMENTS, MODAL_CASES, COOKIES, 
         ENDPOINTS, LOGGED_IN_USER,
         LOG_BUTTON_TEXT, ALERTS} from "./constants.js"
import { MessageRenderer, returnHistoryElementsArr } from "./render.js";
import { createModal } from "./modal.js"
import { getData, openChatSocket, sendSocketMessage } from "./api.js";
import Cookies from "js-cookie";

window.addEventListener('DOMContentLoaded', pageLoadHandler);

ELEMENTS.settingsButton.addEventListener('click', settingsButtonHandler);

ELEMENTS.logButton.addEventListener('click', logButtonHandler);

async function pageLoadHandler() {
  const token = COOKIES.getUserToken();
  if(!token) {
    initAuthorization();
    return;
  }
  const userLogged = await login();
  if(!userLogged) {
    alert(ALERTS.loginFail)
    return;
  }
  addSessionData(userLogged);
  const socket = openChatSocket(ENDPOINTS.SOCKET, COOKIES.getUserToken())
  const history = await returnHistoryElementsArr();
  const render = initMessagesRender(history, socket)
  ELEMENTS.midSection.addEventListener('scroll', () => {
    chatScrollHandler(render)
  });
  ELEMENTS.msgForm.addEventListener('submit', (e) => {
    e.preventDefault();
    messageFormHandler(e, socket);
  });
}

function settingsButtonHandler() {
  createModal(MODAL_CASES.SETTINGS.purpose);
}

function logButtonHandler() {
  const userToken = COOKIES.getUserToken();
  if(!userToken) {
    createModal(MODAL_CASES.AUTH.purpose);
    return;
  } else {
    logout();
  } 
}

function chatScrollHandler(renderPart: any) {
  const scrollArea = ELEMENTS.midSection
  let scrollT = scrollArea.scrollTop
  let scrollH = scrollArea.scrollHeight
  let scrollCl = scrollArea.clientHeight
  if(Math.abs(scrollT) + scrollCl >= Math.ceil(scrollH)){
    console.log('reached end');
    renderPart();
  }
}

function messageFormHandler(e: Event, socket: WebSocket) {
  const input = ELEMENTS.msgInput
  if(!input.value) {
    return;
  }
  sendSocketMessage(input.value, socket);
  (<HTMLFormElement>e.target).reset()
}

async function login() {
  const logButton = ELEMENTS.logButton 
  logButton.textContent = LOG_BUTTON_TEXT.logout
  let userData = await getData(ENDPOINTS.GET_USER);
  return userData;
}

function initAuthorization () {
  const logButton = ELEMENTS.logButton
  logButton.textContent = LOG_BUTTON_TEXT.login
  createModal(MODAL_CASES.AUTH.purpose);
  return;
}

function addSessionData(userLogged: SessionData) {
  LOGGED_IN_USER.name = userLogged.name
  LOGGED_IN_USER.email = userLogged.email
  alert(ALERTS.loginSuccess + ' ' + LOGGED_IN_USER.name)
}

function initMessagesRender(history: [], socket: WebSocket) {
  const renderer = new MessageRenderer(history, socket)
  renderer.renderSocketMessage();
  const renderFirstPart = renderer.partialRender(0, 20);
  renderFirstPart();
  const renderNextParts = renderer.partialRender(20, 20);
  return renderNextParts;
}

function logout() {
  Cookies.remove(COOKIES.cookiesKey)
  window.location.reload();
}

interface SessionData {
  name: string,
  email: string
}

