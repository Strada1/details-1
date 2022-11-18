const settingsBtn = document.querySelector('#settings');
const settingsModal = document.querySelector('#modal_settings');
const closeModal = document.querySelector('#close_modal');

settingsBtn.addEventListener('click', () => {
  settingsModal.classList.remove('display_none');
  settingsModal.classList.add('display_flex');
});

closeModal.addEventListener('click', () => {
  settingsModal.classList.remove('display_flex');
  settingsModal.classList.add('display_none');
});