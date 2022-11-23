import Cookies from "js-cookie";
import { POPUP } from "./const.js";
import {
  openPopupSettings,
  openPopupAuthorization,
  closePopupSettings,
  closePopupConfirmation,
} from "./POPUP";

POPUP.GET_COD.addEventListener("click", sendCod);
POPUP.LOGIN.addEventListener("click", loginSetCookie);
POPUP.SAVE_NAME.addEventListener("click", setName);

async function sendCod(event) {
  event.preventDefault();
  const userEmail = POPUP.INPUT.value.trim();

  const response = await fetch("https://edu.strada.one/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${Cookies.get("authorizationCod")}`,
    },
    body: JSON.stringify({ email: `${userEmail}` }),
  });
  if (!response.ok) {
    alert("Email не коректный, поробуйте снова");
    closePopupConfirmation();
    openPopupAuthorization();
  }
}

function loginSetCookie(event) {
  event.preventDefault();
  const cod = POPUP.INPUT_COD.value.trim();
  Cookies.set("authorizationCod", `${cod}`);
  console.log("All cookies: ", Cookies.get());
  closePopupConfirmation();
  openPopupSettings();
}

async function setName(event) {
  event.preventDefault();
  console.log("start");
  const name = POPUP.INPUT_NAME.value.trim();
  const response = await fetch("https://edu.strada.one/api/user", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("authorizationCod")}`,
    },
    body: JSON.stringify({ name: `${name}` }),
  });
  const result = await response.json();
  console.log("result: ", result);
  console.log("response: ", response.ok);

  closePopupSettings();
  getDataUser();
}

export async function getDataUser() {
  const response = await fetch("https://edu.strada.one/api/user/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${Cookies.get("authorizationCod")}`,
    },
  });
  const result = await response.json();
  // console.log('result: ', result);
  // console.log("response: ", response.ok);
  return result;
}
