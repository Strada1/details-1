import { ELEMENT } from "./const";
import { POPUP } from "./const";

ELEMENT.SETTINGS?.addEventListener("click", openPopupSettings);
POPUP.CLOSE_SETTINGS?.addEventListener("click", closePopupSettings);

ELEMENT.AUTHORIZATION?.addEventListener("click", openPopupAuthorization);
POPUP.CLOSE_AUTHORIZATION?.addEventListener("click", closePopupAuthorization);

POPUP.GET_COD?.addEventListener("click", openPopupConfirmation);
POPUP.CLOSE_CONFIRMATION?.addEventListener("click", closePopupConfirmation);

export function openPopupSettings() {
  POPUP.SETTINGS?.classList.add("open");
}

export function closePopupSettings() {
  (POPUP.SETTINGS as HTMLButtonElement).className = "popup__setings";
}

export function openPopupAuthorization() {
  (POPUP.AUTHORIZATION as HTMLButtonElement).classList.add("open");
}

function closePopupAuthorization() {
  (POPUP.AUTHORIZATION as HTMLButtonElement).className = "popup__authorization";
}

function openPopupConfirmation() {
  closePopupAuthorization();
  (POPUP.CONFIRMATION as HTMLButtonElement).classList.add("open");
}

export function closePopupConfirmation() {
 ( POPUP.CONFIRMATION as HTMLButtonElement).className = "popup__confirmation";
}
