import Cookies from 'js-cookie';
import { ELEMENT, POPUP_BUTTONS, URL, URL_ME } from './value.js';

class ServerError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

ELEMENT.BODY.onload = function () {
  ELEMENT.TEMPLATE_MESS_OTHER.forEach((template) => {
    const cloneOther = createClone(template);
    showMessageOther(cloneOther);
  })
}

ELEMENT.EXIT.addEventListener('click', showPopup)

ELEMENT.POPUP_CLOSE_BUTTONS.forEach((button) => {
  button.addEventListener('click', closePopup);
});

function showPopup() {
  ELEMENT.POPUP.classList.add('popup--active');
}

function closePopup() {
  ELEMENT.POPUP.classList.remove('popup--active');
}

ELEMENT.BUTTONS.forEach((button) => {
  if (POPUP_BUTTONS.CODE === button.textContent) {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      sendEmail();
    });
  }
});

async function sendEmail() {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${Cookies.get('authorization')}`
      },
      body: JSON.stringify({email: ELEMENT.EMAIL.value.trim()})
    });

    if (!response.ok) {
      throw new ServerError('request not sent');
    }

    closePopupElement(ELEMENT.POPUP_EMAIL);
    showPopupElement(ELEMENT.POPUP_CODE);
  } catch (err) {
    if (err instanceof ServerError) {
      console.log(err.message);
    } else {
      throw err;
    }
  }
}

ELEMENT.BUTTON_SETTING.addEventListener('click', function (event) {
  event.preventDefault();
  showPopupElement(ELEMENT.POPUP_NAME);
})

function showPopupElement(element) {
  element.classList.add('popup--active');
}

function closePopupElement(element) {
  element.classList.remove('popup--active');
}

ELEMENT.BUTTON_ENTER.addEventListener('click', function (event) {
  event.preventDefault();
  if (ELEMENT.CODE_INPUT.value.trim()) {
    closePopupElement(ELEMENT.POPUP_CODE);
    showPopupElement(ELEMENT.POPUP_NAME);
    saveCode();
  }
})

function saveCode() {
  Cookies.set('authorization', `${ELEMENT.CODE_INPUT.value}`);
}

ELEMENT.BUTTON_NAME.addEventListener('click', function (event) {
  event.preventDefault();
    addName();
})

async function addName() {
  try {
    const response = await fetch(URL, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('authorization')}`
      },
      body: JSON.stringify({ name: `${ELEMENT.NAME_INPUT.value.trim()}` })
    });

    if (!response.ok) {
      throw new ServerError('request not sent');
    }

    closePopupElement(ELEMENT.POPUP_NAME);
    getDataUser()
  } catch (err) {
    if (err instanceof ServerError) {
      console.log(err.message);
    } else {
      throw err;
    }
  }
}

async function getDataUser() {
  try {
    const response = await fetch(URL_ME, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('authorization')}`
      }
    });

    if (!response.ok) {
      throw new ServerError('request not sent');
    }

    const result = await response.json();
    return result;
  } catch (err) {
    if (err instanceof ServerError) {
      console.log(err.message);
    } else {
      throw err;
    }
  }
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