import {
  ELEMENTS,
  STRADA_URL,
  USER_URL,
  HISTORY_URL,
  MY_EMAIL,
} from "./const.js";
import { format } from "date-fns";
import Cookie from "js-cookie";
import { ADD, REMOVE, authPopUp, kodPopUp } from "./popup.js";

async function onLoadWindow() {
  if (Cookie.get("Authorization")) {
    authPopUp(REMOVE);
    kodPopUp(REMOVE);
    getData(HISTORY_URL);
    await getHistoryData();
  } else {
    authPopUp(ADD);
    ELEMENTS.EMAIL_FORM.addEventListener("submit", (event) => {
      event.preventDefault();
      authPopUp(REMOVE);
      kodPopUp(ADD);
      const email = ELEMENTS.EMAIL_INPUT.value;
      getCodeRequest(email);
      ELEMENTS.EMAIL_INPUT.value = "";
      ELEMENTS.KOD_FORM.addEventListener("submit", async function (event) {
        event.preventDefault();
        const token = ELEMENTS.KOD_INPUT.value;
        Cookie.set("Authorization", `Bearer ${token}`, { expires: 1 });
        Cookie.set("token", `${token}`);
        kodPopUp(REMOVE);
        getData(HISTORY_URL);
        await getHistoryData();
        // сделать открывание настроек при первом запуске/после подтверждения кода
      });
    });
  }
}
window.onload = onLoadWindow();

function halfRender(array) {
  const tempArray = array.slice(0, 20);
  array.splice(0, 20);
  tempArray.map((item, index) => {
    messageRendering(tempArray[index]);
  });
}

function renderMessagesFromHistory(array) {
  // if (array.length === 0) {                  //через рекурсию xD
  //   console.log('История сообщений загружена');
  //   return;
  // } else {
  //   messageRendering(array[array.length - 1]);
  //   array.length--;
  //   renderMessagesFromHistory(array);
  // }
  halfRender(array);
  ELEMENTS.CHAT.addEventListener("scroll", (event) => {
    event.preventDefault();
    const scrollTop = Math.round(-ELEMENTS.CHAT.scrollTop);
    const scrollHeight =
      ELEMENTS.CHAT.scrollHeight - ELEMENTS.CHAT.clientHeight;
    if (array.length === 0) {
      return;
    } else {
      if (scrollTop + 1 >= scrollHeight) {
        halfRender(array);
        const isHistoryLoaded =
          array.length === 0 ? console.log("Вся история загружена!") : false; //сделать вывод на экран
      }
    }
  });
}

let arrayWithMessages;
async function getHistoryData() {
  const data = await getData(HISTORY_URL);
  arrayWithMessages = data.messages;
  renderMessagesFromHistory(arrayWithMessages);
}

async function getUserName() {
  const data = await getData(USER_URL);
  return data.name;
}

async function getData(url) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: Cookie.get("Authorization"),
    },
  });
  return response.json();
}

async function getCodeRequest(email) {
  const response = await fetch(STRADA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ email }),
  });
}

async function kodRequest(name) {
  const response = await fetch(STRADA_URL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: Cookie.get("Authorization"),
    },
    body: JSON.stringify({ name }),
  });
}

const socket = new WebSocket(`
  wss://edu.strada.one/websockets?${Cookie.get("token")}
`);

function messageRendering(data, onmessage = "history") {
  const messageTemplate =
    data.user?.email === MY_EMAIL
      ? ELEMENTS.TEMPLATE_MY_MSG
      : ELEMENTS.TEMPLATE_FRIEND_MSG;
  const name = data.user?.email === MY_EMAIL ? "Я" : data.user?.name;
  const message = data?.text;
  const time = format(new Date(data.createdAt), "HH:mm");
  const messageSpan = messageTemplate.content.querySelector("#my-message-text");
  messageSpan.textContent = `${name}: ${message}`;
  const timeSpanFriend = messageTemplate.content.querySelector("#time");
  timeSpanFriend.textContent = time;
  const placementMethod = onmessage === "new" ? true : false;
  if (placementMethod) {
    ELEMENTS.CHAT.prepend(messageTemplate.content.cloneNode(true));
  } else {
    ELEMENTS.CHAT.append(messageTemplate.content.cloneNode(true));
  }
}

socket.onmessage = function (event) {
  console.log(JSON.parse(event.data));
  const data = JSON.parse(event.data);
  messageRendering(data, "new");
};

// создать проверки и класс ошибок
// через socket onmessege сделать рендер каждого нового сообщения, брать с помощью JSON parce
function sendMessageHandler(event) {
  event.preventDefault();
  const text = ELEMENTS.MESSAGE_INPUT.value;
  socket.send(JSON.stringify({ text: `${text}` }));
  ELEMENTS.MESSAGE_INPUT.value = "";
}
ELEMENTS.MESSAGE_FORM.addEventListener("submit", sendMessageHandler);

async function changeNickname(event) {
  event.preventDefault();
  const newUserName = ELEMENTS.SETTING_INPUT.value;
  kodRequest(newUserName);
  const currentName = await getUserName();
  ELEMENTS.SETTING_NAME.textContent = `Имя в чате - ${currentName}`;
  ELEMENTS.SETTING_INPUT.value = "";
}
ELEMENTS.SETTING_FORM.addEventListener("submit", changeNickname);

async function openSettings(event) {
  event.preventDefault();
  const currentName = await getUserName();
  ELEMENTS.SETTING_NAME.textContent = `Имя в чате - ${currentName}`;
}
ELEMENTS.SETTING_BUTTON.addEventListener("click", openSettings);
