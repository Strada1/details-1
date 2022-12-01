import { ELEMENTS, MESSAGE } from "./const.js";
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

export function downloadHistory() {
  const messagesList = JSON.parse(localStorage.getItem("history"));
  messagesList.slice(0, MESSAGE.step).forEach((item) => {
    if (item.user.email === getCookie("thisUser")) {
      addMessage(ELEMENTS.myMessages, item.text, item.updatedAt);
    } else {
      addMessage(
        ELEMENTS.interlocutorMessages,
        item.text,
        item.updatedAt,
        item.user.name
      );
    }
  });
  const history = messagesList.filter((item, index) => index >= MESSAGE.step);
  localStorage.setItem("history", JSON.stringify(history));
  if (messagesList.length <= MESSAGE.step) {
    showEndHistory();
  }
}
