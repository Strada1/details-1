const POPUP_ACTIVE_CLASS = 'popup--active';

export function initPopup(popup, trigger, closeButton) {
	trigger.addEventListener('click', () => showPopup(popup));
	closeButton.addEventListener('click', () => closePopup(popup));
}

export function showPopup(popup) {
	popup.classList.add(POPUP_ACTIVE_CLASS);
}

export function closePopup(popup) {
	popup.classList.remove(POPUP_ACTIVE_CLASS);
}