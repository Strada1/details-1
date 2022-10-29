import {
    formatDuration, intervalToDuration
  } from 'date-fns';
import {ELEMENT} from './view';

ELEMENT.formDate.addEventListener('submit', (event) => handlerCheckDate(event));

function handlerCheckDate(event) {
  event.preventDefault();
  const currentTime = new Date();
  const timeWeIntresting = ELEMENT.fromDate.value;
  if (!timeWeIntresting) {
    return alert('Enter date, please!');
  }
  ELEMENT.textInform.classList.add('active');
  ELEMENT.dateCountDown.classList.add('active');
  ELEMENT.btnStart.setAttribute("disabled", "disabled");
  if (currentTime > new Date(timeWeIntresting)) {
    ELEMENT.textInform.textContent = 'From this date has passed';
  } else {
    ELEMENT.textInform.textContent = 'From this date to the future date';
  }
  let timerId = setInterval(getCurrentTime, 1000, timeWeIntresting);
  setTimeout(() => {
    ELEMENT.btnStart.removeAttribute("disabled", "disabled");
    ELEMENT.dateCountDown.classList.remove('active');
    ELEMENT.dateCountDown.textContent = '';
    ELEMENT.textInform.classList.remove('active');
    ELEMENT.fromDate.value = '';
    clearInterval(timerId); 
  }, 12000);
};

function getCurrentTime(timeWeIntresting) {
  const differentDate = intervalToDuration({
    start: new Date(timeWeIntresting),
    end: new Date(),
  })
  const myDifferentDay = formatDuration(differentDate);
  ELEMENT.dateCountDown.textContent = myDifferentDay;
};
