const modalTemplate = document.querySelector('#modal-template')
  .content
  .querySelector('.modal');

const MODAL_TYPES = new Map([
  [
    'authorization',
    {
      content: {
        title: 'Авторизация',
        label: 'Почта',
        buttonText: 'Получить код'
      },
      template: modalTemplate
    }
  ],
  [
    'confirmation',
    {
      content: {
        title: 'Подтверждение',
        label: 'Код',
        buttonText: 'Войти'
      },
      template: modalTemplate
    }
  ],
  [
    'settings',
    {
      content: {
        title: 'Настройка',
        label: 'Имя в чате',
        buttonText: 'Подтвердить'
      },
      template: modalTemplate
    }
  ]
]);


class Modal {
  constructor({content, template}, submitCallback, validateCallback) {
    if (!content || !template) {
      return;
    }

    this.modalElement = template.cloneNode(true);
    this.formElement = this.modalElement.querySelector('.modal__form');

    this.setTitle(content.title);
    this.setLabel(content.label);
    this.setButtonText(content.buttonText);

    this.closeModal = this.closeModal.bind(this);
    this.modalClickHandler = this.modalClickHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
    this.submitForm = submitCallback.bind(this);
    this.validateForm = validateCallback.bind(this);

    this.setModalClosure();
    this.setFormSubmit();
  }

  setTitle(titleText = '') {
    if (this.modalElement) {
      this.title = this.modalElement.querySelector('.modal__title');
      this.title.textContent = titleText;
    }
  }

  setLabel(labelText = '') {
    if (this.modalElement) {
      this.label = this.modalElement.querySelector('.modal__label');
      this.label.textContent = labelText;
    }
  }

  setButtonText(buttonText = '') {
    if (this.modalElement) {
      this.button = this.modalElement.querySelector('.modal__submit');
      this.button.textContent = buttonText;
    }
  }

  closeModal() {
    this.modalElement.classList.remove('is-visible');
    setTimeout(() => {
      this.modalElement.remove();
    }, 1000);
  }

  modalClickHandler(e) {
    if (e.target.hasAttribute('data-close-modal')) {
      this.closeModal();
    }
  }

  setModalClosure() {
    if (!this.modalElement) {
      return;
    }

    this.modalElement.addEventListener('click', this.modalClickHandler);
  }

  formSubmitHandler(e) {
    e.preventDefault();
    const form = e.target;
    const inputElement = form.querySelector('.modal__input');
    const inputValue = inputElement.value.trim();

    if (this.validateForm(inputValue)) {
      inputElement.classList.remove('error-field');
      const formData =  { email: inputValue };
      this.submitForm(formData);
    } else {
      inputElement.classList.add('error-field');
    }
  }

  setFormSubmit() {
    if (!this.modalElement) {
      return;
    }

    this.formElement.addEventListener('submit', this.formSubmitHandler);
  }

  addModal() {
    if (this.modalElement) {
      document.body.append(this.modalElement);
      this.modalElement.classList.add('is-visible');
    }
  }
}


export { Modal, MODAL_TYPES };
