import { format } from "date-fns";
import { URL, ELEMENT } from "./const.js";
import Cookies from "js-cookie";
import { addMessageToDOM, companionMessageToDOM } from "./renderMessage.js";
import { getDataUser } from "./authorization.js";

window.addEventListener("load", getHistory);
ELEMENT.SCROl.addEventListener('scroll', loadScroll)


export async function getHistory(event) {
  // event.preventDefault();
  console.log('start gethistory')

  const response = await fetch(URL.HISTORY_SERVER, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${Cookies.get("authorizationCod")}`,
    },
  });
  let result = await response.json();
  console.log("result: ", result);
  console.log("response: ", response.ok);

  let lengthArray = result.messages.length;
  lengthArray = Number(lengthArray) - 1;
  result = result.messages
  //.reverse();
  let myEmail = await getDataUser();
  myEmail = myEmail.email
  sliceArray(result)
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

     time = format(new Date(time), "kk':'mm");
    if (userEmail == myEmail) {
      addMessageToDOM(message, time);
    } else {
      companionMessageToDOM(message, time, userName);
    }
    lengthArray--;
    getMessagesResult(lengthArray, result, myEmail);
  }
}

function loadScroll() {
  let topBorder = ELEMENT.SCROl.scrollTop
  topBorder = Number(topBorder)
  if(topBorder === 0) {
    alert("Вся история загружена")
  }
}

function sliceArray(array) {
  const first_array = array.slice(0, 20)
  console.log('first_array: ', first_array);
}
