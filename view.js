const form = document.querySelector('.search__form');
const formInput = document.querySelector('.search__form-input');
const nowTabTemperatureValue = document.querySelector('.temperature__value');
const nowTabCityName = document.querySelector('.current__city-nowtab');
const weatherIcon = document.querySelector('.weather__icon');
const likeButton = document.querySelector('.like__button');
const addedLocationsList = document.querySelector('.added__locations-list');

const temperatureValue = document.querySelector('.details__temperature');
const currentCity = document.querySelector('.current__city-detailstab');
const feelsLike = document.querySelector('.details__feelslike');
const weatherData = document.querySelector('.details__weather');
const sunrise = document.querySelector('.details__sunrise');
const sunset = document.querySelector('.details__sunset');

export {form, formInput, nowTabTemperatureValue, nowTabCityName, weatherIcon, likeButton, addedLocationsList, temperatureValue, currentCity, feelsLike, weatherData, sunrise, sunset};