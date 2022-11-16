const ELEMENT = {
    POPUP: document.querySelector(".popup"),
    POPUP_CLOSE_BUTTONS: document.querySelectorAll(".popup__button"),
    BUTTONS: document.querySelectorAll(".chat__button"),
    MESSAGES: document.querySelector(".chat__main")
};
const popupButtons = [
    "Настройки",
    "Получить код"
];

function showPopup() {
    ELEMENT.POPUP.classList.add("popup--active");
}

function closePopup() {
    ELEMENT.POPUP.classList.remove("popup--active");
}

function scrollMessagesToEnd() {
    ELEMENT.MESSAGES.scrollTop = ELEMENT.MESSAGES.scrollHeight;
}

scrollMessagesToEnd();

ELEMENT.BUTTONS.forEach(button => {
    if (popupButtons.includes(button.textContent)) {
        button.addEventListener("click", showPopup);
    }
});

ELEMENT.POPUP_CLOSE_BUTTONS.forEach(button => {
    button.addEventListener("click", closePopup);
});