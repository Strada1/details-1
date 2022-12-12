const POPUPS = {
   setting: {
      popup: document.querySelector('.messenger__popups.popup-setting'),
      form: document.querySelector('.popup__form.setting'),
      input: document.querySelector('.popup__form.setting .popup__input'),
   },
   login: {
      popup: document.querySelector('.messenger__popups.popup-login'),
      form: document.querySelector('.popup__form.login'),
      input: document.querySelector('.popup__form.login .popup__input'),
   },
   verification: {
      popup: document.querySelector('.messenger__popups.popup-verification'),
      form: document.querySelector('.popup__form.verification'),
      input: document.querySelector('.popup__form.verification .popup__input'),
   },
}

const loginPopupOpenBtn = document.querySelector('.messenger__header .btn.login');
const closePopupBtn = document.querySelectorAll('.popup__close');

const openPopup = (popup) => {
   popup.classList.add('open');
}

const closePopup = () => {
   const curentPopup = document.querySelector('.messenger__popups.open')
   curentPopup.classList.remove('open');
}

closePopupBtn.forEach(btn => btn.addEventListener('click', closePopup))
loginPopupOpenBtn.addEventListener('click', event => {
   openPopup(POPUPS.login.popup)
});

export { POPUPS, openPopup, closePopup }