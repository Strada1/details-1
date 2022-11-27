import { clearParentDOM } from "./render.js";
import { 
    checkMessages, 
    messagesStorage 
} from "./main.js";
import { 
    UI, 
    ERROR_LIST 
} from "./view.js";
import { 
    getCode, 
    changeNikName, 
    serverConnect, 
    closeConnect 
} from "./network.js";
import { 
    setCookie, 
    getCookie 
} from "./cookies.js";

export { 
    useCode, 
    startChat, 
    handlerGetCode,
};

UI.AUTH.GET_CODE.addEventListener('click', handlerGetCode);
UI.AUTH.CODE_INSTOCK.addEventListener('click', handlerConfirm);
UI.CONFIRM.SIGN_TOGGLE.addEventListener('click', handlerSignIn);
UI.CHAT.EXIT.addEventListener('click', handlerExit);
UI.NIKNAME.CHANGE.addEventListener('click', handlerChange);
UI.CHAT.SETTING.addEventListener('click', handlerSetting);
UI.NIKNAME.BUTTON_MONO.addEventListener('click', handlerChangeThemeMono);
UI.NIKNAME.BUTTON_COLOR.addEventListener('click', handlerChangeThemeColor);
UI.SCROLL.ARROW.addEventListener('click', handlerScrollArrow);
UI.CHAT.CONTAINER.addEventListener('scroll', handlerContainerScroll); 

const active = 'active';

function handlerExit() {
    UI.CHAT.CONTAINER.classList.remove(active);
    UI.AUTH.CODE_BOX.classList.add(active);
    UI.CHAT.MYNIK.classList.remove(active);
    UI.CHAT.MYNIK_DETAILS.classList.remove(active);
    UI.CHAT.MESSAGE.setAttribute.disabled;
    UI.CHAT.MESSAGE.placeholder = '';
    clearParentDOM(UI.CHAT.CONTAINER);
    messagesStorage.delete();
    closeConnect();
}

function handlerGetCode() {
    messagesStorage.delete();
    const strMail = UI.AUTH.LOGIN_MAIL.value.trim();
    const correctMail = strMail.length >= 6
        && strMail.includes('@')
        && strMail.includes('.');
    if (correctMail) {
        const emailUser = UI.AUTH.LOGIN_MAIL.value;
        getCode(emailUser);
    } else {
        UI.AUTH.LOGIN_MAIL.value = '';
        ERROR_LIST.wrong_mail();
    } 
}

function useCode() {
    UI.AUTH.CODE_BOX.classList.remove(active);
    UI.CONFIRM.SIGNIN_BOX.classList.add(active);
}

function handlerConfirm() {
    UI.AUTH.CODE_BOX.classList.remove(active);
    UI.CONFIRM.SIGNIN_BOX.classList.add(active);
    const token = getCookie('token');
    if(token) {
        UI.CONFIRM.SIGN_INPUT.value = token;
    } else {
        UI.AUTH.CODE_BOX.classList.add(active);
        UI.CONFIRM.SIGNIN_BOX.classList.remove(active);
        ERROR_LIST.wrong_token();
    }
}

function handlerSignIn() {
    const token = UI.CONFIRM.SIGN_INPUT.value;
    setCookie('token', `${token}`, {secure: true, 'max-age': 3600});
    UI.CONFIRM.SIGNIN_BOX.classList.remove(active);
    UI.NIKNAME.SETTING_BOX.classList.add(active);
}

function handlerSetting() {
    UI.NIKNAME.SETTING_BOX.classList.add(active);
    console.log(UI.NIKNAME.SETTING_BOX.classList.contains('active'));
}

function startChat(name) {
    UI.NIKNAME.SETTING_BOX.classList.remove(active);
    UI.CHAT.CONTAINER.classList.add(active);
    UI.CHAT.MYNIK.classList.add(active);
    UI.CHAT.MYNIK_DETAILS.textContent = name;
    UI.CHAT.MYNIK_DETAILS.classList.add(active);
    UI.CHAT.MESSAGE.removeAttribute.disabled;
    UI.CHAT.MESSAGE.placeholder = ' Написать сообщение..';
    UI.CHAT.MESSAGE.focus();
    clearParentDOM(UI.CHAT.CONTAINER);
    checkMessages();
    serverConnect();
}

function handlerChange() {
    const nikName = UI.NIKNAME.GETNAME.value;
    changeNikName(nikName);
}

function handlerChangeThemeMono() {
    UI.CHAT.CONTAINER.style.setProperty('--background-image', '');
    UI.CHAT.CONTAINER.style.setProperty('--background-color', 'rgb(24, 37, 51)');
    UI.NIKNAME.BUTTON_MONO.classList.add(active);
    UI.NIKNAME.BUTTON_COLOR.classList.remove(active);
    UI.NIKNAME.POSTER_MONO.classList.add(active);
    UI.NIKNAME.POSTER_COLOR.classList.remove(active);
}
let numberTheme = 0;
function handlerChangeThemeColor() {
    numberTheme !== 8
    ? numberTheme += 1
    : numberTheme = 1;
    UI.CHAT.CONTAINER.style.setProperty('--background-image', `url(../images/background_picture/background${numberTheme}.jpg)`)
    UI.CHAT.CONTAINER.style.setProperty('--background-color', 'linear-gradient(to bottom, #768743f3, #4da5fcc8, #7a00aef0)')
    UI.NIKNAME.BUTTON_MONO.classList.remove(active);
    UI.NIKNAME.BUTTON_COLOR.classList.add(active);
    UI.NIKNAME.POSTER_MONO.classList.remove(active);
    UI.NIKNAME.POSTER_COLOR.classList.add(active);
}

function handlerContainerScroll() {
    const scrollY = UI.CHAT.CONTAINER.scrollTop;
    const minScroll = - UI.CHAT.CONTAINER.firstChild.scrollHeight;
    scrollY <= minScroll 
    ? UI.SCROLL.ARROW.classList.add(active)
    : UI.SCROLL.ARROW.classList.remove(active);
    if (UI.CHAT.CONTAINER.scrollHeight <= -UI.CHAT.CONTAINER.scrollTop + UI.CHAT.CONTAINER.clientHeight) {     
        checkMessages();
    }
};

function handlerScrollArrow() {
    UI.CHAT.CONTAINER.scrollTo({
        top: UI.CHAT.CONTAINER.scrollHeight,
        behavior: "smooth"
    });
};

