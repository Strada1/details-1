const popupBg = document.querySelector('.popup__bg');
const popup = document.querySelector('.popup');
const openPopupButton = document.querySelector('#setting');
const closePopupButton = document.querySelector('.close-popup');

openPopupButton.addEventListener('click', (e) => {
  e.preventDefault();
  popupBg.classList.add('active');
  popup.classList.add('active');
});

closePopupButton.addEventListener('click', (e) => {
  e.preventDefault();
  popupBg.classList.remove('active');
  popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
  }
});
