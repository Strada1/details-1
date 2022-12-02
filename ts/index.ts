import { ELEMENTS, METHOD, MESSAGE } from "./const";
import {
  showModal,
  closeModal,
  showWarning,
  changeTextAreaSize,
  returnTextAreaSie,
  addScrollIcon,
} from "./ui";
import { setCookie, getCookie, sendRequest } from "./request";
import {
  addMessage,
  downloadHistory,
  stringifyJSON,
  parseJSON,
} from "./messages";

const set = new Set();

(ELEMENTS.authorizationForm as HTMLFormElement).addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
    setCookie(
      "thisUser",
      (ELEMENTS.emailInput as HTMLInputElement).value.trim()
    );
    sendRequest({
      method: METHOD.POST,
      URL: `${ELEMENTS.URL}${"/user"}`,
      body: {
        body: stringifyJSON({
          email: (ELEMENTS.emailInput as HTMLInputElement).value.trim(),
        }),
      },
    });
    (ELEMENTS.emailInput as HTMLInputElement).value = "";
    closeModal(ELEMENTS.modalAuthorization);
    showModal(ELEMENTS.modalCode);
  }
);

(ELEMENTS.codeForm as HTMLFormElement).addEventListener("submit", (event) => {
  event.preventDefault();
  setCookie("token", (ELEMENTS.code as HTMLInputElement).value.trim());
  (ELEMENTS.code as HTMLInputElement).value = "";
  closeModal(ELEMENTS.modalCode);
  document.location.reload();
});

(ELEMENTS.nameForm as HTMLFormElement).addEventListener("submit", (event) => {
  event.preventDefault();
  const token = getCookie("token");
  if ((ELEMENTS.name as HTMLInputElement).value !== "") {
    sendRequest({
      method: METHOD.PATCH,
      URL: `${ELEMENTS.URL}${"/user"}`,
      body: {
        body: stringifyJSON({
          name: (ELEMENTS.name as HTMLInputElement).value.trim(),
        }),
      },
      headers: { Authorization: `${ELEMENTS.authorizationWord} ${token}` },
    });
  } else {
    showWarning(ELEMENTS.nameWarning);
  }
  (ELEMENTS.name as HTMLInputElement).value = "";
});

document.addEventListener("DOMContentLoaded", showCurrentHistory);

function showCurrentHistory() {
  const token = getCookie("token");
  if (!token) {
    showModal(ELEMENTS.modalAuthorization);
    return;
  }
  const responseResult = sendRequest({
    method: METHOD.GET,
    URL: `${ELEMENTS.URL}${"/messages/"}`,
    body: {},
    headers: { Authorization: `${ELEMENTS.authorizationWord} ${token}` },
  });

  responseResult.then((result) => {
    localStorage.setItem("history", stringifyJSON(result.messages) || '');
    downloadHistory("thisUser");
    if (ELEMENTS.contentWrapper) {
      ELEMENTS.contentWrapper.scrollTop = ELEMENTS.contentWrapper.scrollHeight;
    }
  });
  setConnection();
}

(ELEMENTS.scrollDown as HTMLElement).hidden = true;

(ELEMENTS.contentWrapper as HTMLElement).addEventListener("scroll", () => {
  addScrollIcon();
  const messagesList = parseJSON(localStorage.getItem("history") || "");
  if (ELEMENTS.contentWrapper) {
    if (ELEMENTS.contentWrapper.scrollTop === 0) {
      const currentContentHeight = ELEMENTS.contentWrapper.scrollHeight;
      if (messagesList.length >= MESSAGE.step) {
        downloadHistory("thisUser");
      }
      const newContentHeight = ELEMENTS.contentWrapper.scrollHeight;
      ELEMENTS.contentWrapper.scrollTop =
        newContentHeight - currentContentHeight;
    }
  }
});

function setConnection() {
  const socket = new WebSocket(
    `wss://edu.strada.one/websockets?${getCookie("token")}`
  );

  (ELEMENTS.textArea as HTMLTextAreaElement).addEventListener(
    "keydown",
    (event) => {
      set.add(event.key);

      if (set.has("Enter") && !set.has("Shift")) {
        socket.send(
          JSON.stringify({
            text: (ELEMENTS.textArea as HTMLTextAreaElement).value,
          })
        );
        returnTextAreaSie();
        event.preventDefault();
      }
    }
  );

  (ELEMENTS.textArea as HTMLTextAreaElement).addEventListener(
    "keyup",
    (event) => {
      set.clear();
      changeTextAreaSize(event);
    }
  );

  (ELEMENTS.messageForm as HTMLFormElement).addEventListener(
    "submit",
    (event) => {
      event.preventDefault();
      socket.send(
        JSON.stringify({
          text: (ELEMENTS.textArea as HTMLTextAreaElement).value,
        })
      );
      returnTextAreaSie();
    }
  );

  socket.onmessage = function (event) {
    const data = parseJSON(event.data);

    if (getCookie("thisUser") === data.user.email) {
      addMessage({
        userClass: ELEMENTS.myMessages,
        text: data.text,
        time: data.createdAt,
        userName: undefined,
        insert: "append",
      });
    } else {
      addMessage({
        userClass: ELEMENTS.interlocutorMessages,
        text: data.text,
        time: data.createdAt,
        userName: data.user.name,
        insert: "append",
      });
    }
  };

  (ELEMENTS.buttonExit as HTMLButtonElement).addEventListener("click", () => {
    socket.close();
    showModal(ELEMENTS.modalAuthorization);
    setCookie("token", "token", -1);
    setCookie("thisUser", "user", -1);
    localStorage.removeItem("history");
  });
}
