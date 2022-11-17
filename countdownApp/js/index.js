import { intervalToDuration } from 'date-fns';

const ELEMENTS = {
    userInput: document.querySelector('.user_input'),
    yearsValue: document.querySelector('.years_value'),
    monthsValue: document.querySelector('.months_value'),
    daysValue: document.querySelector('.days_value'),
    hoursValue: document.querySelector('.hours_value'),
    minutesValue: document.querySelector('.minutes_value'),
    secondsValue: document.querySelector('.seconds_value'),

}

function countDownTime() {
    const dateNow = new Date();
    const dateEnd = new Date(ELEMENTS.userInput.value);
    const timer = setTimeout(countDownTime, 1000);
    const timeDifference = dateEnd - dateNow

    if (timeDifference >= 0) {
        const countDown = intervalToDuration({
            start: new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), dateNow.getHours(), dateNow.getMinutes(), dateNow.getSeconds()),
            end: new Date(dateEnd.getFullYear(), dateEnd.getMonth(), dateEnd.getDate(), dateEnd.getHours(), dateEnd.getMinutes(), dateEnd.getSeconds()),
        })
        ELEMENTS.yearsValue.textContent = countDown.years;
        ELEMENTS.monthsValue.textContent = countDown.months;
        ELEMENTS.daysValue.textContent = countDown.days;
        ELEMENTS.hoursValue.textContent = countDown.hours;
        ELEMENTS.minutesValue.textContent = countDown.minutes;
        ELEMENTS.secondsValue.textContent = countDown.seconds;
    } else {
        console.log('Введите дату которая еще не наступила');
        clearTimeout(timer)
        ELEMENTS.secondsValue.textContent = 0;
    }
}

ELEMENTS.userInput.addEventListener('change', countDownTime)


