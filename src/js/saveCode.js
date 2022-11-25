const formCode = document.querySelector('#form_code');
const inputCode = document.querySelector('#input_code');
const modalCode = document.querySelector('#modal_code');

formCode.addEventListener('submit', (e) => {
  e.preventDefault();
  const code = inputCode.value;
  saveToCookies(code);
  modalCode.classList.add('display_none');
  modalCode.classList.remove('display_flex');
});

function saveToCookies (value) {
  document.cookie = `token=${value}`;
}