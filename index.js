import {
    differenceInCalendarYears, subYears, differenceInCalendarDays, format,
} from 'date-fns';

const inputDataElement = document.getElementById('inputData');
const btnStart = document.getElementById('start');
const dateToElement = document.getElementById('dateTo');

function parseString() {

    const dateNow = new Date();

    const resultCalendarYears = differenceInCalendarYears(
        new Date(inputDataElement.value),
        dateNow,
    );

    const resultDate = subYears(new Date(inputDataElement.value), resultCalendarYears);

    const resultCalendarDays = differenceInCalendarDays(
        resultDate,
        dateNow,
    );

    const hours = 24 - format(dateNow, 'H');

    dateToElement.innerHTML = `До даты: ${resultCalendarYears} лет + ${resultCalendarDays} дней + ${hours} часов`;
}

btnStart.addEventListener('click', parseString);
