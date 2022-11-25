import { format } from "date-fns";
import { URL, ELEMENT, NUMBERS } from "./const.js";
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
  getMessagesResult(NUMBERS.TWENTY, event, NUMBERS.ZERO);
  const result = await response.json();
  console.log("result: ", result);
  return result;
  
  // console.log("response: ", response.ok);

  // let lengthArray = result.messages.length;
  // lengthArray = Number(lengthArray) - 1;
  // result = result.messages
  //.reverse();
  
  
  // getMessagesResult(lengthArray, result, myEmail);
}

async function getMessagesResult(twenty, event, zero) {
  event.preventDefault();
  console.log('start render')

  let result = await getHistory()
  result = result.messages;

  let myEmail = await getDataUser();
  myEmail = myEmail.email

  for(let i = twenty; i >= zero; i--) {
    let message = result[i].text;
    let time = result[i].createdAt;
    let userEmail = result[i].user.email;
    let userName = result[i].user.name;

     time = format(new Date(time), "kk':'mm");
    if (userEmail == myEmail) {
      addMessageToDOM(message, time);
    } else {
      companionMessageToDOM(message, time, userName);
    }
  }
}

// async function getMessagesResult(lengthArray, result, myEmail) {
//   if (lengthArray == -1) {
//     return;
//   } else {
//     let message = result[lengthArray].text;
//     let time = result[lengthArray].createdAt;
//     let userEmail = result[lengthArray].user.email;
//     let userName = result[lengthArray].user.name;

//      time = format(new Date(time), "kk':'mm");
//     if (userEmail == myEmail) {
//       addMessageToDOM(message, time);
//     } else {
//       companionMessageToDOM(message, time, userName);
//     }
//     lengthArray--;
//     getMessagesResult(lengthArray, result, myEmail);
//   }
// }

function loadScroll() {
  let topBorder = ELEMENT.SCROl.scrollTop
  topBorder = Number(topBorder)
  console.log('topBorder: ', topBorder);
  if(topBorder == 0) {
    getMessagesResult(NUMBERS.TWENTY + NUMBERS.TWENTY, event, NUMBERS.ZERO + NUMBERS.TWENTY);
  }
}

