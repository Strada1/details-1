import { ELEMENTS, MODAL_CASES,
         COOKIES, LOG_BUTTON_TEXT,
         ALERTS} from "./constants.js";
import { requestNameChange, requestToken } from "./api.js";
import Cookies from "js-cookie";

export function createModal(purpose: string) {  
  const template = ELEMENTS.modalTemplate
  const newModal = template.content.cloneNode(true);
  document.body.prepend(newModal)
  switch(purpose) {
    case MODAL_CASES.SETTINGS.purpose: 
      addModalTitles(MODAL_CASES.SETTINGS);
      addSettingsLogic();
      break;
    case MODAL_CASES.AUTH.purpose: 
      addModalTitles(MODAL_CASES.AUTH);
      addAuthLogic();
      break;
    case MODAL_CASES.VERIFY.purpose: 
      addModalTitles(MODAL_CASES.VERIFY);
      addVerifyLogic();
      break;
  }
  renderModal();
}

function renderModal() {
  const modElements = getModalElements();
  setTimeout(() => {
    modElements.modalBody.classList.remove('hidden');
    modElements.modalContainer.classList.remove('hidden');
  }, 0);
  modElements.modalClose.addEventListener('click', closeModal)
  modElements.modalBody.addEventListener('click', (e) => {
    if (e.target === modElements.modalBody) {
      closeModal();
    }
  });
}

function addModalTitles(titlesObj: ModalTitles) {
  const titleElems = getModalTitlesElems();
  titleElems.modalTitleEl.textContent = titlesObj.modalTitle;
  titleElems.formTitleEl.textContent = titlesObj.formTitle;
  titleElems.buttonEl.textContent = titlesObj.buttonTitle;
}

function getModalElements() {
  const modalElements = {
    modalBody: document.querySelector('.modal-body') as HTMLElement,
    modalContainer: document.querySelector('.modal-container') as HTMLElement,
    modalClose: document.querySelector('.modal-close') as HTMLElement,
    modalForm: document.querySelector('.modal-form') as HTMLFormElement,
    modalInput: document.querySelector('.modal-input') as HTMLInputElement,
    modalShortcut: document.querySelector('.modal-shortcut-button') as HTMLElement
  };
  return modalElements;
}

function getModalTitlesElems() {
  const elems = {
    modalTitleEl: document.querySelector('.modal-title') as HTMLElement,
    formTitleEl: document.querySelector('.form-title') as HTMLElement,
    buttonEl: document.querySelector('.modal-button') as HTMLElement,
  }
  return elems;
}

function closeModal() {
  const modElements = getModalElements();
  requestAnimationFrame(() => {
    modElements.modalBody.classList.add('hidden');
    modElements.modalContainer.classList.add('hidden');
  });
  modElements.modalBody.addEventListener('transitionend', () => {
    modElements.modalBody.remove()
  })
};

function addSettingsLogic() {
  const modElements = getModalElements();
  modElements.modalForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const token = COOKIES.getUserToken();
    if(!token) {
      alert(ALERTS.cantChangeName);
      return;
    } 
    const newName = modElements.modalInput.value
    const isChanged = await requestNameChange(newName);
    if(!isChanged) {
      return;
    }
    window.location.reload();
  })
}

function addAuthLogic() {
  enableVerifyShortcut()
  const modElements = getModalElements();
  modElements.modalForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newEmail = modElements.modalInput.value;
    const emailSent = await requestToken(newEmail);
    if(!emailSent) {
      alert(ALERTS.tokenRequestFail)
      return;
    }
    alert(ALERTS.tokenRequestSuccess)
    closeModal();
    createModal(MODAL_CASES.VERIFY.purpose);
  });
}

function addVerifyLogic() {
  const modElements = getModalElements();
  modElements.modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newToken = modElements.modalInput.value
    Cookies.set(COOKIES.cookiesKey, newToken, { expires: 5, path: '' });
    ELEMENTS.logButton.textContent = LOG_BUTTON_TEXT.logout
    window.location.reload();
  });
}

function enableVerifyShortcut() {
  const modElements = getModalElements();
  modElements.modalShortcut.classList.remove('shortcut-hidden');
  modElements.modalShortcut.addEventListener('click', () => {
    closeModal();
    createModal(MODAL_CASES.VERIFY.purpose);
  })
}

interface ModalTitles {
  modalTitle: string,
  formTitle: string,
  buttonTitle: string,
}


