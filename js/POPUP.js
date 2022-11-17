import {ELEMENT} from "./view.js"

ELEMENT.SETTINGS.addEventListener('click', openPopup)
ELEMENT.CLOSE.addEventListener('click', closePopup)

function openPopup() {
	ELEMENT.POPUP.classList.add('open')
}

function closePopup() {
	ELEMENT.POPUP.className = "popup"
}