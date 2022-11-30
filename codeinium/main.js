import { intervalToDuration, formatDuration, milliseconds } from 'date-fns'

const ELEMENTS = {
    INPUT: document.querySelector('#date'),
    BUTTON: document.querySelector('.button'),
    NEWDATE: document.querySelector('.new-date')
}

function dateCountdown(timerId) {
    const startDate = new Date(Date.now());
    const endDate = new Date(ELEMENTS.INPUT.value);

    const dateNew = intervalToDuration({
        start: startDate,
        end: endDate,
    }) 
    
    const monthToDays = Math.floor(dateNew?.months * 30.4167);
    ELEMENTS.NEWDATE.textContent = `
        ${dateNew?.years} years, 
        ${dateNew?.days + monthToDays} days, 
        ${dateNew?.hours} hours, 
        ${dateNew?.minutes} minutes,              
        ${dateNew?.seconds} seconds
    `; //bonus: minites, seconds
    
}

function setTimer() {
    const timerId = setInterval(() => dateCountdown(timerId), 1000) 
}

ELEMENTS.BUTTON.addEventListener('click', setTimer)