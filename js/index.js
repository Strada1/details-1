"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const const_1 = require("./const");
const ui_1 = require("./ui");
const request_js_1 = require("./request.js");
const messages_1 = require("./messages");
const set = new Set();
const_1.ELEMENTS.authorizationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    (0, request_js_1.setCookie)("thisUser", const_1.ELEMENTS.emailInput.value.trim());
    (0, request_js_1.sendRequest)({
        method: const_1.METHOD.POST,
        URL: `${const_1.ELEMENTS.URL}${"/user"}`,
        body: {
            body: (0, messages_1.stringifyJSON)({
                email: const_1.ELEMENTS.emailInput.value.trim(),
            }),
        },
    });
    const_1.ELEMENTS.emailInput.value = "";
    (0, ui_1.closeModal)(const_1.ELEMENTS.modalAuthorization);
    (0, ui_1.showModal)(const_1.ELEMENTS.modalCode);
});
const_1.ELEMENTS.codeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    (0, request_js_1.setCookie)("token", const_1.ELEMENTS.code.value.trim());
    const_1.ELEMENTS.code.value = "";
    (0, ui_1.closeModal)(const_1.ELEMENTS.modalCode);
    document.location.reload();
});
const_1.ELEMENTS.nameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const token = (0, request_js_1.getCookie)("token");
    if (const_1.ELEMENTS.name.value !== "") {
        (0, request_js_1.sendRequest)({
            method: const_1.METHOD.PATCH,
            URL: `${const_1.ELEMENTS.URL}${"/user"}`,
            body: {
                body: (0, messages_1.stringifyJSON)({
                    name: const_1.ELEMENTS.name.value.trim(),
                }),
            },
            headers: { Authorization: `${const_1.ELEMENTS.authorizationWord} ${token}` },
        });
    }
    else {
        (0, ui_1.showWarning)(const_1.ELEMENTS.nameWarning);
    }
    const_1.ELEMENTS.name.value = "";
});
document.addEventListener("DOMContentLoaded", showCurrentHistory);
function showCurrentHistory() {
    const token = (0, request_js_1.getCookie)("token");
    if (!token) {
        (0, ui_1.showModal)(const_1.ELEMENTS.modalAuthorization);
        return;
    }
    const responseResult = (0, request_js_1.sendRequest)({
        method: const_1.METHOD.GET,
        URL: `${const_1.ELEMENTS.URL}${"/messages/"}`,
        body: {},
        headers: { Authorization: `${const_1.ELEMENTS.authorizationWord} ${token}` },
    });
    responseResult.then((result) => {
        localStorage.setItem("history", JSON.stringify(result.messages));
        (0, messages_1.downloadHistory)("thisUser");
        if (const_1.ELEMENTS.contentWrapper) {
            const_1.ELEMENTS.contentWrapper.scrollTop = const_1.ELEMENTS.contentWrapper.scrollHeight;
        }
    });
    setConnection();
}
const_1.ELEMENTS.scrollDown.hidden = true;
const_1.ELEMENTS.contentWrapper.addEventListener("scroll", () => {
    (0, ui_1.addScrollIcon)();
    const messagesList = (0, messages_1.parseJSON)(localStorage.getItem("history") || "");
    if (const_1.ELEMENTS.contentWrapper) {
        if (const_1.ELEMENTS.contentWrapper.scrollTop === 0) {
            const currentContentHeight = const_1.ELEMENTS.contentWrapper.scrollHeight;
            if (messagesList.length >= const_1.MESSAGE.step) {
                (0, messages_1.downloadHistory)("thisUser");
            }
            const newContentHeight = const_1.ELEMENTS.contentWrapper.scrollHeight;
            const_1.ELEMENTS.contentWrapper.scrollTop =
                newContentHeight - currentContentHeight;
        }
    }
});
function setConnection() {
    const socket = new WebSocket(`wss://edu.strada.one/websockets?${(0, request_js_1.getCookie)("token")}`);
    const_1.ELEMENTS.textArea.addEventListener("keydown", (event) => {
        set.add(event.key);
        if (set.has("Enter") && !set.has("Shift")) {
            socket.send(JSON.stringify({
                text: const_1.ELEMENTS.textArea.value,
            }));
            (0, ui_1.returnTextAreaSie)();
            event.preventDefault();
        }
    });
    const_1.ELEMENTS.textArea.addEventListener("keyup", (event) => {
        set.clear();
        (0, ui_1.changeTextAreaSize)(event);
    });
    const_1.ELEMENTS.messageForm.addEventListener("submit", (event) => {
        event.preventDefault();
        socket.send(JSON.stringify({
            text: const_1.ELEMENTS.textArea.value,
        }));
        (0, ui_1.returnTextAreaSie)();
    });
    socket.onmessage = function (event) {
        const data = (0, messages_1.parseJSON)(event.data);
        if ((0, request_js_1.getCookie)("thisUser") === data.user.email) {
            (0, messages_1.addMessage)({
                userClass: const_1.ELEMENTS.myMessages,
                text: data.text,
                time: data.createdAt,
                userName: undefined,
                insert: "append",
            });
        }
        else {
            (0, messages_1.addMessage)({
                userClass: const_1.ELEMENTS.interlocutorMessages,
                text: data.text,
                time: data.createdAt,
                userName: data.user.name,
                insert: "append",
            });
        }
    };
    const_1.ELEMENTS.buttonExit.addEventListener("click", () => {
        socket.close();
        (0, ui_1.showModal)(const_1.ELEMENTS.modalAuthorization);
        (0, request_js_1.setCookie)("token", "token", -1);
        (0, request_js_1.setCookie)("thisUser", "user", -1);
        localStorage.removeItem("history");
    });
}
