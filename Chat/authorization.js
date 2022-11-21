import Cookies from 'js-cookie'
import {DATA} from "./const.js";
import {getDataUser, setToken, setUserName} from "./requests.js";

const confirmBg = document.querySelector(".confirm__bg");
const confirm = document.querySelector(".confirm");
const auth = document.querySelector(".auth");

function authPopupStyle() {
    confirm.classList.add('active');
    confirmBg.classList.add("active");
    auth.classList.add("active")
}

async function formAuth(event) {
    event.preventDefault();
    await setToken(DATA.email);
    DATA.email = "";
    authPopupStyle();
}
const authForm = document.querySelector("#form-auth");
authForm.addEventListener("submit",formAuth);

const formConfirm = document.querySelector("#form-confirm");
const chatBg = document.querySelector(".chat");
const container = document.querySelector(".container");
const inputConfirm = document.querySelector(".input-confirm");

function confirmPopupStyle() {
    chatBg.classList.add('active');
    container.classList.add('active');
    confirmBg.classList.remove('active');
    confirm.classList.remove('active');
}

function submitConfirm (event){
    event.preventDefault();
    Cookies.set("email",inputConfirm.value , { expires: 7 })
    getDataUser(DATA.urlGet);

    confirmPopupStyle();
}
formConfirm.addEventListener("submit", submitConfirm );



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
