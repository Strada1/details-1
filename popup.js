export const ACTIVE = "active";
export const REMOVE = "remove";
export const ADD = "add";
const AUTH = "AUTH";
const CODE = "CODE";
const SETTINGS = "SETTINGS";

export const POPUPELEMENTS = {
  popupBg: document.querySelector(".popup__bg"),
  popup: document.querySelector(".popup"),
  openPopupButtons: document.querySelectorAll(".open-popup"),
  closePopupButton: document.querySelector(".close-popup"),
  popupBgAuth: document.querySelector(".popup__bg_auth"),
  popupAuth: document.querySelector(".popup_auth"),
  closePopupButtonAuth: document.querySelector(".close-popup-auth"),
  popupBgCode: document.querySelector(".popup__bg_code"),
  popupCode: document.querySelector(".popup_code"),
  closePopupButtonCode: document.querySelector(".close-popup-code"),
};

function removePopup(popup) {
  switch (popup) {
    case AUTH:
      POPUPELEMENTS.popupAuth.classList.remove(ACTIVE);
      POPUPELEMENTS.popupBgAuth.classList.remove(ACTIVE);
      break;
    case CODE:
      POPUPELEMENTS.popupCode.classList.remove(ACTIVE);
      POPUPELEMENTS.popupBgCode.classList.remove(ACTIVE);
      break;
    case SETTINGS:
      POPUPELEMENTS.popup.classList.remove(ACTIVE);
      POPUPELEMENTS.popupBg.classList.remove(ACTIVE);
      break;
  }
}

function addPopup(popup) {
  switch (popup) {
    case AUTH:
      POPUPELEMENTS.popupAuth.classList.add(ACTIVE);
      POPUPELEMENTS.popupBgAuth.classList.add(ACTIVE);
      break;
    case CODE:
      POPUPELEMENTS.popupCode.classList.add(ACTIVE);
      POPUPELEMENTS.popupBgCode.classList.add(ACTIVE);
      break;
    case SETTINGS:
      POPUPELEMENTS.popup.classList.add(ACTIVE);
      POPUPELEMENTS.popupBg.classList.add(ACTIVE);
      break;
  }
}

export function authPopUp(action) {
  const isPopupRemove = action === REMOVE ? removePopup(AUTH) : addPopup(AUTH);
  return isPopupRemove;
}

export function codePopUp(action) {
  if (action === REMOVE) {
    removePopup(CODE);
  } else {
    addPopup(CODE);
  }
}

POPUPELEMENTS.openPopupButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    addPopup(SETTINGS);
  });
});

POPUPELEMENTS.closePopupButton.addEventListener("click", () => {
  removePopup(SETTINGS);
});

document.addEventListener("click", (event) => {
  if (event.target === POPUPELEMENTS.popupBg) {
    removePopup(SETTINGS);
  }
});
