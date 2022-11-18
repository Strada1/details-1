const openSettings = document.querySelector('#settingsBtn');
const settings = document.querySelector('#settings');
const closeSettings = document.querySelector('#closeSettingsBtn');

openSettings.addEventListener('click', (event) => {
  event.preventDefault();
  settings.classList.add('active');
});

closeSettings.addEventListener('click', (event) => {
  event.preventDefault();
  settings.classList.remove('active');
});