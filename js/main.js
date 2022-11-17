const form = document.querySelector('.time-form');
const timeInput = form.querySelector('.time-input');
const answer = form.querySelector('.answer span')

const answerAppearer = time => {
    const arr = [];

    const YEAR = 31536000;
    const MONTH = 2592000;
    const DAY = 86400;
    const HOUR = 3600;

    let y = Math.floor(time/YEAR);
    let yearPack = (y == 0) ? '' : (y == 1) ? y + ' год' : (y>1 && y<5) ? y + ' года' : y + ' лет';
    if (y !== 0) arr.push(yearPack);
    time -= y*YEAR;

    let m = Math.floor(time/MONTH);
    let monthPack = (m == 0) ? '' : (m == 1) ? m + ' месяц' : (m >1 && m <5) ? m + ' месяца' : m + ' месяцев';
    if (m !== 0) arr.push(monthPack);
    time -= m*MONTH;

    let d = Math.floor(time/DAY);
    let dayPack = (d == 0) ? '' : (d == 1) ? d + ' день' : (d >1 && d <5) ? d + ' дня' : d + ' дней';
    if (d !== 0) arr.push(dayPack);
    time -= d *DAY;

    let h = Math.floor(time/HOUR);
    let hourPack = (h == 0) ? '' : (h == 1) ? h + ' час' : (h >1 && h <5) ? h + ' часа' : h + ' часов';
    if (h !== 0) arr.push(hourPack);
    time -= h *HOUR;

    return arr.join(' ');
}

form.onsubmit = () => {
    let target = new Date(timeInput.value);
    let ans = Math.floor((target - Date.now())/1000);
    answer.innerHTML = answerAppearer(ans);
}