export const ACTIVE = "active";
export const REMOVE = "remove";
export const ADD = "add";

export const POPUPELEMENTS = {
  popupBg: document.querySelector(".popup__bg"),
  popup: document.querySelector(".popup"),
  openPopupButtons: document.querySelectorAll(".open-popup"),
  closePopupButton: document.querySelector(".close-popup"),
  popupBgAuth: document.querySelector(".popup__bg_auth"),
  popupAuth: document.querySelector(".popup_auth"),
  closePopupButtonAuth: document.querySelector(".close-popup-auth"),
  popupBgKod: document.querySelector(".popup__bg_kod"),
  popupKod: document.querySelector(".popup_kod"),
  closePopupButtonKod: document.querySelector(".close-popup-kod"),
};

export function authPopUp(action) {
  if (action === REMOVE) {
    POPUPELEMENTS.popupAuth.classList.remove(ACTIVE);
    POPUPELEMENTS.popupBgAuth.classList.remove(ACTIVE);
  }
  if (action === ADD) {
    POPUPELEMENTS.popupBgAuth.classList.add(ACTIVE);
    POPUPELEMENTS.popupAuth.classList.add(ACTIVE);
  }
}

export function kodPopUp(action) {
  if (action === REMOVE) {
    POPUPELEMENTS.popupBgKod.classList.remove(ACTIVE);
    POPUPELEMENTS.popupKod.classList.remove(ACTIVE);
  }
  if (action === ADD) {
    POPUPELEMENTS.popupBgKod.classList.add(ACTIVE);
    POPUPELEMENTS.popupKod.classList.add(ACTIVE);
  }
}

POPUPELEMENTS.openPopupButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    POPUPELEMENTS.popupBg.classList.add(ACTIVE);
    POPUPELEMENTS.popup.classList.add(ACTIVE);
  });
});

function removeActive() {
  POPUPELEMENTS.popupBg.classList.remove(ACTIVE);
  POPUPELEMENTS.popup.classList.remove(ACTIVE);
}

POPUPELEMENTS.closePopupButton.addEventListener("click", () => {
  removeActive();
});

document.addEventListener("click", (event) => {
  if (event.target === POPUPELEMENTS.popupBg) {
    removeActive();
  }
});
