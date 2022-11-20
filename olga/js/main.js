import { ELEMENTS } from "./elements.js";
import { closePopup, openPopup, btnClose } from "./popup.js";
import { setCookie, getCookie } from "./cookie.js";
const url = "https://edu.strada.one/api/user";
const nameUrl = "https://edu.strada.one/api/user/me";

btnClose(ELEMENTS.btnClose);

ELEMENTS.chatBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let template = document.querySelector("#tmpl").content.cloneNode(true);
  let wrapperMessage = template.querySelector(".message");
  addMessage(wrapperMessage, ELEMENTS.inputMessage.value, ELEMENTS.chatBody);
});

function addMessage(element, value, parent) {
  if (value.trim()) {
    element.textContent = value;
    parent.append(element);
  }
}

ELEMENTS.btnAutorization.addEventListener("click", function (e) {
  e.preventDefault();
  autorization(ELEMENTS.autorizationInput);
  closePopup(ELEMENTS.popupAutorization);
  openPopup(ELEMENTS.popupConfirmation);
});
function autorization(input) {
  try {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify({ email: input.value }),
    }).then((data) => {
      return data.json();
    });
  } catch {
    console.log(error);
  }
}
ELEMENTS.btnConfirmation.addEventListener("click", function (e) {
  e.preventDefault();
  setCookie("token", ELEMENTS.confirmationInput.value);
  closePopup(this.parentNode.parentNode);
});
ELEMENTS.btnName.addEventListener("click", function (e) {
  e.preventDefault();
  nameChange(ELEMENTS.nameInput);
});
ELEMENTS.settingBtn.addEventListener("click", function () {
  openPopup(ELEMENTS.popup);
});
function nameChange(name) {
  fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    body: JSON.stringify({ name: `${name.value}` }),
  }).then((data) => {
    return data.json();
  });
  userInfo();
}
function userInfo() {
  fetch(nameUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  }).then((data) => {
    return data.json();
  });
}
