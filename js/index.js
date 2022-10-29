import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import { formatDuration, intervalToDuration } from 'date-fns';

const chosenDateEl = document.querySelector('#date');
const chosenDateBtn = document.querySelector('#submitDateBtn');
const resultEl = document.querySelector('#result');
console.log(chosenDateEl.value);

chosenDateBtn.addEventListener('click', (e) => startTimerFrom(e));

function getDateFromUser() {
  console.log(chosenDate);

  console.log(interval);
}

function startTimerFrom(e) {
  e.preventDefault();
  const chosenDate = Date.parse(chosenDateEl.value);

  setInterval(function () {
    const interval = intervalToDuration({
      start: new Date(),
      end: chosenDate,
    });
    // let parsTimeStr = '';

    // Object.entries(interval).forEach((key, value) => {
    //   parsTimeStr += ` ${key} `;
    // });
    resultEl.innerHTML = formatDuration(interval);
  }, 1000);
}

function renderLeftTime() {}
