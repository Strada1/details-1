import { intervalToDuration, format } from 'date-fns';
const userInput = document.querySelector('.user_input');
const userBtn = document.querySelector('.user_btn');
const yearsValue = document.querySelector('.years_value')
const daysValue = document.querySelector('.days_value')
const hoursValue = document.querySelector('.hours_value')
const minutesValue = document.querySelector('.minutes_value')
const secondsValue = document.querySelector('.seconds_value')

console.log(new Date());



function countDownTime() {
    let dateNow = new Date();
    let dateEnd = new Date(userInput.value);

    const countDown = intervalToDuration({
        start: new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), dateNow.getHours(), dateNow.getMinutes(), dateNow.getSeconds()),
        end: new Date(dateEnd.getFullYear(), dateEnd.getMonth(), dateEnd.getDate(), dateEnd.getHours(), 0, 0)
    })
    yearsValue.textContent = countDown.years;
    daysValue.textContent = countDown.days;
    hoursValue.textContent = countDown.hours;
    minutesValue.textContent = countDown.minutes;
    secondsValue.textContent = countDown.seconds;


    setTimeout(() => { countDownTime() }, 1000)
}

userInput.addEventListener('change', countDownTime)


