import { ELEMENT, POPUP } from "./const.js";
import { showPopup, closePopup, scrollMessagesToEnd, addMessage } from "./view.js";


showPopup(POPUP.AUTHORIZATION);


document.getElementById(POPUP.AUTHORIZATION.FORM_ID).addEventListener("submit", (event) => {
    event.preventDefault();
    getTheCode();
    document.querySelector(".popup").remove();

    showPopup(POPUP.CONFIRMATION);

    document.getElementById(POPUP.CONFIRMATION.CLOSE_BUTTON_ID).addEventListener("click", () => {
        document.querySelector(".popup").remove();
        showPopup(POPUP.AUTHORIZATION);
    })

    document.querySelector(".popup").addEventListener("submit", (event) => {
        event.preventDefault();
        authorization();
        document.querySelector(".popup").remove();
        ELEMENT.CHAT.classList.remove("chat__inner--disabled");
    })
});

ELEMENT.SETTING_BUTTON.addEventListener("click", () => {
    ELEMENT.CHAT.classList.add("chat__inner--disabled");
    showPopup(POPUP.SETTINGS);
    document.getElementById(POPUP.SETTINGS.CLOSE_BUTTON_ID).addEventListener("click", () => {
        document.querySelector(".popup").remove();
        ELEMENT.CHAT.classList.remove("chat__inner--disabled");
    })
})





async function getTheCode() {
    const form = document.getElementById(POPUP.AUTHORIZATION.FORM_ID);
    const input = form.querySelector(".popup__input");
    const emailText = input.value;

    console.log(emailText);

    const responce = await fetch("https://edu.strada.one/api/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify({email: emailText})
    });

}


function authorization() {
    const form = document.getElementById(POPUP.CONFIRMATION.FORM_ID);
    const input = form.querySelector(".popup__input");
    const codeText = input.value;
    console.log(codeText);
}

scrollMessagesToEnd();

ELEMENT.POPUP_CLOSE_BUTTONS.forEach(button => {
    button.addEventListener("click", closePopup);
});

ELEMENT.SEND_MESSAGE_FORM.addEventListener('submit', event => {
    event.preventDefault();
    addMessage();
})

ELEMENT.MESSAGE_INPUT.addEventListener("keydown", event => {
    if (event.code === "Enter") {
        event.preventDefault();
        addMessage();
    }
})
