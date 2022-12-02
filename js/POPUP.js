"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closePopupConfirmation = exports.openPopupAuthorization = exports.closePopupSettings = exports.openPopupSettings = void 0;
const const_1 = require("./const");
const const_2 = require("./const");
const_1.ELEMENT.SETTINGS.addEventListener("click", openPopupSettings);
const_2.POPUP.CLOSE_SETTINGS.addEventListener("click", closePopupSettings);
const_1.ELEMENT.AUTHORIZATION.addEventListener("click", openPopupAuthorization);
const_2.POPUP.CLOSE_AUTHORIZATION.addEventListener("click", closePopupAuthorization);
const_2.POPUP.GET_COD.addEventListener("click", openPopupConfirmation);
const_2.POPUP.CLOSE_CONFIRMATION.addEventListener("click", closePopupConfirmation);
function openPopupSettings() {
    const_2.POPUP.SETTINGS.classList.add("open");
}
exports.openPopupSettings = openPopupSettings;
function closePopupSettings() {
    const_2.POPUP.SETTINGS.className = "popup__setings";
}
exports.closePopupSettings = closePopupSettings;
function openPopupAuthorization() {
    const_2.POPUP.AUTHORIZATION.classList.add("open");
}
exports.openPopupAuthorization = openPopupAuthorization;
function closePopupAuthorization() {
    const_2.POPUP.AUTHORIZATION.className = "popup__authorization";
}
function openPopupConfirmation() {
    closePopupAuthorization();
    const_2.POPUP.CONFIRMATION.classList.add("open");
}
function closePopupConfirmation() {
    const_2.POPUP.CONFIRMATION.className = "popup__confirmation";
}
exports.closePopupConfirmation = closePopupConfirmation;
