const inputEmail = document.querySelector(".input-auth");
const DATA = {
    urlPost: `https://edu.strada.one/api/user`,
    urlGet: `https://edu.strada.one/api/user/me`,
    urlMessage : `https://edu.strada.one/api/messages/`,
    email: inputEmail.value.trim(),
    websocket: `wss://edu.strada.one/websockets?`,
}

const inputValue = {
     userName : document.querySelector(".input-popup"),
}

const buttonSetting = {
     popupBg : document.querySelector('.popup__bg'),
     popup : document.querySelector('.popup'),
     openPopupButton : document.querySelector('#setting'),
     closePopupButton : document.querySelector('.close-popup'),
}

export {DATA, inputValue,buttonSetting}