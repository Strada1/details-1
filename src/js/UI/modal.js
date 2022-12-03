import { MODAL, MODAL_DETAILS, MODAL_STATUS } from '../const';

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
