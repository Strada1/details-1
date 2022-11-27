import { ELEMENTS } from "./elements.js";
import { closePopup, openPopup, btnClose } from "./popup.js";
import { setCookie, getCookie } from "./cookie.js";
const url = "https://edu.strada.one/api/user";
const nameUrl = "https://edu.strada.one/api/user/me";
const historyUrl = "https://edu.strada.one/api/messages/ ";
const socket = new WebSocket(`wss://edu.strada.one/websockets?${getCookie("token")}`);
let count = 20;
let numOne = 20;
let numTwo = count * 2;
let array = JSON.parse(localStorage.getItem("message"));

btnClose(ELEMENTS.btnClose);

ELEMENTS.chatBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (ELEMENTS.inputMessage !== "") {
    socket.send(JSON.stringify({ text: `${ELEMENTS.inputMessage.value}` }));
  }
});
let newArr = array.slice(0, 20);

function sliceArray() {
  newArr = array.slice(numOne, numTwo);
  console.log(newArr.length, array.length);
  addMessage(newArr, false);
  numOne += count;
  numTwo += count;
}
function addMessage(messages, scrollInto = true) {
  messages.map(function (item, index) {
    createElement(messages[index].user.name, messages[index].text, "prepend");
  });
  if (scrollInto && ELEMENTS.chatBody.lastElementChild) {
    ELEMENTS.chatBody.lastElementChild.scrollIntoView();
  }
}
addMessage(newArr, true);
ELEMENTS.chatBody.addEventListener("scroll", function () {
  if (ELEMENTS.chatBody.scrollTop === 0) {
    sliceArray();
    ELEMENTS.chatBody.scrollTop = ELEMENTS.chatBody.offsetHeight;
  }
});

function createElement(name, content, location = "append") {
  let div = document.createElement("div");
  div.className = "message";
  let userNameElement = document.createElement("div");
  userNameElement.className = "user__name";
  let messageContentElement = document.createElement("p");
  messageContentElement.className = "message__content";
  div.appendChild(userNameElement);
  div.appendChild(messageContentElement);
  userNameElement.textContent = name;
  messageContentElement.textContent = content;
  if (location === "prepend") {
    ELEMENTS.chatBody.prepend(div);
  } else {
    ELEMENTS.chatBody.append(div);
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
  historymessage();
});

function historymessage() {
  fetch(historyUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  })
    .then((data) => {
      return data.json();
    })
    .then((result) => {
      localStorage.setItem("message", JSON.stringify(result["messages"]));
    });
}

if (getCookie("token")) {
  historymessage();
}

socket.onopen = function (e) {
  console.log("open");
  socket.onmessage = function (event) {
    let result = JSON.parse(event.data);
    createElement(result.user.name, result.text);
    console.log(event.data);
  };
};

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
