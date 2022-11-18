import { closePopups } from "./popup.js";
import { ELEMENTS } from "./elements.js";

//ПОЖАЛЙСТА НЕ СМОТРИТЕ НА ЭТО КЛАДБИЩЕ ОБРАБОТЧИКОВ Я ИСПРАВЛЮ
ELEMENTS.BUTTON_SETTINGS.addEventListener("click", function () {
  closePopups(ELEMENTS.SETTINGS_WRAPPER);
});

ELEMENTS.BUTTON_CLOSE_SETTINGS.addEventListener("click", function () {
  closePopups(ELEMENTS.SETTINGS_WRAPPER);
});

ELEMENTS.BUTTON_CLOSE_AUTHORIZATION.addEventListener("click", function () {
  closePopups(ELEMENTS.AUTHORIZATION_WRAPPER);
});

ELEMENTS.BUTTON_CLOSE_CONFIRMATION.addEventListener("click", function () {
  closePopups(ELEMENTS.CONFIRMATION_WRAPPER);
});

ELEMENTS.BUTTON_EXIT.addEventListener("click", function () {
  closePopups(ELEMENTS.AUTHORIZATION_WRAPPER);
});

ELEMENTS.BUTTON_GET_CODE.addEventListener("click", function () {
  closePopups(ELEMENTS.CONFIRMATION_WRAPPER);
});

ELEMENTS.MESSAGE_FORM.addEventListener("submit", renderMyMessage);

function renderMyMessage(event) {
  event.preventDefault();
  if (ELEMENTS.MESSAGE_INPUT.value === "") {
    alert("Введите сообщение!");
  } else {
    const spanMessage =
      ELEMENTS.MY_MESSAGE_TEMPLATE.content.querySelector(".my_message_view");
    spanMessage.textContent = ELEMENTS.MESSAGE_INPUT.value;
    const cloneMessages = ELEMENTS.MY_MESSAGE_TEMPLATE.content.cloneNode(true);
    ELEMENTS.MY_MESSAGES.append(cloneMessages);
    ELEMENTS.MESSAGE_INPUT.value = "";
    ELEMENTS.MY_MESSAGES.scrollTop = ELEMENTS.MY_MESSAGES.scrollHeight;
  }
}

ELEMENTS.AUTHORIZATION_FORM.addEventListener("submit", mailRequest);

async function mailRequest(event) {
  event.preventDefault()
  const url =  'https://edu.strada.one/api/user'
  const result = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': "text/plain;charset=UTF-8",
  },
  body: JSON.stringify({email: `${ELEMENTS.INPUT_MAIL.value}`})
  })
  console.log(result)
}
