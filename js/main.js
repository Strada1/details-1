import {
    formatDuration, intervalToDuration
  } from 'date-fns';

const formDate = document.querySelector('.form-date');
const fromDate = document.querySelector('.from-date');
const dateCountDown = document.querySelector('.date-count-down');

formDate.addEventListener('submit', (event) => handlerCheckDate(event));

function handlerCheckDate(event) {
  event.preventDefault();
  dateCountDown.classList.add('active');
  const timeWeIntresting = fromDate.value;
  let timerId = setInterval(getCurrentTime, 1000, timeWeIntresting);
  setTimeout(() => { clearInterval(timerId); dateCountDown.classList.remove('active');}, 10000);
};

function getCurrentTime(timeWeIntresting) {
  const currentTime = new Date();
  const differentDate = intervalToDuration({
    start: new Date(timeWeIntresting),
    end: currentTime,
  })
  const myDifferentDay = formatDuration(differentDate);
  dateCountDown.textContent = myDifferentDay;
};
