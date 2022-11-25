import { ELEMENTS, MESSAGE, METHOD } from "./const.js";
import { sendRequest, getCookie } from "./request.js";
import { format } from "date-fns";
import { showEndHistory } from "./ui.js";

export function addMessage(userClass, text, time, userName, insert) {
  let div = document.createElement("div");
  div.classList.add(...userClass);

  if (text.trim() !== "") {
    div.append(tmpl.content.cloneNode(true));
    div.querySelector(".message__text").textContent = text;
    div.querySelector(".message__delivery-time").textContent = format(
      Date.parse(time),
      "HH:mm"
    );

    if (insert) {
      ELEMENTS.contentWrapper.append(div);
    } else {
      ELEMENTS.contentWrapper.prepend(div);
    }
  }

  if (userName) {
    let span = document.createElement("span");
    span.classList.add("message__user");
    div.prepend(span);
    span.textContent = userName;
  } else {
    div.scrollIntoView({
      behavior: "smooth",
    });
  }
}

window.onload = function showCurrentHistory() {
  const responseResult = sendRequest(
    METHOD.GET,
    ELEMENTS.URL + "/messages/",
    {},
    { Authorization: `Bearer ${getCookie("token")}` }
  );

  responseResult.then((result) => {
    localStorage.setItem("history", JSON.stringify(result.messages));
    console.log(result.messages);
    const messagesList = result.messages;
    for (let i = 0; i <= MESSAGE.step - 1; i++) {
      if (messagesList[i].user.email === getCookie("thisUser")) {
        addMessage(
          ELEMENTS.myMessages,
          messagesList[i].text,
          messagesList[i].updatedAt
        );
      } else {
        addMessage(
          ELEMENTS.interlocutorMessages,
          messagesList[i].text,
          messagesList[i].updatedAt,
          messagesList[i].user.name
        );
      }
    }
    ELEMENTS.contentWrapper.scrollTop = ELEMENTS.contentWrapper.scrollHeight;
  });
};

export function downloadHistory(count) {
  const history = JSON.parse(localStorage.getItem("history"));
  for (let i = count; i <= count + MESSAGE.step; i++) {
    if (i <= history.length - 1) {
      if (history[i].email === getCookie("thisUser")) {
        addMessage(ELEMENTS.myMessages, history[i].text, history[i].updatedAt);
      } else {
        addMessage(
          ELEMENTS.interlocutorMessages,
          history[i].text,
          history[i].updatedAt,
          history[i].user.name
        );
      }
    }
  }
  if (count === history.length - MESSAGE.step) {
    showEndHistory();
  }
}
