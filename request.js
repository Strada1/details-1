import { changeNameMessage } from "./chat.js";
import { AUTHORIZATION, USER } from "./const.js";

const urlStrada = "https://edu.strada.one/api/user";
const urlStradaMe = "https://edu.strada.one/api/user/me";

export async function mailRequest(event) {
  event.preventDefault();
  const user = {
    email: AUTHORIZATION.INPUT_MAIL.value,
  };

  const result = await fetch(urlStrada, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(user),
  });
  if (!result.ok) {
    AUTHORIZATION.AUTHORIZATION_MESSAGE.textContent = "Произошла ошибка!";
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
    changeNameMessage("Ваше имя успешно сменилось.");
  } else {
    changeNameMessage("Ошибка! Имя не сменилось.");
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
  const answer = await result.json();
  USER.name = answer.name;
  if (!result.ok) {
    console.log(answer);
  }
}
