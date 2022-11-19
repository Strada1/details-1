import { UI, ERROR_LIST } from "./view.js";
import { getCode, changeNikName } from "./network.js";
import { setCookie } from "./cookies.js";

export { useCode };

UI.AUTH.GET_CODE.addEventListener('click', handlerGetCode);
UI.CONFIRM.SIGN_TOGGLE.addEventListener('click', handlerSignIn);
UI.CHAT.EXIT.addEventListener('click', handlerExit);
UI.CHAT.CHANGE.addEventListener('click', handlerChange);
UI.CHAT.SETTING.addEventListener('click', handlerSetting);

UI.NIKNAME.BUTTON_MONO.addEventListener('click', handlerChangeThemeMono);
UI.NIKNAME.BUTTON_COLOR.addEventListener('click', handlerChangeThemeColor);

function handlerGetCode() {
    const strMail = UI.AUTH.LOGIN_MAIL.value.trim();
    const correctMail = strMail.length >= 6
        && strMail.includes('@')
        && strMail.includes('.');
    if (!correctMail) {
        UI.AUTH.LOGIN_MAIL.value = '';
        ERROR_LIST.wrong_mail();
    } else {
        const emailUser = UI.AUTH.LOGIN_MAIL.value;
        getCode(emailUser);
    } 
}

function useCode() {
    UI.AUTH.CODE_BOX.classList.remove('active');
    UI.CONFIRM.SIGNIN_BOX.classList.add('active');
}

function handlerSignIn() {
    const token = UI.CONFIRM.SIGN_INPUT.value;
    console.log(token)
    setCookie('tokenCode', `${token}`, {secure: true, 'max-age': 3600});
    UI.CONFIRM.SIGNIN_BOX.classList.remove('active');
    UI.NIKNAME.SETTING.classList.add('active');
}

function handlerExit() {
    UI.CHAT.CONTAINER.classList.remove('active');
    UI.AUTH.CODE_BOX.classList.add('active');
    UI.CHAT.MYNIK.classList.remove('active');
    UI.CHAT.MYNIK_DETAILS.classList.remove('active');
    UI.CHAT.MESSAGE.setAttribute.disabled;
    UI.CHAT.MESSAGE.placeholder = '';
}

function handlerSetting() {
    const emailUser = 'dimapepsi@mail.ru';
    const nikName = UI.NIKNAME.GETNAME.value;
    changeNikName(emailUser,nikName); 
    UI.NIKNAME.SETTING.classList.remove('active');
    UI.CHAT.CONTAINER.classList.add('active');
    UI.CHAT.MYNIK.classList.add('active');
    UI.CHAT.MYNIK_DETAILS.classList.add('active');
    UI.CHAT.MESSAGE.removeAttribute.disabled;
    UI.CHAT.MESSAGE.placeholder = ' Написать сообщение..';
    UI.CHAT.MESSAGE.focus();
    UI.CHAT.MESSAGE.setAttribute.disabled;
    UI.CHAT.MESSAGE.placeholder = '';
}

function handlerChange() {
    UI.NIKNAME.SETTING.classList.toggle('active');
    UI.CHAT.MESSAGE.placeholder = ' Написать сообщение..';
    UI.CHAT.MESSAGE.focus();
}

function handlerChangeThemeMono() {
    UI.CHAT.CONTAINER.style.setProperty('--background-image', '');
    UI.CHAT.CONTAINER.style.setProperty('--background-color', 'rgb(24, 37, 51)');
    UI.NIKNAME.BUTTON_MONO.classList.add('active');
    UI.NIKNAME.BUTTON_COLOR.classList.remove('active');
    UI.NIKNAME.POSTER_MONO.classList.add('active');
    UI.NIKNAME.POSTER_COLOR.classList.remove('active');
}
let numberTheme = 0;
function handlerChangeThemeColor() {
    numberTheme !== 7
    ? numberTheme += 1
    : numberTheme = 1;
    UI.CHAT.CONTAINER.style.setProperty('--background-image', `url(../images/background_picture/background${numberTheme}.jpg)`)
    UI.CHAT.CONTAINER.style.setProperty('--background-color', 'linear-gradient(to bottom, #768743f3, #4da5fcc8, #7a00aef0)')
    UI.NIKNAME.BUTTON_MONO.classList.remove('active');
    UI.NIKNAME.BUTTON_COLOR.classList.add('active');
    UI.NIKNAME.POSTER_MONO.classList.remove('active');
    UI.NIKNAME.POSTER_COLOR.classList.add('active');
}

UI.SCROLL.ARROW.onclick = function() {
    UI.CHAT.CONTAINER.scrollTo({
        top: UI.CHAT.CONTAINER.scrollHeight,
        behavior: "smooth"
    });
};

UI.CHAT.CONTAINER.addEventListener('scroll', function() {
    const scrollY = UI.CHAT.CONTAINER.scrollTop;
    const minScroll = UI.CHAT.CONTAINER.scrollHeight - 680;
    if(scrollY <= minScroll){
        UI.SCROLL.ARROW.classList.add('active');
    } else {
        UI.SCROLL.ARROW.classList.remove('active');
    }
});
