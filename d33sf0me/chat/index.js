const ELEMENT = {
    POPUP: document.querySelector(".popup"),
    POPUP_CLOSE_BUTTONS: document.querySelectorAll(".popup__button"),
    BUTTONS: document.querySelectorAll(".chat__button"),
    SettingsButton: document.querySelector(".settingsButton")
};
const popupButtons = [
    "->"
];

function showPopup() {
    ELEMENT.POPUP.classList.add("popup--active");
}

function closePopup() {
    ELEMENT.POPUP.classList.remove("popup--active");
}


ELEMENT.SettingsButton.addEventListener("click", showPopup);


ELEMENT.POPUP_CLOSE_BUTTONS.forEach(button => {
    button.addEventListener("click", closePopup);
});