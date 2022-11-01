export {ELEMENT, ERRORS};

const ELEMENT = {
    formDate: document.querySelector('.form-date'),
    fromDate: document.querySelector('.from-date'),
    dateCountDown: document.querySelector('.date-count-down'),
    textInform: document.querySelector('.text-inform'),
    btnStart: document.querySelector('.btn-start'),
    btnClear: document.querySelector('.btn-clear'),
}

const ERRORS = {
    empty_date() {
        const errorText = 'You didn\'t enter any date\n Try it again, please!';
        popUpError(errorText);
        return;
    },
}

function popUpError(errorText) {
    const pop_up = document.querySelector('.pop_up');
    const pop_up_close = document.querySelector('.pop_up_close');
    const error_text = document.querySelector('.error_text');
    pop_up.classList.add('pop-up-active');
    error_text.innerText = errorText;
    setTimeout(() => {pop_up.classList.remove('pop-up-active')}, 3000);
    pop_up_close.addEventListener('click', (event) => {
        event.preventDefault();
        pop_up.classList.remove('pop-up-active');
    });
}