const UI = {
  MODAl_TRIGGERS: document.querySelectorAll('[data-modal]'),
  MODAl_CLOSE: document.querySelector('[data-modal-close]'),
  MODAL: document.querySelector('.modal'),
  SETTINGS: document.querySelector('.chat__settings'),
};

function openModal() {
  UI.MODAL.classList.add('show');
  UI.MODAL.classList.remove('hide');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  UI.MODAL.classList.add('hide');
  UI.MODAL.classList.remove('show');
  document.body.style.overflow = 'scroll';
}

UI.MODAl_CLOSE.addEventListener('click', () => closeModal());

UI.MODAL.addEventListener('click', (event) => {
  const checkClicksOutside = event.target.classList.contains('modal');
  if (checkClicksOutside) {
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  const checkPushEscape =
    UI.MODAL.classList.contains('show') && event.code === 'Escape';
  if (checkPushEscape) {
    closeModal();
  }
});

UI.SETTINGS.addEventListener('click', openModal);
UI.MODAl_CLOSE.addEventListener('click', closeModal);
