import { intervalToDuration } from 'date-fns'

const ELEMENTS: any = {
    INPUT: document.querySelector('#date'),
    BUTTON: document.querySelector('.button'),
    NEWDATE: document.querySelector('.new-date')
}
const DAYS_MULTIPLIER: number = 30.4167;

function getStartDate(): Date {
    return new Date(Date.now())
}
function getEndDate(): Date {
    return new Date(ELEMENTS.INPUT.value);
}
function dateCountdown(timerId: number): void {
    const dateNew: Duration = intervalToDuration({
        start: getStartDate(), 
        end: getEndDate(),
    }) 
    
    const monthToDays: number = Math.floor(dateNew?.months * DAYS_MULTIPLIER);
    ELEMENTS.NEWDATE.textContent = `
        ${dateNew?.years} years, 
        ${dateNew?.days + monthToDays} days, 
        ${dateNew?.hours} hours, 
        ${dateNew?.minutes} minutes,              
        ${dateNew?.seconds} seconds
    `; //bonus: minites, seconds
}

function setTimer(): void {
    const timerId: number = setInterval(() => dateCountdown(timerId), 1000) 
}

ELEMENTS.BUTTON.addEventListener('click', setTimer)

