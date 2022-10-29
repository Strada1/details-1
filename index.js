import { ELEMENT_UI } from './view.js'
import {formatDuration, intervalToDuration} from 'date-fns'

ELEMENT_UI.submitFutureDate.addEventListener('submit', getFutureDate)

function getFutureDate() {
  event.preventDefault();
  const enteredDate = ELEMENT_UI. inputDate.value;
  DistanceToNow(enteredDate)
}

function DistanceToNow (enteredDate) {
  let distnaceDate = intervalToDuration({
    start: new Date(),
    end: new Date(enteredDate)
  })
  distnaceDate = formatDuration(distnaceDate);
  console.log(' distnaceDate: ',  distnaceDate);
 
  ELEMENT_UI.result.textContent = "";
  ELEMENT_UI.result.textContent = distnaceDate
}



