import { differenceInHours, differenceInCalendarDays, differenceInCalendarMonths, differenceInCalendarYears, endOfDay, } from 'date-fns';

const ELEMENTS = {
  form: document.querySelector('.field'),
  input: document.querySelector('.field__input'),
  submit: document.querySelector('.field__button'),
  output: document.querySelector('.output'),
};

function getDate() {
  const date = ELEMENTS.input.value;
  ELEMENTS.input.value = '';
  changeDate(date);
}

function changeDate(date) {
  const hours = (differenceInHours(endOfDay(new Date()), new Date()));

  let days = (differenceInCalendarDays(new Date(date), new Date())) - 1;

  const years = differenceInCalendarYears(new Date(date), new Date());

  if (years) {
    days = (differenceInCalendarDays(new Date(date), new Date())) - (365 * years) - 1;
  }

  ELEMENTS.output.textContent = `Left: ${years} years, ${days} дней, ${hours} часов`;
}

ELEMENTS.form.addEventListener('submit', (e) => {
  e.preventDefault();
  getDate()
});

