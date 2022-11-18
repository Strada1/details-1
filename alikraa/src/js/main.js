const ELEMENTS = {
  POP_UP: document.querySelector('.pop-up'),
  POP_UP_CLOSE: document.querySelector('.pop-up__content-header-close'),
  SETTINGS: document.querySelector('.chat__buttons-settings'),
  CHAT_FORM: document.querySelector('.chat__input'),
  CHAT_INPUT: document.querySelector('.chat__input-field'),
  CHAT_WINDOW: document.querySelector('.chat__container-window'),
  TEMPLATE: document.getElementById('tmpl')
}

function openPopUp() {
  ELEMENTS.POP_UP.removeAttribute('style');
}

function closePopUp() {
  ELEMENTS.POP_UP.setAttribute('style', 'display: none;');
}

function sendMessage() {
  try {
    if (ELEMENTS.CHAT_INPUT.value.trim()) {
      addMessage(ELEMENTS.CHAT_INPUT.value);
    } else {
      throw new Error('введите сообщение!')
    }
  } catch (error) {
    alert(`${error.name}: ${error.message}`)
  }
}

function addMessage(message, sender = 'my-message', status = 'sent', time = '18:45') {
  const div = document.createElement('div');
  div.classList.add('chat__container-message', `${sender}`, `${status}`);
  div.append(ELEMENTS.TEMPLATE.content.cloneNode(true));

  div.querySelector('.text').textContent = message;
  div.querySelector('.time').textContent = time;

  ELEMENTS.CHAT_WINDOW.append(div);
}

ELEMENTS.SETTINGS.addEventListener('click', openPopUp);
ELEMENTS.POP_UP_CLOSE.addEventListener('click', closePopUp);

ELEMENTS.CHAT_FORM.addEventListener('submit', function (event) {
  event.preventDefault();
  sendMessage();
  ELEMENTS.CHAT_INPUT.value = '';
});