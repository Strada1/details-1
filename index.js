import { ELEMENT, popupButtons } from './value.js';
function showPopup() {
  ELEMENT.POPUP.classList.add('popup--active');
}

function closePopup() {
  ELEMENT.POPUP.classList.remove('popup--active');
}

ELEMENT.BUTTONS.forEach((button) => {
  if (popupButtons.includes(button.textContent)) {
    button.addEventListener('click', showPopup);
  }
});

ELEMENT.POPUP_CLOSE_BUTTONS.forEach((button) => {
  button.addEventListener('click', closePopup);
});

ELEMENT.BODY.onload = function () {
  ELEMENT.TEMPLATE_MESS_OTHER.forEach((template) => {
    const cloneOther = createClone(template);
    showMessageOther(cloneOther);
  })
}

ELEMENT.FORM_MESSAGE.onsubmit = function (event) {
  event.preventDefault();
  const cloneOwn = createClone(ELEMENT.TEMPLATE_MESS_OWN);
  showMessageOwn(cloneOwn);
};

function createClone(template) {
  return template.content.cloneNode(true);
}

function showMessageOwn(clone){
  if (ELEMENT.INPUT_MESSAGE.value.trim()) {
    clone.querySelectorAll('.main__message-own-text').forEach((message) => message.textContent = ELEMENT.INPUT_MESSAGE.value);
    ELEMENT.MAIN.prepend(clone);
  }
}

function showMessageOther(clone) {
  ELEMENT.MAIN.prepend(clone);
}