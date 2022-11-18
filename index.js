import { ELEMENT, POPUP_BUTTONS, URL } from './value.js';
ELEMENT.BODY.onload = function () {
  showPopup();
  
  ELEMENT.TEMPLATE_MESS_OTHER.forEach((template) => {
    const cloneOther = createClone(template);
    showMessageOther(cloneOther);
  })
}

ELEMENT.BUTTONS.forEach((button) => {
  if (POPUP_BUTTONS.CODE === button.textContent) {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      checkEmail()
    });
  }
});

function checkEmail() {
  if (ELEMENT.EMAIL.value.trim()) {
    closePopupElement(ELEMENT.POPUP_EMAIL);
    showPopupElement(ELEMENT.POPUP_CODE);
    sendEmail();
  }
}

async function sendEmail() {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({email: ELEMENT.EMAIL.value.trim()})
    });
}

ELEMENT.EXIT.addEventListener('click', showPopup)

ELEMENT.POPUP_CLOSE_BUTTONS.forEach((button) => {
  button.addEventListener('click', closePopup);
});

function showPopupElement(element) {
  element.classList.add('popup--active');
}

function closePopupElement(element) {
  element.classList.remove('popup--active');
}

function showPopup() {
  ELEMENT.POPUP.classList.add('popup--active');
}

function closePopup() {
  ELEMENT.POPUP.classList.remove('popup--active');
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