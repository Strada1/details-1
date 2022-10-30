import {
  formatDuration, intervalToDuration,
} from 'date-fns';
import {ELEMENT, ERRORS} from './view';

ELEMENT.formDate.addEventListener('submit', (event) => handlerCheckDate(event));
ELEMENT.btnClear.addEventListener('click', handlerClear);
let myTimerId;

function handlerCheckDate(event) {
  event.preventDefault();
  const currentTime = new Date();
  const weIntrestingTime = ELEMENT.fromDate.value;
  if (!weIntrestingTime) {
    return ERRORS.empty_date();
  }
  ELEMENT.textInform.classList.add('active');
  ELEMENT.dateCountDown.classList.add('active');
  if (currentTime > new Date(weIntrestingTime)) {
    ELEMENT.textInform.textContent = 'How much time passed from this';
  } else {
    ELEMENT.textInform.textContent = 'From this date to the future date';
  }
  myTimer(weIntrestingTime);
};

function myTimer(weIntrestingTime) {
  eraserTimerId(myTimerId)
  myTimerId = setInterval(getDifferentTime, 1000, weIntrestingTime);
};

function getDifferentTime(weIntrestingTime) {
  const differentDate = intervalToDuration({
    start: new Date(weIntrestingTime),
    end: new Date(),
  })
  const myDifferentDay = formatDuration(differentDate);
  ELEMENT.dateCountDown.textContent = myDifferentDay;
};

function handlerClear() {
  eraserTimerId(myTimerId);
  ELEMENT.dateCountDown.classList.remove('active');
  ELEMENT.textInform.classList.remove('active');
  ELEMENT.textInform.value = '';
  ELEMENT.fromDate.value = '';
};

function eraserTimerId(timerId) {
  if (timerId) {
    clearInterval(timerId);
  }
};