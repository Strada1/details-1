import { format } from "date-fns";
import { URL } from "./const";
import Cookies from "js-cookie";
import { addMessageToDOM } from "./renderMessage";

window.addEventListener("load", getHistory);

async function getHistory(event) {
  console.log("start");
  event.preventDefault();

  const response = await fetch(URL.HISTORY_SERVER, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${Cookies.get("authorizationCod")}`,
    },
  });
  const result = await response.json();
  console.log("result: ", result);
  console.log("response: ", response.ok);

  let lengthArray = result.messages.length;
  lengthArray = Number(lengthArray) - 1;

  getMessagesResult(lengthArray, result);
}

function getMessagesResult(lengthArray, result) {
  if (lengthArray == -1) {
    return;
  } else {
	let message = result.messages[lengthArray].text;
	let time = result.messages[lengthArray].createdAt;
	time = format(new Date(time), "kk ':' mm")
	
    addMessageToDOM(message, time);
    lengthArray--;
    getMessagesResult(lengthArray, result);
  }
}
