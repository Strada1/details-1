import { SERVER, ELEMENTS, POP_UP, VALUES, METHOD } from "./elements.js";
import {
  openPopUp,
  closePopUp,
  findPopUp,
  RequestError,
  setCookies,
  getCookies,
  addMessage,
  checkInput,
  render,
  renderHistoryMessages,
} from "./view.js";

ELEMENTS.DOC.addEventListener("DOMContentLoaded", () => {
  if (document.cookie.length <= 0) {
    findPopUp(openPopUp, POP_UP.AUTHORIZATION);
  } else {
    render();
    getMessages();
  }
});

ELEMENTS.SETTINGS.addEventListener("click", () => {
  findPopUp(openPopUp, POP_UP.SETTINGS);
});

ELEMENTS.NAME_FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  checkInput(ELEMENTS.NAME_INPUT);
  changeName(ELEMENTS.NAME_INPUT.value.trim());

  ELEMENTS.NAME_INPUT.value = "";
  findPopUp(closePopUp, POP_UP.SETTINGS);

  render();
  getMessages();
});

ELEMENTS.POP_UP_CLOSE.forEach(function (button) {
  button.addEventListener("click", () => {
    findPopUp(closePopUp, POP_UP.SETTINGS);
    findPopUp(closePopUp, POP_UP.AUTHORIZATION);
    findPopUp(closePopUp, POP_UP.CONFIRMATION);
  });
});

ELEMENTS.CHAT_FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  sendMessage();

  ELEMENTS.CHAT_INPUT.value = "";
});

ELEMENTS.AUTH_FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  checkInput(ELEMENTS.EMAIL_INPUT);
  getCode(ELEMENTS.EMAIL_INPUT.value.trim());

  setCookies(VALUES.COOKIES_EMAIL, ELEMENTS.EMAIL_INPUT.value.trim());
  ELEMENTS.EMAIL_INPUT.value = "";

  findPopUp(closePopUp, POP_UP.AUTHORIZATION);
  findPopUp(openPopUp, POP_UP.CONFIRMATION);
});

ELEMENTS.CONFIRM_FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  checkInput(ELEMENTS.CODE_INPUT);
  setCookies(VALUES.COOKIES_NAME, ELEMENTS.CODE_INPUT.value.trim());

  findPopUp(closePopUp, POP_UP.CONFIRMATION);
  findPopUp(openPopUp, POP_UP.SETTINGS);
});

function changeName(name) {
  serverRequest(
    SERVER.URL,
    METHOD.PATCH,
    { Authorization: `Bearer ${getCookies(VALUES.COOKIES_NAME)}` },
    { body: JSON.stringify({ name }) }
  );
}

function getUser() {
  serverRequest(SERVER.URL_USER, METHOD.GET, {
    Authorization: `Bearer ${getCookies(VALUES.COOKIES_NAME)}`,
  });
}

getUser();

function getCode(userEmail) {
  serverRequest(
    SERVER.URL,
    METHOD.POST,
    {},
    { body: JSON.stringify({ email: userEmail }) }
  );
}

function sendMessage() {
  try {
    if (ELEMENTS.CHAT_INPUT.value.trim()) {
      SERVER.WEB_SOCKET.send(
        JSON.stringify({ text: ELEMENTS.CHAT_INPUT.value })
      );
    } else {
      throw new Error("введите сообщение!");
    }
  } catch (error) {
    alert(`${error.name}: ${error.message}`);
  }
}

function getMessages() {
  const response = serverRequest(
    SERVER.URL_MESSAGES,
    METHOD.GET,
    { Authorization: `Bearer ${getCookies(VALUES.COOKIES_NAME)}` },
    {}
  );
  response.then((result) => {
    renderHistoryMessages(result.messages);
  });
}

async function serverRequest(url, method, headers = {}, body = {}) {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        ...headers,
      },
      ...body,
    });

    if (!response.ok) {
      throw new RequestError(`failed request, ${response.status}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    if (error instanceof RequestError) {
      console.log(error.name + ":" + error.message);
    } else {
      throw error;
    }
  }
}

SERVER.WEB_SOCKET.onmessage = function (event) {
  addMessage(
    JSON.parse(event.data).text,
    JSON.parse(event.data).createdAt,
    JSON.parse(event.data).user.name,
    JSON.parse(event.data).user.email
  );
};

ELEMENTS.CHAT.addEventListener("scroll", () => {
  if (ELEMENTS.CHAT.scrollTop === 0) {
    getMessages();
  }
});
