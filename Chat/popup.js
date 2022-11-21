import {buttonSetting} from "./const.js";

buttonSetting.openPopupButton.addEventListener('click', (e) => {
  e.preventDefault();
  buttonSetting.popupBg.classList.add('active');
  buttonSetting.popup.classList.add('active');
});

function removePopup() {
  buttonSetting.popupBg.classList.remove('active');
  buttonSetting.popup.classList.remove('active');
}

buttonSetting.closePopupButton.addEventListener('click', (e) => {
  e.preventDefault();
  removePopup();
});

document.addEventListener('click', (e) => {
  if (e.target === buttonSetting.popupBg) {
    removePopup();
  }
});
