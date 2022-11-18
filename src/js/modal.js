export const MODAL = {
  SETTINGS: document.querySelector('#settings'),
  AUTHORIZATION: document.querySelector('#authorization'),
  CONFIRMATION: document.querySelector('#confirmation'),
};

export const MODAL_DETAILS = {
  CLOSES: document.querySelectorAll('[data-modal-close]'),
  ALL_MODAL: document.querySelectorAll('.modal'),
  FORM_AUTHORIZATION: document.querySelector('[data-authorization-form]'),
  INPUT_AUTHORIZATION: document.querySelector('[data-authorization-input]'),
};

export function openModal(modal) {
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
}

export function closeModal(modal) {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = 'scroll';
}
export function closeAllModal() {
  Object.values(MODAL).forEach((modalItem) => closeModal(modalItem));
}

MODAL_DETAILS.CLOSES.forEach((item) => {
  item.addEventListener('click', () => {
    closeAllModal();
  });
});

function closingByClickingOut(event) {
  const checkClicksOutside = event.target.classList.contains('modal');
  if (checkClicksOutside) {
    closeAllModal();
  }
}
MODAL_DETAILS.ALL_MODAL.forEach((item) => {
  item.addEventListener('click', (event) => {
    closingByClickingOut(event);
  });
});

function closingByButton(event) {
  Object.values(MODAL).forEach((modalItem) => {
    const checkPushEscape =
      modalItem.classList.contains('show') && event.code === 'Escape';
    if (checkPushEscape) {
      closeAllModal();
    }
  });
}

document.addEventListener('keydown', (event) => closingByButton(event));
