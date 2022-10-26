import { getCityNow, RequestError } from "./main.js"
import { format } from "date-fns"

export const ELEMENTS = {
    FORM: document.querySelector('.search__city'),
    INPUT: document.querySelector('.searching'),
    ADDED_CITIES: document.querySelector('.cities'),
    LOCATIONS_CITY_NAME: document.querySelector('.city__name'),
    BODY: document
}

export const TAB_NOW = {
    TEMPERATURE: document.querySelector('.temperature'),
    NAME: document.querySelector('.name'),
    ICON: document.querySelector('.cloud'),
    FAVORITES: document.querySelector('svg'),
    BUTTON: document.querySelectorAll('.tab'),
    LINK: document.querySelectorAll('a')
}

export const TAB_DETAILS = {
    HEADER: document.querySelector('.header__city'),
    TEMPERATURE: document.querySelector('.temper'),
    FEELING: document.querySelector('.feeling'),
    WEATHER: document.querySelector('.weather'),
    SUNRISE: document.querySelector('.sunrise'),
    SUNSET: document.querySelector('.sunset')
}

export const TAB_FORECAST = {
    HEADER: document.querySelector('.header__city-forecast'),
    DATE_CARD1: document.querySelector('.card-1 .date'),
    TIME_CARD1: document.querySelector('.card-1 .time'),
    TEMPERATURE_CARD1: document.querySelector('.card-1 .now-temp'),
    FEELING_CARD1: document.querySelector('.card-1 .feeling-temp'),
    CAPTION_CARD1: document.querySelector('.card-1 .icon__caption'),
    ICON_CARD1: document.querySelector('.card-1 .weather__icon'),

    DATE_CARD2: document.querySelector('.card-2 .date'),
    TIME_CARD2: document.querySelector('.card-2 .time'),
    TEMPERATURE_CARD2: document.querySelector('.card-2 .now-temp'),
    FEELING_CARD2: document.querySelector('.card-2 .feeling-temp'),
    CAPTION_CARD2: document.querySelector('.card-2 .icon__caption'),
    ICON_CARD2: document.querySelector('.card-2 .weather__icon'),

    DATE_CARD3: document.querySelector('.card-3 .date'),
    TIME_CARD3: document.querySelector('.card-3 .time'),
    TEMPERATURE_CARD3: document.querySelector('.card-3 .now-temp'),
    FEELING_CARD3: document.querySelector('.card-3 .feeling-temp'),
    CAPTION_CARD3: document.querySelector('.card-3 .icon__caption'),
    ICON_CARD3: document.querySelector('.card-3 .weather__icon'),

    DATE_CARD4: document.querySelector('.card-4 .date'),
    TIME_CARD4: document.querySelector('.card-4 .time'),
    TEMPERATURE_CARD4: document.querySelector('.card-4 .now-temp'),
    FEELING_CARD4: document.querySelector('.card-4 .feeling-temp'),
    CAPTION_CARD4: document.querySelector('.card-4 .icon__caption'),
    ICON_CARD4: document.querySelector('.card-4 .weather__icon')
}

export const SERVER = {
    SERVER_URL: 'http://api.openweathermap.org/data/2.5/weather',
    FORECAST: 'http://api.openweathermap.org/data/2.5/forecast',
    API_KEY: '3a93792a7ff7223513e2ff98278e394d'
}

export const citiesList = new Set();

export function getCityName() {
    try {
        if (ELEMENTS.INPUT.value.trim() && isNaN(ELEMENTS.INPUT.value)) {
            getCityNow(ELEMENTS.INPUT.value);
            TAB_NOW.FAVORITES.classList.remove('like');
        } else {
            throw new RequestError('введите название города!');
        }
    } catch (error) {
        if (error instanceof RequestError) {
            alert(error.name + ': ' + error.message);
        } else {
            throw error;
        }
    }
    event.preventDefault();
}

export function newCityName(string) {
    let newString = string.split(' ');

    return newString.map(function (word) {
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
}

export function convertTime(time) {
    return format(new Date(time * 1000), 'HH:mm');
}

export function convertDate(date) {
    return format(new Date(date), 'd LLL');
}