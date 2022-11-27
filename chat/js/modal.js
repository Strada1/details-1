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
        buttonText: 'Получить код',
      },
      inputType: 'email',
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
      inputType: 'text',
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
      inputType: 'text',
      template: modalTemplate
    }
  ]
]);


class Modal {
  constructor({content, inputType, template}, submitCallback, validateCallback) {
    if (!content || !template) {
      return;
    }

    this.modalElement = template.cloneNode(true);
    this.formElement = this.modalElement.querySelector('.modal__form');

    this.setTitle(content.title);
    this.setLabel(content.label);
    this.setButtonText(content.buttonText);
    this.setInput(inputType);

    this.closeModal = this.closeModal.bind(this);
    this.modalClickHandler = this.modalClickHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
    this.submitForm = submitCallback.bind(this);
    this.setInputValue = this.setInputValue.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);

    if (validateCallback) {
      this.validateForm = validateCallback.bind(this);
    }

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

  setInput(inputType) {
    this.input = this.modalElement.querySelector('.modal__input');
    this.input.setAttribute('type', inputType);
  }

  setInputValue(value) {
    this.input.value = value;
  }

  disableButton() {
    this.button.setAttribute('disabled', true);
  }

  enableButton() {
    this.button.removeAttribute('disabled');
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
    const inputValue = this.input.value.trim();

    if (!this.validateForm || (this.validateForm && this.validateForm(inputValue))) {
      this.button.setAttribute('disabled', 'disabled');
      this.input.classList.remove('error-field');
      this.submitForm(inputValue);
    } else {
      this.input.classList.add('error-field');
    }
  }

  setFormSubmit() {
    if (!this.modalElement) {
      return;
    }

    this.formElement.addEventListener('submit', this.formSubmitHandler);
  }

  openModal() {
    if (this.modalElement) {
      document.body.append(this.modalElement);
      this.input.focus();
      this.button.removeAttribute('disabled');
      setTimeout(() => {
        this.modalElement.classList.add('is-visible');
      }, 100);
    }
  }
}


export { Modal, MODAL_TYPES };
