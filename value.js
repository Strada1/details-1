export const ELEMENTS = {
  INPUT: document.querySelector('.search__input'),
  BTN: document.querySelector('.search__btn'),
  TEMPERATURE: document.querySelector('.now__temperature'),
  ICON_NOW: document.querySelector('.now__icon-img'),
  CITY_NOW: document.querySelector('.now__city'),
  DELETE_LOCATION: document.querySelectorAll('.locations__delete'),
  ADD_LOCATION: document.querySelector('.now__heart'),
  LIST_LOCATION: document.querySelector('.list'),
  NOW_CITY_NAME: document.querySelector('.now__city-name'),
  LIST_CITY: document.querySelectorAll('.list-item'),
  BODY: document.body,
  DETAILS_CITY: document.querySelector('.details__city'),
  DETAILS_TEMPERATURE: document.querySelector('#details__temperature'),
  DETAILS_FEELS_LIKE: document.querySelector('#details__feels-like'),
  DETAILS_WEATHER: document.querySelector('#details__feels-weather'),
  DETAILS_SUNRISE: document.querySelector('#details__sunrise'),
  DETAILS_SUNSET: document.querySelector('#details__sunset'),
  FORECAST_CITY: document.querySelector('.forecast__city'),
  FORECAST_LIST: document.querySelector('.forecast__list'),
};
export const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
export const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
export const urlForecast = 'http://api.openweathermap.org/data/2.5/forecast';
export const TYPE_FORMAT = {
  DATE: 'd MMMM',
  HOURS: 'HH:mm',
};
export const NEW_ELEMENTS = {
  DIV: 'div',
  SPAN: 'span',
  TEMP: '°',
  LI: 'li',
  P: 'p',
  BTN: 'button',
};
export const CLASS_ELEMENT = {
  FORECAST_ITEM: 'forecast__item',
  FORECAST_TIME: 'forecast__time',
  FORECAST_WEATHER: 'forecast__weather',
  FORECAST_TEMPERATURE: 'forecast__temperature',
  FORECAST_ICON: 'forecast__icon',
  LIST_ITEM: 'list-item',
  LIST_ITEM_CITY: 'list-item-city',
  LOCATION_DELETE: 'locations__delete',
};
