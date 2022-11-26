import { changeNameMessage, loadHistoryMessage} from "./chat.js";
import { AUTHORIZATION} from "./const.js";
import { comeChat } from "./popup.js";

const urlStrada = "https://edu.strada.one/api/user";
const urlStradaMe = "https://edu.strada.one/api/user/me";
const urlStradaMessages = "https://edu.strada.one/api/messages/";


export async function mailRequest() {
  const result = await fetch(urlStrada, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({email: `${AUTHORIZATION.INPUT_MAIL.value}`}),
  });
  if (!(result.ok)) {
    AUTHORIZATION.AUTHORIZATION_MESSAGE.textContent = "Произошла ошибка!";
  } else {
    AUTHORIZATION.AUTHORIZATION_MESSAGE.textContent = "Код на почте!";
  }
}

export async function changeNameRequest(name, account) {
  const result = await fetch(urlStrada, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${account}`,
    },
    body: JSON.stringify({ name: name }),
  });
  if (result.ok) {
    changeNameMessage("Ваше имя успешно сменилось на:", name);
  } else {
    changeNameMessage("Ошибка! Имя не сменилось на:", name);
  }
}

export async function userDataRequest(account) {
  const result = await fetch(urlStradaMe, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${account}`,
    },
  });
 }

export async function messagesRequest(account) {
  const result = await fetch(urlStradaMessages, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${account}`,
    },
  });
  const answer = await result.json();
  if (result.ok) {
    loadHistoryMessage(answer)
    comeChat();
  } else {
    AUTHORIZATION.AUTHORIZATION_MESSAGE.textContent = "Произошла ошибка!";
  }
}