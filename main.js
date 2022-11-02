//Подключение модулей
import { format, intervalToDuration, parseISO, formatDuration, getTime } from "date-fns";

//Загрузка стартовой даты и времени
function startPage() {
    const data = new Date();
    const dataText = format(data, 'yyyy-MM-dd HH:mm');
    dateInput.setAttribute('value', dataText);
    dateInput.setAttribute('min', dataText);
    dateInput.setAttribute('max', '9999-12-31T23:59');
}
window.addEventListener('load', startPage);//Обработчик на загрузку страницы

function render() {
    const response__container = document.querySelector('.response__container');
    while (response__container.firstChild) {
        response__container.removeChild(response__container.firstChild)
    }
};
//Поиск elementov NEED FIX!!!
const dateInput = document.querySelector('.date__input');
const dateButton = document.querySelector('.date__button');
dateButton.addEventListener("click", calcTime);


function calcTime() {
    const futureData = parseISO(dateInput.value); //2022-11-02T18:20>Wed Nov 02 2022 18:20:00 GMT+0400 (Персидский залив)
    let intervalId = setInterval(constructor, 1000);
    function constructor() {
    if(new Date() < futureData) {
    render();
    const timeDifference = intervalToDuration({//Разница во времени в формате объекта
        start: new Date(),
        end: futureData
    });
    const container = document.querySelector('.response__container');//Контейнер
    const text = document.createElement('p');//Текст перед самим таймером
    text.classList.add('response__item__first');
    text.textContent = 'Countdown timer:';
    const timer = document.createElement('p');//Таймер
    timer.classList.add('response__item__second');
    timer.textContent = `years: ${timeDifference.years}, months: ${timeDifference.months}, days: ${timeDifference.days},
                         hours: ${timeDifference.hours}, minutes: ${timeDifference.minutes}, seconds: ${timeDifference.seconds}`;
    container.append(text, timer);
    } else {clearInterval(intervalId)}
    }
}
