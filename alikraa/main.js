import { intervalToDuration } from "date-fns";

const ELEMENTS = {
    FORM: document.querySelector('form'),
    INPUT: document.querySelector('input'),
    BUTTON: document.querySelector('button'),
    YEARS: document.querySelector('.years'),
    DAYS: document.querySelector('.days'),
    HOURS: document.querySelector('.hours'),
    MINUTES: document.querySelector('.minutes')
}

ELEMENTS.FORM.addEventListener('submit', () => {
    showDateDifference();
    event.preventDefault();
})

function showDateDifference() {
    const counter = setInterval(showDateDifference, 1000);
    const time = convertDays(ELEMENTS.INPUT.value);

    if (time < 0) {
        clearInterval(counter);

        setDate(ELEMENTS.YEARS, 0);
        setDate(ELEMENTS.DAYS, 0);
        setDate(ELEMENTS.HOURS, 0);
        setDate(ELEMENTS.MINUTES, 0);
    } else {
        setDate(ELEMENTS.YEARS, intervalToDuration(new Duration(ELEMENTS.INPUT.value)).years);
        setDate(ELEMENTS.DAYS, convertDays(ELEMENTS.INPUT.value));
        setDate(ELEMENTS.HOURS, intervalToDuration(new Duration(ELEMENTS.INPUT.value)).hours);
        setDate(ELEMENTS.MINUTES, intervalToDuration(new Duration(ELEMENTS.INPUT.value)).minutes);
    }
}

function Duration(date) {
    this.start = new Date();
    this.end = new Date(date);
}

function convertDays(date) {
    const currentDay = new Duration().start;
    const inputDay = new Duration(date).end;

    const differenceOfDays = inputDay - currentDay;
    const amountOfDays = differenceOfDays / 1000 / 60 / 60 / 24;

    return Math.floor(amountOfDays);
}

function setDate(item, data) {
    return item.textContent = data;
}