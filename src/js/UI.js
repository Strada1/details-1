import { getConvertDate, getConvertTime, getNowDate } from './hepls';
import { closePopup } from './popup';
import deleteImage from '../image/delete-icon.png';

export const UI = {
  FORM: document.querySelector('.weather__form'),
  FAVORITE_CITIES_LIST: document.querySelector('.favorites__list'),
  POPUP: document.querySelector('.overlay'),
  POPUP_CLOSE: document.querySelector('.popup__close'),
};

export const UI_FORECAST = {
  FORECAST__LIST: document.querySelector('.forecast'),
  FORECAST__CITY_NAME: document.querySelector('.forecast__city'),
};

export const UI_NOW = {
  ADD_FAVORITE_ICON: document.querySelector('.now__add-favorite>img'),
  TEMPERATURE: document.querySelector('.now__temperature'),
  CITY_NAME: document.querySelector('.now__city'),
  IMAGE: document.querySelector('.now__image>img'),
  CURRENT_CITY: document.querySelector('.now__city'),
  DAY: document.querySelector('.now__date-day'),
  TIME: document.querySelector('.now__date-time'),
};

export const UI_DETAILS = {
  CITY_NAME: document.querySelector('.details__city'),
  TEMPERATURE: document.querySelector('.details__temperature>span'),
  FEELS_LIKE: document.querySelector('.details__feels-like>span'),
  WEATHER: document.querySelector('.details__weather>span'),
  SUNRISE: document.querySelector('.details__sunrise>span'),
  SUNSET: document.querySelector('.details__sunset>span'),
};

UI.POPUP_CLOSE.addEventListener('click', () => closePopup(UI.POPUP));

function getImageLink(imageNumber) {
  const SERVER_URL = 'http://openweathermap.org/img/wn/';
  const IMAGE_FORMAT = '@2x.png';
  return `${SERVER_URL}${imageNumber}${IMAGE_FORMAT}`;
}

export function renderNowTab(jsonWeatherCity) {
  UI_NOW.TEMPERATURE.textContent = `${Math.trunc(jsonWeatherCity.main.temp)}°`;
  UI_NOW.CITY_NAME.textContent = jsonWeatherCity.name;
  UI_NOW.IMAGE.src = getImageLink(jsonWeatherCity.weather[0].icon);
  const nowDate = getNowDate();
  const [data, time] = nowDate;
  UI_NOW.DAY.textContent = data;
  UI_NOW.TIME.textContent = time;
}

function renderSeconds() {
  const nowDate = getNowDate();
  const [, time] = nowDate;
  UI_NOW.TIME.textContent = time;
}

setInterval(renderSeconds, 1000);

export function renderDetailsTab(jsonWeatherCity) {
  UI_DETAILS.CITY_NAME.textContent = jsonWeatherCity.name;
  UI_DETAILS.TEMPERATURE.textContent = `${Math.trunc(jsonWeatherCity.main.temp)}°`;
  UI_DETAILS.FEELS_LIKE.textContent = jsonWeatherCity.main.feels_like;
  UI_DETAILS.WEATHER.textContent = jsonWeatherCity.weather[0].main;
  UI_DETAILS.SUNRISE.textContent = getConvertTime(jsonWeatherCity.sys.sunrise);
  UI_DETAILS.SUNSET.textContent = getConvertTime(jsonWeatherCity.sys.sunset);
}

export function addFavoriteCityUI(city, place) {
  const delImage = document.createElement('img');
  delImage.src = deleteImage;
  delImage.alt = 'delete icon';
  delImage.classList.add('favorites__delete');
  const liCity = document.createElement('li');
  const spanCity = document.createElement('span');
  spanCity.classList.add('favorites__item');
  spanCity.textContent = city;
  liCity.append(spanCity);
  liCity.append(delImage);
  place.append(liCity);
}

function getCreateElement(tagName, className, tagContent) {
  const element = document.createElement(tagName);
  if (className) element.classList.add(className);
  if (tagContent) element.textContent = tagContent;
  return element;
}

export function addForecastWeatherUI(data, place) {
  const box = getCreateElement('div', 'forecast__box');

  const top = getCreateElement('div', 'forecast__top');
  box.prepend(top);

  const date = getCreateElement('div', 'forecast__date', getConvertDate(data.dt));
  top.prepend(date);

  const time = getCreateElement('div', 'forecast__time', getConvertTime(data.dt));
  top.append(time);

  const bottom = getCreateElement('div', 'forecast__bottom');
  box.append(bottom);

  const wrapper = getCreateElement('div', 'forecast__wrapper');
  bottom.prepend(wrapper);

  const temperature = getCreateElement('div', 'forecast__temperature', `Temperature: ${Math.trunc(data.main.temp)}°`);
  wrapper.prepend(temperature);

  const feelsLike = getCreateElement('div', 'forecast__feels-like', `Feels like: ${Math.trunc(data.main.feels_like)}°`);
  wrapper.append(feelsLike);

  const wrapperImage = getCreateElement('div', 'forecast__wrapper');
  bottom.append(wrapperImage);

  const imageText = getCreateElement('div', 'forecast__image-text', data.weather[0].main);
  wrapperImage.prepend(imageText);

  const image = getCreateElement('img');
  image.alt = 'rain icon';
  image.src = getImageLink(data.weather[0].icon);
  wrapperImage.append(image);
  place.append(box);
}

export function renderForecastTab(dataWeather) {
  const forecastList = UI_FORECAST.FORECAST__LIST;
  while (forecastList.firstChild) {
    forecastList.firstChild.remove();
  }
  const cityName = document.createElement('div');
  cityName.classList.add('forecast__city');
  cityName.textContent = dataWeather.city.name;
  forecastList.prepend(cityName);
  forecastList.textContent = dataWeather.city.name;
  const stepHours = 8;
  for (let i = 6; i <= 22; i += stepHours) {
    addForecastWeatherUI(dataWeather.list[i], forecastList);
  }
}

export function renderFavoriteCities(array, place = UI.FAVORITE_CITIES_LIST) {
  while (place.firstChild) {
    place.firstChild.remove();
  }
  array.forEach((city) => addFavoriteCityUI(city, place));
}
