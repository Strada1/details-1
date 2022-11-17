const ELEMENTS = {
  POP_UP: document.querySelector('.pop-up'),
  POP_UP_CLOSE: document.querySelector('.pop-up__content-header-close'),
  SETTINGS: document.querySelector('.chat__buttons-settings'),
}

function openPopUp() {
  ELEMENTS.POP_UP.removeAttribute('style');
}

function closePopUp() {
  ELEMENTS.POP_UP.setAttribute('style', 'display: none;');
}

ELEMENTS.SETTINGS.addEventListener('click', openPopUp);
ELEMENTS.POP_UP_CLOSE.addEventListener('click', closePopUp);