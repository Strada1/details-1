export const ACTIVE: string = "active";
export const REMOVE: string = "remove";
export const ADD: string = "add";
const AUTH: string = "AUTH";
const CODE: string = "CODE";
const SETTINGS: string = "SETTINGS";

export const POPUPELEMENTS: {
  popupBg: Element | null;
  popup: Element | null;
  openPopupButtons: any | null;
  closePopupButton: Element | null;
  popupBgAuth: Element | null;
  popupAuth: Element | null;
  closePopupButtonAuth: Element | null;
  popupBgCode: Element | null;
  popupCode: Element | null;
  closePopupButtonCode: Element | null;
} = {
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

function removePopup(popup: string) {
  switch (popup) {
    case AUTH:
      POPUPELEMENTS.popupAuth?.classList.remove(ACTIVE);
      POPUPELEMENTS.popupBgAuth?.classList.remove(ACTIVE);
      break;
    case CODE:
      POPUPELEMENTS.popupCode?.classList.remove(ACTIVE);
      POPUPELEMENTS.popupBgCode?.classList.remove(ACTIVE);
      break;
    case SETTINGS:
      POPUPELEMENTS.popup?.classList.remove(ACTIVE);
      POPUPELEMENTS.popupBg?.classList.remove(ACTIVE);
      break;
  }
}

function addPopup(popup: string) {
  switch (popup) {
    case AUTH:
      POPUPELEMENTS.popupAuth?.classList.add(ACTIVE);
      POPUPELEMENTS.popupBgAuth?.classList.add(ACTIVE);
      break;
    case CODE:
      POPUPELEMENTS.popupCode?.classList.add(ACTIVE);
      POPUPELEMENTS.popupBgCode?.classList.add(ACTIVE);
      break;
    case SETTINGS:
      POPUPELEMENTS.popup?.classList.add(ACTIVE);
      POPUPELEMENTS.popupBg?.classList.add(ACTIVE);
      break;
  }
}

export function authPopUp(action: string) {
  const isPopupRemove = action === REMOVE ? removePopup(AUTH) : addPopup(AUTH);
  return isPopupRemove;
}

export function codePopUp(action: string) {
  if (action === REMOVE) {
    removePopup(CODE);
  } else {
    addPopup(CODE)
  }
}

POPUPELEMENTS.openPopupButtons.forEach((button: HTMLButtonElement) => {
  button.addEventListener("click", (event: Event) => {
    event.preventDefault();
    addPopup(SETTINGS);
  });
});

POPUPELEMENTS.closePopupButton?.addEventListener("click", () => {
  removePopup(SETTINGS);
});

document.addEventListener("click", (event: Event) => {
  if (event.target === POPUPELEMENTS.popupBg) {
    removePopup(SETTINGS);
  }
});
