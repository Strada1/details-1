import { SETTINGS, CONFIRMATION, ELEMENTS, AUTHORIZATION } from "./const";
import { deleteAccountHistory } from "./chat";

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

export function closePopups(popup: Element) {
  const displayFlex = "display_flex"
  if (!popup.classList.contains(displayFlex)) {
    popup.classList.add(displayFlex);
  } else {
    popup.classList.remove(displayFlex);
  }
}

export function enterChat() {
  closePopups(CONFIRMATION.CONFIRMATION_WRAPPER);
  AUTHORIZATION.AUTHORIZATION_WRAPPER.style.display = "none";
}
