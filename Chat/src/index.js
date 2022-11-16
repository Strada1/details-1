const openSettings = document.querySelector('#open_settings');
const settings = document.querySelector('#settings');
const closeSettings = document.querySelector('#close_settings');

openSettings.addEventListener('click', (event) => {
  event.preventDefault();
  settings.classList.add('active');
});

closeSettings.addEventListener('click', (event) => {
  event.preventDefault();
  settings.classList.remove('active');
});
