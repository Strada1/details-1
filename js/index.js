import { ELEMENTS, ELEM_HEIGHTS, METHOD } from "./const.js";
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
    div.querySelector(".message__delivery-time").textContent = time;
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

ELEMENTS.textArea.addEventListener("keydown", (event) => {
  set.add(event.key);

  if (set.has("Enter") && !set.has("Shift")) {
    addMessage(
      ELEMENTS.myMessages,
      ELEMENTS.textArea.value,
      format(new Date(), "HH:mm")
    );
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
  addMessage(
    ELEMENTS.myMessages,
    ELEMENTS.textArea.value,
    format(new Date(), "HH:mm")
  );
  returnTextAreaSie();
});

ELEMENTS.authorizationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  sendRequest(METHOD.POST, ELEMENTS.URL, {
    body: JSON.stringify({ email: ELEMENTS.emailInput.value.trim() }),
  });
  ELEMENTS.emailInput.value = "";
  closeModal(ELEMENTS.modalAuthorization);
  showModal(ELEMENTS.modalCode);
});

ELEMENTS.codeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  setCookie(ELEMENTS.code.value);
  ELEMENTS.code.value = "";
});

ELEMENTS.nameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const token = getCookie("token");
  if (ELEMENTS.name.value !== "") {
    sendRequest(
      METHOD.PATCH,
      ELEMENTS.URL,
      { body: JSON.stringify({ name: ELEMENTS.name.value.trim() }) },
      { Authorization: `Bearer ${token}` }
    );
    sendRequest(
      METHOD.GET,
      ELEMENTS.URL_USER,
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
    "https://edu.strada.one/api/messages/",
    {},
    { Authorization: `Bearer ${getCookie("token")}` }
  );
  console.log(responseResult);
  responseResult.then((result) => {
    const user = result.messages[0].user.name;
    const text = result.messages[0].text;
    const time = format(new Date(result.messages[0].updatedAt), "HH:mm");
    getMessages(result.messages, text, time, user);
  });
};

function getMessages(arr, text, time, user, index = 0) {
  addMessage(["message", "message--interlocutor"], text, time, user);

  if (index >= arr.length) {
    return;
  } else {
    getMessages(arr, ++index);
  }
}
