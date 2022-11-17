export const ELEMENTS = {
  FORM_MESSAGE: document.querySelector('.chat__footer>.chat-form'),
  INPUT_MESSAGE: document.querySelector('.chat__footer .chat-form__input'),
  TEMPLATE: document.querySelector('#template-massage'),
  LIST_MESSAGE: document.querySelector('.chat__main'),
};

export function createMessage(who, message, time) {
  const elemMessage = ELEMENTS.TEMPLATE.content.cloneNode(true);
  elemMessage.querySelector('.massage__text').textContent = message;
  elemMessage.querySelector('.massage__name').textContent = who;
  elemMessage.querySelector('.massage__time').textContent = time;
  return elemMessage;
}

export function addMessageUI(who, message, time) {
  ELEMENTS.LIST_MESSAGE.prepend(createMessage(who, message, time));
}
