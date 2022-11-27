import { handlerGetCode } from "./ui_service.js";

export { 
    UI, 
    DATE_FORMAT, 
    ERROR_LIST, 
    COLOR_THEME 
};

const UI = {
    CHAT: {
        INPUT: document.querySelector('.container-footer'),
        MESSAGE: document.querySelector('.message-input'),
        CONTAINER: document.querySelector('.container-main'),
        TIME: document.querySelector('.date-time'),
        DAY: document.querySelector('.date-day'),
        EXIT: document.querySelector('.btn-exit'),
        MYNIK: document.querySelector('.my-nik-img'),
        MYNIK_DETAILS: document.querySelector('.my-nik-detailes'),
        SETTING: document.querySelector('.btn-setting'),
        STATUS: document.querySelector('.connect-status'),
    },
    AUTH: {
        CODE_BOX: document.querySelector('.wrapper-login-box'),
        GET_CODE: document.querySelector('.login'),
        CODE_INSTOCK: document.querySelector('.code-instock'),
        LOGIN_MAIL: document.querySelector('.login-mail'),
    },
    CONFIRM: {
        SIGNIN_BOX: document.querySelector('.wrapper-signin-box'),
        SIGN_TOGGLE: document.querySelector('.sign-in-toggle'),
        SIGN_INPUT: document.querySelector('.sign-code'),
    },
    NIKNAME: {
        SETTING_BOX: document.querySelector('.wrapper-setting-box'),
        GETNAME: document.querySelector('.nik-name'),
        CHANGE: document.querySelector('.change'),
        BUTTON_MONO: document.querySelector('.btn-theme-mono'),
        BUTTON_COLOR: document.querySelector('.btn-theme-color'),
        WRAPPER_MONO: document.querySelector('.wrapper-btn-mono'),
        WRAPPER_COLOR: document.querySelector('.wrapper-btn-color'),
        POSTER_MONO: document.querySelector('.poster-theme-mono'),
        POSTER_COLOR: document.querySelector('.poster-theme-color'),
    },
    SCROLL: {
        ARROW: document.querySelector('.arrow-down'),
    } 
}

const DATE_FORMAT = {
    TIME: { hour: '2-digit', minute: '2-digit'},
    DAY: { weekday: 'short', day: '2-digit', month: 'long' },
}

const ERROR_LIST = {
    wrong_mail () {
        const errorText = 'Неправильно указана почта\n Попробуйте, пожалуйста, ещё раз'
        popUpError(errorText);
    },
    wrong_fetch (errorCode) {
        const errorText = `Неудачный запрос на сервер \n Код ошибки ${errorCode}`
        popUpError(errorText);
        return;
    },
    wrong_token () {
        const errorText = 'Отсутствует токен\n Необходимо пройти авторизацию'
        popUpError(errorText);
    },
}

function popUpError (error) {
    const popUp = document.querySelector('.pop_up')
    const popUpClose = document.querySelector('.pop_up_close')
    const errorText = document.querySelector('.error_text')
    popUp.classList.add('pop-up-active')
    errorText.innerText = error
    const timerId = setTimeout(() => { 
        popUp.classList.remove('pop-up-active');
    }, 10000)
    popUpClose.addEventListener('click', (event) => {
        event.preventDefault()
        popUp.classList.remove('pop-up-active')
        clearTimeout(timerId)
    })
}

const COLOR_THEME = {
    color1: '#FF1493',
    color2: '#9932CC',
    color3: '#7B68EE',
    color4: '#F08080',
    color5: '#FF8C00',
    color6: '#7CFC00',
    color7: '#00CED1',
    color8: '#0000CD',
    color9: 'rgb(98, 212, 227)',
}
