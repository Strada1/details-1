export function openPopup(popup, errorMessage) {
  const UI = popup;
  UI.style.opacity = "1";
  UI.style.visibility = "visible";
  const uiText = UI.querySelector(".popup__warning-text");
  uiText.textContent = errorMessage;
}
export function closePopup(popup) {
  const UI = popup;
  UI.style.opacity = "0";
  UI.style.visibility = "hidden";
}
