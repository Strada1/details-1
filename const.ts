interface elements {
  BODY: Element | null;
  FORM_MESSAGE: HTMLFormElement | null;
  INPUT_MESSAGE: HTMLInputElement | null;
  MAIN: Element | null;
  TEMPLATE_MESS_OWN: HTMLTemplateElement | null; 
  TEMPLATE_MESS_OTHER: HTMLTemplateElement | null; 
  POPUP_EMAIL: Element | null; 
  POPUP_CODE: Element | null; 
  POPUP_NAME: Element | null; 
  EMAIL: HTMLInputElement | null;
  EXIT: HTMLButtonElement | null;
  BUTTON_ENTER: HTMLButtonElement | null;
  BUTTON_CODE: HTMLButtonElement | null;
  BUTTON_NAME: HTMLButtonElement | null;
  CODE_INPUT: HTMLInputElement | null;
  NAME_INPUT: HTMLInputElement | null;
  BUTTON_SETTING: HTMLButtonElement | null;
  CLOSE_EMAIL: HTMLButtonElement | null;
  CLOSE_CODE: HTMLButtonElement | null;
  CLOSE_NAME: HTMLButtonElement | null;
}

export const ELEMENT: elements = {
  BODY: document.body,
  FORM_MESSAGE: document.querySelector('.form-message'),
  INPUT_MESSAGE: document.querySelector('.form-message__input'),
  MAIN: document.querySelector('.main'),
  TEMPLATE_MESS_OWN: document.querySelector('.temlate-message-own'),
  TEMPLATE_MESS_OTHER: document.querySelector('.temlate-message-other'),
  POPUP_EMAIL: document.querySelector('#email'),
  POPUP_CODE: document.querySelector('#code'),
  POPUP_NAME: document.querySelector('#name'),
  EMAIL: document.querySelector('.chat-email__input'),
  EXIT: document.querySelector('.nav__exit'),
  BUTTON_ENTER: document.querySelector('#enter'),
  BUTTON_CODE: document.querySelector('#add_code'),
  BUTTON_NAME: document.querySelector('#name-btn'),
  CODE_INPUT: document.querySelector('.chat-code__input'),
  NAME_INPUT: document.querySelector('.chat__input'),
  BUTTON_SETTING: document.querySelector('#setting'),
  CLOSE_EMAIL: document.querySelector('#close-email'),
  CLOSE_CODE: document.querySelector('#close-code'),
  CLOSE_NAME: document.querySelector('#close-name'),
};

interface url {
  ACCEPT: string;
  ME: string;
  MESSAGE: string;
}

export const URL: url =  {
  ACCEPT: 'https://edu.strada.one/api/user',
  ME: 'https://edu.strada.one/api/user/me',
  MESSAGE: 'https://edu.strada.one/api/messages/'
}

export const CLASS: { ACTIVE: string, OWN_TEXT: string, OTHER_TEXT: string } = {
  ACTIVE: 'popup--active',
  OWN_TEXT: '.main__message-own-text',
  OTHER_TEXT: '.main__message-other-text',
}

export const ID: { OTHER_TIME: string, OWN_TIME: string }= {
  OTHER_TIME: '#other-time',
  OWN_TIME: '#own-time'
}

type MyType = unknown;

const isValid = (value: string | null): value is string => [null, undefined, ""].includes(value);

export const HISTORY_MESSAGE = (): MyType | undefined => {
  const value: string | null = localStorage.getItem('messages');

  if (!isValid(value)) {
    return undefined;
  }

  return JSON.parse(value);
};

export const NUMBER: { NEXT_INDEX: number } = {
  NEXT_INDEX: 20,
}

interface newElement {
  CLASS_END: string;
  NEW_CLASS_END: string;
  DIV: string;
  P: string;
  TEXT: string;
}

export const NEW_ELEMENT: newElement = {
  CLASS_END: '.messages-end',
  NEW_CLASS_END: 'messages-end',
  DIV: 'div',
  P: 'p',
  TEXT: 'Вся история загружена'
} 

interface method {
  PREPEND: string;
  APPEND: string;
  POST: string;
  PATCH: string;
}

export const METHOD = {
  PREPEND: 'prepend',
  APPEND: 'append',
  POST: 'POST',
  PATCH: 'PATCH'
}

export const INDEX_ARRAY: { MIN: number, MAX: number } = {
  MIN: 0,
  MAX: 19
}



