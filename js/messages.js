import { ELEMENTS, MESSAGE, METHOD } from "./const.js";
import { getCookie } from "./request.js";
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
