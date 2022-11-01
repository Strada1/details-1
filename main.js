
import { intervalToDuration, format } from "date-fns";

const inputTimer = document.querySelector('.inputTimer')
const answerTime = document.querySelector('.answer');
const button = document.querySelector('.btn-to-answer');

button.addEventListener('click', timer);
const date = {}

function timer() {
if (inputTimer.value == '') {
  answerTime.textContent = 'дату пж'
  } else {
      let answer = intervalToDuration({
          start: new Date(),
          end: new Date(inputTimer.value)
        })
     date.answer = answer
     render();
     setTimeout(timer, 1000)
     }
}


function render() {
answerTime.textContent = `${date.answer.years} лет / ${date.answer.months} месяцев / ${date.answer.days} дней / ${date.answer.hours} часов / ${date.answer.minutes} минут / ${date.answer.seconds} секунд`
}
