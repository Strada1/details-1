import {
  formatDuration, intervalToDuration
} from 'date-fns'
import { ELEMENT, ERRORS } from './view'

ELEMENT.formDate.addEventListener('submit', (event) => handlerCheckDate(event))
ELEMENT.btnClear.addEventListener('click', handlerClear)
let myTimerId

function handlerCheckDate (event) {
  event.preventDefault()
  const inputDate = ELEMENT.fromDate.value
  if (!inputDate) {
    return ERRORS.empty_date()
  }
  renderOutput()
  myTimer(inputDate)
};

function myTimer (inputDate) {
  eraserTimerId(myTimerId)
  myTimerId = setInterval(getDifferentTime, 1000, inputDate)
};

function eraserTimerId (timerId) {
  if (timerId) {
    clearInterval(timerId)
  }
};

function getDifferentTime (inputDate) {
  const differentDate = intervalToDuration({
    start: new Date(inputDate),
    end: new Date()
  })
  let myDifferentDate = formatDuration(differentDate)
  ELEMENT.dateCountDown.textContent = myDifferentDate
  myDifferentDate = ''
};

function handlerClear () {
  eraserTimerId(myTimerId)
  ELEMENT.dateCountDown.classList.remove('active')
  ELEMENT.textInform.classList.remove('active')
  ELEMENT.textInform.value = ''
  ELEMENT.fromDate.value = ''
};

function renderOutput () {
  ELEMENT.textInform.classList.add('active')
  ELEMENT.dateCountDown.classList.add('active')
  const currentTime = new Date()
  const inputDate = ELEMENT.fromDate.value
  if (new Date(inputDate) < currentTime) {
    ELEMENT.textInform.textContent = 'How much time passed from this'
  } else {
    ELEMENT.textInform.textContent = 'From this date to the future date'
  }
}
