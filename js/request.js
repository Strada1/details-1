import { changeNameMessage, loadHistoryMessage} from "./chat.js";
import { AUTHORIZATION, ANSWER_REQUEST, URL_STRADA} from "./const.js";
import { comeChat } from "./popup.js";

export async function mailRequest() {
  const result = await fetch(URL_STRADA.EMAIL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({email: `${AUTHORIZATION.INPUT_MAIL.value}`}),
  });
  if (!(result.ok)) {
    AUTHORIZATION.AUTHORIZATION_MESSAGE.textContent = ANSWER_REQUEST.ERROR_REQUEST;
  } else {
    AUTHORIZATION.AUTHORIZATION_MESSAGE.textContent = ANSWER_REQUEST.GET_CODE_SUCCES;
  }
}

export async function changeNameRequest(name, account) {
  const result = await fetch(URL_STRADA.EMAIL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${account}`,
    },
    body: JSON.stringify({ name: name }),
  });
  if (result.ok) {
    changeNameMessage(ANSWER_REQUEST.CHANGE_NAME_SUCCES, name);
  } else {
    changeNameMessage(ANSWER_REQUEST.ERROR_CHANGE_NAME, name);
  }
}

export async function userDataRequest(account) {
  const result = await fetch(URL_STRADA.ME, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${account}`,
    },
  });
 }

export async function messagesRequest(account) {
  const result = await fetch(URL_STRADA.MESSAGES, {
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
    AUTHORIZATION.AUTHORIZATION_MESSAGE.textContent = ANSWER_REQUEST.ERROR_REQUEST;
  }
}