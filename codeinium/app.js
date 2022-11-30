"use strict";
exports.__esModule = true;
var date_fns_1 = require("date-fns");
var ELEMENTS = {
    INPUT: document.querySelector('#date'),
    BUTTON: document.querySelector('.button'),
    NEWDATE: document.querySelector('.new-date')
};
var DAYS_MULTIPLIER = 30.4167;
function getStartDate() {
    return new Date(Date.now());
}
function getEndDate() {
    return new Date(ELEMENTS.INPUT.value);
}
function dateCountdown(timerId) {
    var dateNew = (0, date_fns_1.intervalToDuration)({
        start: getStartDate(),
        end: getEndDate()
    });
    var monthToDays = Math.floor((dateNew === null || dateNew === void 0 ? void 0 : dateNew.months) * DAYS_MULTIPLIER);
    ELEMENTS.NEWDATE.textContent = "\n        ".concat(dateNew === null || dateNew === void 0 ? void 0 : dateNew.years, " years, \n        ").concat((dateNew === null || dateNew === void 0 ? void 0 : dateNew.days) + monthToDays, " days, \n        ").concat(dateNew === null || dateNew === void 0 ? void 0 : dateNew.hours, " hours, \n        ").concat(dateNew === null || dateNew === void 0 ? void 0 : dateNew.minutes, " minutes,              \n        ").concat(dateNew === null || dateNew === void 0 ? void 0 : dateNew.seconds, " seconds\n    "); //bonus: minites, seconds
}
function setTimer() {
    var timerId = setInterval(function () { return dateCountdown(timerId); }, 1000);
}
ELEMENTS.BUTTON.addEventListener('click', setTimer);
