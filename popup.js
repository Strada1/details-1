const popupName = document.getElementById('popupName');
const settingsButton = document.querySelector('.settings');
const popupNameCloseButton = document.querySelector('.popupName__close-btn');
const wrapper = document.querySelector('.wrapper');
const popupMail = document.getElementById('popupMail');
const popupMailCloseButton = document.querySelector('.popupMail__close-btn');

settingsButton.addEventListener('click', () => {
    popupName.classList.remove('popup__hidden');
    wrapper.classList.add('wrapper__dark');
})

popupNameCloseButton.addEventListener('click', () => {
    popupName.classList.add('popup__hidden');
    wrapper.classList.remove('wrapper__dark');
})

popupMailCloseButton.addEventListener('click', () => {
    popupMail.classList.add('popup__hidden');
    wrapper.classList.remove('wrapper__dark');
})


