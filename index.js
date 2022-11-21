const ELEMENTS = {
  input: document.querySelector(".input"),
  date: document.querySelector(".date-distance p"),
  buttonResult: document.querySelector(".button"),
};

function dateDistance() {
  const currentDate = Date.parse(ELEMENTS.input.value);
  const totalTime = currentDate - new Date();
  const resultTime = new Date(totalTime);

  return { totalTime, resultTime };
}

function render(time) {
  let timeStroke;
  time === "Invalid Date"
    ? (ELEMENTS.date.textContent = "Вы ввели некорректную дату")
    : (timeStroke = `${time.getFullYear() - 1970} лет
    ${time.getUTCMonth()} мес
    ${time.getUTCDate() - 1} дн
    ${time.getUTCHours()} ч 
    ${time.getUTCMinutes()} мин 
    ${time.getUTCSeconds()} сек`);

  ELEMENTS.date.textContent = timeStroke;
}

function interval() {
  const timerId = setInterval(() => {
    const result = dateDistance();
    if (result.totalTime <= 0) {
      clearInterval(timerId);
    } else {
      console.log(result.resultTime);
      render(result.resultTime);
    }
  }, 1000);
}

ELEMENTS.buttonResult.addEventListener("click", (event) => {
  interval();
  event.preventDefault();
});
