import Cookies from 'js-cookie';
import {
  SERVER, ELEMENTS, POP_UP, VALUES, METHOD,
} from './consts';
import {
  openPopUp,
  closePopUp,
  findPopUp,
  RequestError,
  setCookies,
  addMessage,
  clearInput,
  render,
  renderHistoryMessages,
  checkInput,
} from './view';

ELEMENTS.DOC?.addEventListener('DOMContentLoaded', () => {
  checkStartData();
});

function checkStartData() {
  if (document.cookie.length <= 0) {
    findPopUp(openPopUp, POP_UP.AUTHORIZATION);
  } else {
    render();
    getMessages();
    getUser();
  }
}

ELEMENTS.SETTINGS?.addEventListener('click', () => {
  findPopUp(openPopUp, POP_UP.SETTINGS);
});

ELEMENTS.NAME_FORM?.addEventListener('submit', (event) => {
  event.preventDefault();
  nameFormData();
});

function nameFormData() {
  const check = checkInput(ELEMENTS.NAME_INPUT);
  check ? changeName(check) : false;

  clearInput(ELEMENTS.NAME_INPUT);
  findPopUp(closePopUp, POP_UP.SETTINGS);

  render();
  getMessages();
}

ELEMENTS.POP_UP_CLOSE?.forEach((button) => {
  button.addEventListener('click', () => {
    findPopUp(closePopUp, POP_UP.SETTINGS);
    findPopUp(closePopUp, POP_UP.AUTHORIZATION);
    findPopUp(closePopUp, POP_UP.CONFIRMATION);
  });
});

ELEMENTS.CHAT_FORM?.addEventListener('submit', (event) => {
  event.preventDefault();
  sendMessage(ELEMENTS.CHAT_INPUT);
});

ELEMENTS.AUTH_FORM?.addEventListener('submit', (event) => {
  event.preventDefault();
  checkInput(ELEMENTS.EMAIL_INPUT);
  authFormData();
});

function authFormData() {
  checkInput(ELEMENTS.EMAIL_INPUT);
  getCode(ELEMENTS.EMAIL_INPUT);

  setCookies(VALUES.COOKIES_EMAIL, ELEMENTS.EMAIL_INPUT);
  clearInput(ELEMENTS.EMAIL_INPUT);

  findPopUp(closePopUp, POP_UP.AUTHORIZATION);
  findPopUp(openPopUp, POP_UP.CONFIRMATION);
}

ELEMENTS.CONFIRM_FORM?.addEventListener('submit', (event) => {
  event.preventDefault();
  confirmFormData();
});

function confirmFormData() {
  checkInput(ELEMENTS.CODE_INPUT);
  setCookies(VALUES.COOKIES_NAME, ELEMENTS.CODE_INPUT);

  findPopUp(closePopUp, POP_UP.CONFIRMATION);
  findPopUp(openPopUp, POP_UP.SETTINGS);
}

function changeName(name) {
  serverRequest({
    url: SERVER.URL,
    method: METHOD.PATCH,
    headers: {
      'Content-Type': SERVER.HEADER_CONTENT,
      Authorization: SERVER.AUTHORIZATION_CONTENT,
    },
    body: { body: JSON.stringify({ name }) },
  });
}

function getUser() {
  serverRequest({
    url: SERVER.URL_USER,
    method: METHOD.GET,
    headers: {
      'Content-Type': SERVER.HEADER_CONTENT,
      Authorization: SERVER.AUTHORIZATION_CONTENT,
    },
  });
}

function getCode(userEmail) {
  const check = checkInput(userEmail);
  serverRequest({
    url: SERVER.URL,
    method: METHOD.POST,
    headers: {
      'Content-Type': SERVER.HEADER_CONTENT,
    },
    body: { body: JSON.stringify({ email: check }) },
  });
}

export function sendMessage(input) {
  try {
    const check = checkInput(input);
    if (check) {
      socket.send(JSON.stringify({ text: check }));
      clearInput(input);
    } else {
      throw new Error('введите сообщение!');
    }
  } catch (error) {
    if (error instanceof Error) {
      alert(`${error.name}: ${error.message}`);
    } else {
      throw error;
    }
  }
}

function getMessages() {
  serverRequest({
    url: SERVER.URL_MESSAGES,
    method: METHOD.GET,
    headers: {
      'Content-Type': SERVER.HEADER_CONTENT,
      Authorization: SERVER.AUTHORIZATION_CONTENT,
    },
  }).then((result) => {
    renderHistoryMessages(result.messages);
  });
}

async function serverRequest(request) {
  try {
    const response = await fetch(request.url, {
      method: request.method,
      headers: {
        ...request.headers,
      },
      ...request.body,
    });
    if (!response.ok) {
      throw new RequestError(`failed request, ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    if (error instanceof RequestError) {
      console.log(`${error.name}: ${error.message}`);
    } else {
      throw error;
    }
  }
}

const socket = new WebSocket(
  `${SERVER.WEB_SOCKET}${Cookies.get(VALUES.COOKIES_NAME)}`,
);

socket.onmessage = function (event) {
  const data = JSON.parse(event.data);
  addMessage({
    message: data.text,
    time: data.createdAt,
    name: data.user.name,
    sender: data.user.email,
    position: VALUES.APPEND,
  });
};

ELEMENTS.CHAT?.addEventListener('scroll', () => {
  if (ELEMENTS.CHAT?.scrollTop === 0) {
    getMessages();
  }
});
