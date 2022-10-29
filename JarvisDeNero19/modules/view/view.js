import { add, format } from 'date-fns';

const dateInput = document.querySelector('.select-date__input');
const timerYears = document.querySelector('.timer__years');
const timerMonths = document.querySelector('.timer__months');
const timerDays = document.querySelector('.timer__days');
const timerHours = document.querySelector('.timer__hours');
const timerMinutes = document.querySelector('.timer__minutes');
const timerSeconds = document.querySelector('.timer__seconds');

const setMinValidDateInInput = () => {
   const minDate = add(new Date(), {
      days: 1,
   });
   dateInput.value = format(minDate, 'yyyy-MM-dd');
   dateInput.min = dateInput.value;
};

const showToWaitingTime = (timeObg) => {
   const {
      years,
      months,
      days,
      hours,
      minutes,
      seconds
   } = timeObg

   timerYears.textContent = `Years ${years}`;
   timerMonths.textContent = `Months ${months}`;
   timerDays.textContent = `Days ${days}`;
   timerHours.textContent = `Hours ${hours}`;
   timerMinutes.textContent = `Minutes ${minutes}`;
   timerSeconds.textContent = `Seconds ${seconds}`;
}

document.addEventListener('DOMContentLoaded', setMinValidDateInInput(dateInput));

export { dateInput, showToWaitingTime };