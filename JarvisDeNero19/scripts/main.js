import { intervalToDuration } from 'date-fns';
import { dateInput, showToWaitingTime } from '../modules/view/view.js';

const selectForm = document.querySelector('.select-date');

const stopTimer = (objTimes) => {
   let result = 0;
   for (num of objTimes) {
      result += Number(num);
   }
   return result;
}

const startTimer = (event) => {
   if (event) {
      event.preventDefault();
   }
   if (stopTimer) {
      setTimeout(startTimer);
   }

   const userDateEnd = `${dateInput.value}T00:00:00`;
   const timerObj = intervalToDuration({
      start: new Date(),
      end: Date.parse(userDateEnd)
   });
   showToWaitingTime(timerObj);
}

selectForm.addEventListener('submit', startTimer);