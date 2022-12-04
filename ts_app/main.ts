import {
  ELEMENTS,
  STRADA_URL,
  USER_URL,
  HISTORY_URL,
  MY_EMAIL,
  NEW,
} from "./const.js";
import { format } from "date-fns";
import Cookies from "js-cookie";
import { ADD, REMOVE, authPopUp, codePopUp } from "./popup.js";

// сделать обработку ошибок

async function dataRequests(): Promise<void> {
  getData(HISTORY_URL);
  await getHistoryData();
}
async function setDataCodeForm(event: Event): Promise<void> {
  event.preventDefault();
  const token: string | undefined = ELEMENTS.CODE_INPUT?.value;
  if (token) {
    Cookies.set("Authorization", `Bearer ${token}`, { expires: 3 });
    Cookies.set("token", `${token}`);
    codePopUp(REMOVE);
  }
  try {
    await dataRequests();
  } catch(error: unknown) {
    console.log(error);
  }
}
function setDataEmailForm(event: Event): void {
  event.preventDefault();
  authPopUp(REMOVE);
  codePopUp(ADD);
  const email: string | undefined = ELEMENTS.EMAIL_INPUT?.value;
  if (email) {
    registryUser(email);
  }
  ELEMENTS.CODE_FORM?.addEventListener("submit", setDataCodeForm);
}
async function onAppStart(): Promise<void> {
  if (Cookies.get("Authorization")) {
    authPopUp(REMOVE);
    codePopUp(REMOVE);
    await dataRequests();
  } else {
    authPopUp(ADD);
    ELEMENTS.EMAIL_FORM?.addEventListener("submit", setDataEmailForm);
  }
}
window.addEventListener('DOMContentLoaded', onAppStart)
// window.onload = onAppStart();

function halfRender(array: any): void {
  const tempArray: any = array.slice(0, 20);
  array.splice(0, 20);
  tempArray.map((item: number, index: number) => {
    messageRendering(tempArray[index]);
  });
}

function renderMessagesFromHistory(array: any): void {
  halfRender(array);
  ELEMENTS.CHAT?.addEventListener("scroll", (event) => {
    event.preventDefault();
    if(ELEMENTS.CHAT) {
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
    }
  }); 
}

let arrayWithMessages: any;
async function getHistoryData(): Promise<any> {
  const data: any = await getData(HISTORY_URL);
  arrayWithMessages = data.messages;
  renderMessagesFromHistory(arrayWithMessages);
}

async function getUserName(): Promise<any> {
  const data: any | undefined = await getData(USER_URL);
  if (data) {
    return data.name;
  }
}
// переделать запросы в одну функцию
async function getData(url: URL): Promise<any> {
  const headers = new Headers();
  headers.set("Content-Type", "application/json;charset=utf-8")
  headers.set("Authorization",`${Cookies.get("Authorization")}`)
  const response = await fetch(url, {
    method: "GET",
    headers,
  });
  return response.json();
}

async function registryUser(email: string): Promise<void> {
  const headers = new Headers();
  headers.set("Content-Type", "application/json;charset=utf-8")
  const response = await fetch(STRADA_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ email }),
  });
}

async function codeFormRequest(name: string): Promise<void> {
  const headers = new Headers();
  headers.set("Content-Type", "application/json;charset=utf-8")
  headers.set("Authorization", `${Cookies.get("Authorization")}`)
  const response: Response = await fetch(STRADA_URL, {
    method: "PATCH",
    headers,
    body: JSON.stringify({ name }),
  });
}

const socket: WebSocket = new WebSocket(`
  wss://edu.strada.one/websockets?${Cookies.get("token")}
`);

function messageRendering(data: any, message?: string): void {
  const messageTemplate: HTMLTemplateElement | null =
    data.user?.email === MY_EMAIL
      ? ELEMENTS?.TEMPLATE_MY_MSG as HTMLTemplateElement
      : ELEMENTS?.TEMPLATE_FRIEND_MSG as HTMLTemplateElement; 
  const name: string = data.user?.email === MY_EMAIL ? "Я" : data.user?.name;
  const messageText: string = data?.text;
  const time: string = format(new Date(data.createdAt), "HH:mm");
  const messageSpan: HTMLSpanElement = <HTMLSpanElement>messageTemplate.content.querySelector("#my-message-text");
  if (messageSpan) {
    messageSpan.textContent = `${name}: ${messageText}`;
  }
  const timeSpanFriend: HTMLSpanElement = <HTMLSpanElement>messageTemplate.content.querySelector("#time");
  timeSpanFriend.textContent = time;
  const insertMethod: boolean = message === NEW ? true : false;
  if (insertMethod) {
    ELEMENTS.CHAT?.prepend(messageTemplate.content.cloneNode(true));
  } else {
    ELEMENTS.CHAT?.append(messageTemplate.content.cloneNode(true));
  }
}

socket.onmessage = function (event: MessageEvent): void {
  // console.log(JSON.parse(event.data));
  const data: any = JSON.parse(event.data);
  messageRendering(data, NEW);
};

// создать проверки и класс ошибок

function sendMessageHandler(event: Event): void {
  event.preventDefault();
  if (ELEMENTS.MESSAGE_INPUT) {
    const text: string | undefined = ELEMENTS.MESSAGE_INPUT?.value;
    ELEMENTS.MESSAGE_INPUT.value = "";
    if (text) {
      socket.send(JSON.stringify({ text: `${text}` }));
    }
  }
}
ELEMENTS.MESSAGE_FORM?.addEventListener("submit", sendMessageHandler);

async function changeNickname(event: Event): Promise<void> {
  event.preventDefault();
  const newUserName: string | undefined = ELEMENTS.SETTING_INPUT?.value;
  if (newUserName) {
    codeFormRequest(newUserName);
  }
  const currentName: any = await getUserName();
  if (ELEMENTS.SETTING_NAME) {
    ELEMENTS.SETTING_NAME.textContent = `Имя в чате - ${currentName}`;
  }
  if (ELEMENTS.SETTING_INPUT) {
    ELEMENTS.SETTING_INPUT.value = "";
  }
}
ELEMENTS.SETTING_FORM?.addEventListener("submit", changeNickname);

async function openSettings(event: Event): Promise<void> {
  event.preventDefault();
  const currentName = await getUserName();
  if (ELEMENTS.SETTING_NAME) {
    ELEMENTS.SETTING_NAME.textContent = `Имя в чате - ${currentName}`;
  }
}
ELEMENTS.SETTING_BUTTON?.addEventListener("click", openSettings);

