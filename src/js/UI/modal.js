export const MODAL = {
  SETTINGS: document.querySelector('#settings'),
  AUTHORIZATION: document.querySelector('#authorization'),
  CONFIRMATION: document.querySelector('#confirmation'),
};
const MODAL_STATUS = {
  OPEN: 'show',
  CLOSE: 'hide',
};

export const MODAL_DETAILS = {
  CLOSES: document.querySelectorAll('[data-modal-close]'),
  ALL_MODAL: document.querySelectorAll('.modal'),
  FORM_AUTHORIZATION: document.querySelector('[data-authorization-form]'),
  INPUT_AUTHORIZATION: document.querySelector('[data-authorization-input]'),
  FORM_CONFIRMATION: document.querySelector('[data-confirmation-form]'),
  INPUT_CONFIRMATION: document.querySelector('[data-confirmation-input]'),
  FORM_SETTINGS: document.querySelector('[data-settings-form]'),
  INPUT_SETTINGS: document.querySelector('[data-settings-input]'),
};

export function openModal(modal) {
  modal.classList.add(MODAL_STATUS.OPEN);
  modal.classList.remove(MODAL_STATUS.CLOSE);
  document.body.style.overflow = 'hidden';
}

export function closeModal(modal) {
  modal.classList.add(MODAL_STATUS.CLOSE);
  modal.classList.remove(MODAL_STATUS.OPEN);
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
      modalItem.classList.contains(MODAL_STATUS.OPEN) &&
      event.code === 'Escape';
    if (checkPushEscape) {
      closeAllModal();
    }
  });
}

document.addEventListener('keydown', (event) => closingByButton(event));
