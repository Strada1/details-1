import { intervalToDuration, isPast, formatDuration } from "date-fns";

const input = document.querySelector(".date__input");
const btn = document.querySelector(".btn");
let ELEMENTS = {
  day: document.querySelector(".day"),
  months: document.querySelector(".months"),
  years: document.querySelector(".years"),
};
btn.addEventListener("click", dateFunction);
function dateFunction() {
  const date = isPast(new Date(input.value));
  if (date) {
    alert("Введите дату в будущем времени");
    return;
  } else {
    let interval = intervalToDuration({
      start: new Date(input.value),
      end: new Date(),
    });
    console.log(formatDuration(interval));

    elementsDate(interval);
  }
}
function elementsDate(dateObject) {
  console.log(dateObject);
  ELEMENTS.day.textContent = dateObject.days;
  ELEMENTS.months.textContent = dateObject.months;
  ELEMENTS.years.textContent = dateObject.years;
}
