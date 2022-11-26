//Попап настроек
const openSettings = function() {
    const popupSettings = document.querySelector('.popup_bg-set');
    popupSettings.style.display = 'block';
};

const closeSettings = function() {
    const popupSettings = document.querySelector('.popup_bg-set');
    popupSettings.style.display = 'none';
};


//Попап верификации кода
const openVerif = function() {
    const popupVerif = document.querySelector('.popup_bg-verif');
    popupVerif.style.display = 'block'
};
const closeVerif = function() {
    const popupVerif = document.querySelector('.popup_bg-verif');
    popupVerif.style.display = 'none';
};

//Попап авторизации
const openAuth = function() {
    const popupAuth = document.querySelector('.popup_bg-auth');
    popupAuth.style.display = 'block'
};
const closeAuth = function() {
    const popupAuth = document.querySelector('.popup_bg-auth');
    popupAuth.style.display = 'none';
};


export { openSettings, closeSettings, openVerif, closeVerif, openAuth, closeAuth };