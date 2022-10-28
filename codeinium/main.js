import { intervalToDuration } from 'date-fns'

const ELEMENTS = {
    INPUT: document.querySelector('#date'),
    BUTTON: document.querySelector('.button'),
    NEWDATE: document.querySelector('.new-date')
}

function dateCount() {
    const dateNew = intervalToDuration({
        start: new Date(Date.now()),
        end: new Date(ELEMENTS.INPUT.value)
    })
    ELEMENTS.NEWDATE.textContent = `${dateNew.years} год/лет, ${dateNew.days} день/дней, ${dateNew.hours} час/часов`;
}

ELEMENTS.BUTTON.addEventListener('click', dateCount)