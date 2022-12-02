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

ELEMENTS.authorizationForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (ELEMENTS.emailInput) {
    setCookie("thisUser", ELEMENTS.emailInput.value.trim());
    sendRequest({
      method: METHOD.POST,
      URL: `${ELEMENTS.URL}${"/user"}`,
      body: {
        body: stringifyJSON({
          email: ELEMENTS.emailInput.value.trim(),
        }),
      },
    });

    ELEMENTS.emailInput.value = "";
    closeModal(ELEMENTS.modalAuthorization);
    showModal(ELEMENTS.modalCode);
  }
});

ELEMENTS.codeForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (ELEMENTS.code) {
    setCookie("token", ELEMENTS.code.value.trim());
    ELEMENTS.code.value = "";
  }
  closeModal(ELEMENTS.modalCode);
  document.location.reload();
});

ELEMENTS.nameForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const token = getCookie("token");
  if (ELEMENTS.name && ELEMENTS.name.value) {
    sendRequest({
      method: METHOD.PATCH,
      URL: `${ELEMENTS.URL}${"/user"}`,
      body: {
        body: stringifyJSON({
          name: ELEMENTS.name.value.trim(),
        }),
      },
      headers: { Authorization: `${ELEMENTS.authorizationWord} ${token}` },
    });
  } else {
    showWarning(ELEMENTS.nameWarning);
  }

  if (ELEMENTS.name) {
    ELEMENTS.name.value = "";
  }
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
    localStorage.setItem("history", stringifyJSON(result.messages) || "");
    downloadHistory("thisUser");
    if (ELEMENTS.contentWrapper) {
      ELEMENTS.contentWrapper.scrollTop = ELEMENTS.contentWrapper.scrollHeight;
    }
  });
  setConnection();
}

if (ELEMENTS.scrollDown) {
  ELEMENTS.scrollDown.hidden = true;
}

ELEMENTS.contentWrapper?.addEventListener("scroll", () => {
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

  ELEMENTS.textArea?.addEventListener("keydown", (event) => {
    set.add(event.key);

    if (set.has("Enter") && !set.has("Shift")) {
      socket.send(
        JSON.stringify({
          text: ELEMENTS.textArea?.value,
        })
      );
      returnTextAreaSie();
      event.preventDefault();
    }
  });

  ELEMENTS.textArea?.addEventListener("keyup", (event) => {
    set.clear();
    changeTextAreaSize(event);
  });

  ELEMENTS.messageForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    socket.send(
      JSON.stringify({
        text: ELEMENTS.textArea?.value,
      })
    );
    returnTextAreaSie();
  });

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

  ELEMENTS.buttonExit?.addEventListener("click", () => {
    socket.close();
    showModal(ELEMENTS.modalAuthorization);
    setCookie("token", "token", -1);
    setCookie("thisUser", "user", -1);
    localStorage.removeItem("history");
  });
}
