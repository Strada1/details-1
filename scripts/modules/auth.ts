import Modal from './modal.js';

const FORM_SEND_EMAIL = document.querySelector('.modal__form--auth');
const FORM_SEND_CONFIRM = document.querySelector('.modal__form--confirm');
const BTN_LOGOUT = document.querySelector('.chat__btn--logout');
const modalAuth = new (Modal('.modal--auth') as any);
const modalConfirm = new (Modal('.modal--confirm')  as any);


if (!document.cookie.length) {
  modalAuth.openModal();
}

FORM_SEND_EMAIL?.addEventListener('submit', async function(this: Element, evt) {
  evt.preventDefault();
  const emailValue = this.querySelector('.chat__input') as HTMLInputElement;
  const EMAIL_VALUE = emailValue.value;

  if (EMAIL_VALUE.length > 0) {
    try {
      await fetch('https://edu.strada.one/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({email: EMAIL_VALUE}),
      })
      .then(response => response.json())
      .then(res => console.log(res))
      .then(res => {
        emailValue.value = '';
        modalConfirm.openModal();
      });
    } catch (error) {
      alert(error);
    }
  }
});

FORM_SEND_CONFIRM?.addEventListener('submit', function(this: Element, evt) {
  evt.preventDefault();
  const tokenInput = this.querySelector('.chat__input') as HTMLInputElement;
  const TOKEN_VALUE = tokenInput.value;

  if (TOKEN_VALUE.length > 0) {
    document.cookie = `token=${TOKEN_VALUE}`;
    tokenInput.value = '';
  }
})

BTN_LOGOUT?.addEventListener('click', function(evt) {
  evt.preventDefault();

  document.cookie = 'token=';
  modalAuth.openModal();
})