const inputEmail :  any = document.querySelector(".input-auth");

interface IData {
    urlPost : string
    urlGet : string
    urlMessage : string
    email : string
    websocket : string
}

const DATA : IData= {
    urlPost: `https://edu.strada.one/api/user`,
    urlGet: `https://edu.strada.one/api/user/me`,
    urlMessage: `https://edu.strada.one/api/messages/`,
    email: inputEmail.value.trim(),
    websocket: `wss://edu.strada.one/websockets?`,
}

const inputValue = {
    userName: document.querySelector(".input-popup"),
}

const buttonSetting = {
    popupBg: document.querySelector('.popup__bg') as HTMLSelectElement,
    popup: document.querySelector('.popup') as HTMLSelectElement,
    openPopupButton: document.querySelector('#setting') as HTMLSelectElement,
    closePopupButton: document.querySelector('.close-popup') as HTMLSelectElement,
}

export {DATA, inputValue, buttonSetting}