const ELEMENT = {
	SETTINGS: document.querySelector('.settings'),
	CLOSE: document.querySelector('.popup__button__exit'),
	POPUP: document.getElementById("popup")
}

ELEMENT.SETTINGS.addEventListener('click', openPopup)
ELEMENT.CLOSE.addEventListener('click', closePopup)

function openPopup() {
	ELEMENT.POPUP.classList.add('open')
}

function closePopup() {
	ELEMENT.POPUP.className = "popup"
}