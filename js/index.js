import { ELEMENTS, METHOD } from "./const.js";
import {
  showModal,
  closeModal,
  showWarning,
  changeTextAreaSize,
  returnTextAreaSie,
} from "./ui.js";
import { setCookie, getCookie, sendRequest } from "./request.js";
import { format } from "date-fns";

const set = new Set();

function addMessage(userClass, text, time, userName) {
  let div = document.createElement("div");
  div.classList.add(...userClass);

  if (text.trim() !== "") {
    div.append(tmpl.content.cloneNode(true));
    div.querySelector(".message__text").textContent = text;
    div.querySelector(".message__delivery-time").textContent = format(Date.parse(time), "HH:mm");
    ELEMENTS.contentWrapper.append(div);
  }

  if (userName) {
    let span = document.createElement("span");
    span.classList.add("message__user");
    div.prepend(span);
    span.textContent = userName;
  }

  div.scrollIntoView({
    behavior: "smooth",
  });
}

ELEMENTS.authorizationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  setCookie('thisUser', ELEMENTS.emailInput.value.trim());
  sendRequest(METHOD.POST, ELEMENTS.URL + '/user', {
    body: JSON.stringify({ email: ELEMENTS.emailInput.value.trim() }),
  });
  ELEMENTS.emailInput.value = "";
  closeModal(ELEMENTS.modalAuthorization);
  showModal(ELEMENTS.modalCode);
});

ELEMENTS.codeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  setCookie('token', ELEMENTS.code.value.trim());
  ELEMENTS.code.value = "";
  closeModal(ELEMENTS.modalCode)
});

ELEMENTS.nameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const token = getCookie("token");
  if (ELEMENTS.name.value !== "") {
    sendRequest(
      METHOD.PATCH,
      ELEMENTS.URL + '/user',
      { body: JSON.stringify({ name: ELEMENTS.name.value.trim() }) },
      { Authorization: `Bearer ${token}` }
    );
    sendRequest(
      METHOD.GET,
      ELEMENTS.URL + '/user/me',
      {},
      { Authorization: `Bearer ${token}` }
    );
  } else {
    showWarning(ELEMENTS.nameWarning);
  }
  ELEMENTS.name.value = "";
});

window.onload = function showHistory() {
  const responseResult = sendRequest(
    METHOD.GET,
    ELEMENTS.URL + '/messages/',
    {},
    { Authorization: `Bearer ${getCookie("token")}` }
  );
  console.log(responseResult);
  responseResult.then((result) => {
    getMessages(result.messages);
  });
};

function getMessages(arr, index = 0) {
  const user = arr[index].user.name;
  const text = arr[index].text;
  const time = arr[index].updatedAt;
  if (arr[index].user.email === getCookie('thisUser')){
    addMessage(ELEMENTS.myMessages, text, time);
  } else {
    addMessage(ELEMENTS.interlocutorMessages, text, time, user);
  }

  if (index >= arr.length) {
    return;
  } else {
    getMessages(arr, ++index);
  }
}

const socket = new WebSocket(`ws://edu.strada.one/websockets?${getCookie("token")}`);
socket.onopen = function(e) {
  console.log("[open] Соединение установлено");
};

ELEMENTS.textArea.addEventListener("keydown", (event) => {
  set.add(event.key);

  if (set.has("Enter") && !set.has("Shift")) {
    // addMessage(
    //   ELEMENTS.myMessages,
    //   ELEMENTS.textArea.value,
    //   format(new Date(), "HH:mm")
    // );
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
  // addMessage(
  //   ELEMENTS.myMessages,
  //   ELEMENTS.textArea.value,
  //   format(new Date(), "HH:mm")
  // );
  socket.send(JSON.stringify({ text: ELEMENTS.textArea.value }));
  returnTextAreaSie();
});

socket.onmessage = function(event) { 
  const data = JSON.parse(event.data);
  console.log(data);

  if (getCookie('thisUser') === data.user.email) {
    addMessage(ELEMENTS.myMessages, data.text, data.createdAt);
  } else {
    addMessage(ELEMENTS.interlocutorMessages, data.text, data.createdAt, data.user.name);
  }

 };
