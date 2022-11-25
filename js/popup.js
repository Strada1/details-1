import { SETTINGS, CONFIRMATION, ELEMENTS, AUTHORIZATION } from "./const.js";
import { deleteAccountHistory } from "./chat.js";

//ментор, не стреляй в колени пж, да это плохо, что сток обработчиков, но оно работает...
//сделала из своих слез

SETTINGS.BUTTON_SETTINGS.addEventListener("click", function () {
  closePopups(SETTINGS.SETTINGS_WRAPPER);
});

SETTINGS.BUTTON_CLOSE_SETTINGS.addEventListener("click", function () {
  closePopups(SETTINGS.SETTINGS_WRAPPER);
});

ELEMENTS.BUTTON_EXIT.addEventListener("click", function () {
  deleteAccountHistory();
  closePopups(AUTHORIZATION.AUTHORIZATION_WRAPPER);
});

AUTHORIZATION.BUTTONS_GET_CODE.forEach((item) => {
  item.addEventListener("click", function () {
    closePopups(AUTHORIZATION.AUTHORIZATION_WRAPPER);
    closePopups(CONFIRMATION.CONFIRMATION_WRAPPER);
  });
});

ELEMENTS.BUTTON_EXIT.addEventListener("click", function () {
  AUTHORIZATION.AUTHORIZATION_WRAPPER.style.display = "flex";
});

export function closePopups(popup) {
  if (!popup.classList.contains("display_flex")) {
    popup.classList.add("display_flex");
  } else {
    popup.classList.remove("display_flex");
  }
}

export function comeChat() {
  closePopups(CONFIRMATION.CONFIRMATION_WRAPPER);
  AUTHORIZATION.AUTHORIZATION_WRAPPER.style.display = "none";
}
