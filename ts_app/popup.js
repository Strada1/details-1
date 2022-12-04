"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codePopUp = exports.authPopUp = exports.POPUPELEMENTS = exports.ADD = exports.REMOVE = exports.ACTIVE = void 0;
exports.ACTIVE = "active";
exports.REMOVE = "remove";
exports.ADD = "add";
const AUTH = "AUTH";
const CODE = "CODE";
const SETTINGS = "SETTINGS";
exports.POPUPELEMENTS = {
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
            exports.POPUPELEMENTS.popupAuth?.classList.remove(exports.ACTIVE);
            exports.POPUPELEMENTS.popupBgAuth?.classList.remove(exports.ACTIVE);
            break;
        case CODE:
            exports.POPUPELEMENTS.popupCode?.classList.remove(exports.ACTIVE);
            exports.POPUPELEMENTS.popupBgCode?.classList.remove(exports.ACTIVE);
            break;
        case SETTINGS:
            exports.POPUPELEMENTS.popup?.classList.remove(exports.ACTIVE);
            exports.POPUPELEMENTS.popupBg?.classList.remove(exports.ACTIVE);
            break;
    }
}
function addPopup(popup) {
    switch (popup) {
        case AUTH:
            exports.POPUPELEMENTS.popupAuth?.classList.add(exports.ACTIVE);
            exports.POPUPELEMENTS.popupBgAuth?.classList.add(exports.ACTIVE);
            break;
        case CODE:
            exports.POPUPELEMENTS.popupCode?.classList.add(exports.ACTIVE);
            exports.POPUPELEMENTS.popupBgCode?.classList.add(exports.ACTIVE);
            break;
        case SETTINGS:
            exports.POPUPELEMENTS.popup?.classList.add(exports.ACTIVE);
            exports.POPUPELEMENTS.popupBg?.classList.add(exports.ACTIVE);
            break;
    }
}
function authPopUp(action) {
    const isPopupRemove = action === exports.REMOVE ? removePopup(AUTH) : addPopup(AUTH);
    return isPopupRemove;
}
exports.authPopUp = authPopUp;
function codePopUp(action) {
    if (action === exports.REMOVE) {
        removePopup(CODE);
    }
    else {
        addPopup(CODE);
    }
}
exports.codePopUp = codePopUp;
exports.POPUPELEMENTS.openPopupButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        addPopup(SETTINGS);
    });
});
exports.POPUPELEMENTS.closePopupButton?.addEventListener("click", () => {
    removePopup(SETTINGS);
});
document.addEventListener("click", (event) => {
    if (event.target === exports.POPUPELEMENTS.popupBg) {
        removePopup(SETTINGS);
    }
});
