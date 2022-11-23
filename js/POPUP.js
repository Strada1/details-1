import { ELEMENT } from "./const.js";
import { POPUP } from "./const.js";

ELEMENT.SETTINGS.addEventListener("click", openPopupSettings);
POPUP.CLOSE_SETTINGS.addEventListener("click", closePopupSettings);

ELEMENT.AUTHORIZATION.addEventListener("click", openPopupAuthorization);
POPUP.CLOSE_AUTHORIZATION.addEventListener("click", closePopupAuthorization);

POPUP.GET_COD.addEventListener("click", openPopupConfirmation);
POPUP.CLOSE_CONFIRMATION.addEventListener("click", closePopupConfirmation);

export function openPopupSettings() {
  POPUP.SETTINGS.classList.add("open");
}

export function closePopupSettings() {
  POPUP.SETTINGS.className = "popup__setings";
}

export function openPopupAuthorization() {
  POPUP.AUTHORIZATION.classList.add("open");
}

function closePopupAuthorization() {
  POPUP.AUTHORIZATION.className = "popup__authorization";
}

function openPopupConfirmation() {
  closePopupAuthorization();
  POPUP.CONFIRMATION.classList.add("open");
}

export function closePopupConfirmation() {
  POPUP.CONFIRMATION.className = "popup__confirmation";
}
