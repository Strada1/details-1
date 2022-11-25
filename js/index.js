import { ELEMENTS, METHOD, MESSAGE } from "./const.js";
import {
  showModal,
  closeModal,
  showWarning,
  changeTextAreaSize,
  returnTextAreaSie,
} from "./ui.js";
import { setCookie, getCookie, sendRequest } from "./request.js";
import { addMessage, downloadHistory } from "./messages";

const set = new Set();

ELEMENTS.authorizationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  setCookie("thisUser", ELEMENTS.emailInput.value.trim());
  sendRequest(METHOD.POST, ELEMENTS.URL + "/user", {
    body: JSON.stringify({ email: ELEMENTS.emailInput.value.trim() }),
  });
  ELEMENTS.emailInput.value = "";
  closeModal(ELEMENTS.modalAuthorization);
  showModal(ELEMENTS.modalCode);
});

ELEMENTS.codeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  setCookie("token", ELEMENTS.code.value.trim());
  ELEMENTS.code.value = "";
  closeModal(ELEMENTS.modalCode);
});

ELEMENTS.nameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const token = getCookie("token");
  if (ELEMENTS.name.value !== "") {
    sendRequest(
      METHOD.PATCH,
      ELEMENTS.URL + "/user",
      { body: JSON.stringify({ name: ELEMENTS.name.value.trim() }) },
      { Authorization: `Bearer ${token}` }
    );
    sendRequest(
      METHOD.GET,
      ELEMENTS.URL + "/user/me",
      {},
      { Authorization: `Bearer ${token}` }
    );
  } else {
    showWarning(ELEMENTS.nameWarning);
  }
  ELEMENTS.name.value = "";
});

let count = MESSAGE.step;

ELEMENTS.contentWrapper.addEventListener("scroll", () => {
  if (ELEMENTS.contentWrapper.scrollTop === 0) {
    const currentContentHeight = ELEMENTS.contentWrapper.scrollHeight;
    downloadHistory(count);
    if (
      count <=
      JSON.parse(localStorage.getItem("history")).length - MESSAGE.step
    ) {
      count += MESSAGE.step;
    }
    const newContentHeight = ELEMENTS.contentWrapper.scrollHeight;
    ELEMENTS.contentWrapper.scrollTop = newContentHeight - currentContentHeight;
  }
});

const socket = new WebSocket(
  `wss://edu.strada.one/websockets?${getCookie("token")}`
);
socket.onopen = function () {
  console.log("[open] Соединение установлено");
};

ELEMENTS.textArea.addEventListener("keydown", (event) => {
  set.add(event.key);

  if (set.has("Enter") && !set.has("Shift")) {
    socket.send(JSON.stringify({ text: ELEMENTS.textArea.value }));
    returnTextAreaSie();
    event.preventDefault();
  }
});

ELEMENTS.textArea.addEventListener("keyup", (event) => {
  set.clear();
  changeTextAreaSize(event);
});

ELEMENTS.messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  socket.send(JSON.stringify({ text: ELEMENTS.textArea.value }));
  returnTextAreaSie();
});

socket.onmessage = function (event) {
  const data = JSON.parse(event.data);

  if (getCookie("thisUser") === data.user.email) {
    addMessage(
      ELEMENTS.myMessages,
      data.text,
      data.createdAt,
      undefined,
      "append"
    );
  } else {
    addMessage(
      ELEMENTS.interlocutorMessages,
      data.text,
      data.createdAt,
      data.user.name,
      "append"
    );
  }
};
