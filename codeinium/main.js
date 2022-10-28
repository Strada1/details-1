import { intervalToDuration } from 'date-fns'

const ELEMENTS = {
    INPUT: document.querySelector('#date'),
    BUTTON: document.querySelector('.button'),
    NEWDATE: document.querySelector('.new-date')
}

function dateCount() {
    const dateNow = Date.now();
    const dateFuture = new Date(ELEMENTS.INPUT.value).getTime();

    let date = Math.round((dateFuture - dateNow) / 1000);
    function conter(timestamp) {
        if (timestamp > 31536000) {
            const years = Math.floor(timestamp / 31536000);
            timestamp = timestamp - (31536000 * years);
            const days =  Math.floor(timestamp / 86400);
            timestamp = timestamp - (days * 86400);
            const hours =  Math.floor(timestamp / 3600);
            timestamp = timestamp - (hours * 3600);
            return `${years} год/лет, ${days} день/дней, ${hours} час/часов`
        }
        if(timestamp > 86400) {
            const days =  Math.floor(timestamp / 86400);
            timestamp = timestamp - (days * 86400);
            const hours =  Math.floor(timestamp / 3600);
            timestamp = timestamp - (hours * 3600);
            return `${days} день/дней, ${hours} час/часов`
        }
        if(timestamp > 86400) {
            const hours =  Math.floor(timestamp / 3600);
            timestamp = timestamp - (hours * 3600);
            return `${hours} час/часов`
        }
        
    }
    ELEMENTS.NEWDATE.textContent = conter(date);
}

ELEMENTS.BUTTON.addEventListener('click', dateCount)