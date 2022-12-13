function Modal(this: any, modalName: string) {
  this.openModal = function() {
    if (modalName != "") {
      document.querySelector(modalName)?.classList.add('show');
      this.closeModal();
    } else {
      alert('Error');
    }
  },
  this.closeModal = function() {
    const modal = document.querySelector(modalName);
    modal?.querySelector('.modal__btn-close')?.addEventListener('click', function() {
      modal.classList.remove('show');
    })
  }
};

export default Modal;