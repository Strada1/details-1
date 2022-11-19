const ELEMS = {
  MESSAGE_FORM: document.querySelector('#messageForm'),
  MESSAGE_INPUT: document.querySelector('#messageInput'),
};

ELEMS.MESSAGE_FORM.addEventListener('submit', (event) => addMessage(event));

function addMessage(event) {
  event.preventDefault();
  const messagevalue = checkMessage(ELEMS.MESSAGE_INPUT.value.trim());
  console.log(messagevalue);
  console.log(event, 'submit');
}

function checkMessage(text) {
  if (text !== null && typeof text !== 'undefined' && text !== '') {
    return text;
  } else {
    alert('Введите сообщение!');
  }
}
