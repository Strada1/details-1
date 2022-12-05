import Modal from './Modal';

const { log } = console;

export default class UiModal extends Modal {
  #callbacks = [];

  #initUI(className) {
    try {
      const closeButton = document.querySelector(`.${className} .dialog__close`);
      const form = document.querySelector(`.${className} .form`);

      closeButton.addEventListener('click', () => {
        this.close();
      });
      form.addEventListener('submit', (event) => {
        event.preventDefault();

        try {
          const data = Object.fromEntries(new FormData(form).entries);
          this.#callbacks.forEach((fn) => fn(data));
        } catch (e) {
          log(e);
        }
      });
      log(this);
    } catch (e) {
      log(e);
    }
  }

  constructor(className) {
    super(className);
    this.#initUI(className);
  }

  open() {
    log(`${this.constructor.name} opened`);
    this.dialog.showModal();
  }

  close() {
    log(`${this.constructor.name} was closed`);
    this.dialog.close();
  }

  onSubmit(callback) {
    this.#callbacks.push(callback);
  }
}
