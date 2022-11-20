import { CHAT } from "./const.js";
import {SETTINGS, CONFIRMATION, ELEMENTS, CHAT, AUTHORIZATION} from './const.js'
SETTINGS.BUTTON_SETTINGS.addEventListener("click", function () {
  closePopups(SETTINGS.SETTINGS_WRAPPER);
});

SETTINGS.BUTTON_CLOSE_SETTINGS.addEventListener("click", function () {
  closePopups(SETTINGS.SETTINGS_WRAPPER);
});

AUTHORIZATION.BUTTON_CLOSE_AUTHORIZATION.addEventListener("click", function () {
  closePopups(AUTHORIZATION.AUTHORIZATION_WRAPPER);
});

CONFIRMATION.BUTTON_CLOSE_CONFIRMATION.addEventListener("click", function () {
  closePopups(CONFIRMATION.CONFIRMATION_WRAPPER);
});

ELEMENTS.BUTTON_EXIT.addEventListener("click", function () {
  closePopups(AUTHORIZATION.AUTHORIZATION_WRAPPER);
});

AUTHORIZATION.BUTTON_GET_CODE.addEventListener("click", function () {
  closePopups(CONFIRMATION.CONFIRMATION_WRAPPER);
});

export function closePopups(popup) {
  if (!popup.classList.contains("display_flex")) {
    popup.classList.add("display_flex");
    CHAT.MAIN_BLOCK.style.backgroundColor = "#535353";
  } else {
    popup.classList.remove("display_flex");
    CHAT.MAIN_BLOCK.style.backgroundColor = "white";
  }
}