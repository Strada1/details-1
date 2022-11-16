const ELEMENT = {
  POPUP: document.querySelector('.popup'),
  POPUP_CLOSE_BUTTONS: document.querySelectorAll('.popup__button'),
  BUTTONS: document.querySelectorAll('.btn'),
};
const popupButtons = ['Настройки', 'Получить код'];

function showPopup() {
  ELEMENT.POPUP.classList.add('popup--active');
}

function closePopup() {
  ELEMENT.POPUP.classList.remove('popup--active');
}

ELEMENT.BUTTONS.forEach((button) => {
  if (popupButtons.includes(button.textContent)) {
    button.addEventListener('click', showPopup);
  }
});

ELEMENT.POPUP_CLOSE_BUTTONS.forEach((button) => {
  button.addEventListener('click', closePopup);
});
