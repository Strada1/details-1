import { parseISO } from "date-fns";
import { intervalToDuration } from "date-fns";

const ELEMENTS = {
  input: document.querySelector(".input"),
  years: document.querySelector(".date-row:nth-child(1) .date p"),
  days: document.querySelector(".date-row:nth-child(2) .date p"),
  hours: document.querySelector(".date-row:nth-child(3) .date p"),
  buttonResult: document.querySelector(".button"),
};

function dateDistance() {
  const time = setInterval(dateDistance, 1000);
  const currentDate = parseISO(ELEMENTS.input.value);

  const duration = intervalToDuration({
    start: new Date(),
    end: currentDate,
  });

  const totalTime = currentDate - new Date();
  const days = Math.floor(totalTime / (1000 * 60 * 60 * 24)) - 365*duration.years;

  if (totalTime >= 0) {

    addTimer(ELEMENTS.years, duration.years);
    addTimer(ELEMENTS.days, days);
    addTimer(ELEMENTS.hours, duration.hours);
    console.log(duration);
  } else {
    clearInterval(time);
  }
}

function addTimer(element, date) {
  element.textContent = date;
}

ELEMENTS.buttonResult.addEventListener("click", (event) => {
  dateDistance();
  event.preventDefault();
});
