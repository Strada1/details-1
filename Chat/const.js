const inputEmail = document.querySelector(".input-auth");
export const DATA = {
    urlPost: `https://edu.strada.one/api/user`,
    urlGet: `https://edu.strada.one/api/user/me`,
    urlMessage : `https://edu.strada.one/api/messages/`,
    email: inputEmail.value.trim(),
}

export const inputValue = {
     userName : document.querySelector(".input-popup"),
}


export const buttonSetting = {
     popupBg : document.querySelector('.popup__bg'),
     popup : document.querySelector('.popup'),
     openPopupButton : document.querySelector('#setting'),
     closePopupButton : document.querySelector('.close-popup'),
}