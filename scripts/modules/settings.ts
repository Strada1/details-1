import Modal from './modal.js';

const FORM_SEND_SETTINGS = document.querySelector('.modal__form--settings');
const BTN_SETTINGS = document.querySelector('.chat__btn--settings');

const modalSettings = new (Modal('.modal--settings') as any);

BTN_SETTINGS?.addEventListener('click', function() {
  modalSettings.openModal();
})

FORM_SEND_SETTINGS?.addEventListener('submit', async function(this:Element, evt) {
  evt.preventDefault();

  const NAME = this.querySelector('.chat__input') as HTMLInputElement;

  if (NAME?.value.length > 0) {
    await fetch('https://edu.strada.one/api/user', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${document.cookie.replace('token=', '')}`
      },
      body: JSON.stringify({name: NAME.value}),
    })
    .then(async (res) => {
      await fetch('https://edu.strada.one/api/user/me', {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Bearer ${document.cookie.replace('token=', '')}`
        },
      })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('myEmail', res.email);
        NAME.value = '';
        modalSettings.closeModal();
      })
    })
  }
})