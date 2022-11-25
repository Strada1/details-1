import Cookies from "js-cookie";
import { compareAsc, format } from "date-fns";
import { ELEMENTS, SERVER } from "./value.js";
import { requestServer, changeName, sendMail } from "./request.js";

const socket = new WebSocket(
  `wss://edu.strada.one/websockets?${Cookies.get("authorization")}`
);
const token = Cookies.get("authorization");

ELEMENTS.body.onload = function () {
  if (!token) return;
  ELEMENTS.listMessages.innerHTML = "";
  requestServer(SERVER.infoUser, token).then((result) => {
    console.log(result);
    loadHistory(result.email, token);
  });

  // const list = ELEMENTS.listMessages;
  // list.parentNode.removeChild(list);
};

const list = [];

function addHistory() {
  let del = list.splice(0, 20);
  if (!del.length) {
    let end =  document.querySelector(".end");
    if(!end) {
    let div = document.createElement("div");
    div.classList.add("end")
    div.textContent = "Вся история загружена";
    ELEMENTS.listMessages.append(div);
    }
  }
  del.forEach((obj) => render(obj, "history"));
}

let email;
function loadHistory(mymail, token) {
  email = mymail;
  requestServer(SERVER.histMessages, token).then((result) => {
    const arr = result.messages;
    for (let i = 0; i < 59; i++) {
      if (i < 20) {
        render(arr[i], "history");
      } else {
        list.push(arr[i]);
      }
    }
    connection();
  });
}

function connection() {
  socket.onmessage = function (event) {
    const obj = JSON.parse(event.data);
    render(obj);
  };
}
function render(obj, history) {
  const text = obj.text;
  let nameUser = obj.user.name;
  const time = format(new Date(obj.createdAt), "HH:mm");
  if (email === obj.user.email) nameUser = "Я";
  addMessage(text, nameUser, time, history);
}

function addMessage(text, nameUser, time, history) {
  let message = ELEMENTS.tamplate.content.cloneNode(true);
  message.querySelector(".text").textContent = `${nameUser}: ${text}`;
  message.querySelector(".time").textContent = time;
  if (nameUser === "Я") {
    let mymessage = message.querySelector(".message");
    mymessage.classList.add("my-message");
  }
  if (history) {
    ELEMENTS.listMessages.append(message);
  } else {
    ELEMENTS.listMessages.prepend(message);
  }
}

ELEMENTS.formMessage.addEventListener("submit", function (event) {
  event.preventDefault();
  const value = ELEMENTS.textMessage.value;
  if (!value) return;
  event.target.reset();
  socket.send(JSON.stringify({ text: value }));
});

ELEMENTS.btnSendMail.addEventListener("submit", function (event) {
  event.preventDefault();
  const mail = ELEMENTS.formMail.value.trim();
  if (!mail) return;
  if (!mail.includes("@")) return;
  event.target.reset();
  // sendMail(mail);
  window.location.hash = "#code-popup";
});

ELEMENTS.btnSendCode.addEventListener("submit", function (event) {
  event.preventDefault();
  const code = ELEMENTS.formCode.value.trim();
  if (!code) return;
  Cookies.set("authorization", code, { SameSite: "lax" });
  event.target.reset();
  window.location.hash = "#header";
});

ELEMENTS.btnChangeName.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameUser = ELEMENTS.formName.value.trim();
  if (!nameUser) return;
  window.location.hash = "#header";
  event.target.reset();
  if (!token) return;
  changeName(nameUser, token);
});

ELEMENTS.listMessages.addEventListener("scroll", function () {
  let top = ELEMENTS.listMessages.scrollTop;
  let high = -(
    ELEMENTS.listMessages.scrollHeight - ELEMENTS.listMessages.clientHeight
  );
  if (top === high) addHistory();
});
