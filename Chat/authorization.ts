import * as  Cookies from 'js-cookie'
import {DATA} from "./const";
import {getDataUser, setToken} from "./requests";

interface IAuthForm {
    confirmBg: HTMLElement ,
    confirm: HTMLElement,
    auth: HTMLElement,
}

const AUTH_FORM = {
    confirmBg: document.querySelector(".confirm__bg") as HTMLElement,
    confirm: document.querySelector(".confirm") as HTMLElement,
    auth: document.querySelector(".auth") as HTMLElement,
}

function authPopupStyle(elements: IAuthForm ) {
    elements.confirmBg.classList.add("active");
    elements.confirm.classList.add('active');
    elements.auth.classList.add("active")
}

async function formAuth(event: Event) {
    event.preventDefault();
    await setToken(DATA.email);
    DATA.email = "";
    authPopupStyle(AUTH_FORM);
}

const authForm = document.querySelector("#form-auth");
authForm?.addEventListener("submit", formAuth);

interface IConfirmForm {
    formConfirm: HTMLElement,
    chatBg: HTMLElement,
    container: HTMLElement,
    inputConfirm: HTMLInputElement,
}

const CONFIRM_FORM = {
    formConfirm: document.querySelector("#form-confirm") as HTMLElement,
    chatBg: document.querySelector(".chat") as HTMLElement,
    container: document.querySelector(".container") as HTMLElement,
    inputConfirm: document.querySelector(".input-confirm") as HTMLInputElement,
}

function confirmPopupStyle(elements: IConfirmForm) {
    elements.chatBg.classList.add('active');
    elements.container.classList.add('active');
    AUTH_FORM.confirmBg.classList.remove('active');
    AUTH_FORM.confirm.classList.remove('active');
}

async function submitConfirm(event: Event) {
    event.preventDefault();
    Cookies.set("email", CONFIRM_FORM.inputConfirm.value, {expires: 7})
    await getDataUser(DATA.urlGet);
    confirmPopupStyle(CONFIRM_FORM);
}

CONFIRM_FORM.formConfirm?.addEventListener("submit", submitConfirm);


// const exit = document.querySelector("#exit");
// const authBg = document.querySelector(".auth__bg");
// const auths = document.querySelector(".auth");
//
// exit.addEventListener("click", (e) => {
//     e.preventDefault();
//
//
//     // auths.classList.add('auth');
//
// })
