const exitBtn = document.querySelector('#exit');
const authModal = document.querySelector('#modal_auth');
const codeModal = document.querySelector('#modal_code');
const closeModal = document.querySelector('#close_modal_auth');
const authForm = document.querySelector('#form_auth');


exitBtn.addEventListener('click', () => {
  authModal.classList.remove('display_none');
  authModal.classList.add('display_flex');
});

closeModal.addEventListener('click', () => {
  authModal.classList.remove('display_flex');
  authModal.classList.add('display_none');
});

authForm.addEventListener('submit', (e) => {
  e.preventDefault();
  authModal.classList.remove('display_flex');
  authModal.classList.add('display_none');
  codeModal.classList.add('display_flex');
  codeModal.classList.remove('display_none');
})