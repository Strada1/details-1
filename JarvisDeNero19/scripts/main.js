import { intervalToDuration } from 'date-fns';
import { dateInput, showToWaitingTime } from '../modules/view/view.js';

const selectForm = document.querySelector('.select-date');

const stopTimer = (objTimes) => {
   const arrValues = Object.values(objTimes);
   return arrValues.reduce((previousValue, currentValue) => previousValue + currentValue);
}

const startTimer = (event) => {
   if (event) {
      event.preventDefault();
   }

   const userDateEnd = `${dateInput.value}T00:00:00`;
   const timerObj = intervalToDuration({
      start: new Date(),
      end: Date.parse(userDateEnd)
   });

   if (stopTimer(timerObj)) {
      setTimeout(startTimer, 1000);
   }

   showToWaitingTime(timerObj);
}

selectForm.addEventListener('submit', startTimer);