import { TIMER, COUNTDOWN } from './UI';

const internals = {
  main: 0,
};

function renderCountdown(difference) {
  for (const keys in difference) {
    if (difference[keys] < 10) {
      difference[keys] = `0${difference[keys]}`;
    }
  }
  COUNTDOWN.DAY.textContent = difference.days;
  COUNTDOWN.HOURS.textContent = difference.hours;
  COUNTDOWN.MINUTES.textContent = difference.minutes;
  COUNTDOWN.SECONDS.textContent = difference.seconds;
}

function getDifferenceTime(futureDate) {
  const difference = futureDate - new Date();
  if (difference < 0) {
    clearInterval(internals.main);
    renderCountdown({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  }
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  renderCountdown({
    days,
    hours,
    minutes,
    seconds,
  });
}

function setValueDate() {
  clearInterval(internals.main);
  const futureDate = new Date(TIMER.DATE.value);
  getDifferenceTime(futureDate);
  internals.main = setInterval(getDifferenceTime, 1000, futureDate);
}

TIMER.START.addEventListener('click', () => setValueDate());
TIMER.STOP.addEventListener('click', () => clearInterval(internals.main));
