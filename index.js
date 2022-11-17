import { ELEMENT, popupButtons } from "./const.js";
import { showPopup, closePopup, scrollMessagesToEnd, addMessage } from "./view.js";


scrollMessagesToEnd();

ELEMENT.BUTTONS.forEach(button => {
    if (popupButtons.includes(button.textContent)) {
        button.addEventListener("click", showPopup);
    }
});

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
