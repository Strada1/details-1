"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const const_1 = require("./const");
(_a = const_1.buttonSetting.openPopupButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {
    e.preventDefault();
    const_1.buttonSetting.popupBg.classList.add('active');
    const_1.buttonSetting.popup.classList.add('active');
});
function removePopup() {
    const_1.buttonSetting.popupBg.classList.remove('active');
    const_1.buttonSetting.popup.classList.remove('active');
}
(_b = const_1.buttonSetting.closePopupButton) === null || _b === void 0 ? void 0 : _b.addEventListener('click', (e) => {
    e.preventDefault();
    removePopup();
});
document.addEventListener('click', (e) => {
    if (e.target === const_1.buttonSetting.popupBg) {
        removePopup();
    }
});
