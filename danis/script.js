import { intervalToDuration } from 'date-fns'

const hiddenInput = document.querySelector('.hidden');
const date = document.querySelector('.date');

date.addEventListener('change', function () {
    const afterDate = intervalToDuration({
        start: new Date(),
        end: new Date(date.value)
    });

    if (new Date() < new Date(date.value)) {
        hiddenInput.value = `Осталось ${afterDate.years} лет, ${afterDate.days} дня и ${afterDate.hours} часов`;
    } else { 
        hiddenInput.value = 'Дата прошла уже';
    }

});