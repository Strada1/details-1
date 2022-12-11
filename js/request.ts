import { changeNameMessage, loadHistoryMessage } from "./chat";
import {
  AUTHORIZATION,
  ANSWER_REQUEST,
  REQUEST_HEADERS,
  REQUEST_METHOD,
} from "./const";
import { enterChat } from "./popup";

export async function mailRequest(mail:string, url:string) {
  try{
    const result = await fetch(url, {
      method: REQUEST_METHOD.POST,
      headers: REQUEST_HEADERS.DEFAULT_HEADERS,
      body: JSON.stringify({ email: mail }),
    });
    if (!result.ok) {
      AUTHORIZATION.AUTHORIZATION_MESSAGE.textContent =
        ANSWER_REQUEST.ERROR_REQUEST;
    } else {
      AUTHORIZATION.AUTHORIZATION_MESSAGE.textContent =
        ANSWER_REQUEST.GET_CODE_SUCCES;
    }
  } catch(error) {
    console.log(error)
  }
}

export async function changeNameRequest(name:string, url:string) {
  try {
    const result = await fetch(url, {
      method: REQUEST_METHOD.PATCH,
      headers: REQUEST_HEADERS.AUTHORIZATION_HEADERS,
      body: JSON.stringify({ name: name }),
    });
    if (result.ok) {
      changeNameMessage(ANSWER_REQUEST.CHANGE_NAME_SUCCES, name);
    } else {
      changeNameMessage(ANSWER_REQUEST.ERROR_CHANGE_NAME, name);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function userDataRequest(url:string) {
  try {
    const result = await fetch(url, {
      method: REQUEST_METHOD.GET,
      headers: REQUEST_HEADERS.AUTHORIZATION_HEADERS,
    });
  } catch(error) {
    console.log(error)
}
}

export async function messagesRequest(url:string) {
  try {
    const result = await fetch(url, {
      method: REQUEST_METHOD.GET,
      headers: REQUEST_HEADERS.AUTHORIZATION_HEADERS,
    });
    const answer = await result.json();
    if (result.ok) {
      loadHistoryMessage(answer);
      enterChat();
    } else {
      AUTHORIZATION.AUTHORIZATION_MESSAGE.textContent =
        ANSWER_REQUEST.ERROR_REQUEST;
    }
  } catch(error) {
    console.log(error)
  }
}
