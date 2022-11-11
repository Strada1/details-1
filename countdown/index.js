import {formatDuration, intervalToDuration} from 'date-fns';


const ELEMENTS = {
    form: document.querySelector('.field'),
    input: document.querySelector('.field__input'),
    submit: document.querySelector('.field__button'),
    output: document.querySelector('.output'),
};

function changeDate() {
    const date = ELEMENTS.input.value;

    const newDate = intervalToDuration({
        start: new Date(),
        end: new Date(date),
    });

    ELEMENTS.output.textContent = formatDuration(
        {
            years: newDate.years,
            months: newDate.months,
            days: newDate.days,
            hours: newDate.hours,
            minutes: newDate.minutes,
            seconds: newDate.seconds,
        },
        {format: ['years', 'months', 'days', 'hours', 'minutes', 'seconds']},
    );
}

function startInterval() {
    setInterval(changeDate, 1000);
}

ELEMENTS.form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearInterval(startInterval);
    startInterval();
});
