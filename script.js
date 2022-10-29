import { intervalToDuration, formatDuration, differenceInCalendarDays } from 'date-fns';

const ELEMENTS = {
  form: document.querySelector('.field'),
  input: document.querySelector('.field__input'),
  submit: document.querySelector('.field__button'),
  output: document.querySelector('.output'),
};

function startInterval() {
  setInterval(changeDate, 1000)
}

function changeDate() {
  const date = ELEMENTS.input.value;

  let newDate = intervalToDuration({
    start: new Date(),
    end: new Date(date)
  });

  let output = formatDuration(
    {
      years: newDate.years,
      months: newDate.months,
      days: (newDate.years) ? ((differenceInCalendarDays(new Date(date), new Date())) - (365 * newDate.years) - 1) : (differenceInCalendarDays(new Date(date), new Date()) - 1),
      hours: newDate.hours,
      minutes: newDate.minutes,
      seconds: newDate.seconds,
    },
    { format: ['years', 'days', 'hours', 'minutes', 'seconds'] }
  )

  ELEMENTS.output.textContent = output;

};

ELEMENTS.form.addEventListener('submit', (e) => {
  e.preventDefault();
  clearInterval(startInterval)
  startInterval()
});

