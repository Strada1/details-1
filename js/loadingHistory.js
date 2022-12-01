// import { format } from "date-fns";
import { URL } from "./const";
import Cookies from "js-cookie";
import { addMessageToDOM, companionMessageToDOM } from "./renderMessage";
import { getDataUser } from "./authorization";

window.addEventListener("load", getHistory);

async function getHistory(event) {
  event.preventDefault();

  const response = await fetch(URL.HISTORY_SERVER, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${Cookies.get("authorizationCod")}`,
    },
  });
  let result = await response.json();
  // console.log("result: ", result);
  // console.log("response: ", response.ok);

  let lengthArray = result.messages.length;
  lengthArray = Number(lengthArray) - 1;
  result = result.messages.reverse();
  let myEmail = await getDataUser();
  myEmail = myEmail.email
  getMessagesResult(lengthArray, result, myEmail);
}

async function getMessagesResult(lengthArray, result, myEmail) {
  if (lengthArray == -1) {
    return;
  } else {
    let message = result[lengthArray].text;
    let time = result[lengthArray].createdAt;
    let userEmail = result[lengthArray].user.email;
    let userName = result[lengthArray].user.name;

    // time = format(new Date(time), "kk':'mm");
    if (userEmail == myEmail) {
      addMessageToDOM(message, time);
    } else {
      companionMessageToDOM(message, time, userName);
    }
    lengthArray--;
    getMessagesResult(lengthArray, result, myEmail);
  }
}
