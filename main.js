
import { intervalToDuration, format } from "date-fns";

const inputTimer = document.querySelector('.inputTimer')
const pAnswer = document.querySelector('.answer');
const button = document.querySelector('.btn-to-answer');

button.addEventListener('click', timer);
let date1 = {}

function timer() {
if (inputTimer.value == '') {
  pAnswer.textContent = 'дату пж'
  } else {
    date1.input = inputTimer
      let answer = intervalToDuration({
          start: new Date(),
          end: new Date(inputTimer.value)
        })
     date1 = answer
     render();
     setTimeout(timer, 1000)
     }
}


function render() {
pAnswer.textContent = `${date1.years} лет / ${date1.months} месяцев / ${date1.days} дней / ${date1.hours} часов / ${date1.minutes} минут / ${date1.seconds} секунд`
}
