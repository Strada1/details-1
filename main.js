import { parseISO, intervalToDuration, getDayOfYear } from 'date-fns';
import { ELEMENTS, nowDate } from './value.js';

ELEMENTS.FORM.onsubmit = function (event) {
  event.preventDefault();
  getIntervalToDuration(parseISO(ELEMENTS.INPUT.value));
};

function getIntervalToDuration(endDate) {
  const time = setInterval(getIntervalToDuration, 1000);
  const intervalDuration = intervalToDuration({
    start: nowDate,
    end: endDate,
  });
  const intervalTime = endDate - nowDate;
  checkInterval(intervalDuration, intervalTime, time, endDate);
}

function checkInterval(intervalDuration, intervalTime, time, endDate) {
  if (intervalTime >= 0) {
    const days = getDayOfYear(endDate);
    changeTimer(intervalDuration.years, ELEMENTS.YEARS);
    changeTimer(days, ELEMENTS.DAYS);
    changeTimer(intervalDuration.hours, ELEMENTS.WATCH);
    return;
  }
  clearInterval(time);
}

function changeTimer(date, element) {
  element.textContent = date;
}
