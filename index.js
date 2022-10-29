import { ELEMENT_UI } from './view.js'
import { format, formatDistanceToNow } from 'date-fns'
import Cookies from 'js-cookie'

ELEMENT_UI.submitFutureDate.addEventListener('submit', getFutureDate)

function getFutureDate() {
  event.preventDefault();
  const enteredDate = ELEMENT_UI. inputDate.value;
  DistanceToNow(enteredDate)
}

function getNowDate() {
  let dateNow = new Date();
  dateNow = format(dateNow, "Y DD HH", { useAdditionalDayOfYearTokens: true })
  return dateNow;
}

function DistanceToNow (enteredDate) {
  const dateNow = getNowDate();
  const distnaceDate = formatDistanceToNow(enteredDate);
  console.log('distnaceDate: ', distnaceDate); 
}


// function timeLeft() {
  
// }