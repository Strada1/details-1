import { format } from "date-fns";
import { URL, ELEMENT, NUMBERS } from "./const";
import Cookies from "js-cookie";
import { addMessageToDOM, companionMessageToDOM } from "./renderMessage";
import { getDataUser } from "./authorization";

window.addEventListener("load", getHistory);
ELEMENT.SCROl.addEventListener('scroll', loadScroll)

export async function getHistory(event) {
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

  let myEmail = await getDataUser();
  myEmail = myEmail.email
  localStorage.setItem('myEmail', myEmail)

  let lengthArray = result.messages.length;
  lengthArray = Number(lengthArray) - 1;

  result = result.messages
  localStorage.setItem('result', JSON.stringify(result))
  // getMessagesResult(result, lengthArray, myEmail)
  localStorage.setItem('number1', 0)
  localStorage.setItem('number2', 20)
  sliceArray(result, 0, 20)
}

async function getMessagesResult(result, lengthArray, myEmail) {
  if (lengthArray == -1) {
    return;
  } else {
    let message = result[lengthArray].text;
    let time = result[lengthArray].createdAt;
    let userEmail = result[lengthArray].user.email;
    let userName = result[lengthArray].user.name;

     time = format(new Date(time), "kk':'mm");
    if (userEmail == myEmail) {
      if(Number(localStorage.getItem("number1")) == 0) {
        let method = 1
        addMessageToDOM(message, time, method);
      } else {
        let method = 0
        addMessageToDOM(message, time, method);
      }
      
    } else {
      if(Number(localStorage.getItem("number1")) == 0) {
        let method = 1
        // переписать на принятие обьекта, а не 4 аргументов
        companionMessageToDOM(message, time, userName, method);
      } else {
        let method = 0
        companionMessageToDOM(message, time, userName, method);
      }
      
    }
    lengthArray--;
    getMessagesResult(result, lengthArray, myEmail);
  }
}

async function loadScroll(event) {
  let topBorder = ELEMENT.SCROl.scrollTop
  topBorder = Number(topBorder)
  if(topBorder == 0) {
    let result = JSON.parse(localStorage.getItem('result'))
    let number1 = 0;
    let number2 = 20;
    localStorage.setItem('number1', +localStorage.getItem('number1') + 20)
    localStorage.setItem('number2', +localStorage.getItem('number2') + 20)
    sliceArray(result, localStorage.getItem('number1'), localStorage.getItem('number2'))
  }
}

async function sliceArray(array, number1, number2) {
  const new_array = array.slice(number1, number2)
  let lengthArray = new_array.length;
  lengthArray = Number(lengthArray) - 1;

  let myEmail = await getDataUser();
  myEmail = myEmail.email

  console.log('new_array: ', new_array);
  if(!(+localStorage.getItem("number1") == 0)) {
    new_array.reverse();
  }

  if(new_array.length == 0) {
    alert("Вся история загружена")
  }

  getMessagesResult(new_array, lengthArray, myEmail)
}

