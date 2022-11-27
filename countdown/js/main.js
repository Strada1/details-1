import { intervalToDuration } from 'date-fns';

const STORE = {};


const formElement = document.querySelector('.countdown__form');
const formSubmitElement = formElement.querySelector('.countdown__button--submit');
const formResetElement = formElement.querySelector('.countdown__button--reset');
const dateFieldElement = formElement.querySelector('.countdown__date');
const yearsContainerElement = document.querySelector('#years');
const daysContainerElement = document.querySelector('#days');
const hoursContainerElement = document.querySelector('#hours');
const minutesContainerElement = document.querySelector('#minutes');
const secondsContainerElement = document.querySelector('#seconds');


const addLeadingZero = (number) => number < 10 ? `0${number}` : number;

const setFieldContent = (field, content) => field.textContent = addLeadingZero(content);


const toggleButtonsDisabled = (buttonElementToDisable, buttonElementToEnable) => {
  buttonElementToDisable.classList.add('countdown__button--disabled');
  buttonElementToDisable.disabled = true;
  buttonElementToEnable.classList.remove('countdown__button--disabled');
  buttonElementToEnable.disabled = false;
};


const outputInterval = ({years, days, hours, minutes, seconds}) => {
  setFieldContent(yearsContainerElement, years);
  setFieldContent(daysContainerElement, days);
  setFieldContent(hoursContainerElement, hours);
  setFieldContent(minutesContainerElement, minutes);
  setFieldContent(secondsContainerElement, seconds);
};


const clearCountdown = () => {
  clearInterval(STORE.interval);
  outputInterval({
    years: 0, days: 0, hours: 0, minutes: 0, seconds: 0
  });
}


const setCountdown = (date) => {
  STORE.interval = setInterval(() => {
    const interval = intervalToDuration(
      {
        start: new Date(date),
        end: new Date()
      }
    );
    outputInterval(interval);
  }, 1000);
};


const onFormReset = (e) => {
  toggleButtonsDisabled(formResetElement, formSubmitElement);
  clearCountdown();
};


const onFormSubmit = (e) => {
  e.preventDefault();
  const dateValue = dateFieldElement.value;

  if (dateValue && (new Date(dateValue).getTime() > Date.now())) {
    setCountdown(dateValue);
    toggleButtonsDisabled(formSubmitElement, formResetElement);
  }
};


formElement.addEventListener('submit', onFormSubmit);
formElement.addEventListener('reset', onFormReset);
