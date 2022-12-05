export default class Modal {
  constructor(className = 'dialog') {
    this.dialog = document.querySelector(`.${className}`);
    this.isExist = Boolean(this.dialog);
  }

  open() {
    this.dialog.showModal();
  }

  close() {
    this.dialog.close();
  }
}
