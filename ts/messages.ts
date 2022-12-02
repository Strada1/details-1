import { ELEMENTS, MESSAGE } from "./const";
import { getCookie } from "./request";
import { format } from "date-fns";
import { showEndHistory } from "./ui";

 type messageElements = {
  userClass: string[];
  text: string;
  time: string;
  userName?: string;
  insert?: string; 

}

export function addMessage(message: messageElements): void {
  let div = document.createElement("div");
  div.classList.add(...message.userClass);

  if (message.text.trim() !== "") {
    div.append((ELEMENTS.template as HTMLTemplateElement).content.cloneNode(true));
   ( div.querySelector(".message__text") as HTMLElement).textContent = message.text;
   (div.querySelector(".message__delivery-time") as HTMLElement).textContent = format(
      Date.parse(message.time),
      "HH:mm"
    );

    if (message.insert && ELEMENTS.contentWrapper) {
      ELEMENTS.contentWrapper.append(div);
    } else {
      if(ELEMENTS.contentWrapper) {
        ELEMENTS.contentWrapper.prepend(div);
      }
    }
  }

  if (message.userName) {
    let span = document.createElement("span");
    span.classList.add("message__user");
    div.prepend(span);
    span.textContent = message.userName;
  } else {
    div.scrollIntoView({
      behavior: "smooth",
    });
  }
}

export function stringifyJSON(item: any) {
  try {
    return JSON.stringify(item);
  } catch (error: any) {
    alert(error.message);
  }
}

export function parseJSON(item: string) {
  try {
    return JSON.parse(item);
  } catch (error: any) {
    alert(error.message);
  }

}

export function downloadHistory(key: string) {
  const messagesList = parseJSON(localStorage.getItem("history") || '');
  messagesList.slice(0, MESSAGE.step).forEach((item: any) => {
    if (item.user.email === getCookie(key)) {
      addMessage({userClass: ELEMENTS.myMessages, text: item.text, time: item.updatedAt});
    } else {
      addMessage(
        {userClass: ELEMENTS.interlocutorMessages,
        text: item.text,
        time: item.updatedAt,
        userName: item.user.name}
      );
    }
  });
  const history = messagesList.filter((item: any, index: number) => index >= MESSAGE.step);
    localStorage.setItem("history", stringifyJSON(history) || '');
  if (messagesList.length <= MESSAGE.step) {
    showEndHistory();
  }
}
