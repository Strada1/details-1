import { format } from 'date-fns';
import {
  ELEMENTS,
  serverUrl,
  apiKey,
  urlForecast,
  TYPE_FORMAT,
  NEW_ELEMENTS,
  CLASS_ELEMENT,
} from './value.js';

let city = new Set(['Amur', 'Samara', 'Bali']);

class ServerError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

ELEMENTS.BTN.addEventListener('click', function (event) {
  event.preventDefault();

  const cityName = ELEMENTS.INPUT?.value ?? 'Actobe';
  const url = createUrl(cityName);
  checkUrl(url);
  changeForecast(cityName);
});

function createUrl(city) {
  return `${serverUrl}?q=${city}&appid=${apiKey}&units=metric`;
}

async function checkUrl(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new ServerError('data not received from the server');
    }
    const result = await response.json();
    changeDetails(result);
    changeNow(result);
  } catch (err) {
    if (err instanceof ServerError) {
      console.log(err.message);
    } else {
      throw err;
    }
  }
}

function changeNow(result) {
  ELEMENTS.NOW_CITY_NAME.textContent = result.name;
  ELEMENTS.TEMPERATURE.textContent = Math.round(result.main?.temp) + '°';
  const iconCode = result.weather[0]?.icon;
  const urlWeather = ` https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  ELEMENTS.ICON_NOW.src = urlWeather;
}

ELEMENTS.BODY.onload = function () {
  if (localStorage.getItem('cities')) {
    city = new Set(JSON.parse(localStorage.getItem('cities')));
  }
  saveLocalStorageCities();
  getLocalStorageСities();
  getCurrentCity();
};

ELEMENTS.ADD_LOCATION.addEventListener('click', () => addCityArray());

function addCityArray() {
  const nowCity = ELEMENTS.NOW_CITY_NAME?.textContent;
  city.add(nowCity);
  saveLocalStorageCities();
  getLocalStorageСities();
}

function saveLocalStorageCities() {
  localStorage.setItem('cities', JSON.stringify([...city]));
}

function getLocalStorageСities() {
  if (localStorage.getItem('cities')) {
    const cities = JSON.parse(localStorage.getItem('cities'));
    renderLocation(cities, cities.length - 1);
  }
}

function getCurrentCity() {
  const url = createUrl(document.cookie);
  checkUrl(url);
  changeForecast(document.cookie);
}

function renderLocation(cities, index) {
  if (index === 0) return index;

  deletelistItem(document.querySelectorAll('.list-item'));

  const newIndex = renderLocation(cities, index - 1) + 1;
  const city = cities[newIndex];

  const li = createElements(NEW_ELEMENTS.LI, CLASS_ELEMENT.LIST_ITEM);
  ELEMENTS.LIST_LOCATION.prepend(li);

  const p = createElements(NEW_ELEMENTS.P, CLASS_ELEMENT.LIST_ITEM_CITY);
  p.textContent = city;
  li.append(p);

  const btn = createElements(NEW_ELEMENTS.BTN, CLASS_ELEMENT.LOCATION_DELETE);
  btn.textContent = 'X';
  li.append(btn);

  li.addEventListener('click', () => {
    saveCurrentCity(p.textContent);
  });

  btn.addEventListener('click', () => {
    deleteCity(p.textContent, li);
  });

  return newIndex;
}

function createElements(element, classElement) {
  const li = document.createElement(element);
  li.className = classElement;
  return li;
}

function deletelistItem(items) {
  items?.forEach(function (city) {
    city?.remove();
  });
}

function saveCurrentCity(nameCity) {
  const url = createUrl(nameCity);
  checkUrl(url);
  document.cookie = `${nameCity}; max-age=7200`;
  getCurrentCity();
}

function deleteCity(nameCity, li) {
  const deleteCity = new Set(JSON.parse(localStorage.getItem('cities')));
  deleteCity?.delete(nameCity);
  localStorage.setItem('cities', JSON.stringify([...deleteCity]));
  li.remove();
}

function changeDetails(result) {
  ELEMENTS.DETAILS_CITY.textContent = result.name;
  changeTemperature(ELEMENTS.DETAILS_TEMPERATURE, 'Temperature: ', result.main?.temp);
  changeTemperature(ELEMENTS.DETAILS_FEELS_LIKE, 'Feels like: ', result.main?.feels_like);
  ELEMENTS.DETAILS_WEATHER.textContent = 'Weather: ' + result.weather[0]?.main;
  changeSunriseSunset(result.sys?.sunrise, 'Sunrise: ', ELEMENTS.DETAILS_SUNRISE);
  changeSunriseSunset(result.sys?.sunset, 'Sunset: ', ELEMENTS.DETAILS_SUNSET);
}

function changeTemperature(elementTemperature, textTemperature, resultTemp) {
  elementTemperature.textContent = textTemperature + Math.round(resultTemp) + NEW_ELEMENTS.TEMP;
}

function changeSunriseSunset(time, timeOfDay, elementsTimeOfDay) {
  const resultTime = format(new Date(time * 1000), TYPE_FORMAT.HOURS);
  elementsTimeOfDay.textContent = timeOfDay + resultTime;
}

async function changeForecast(cityName) {
  deletelistItem(document.querySelectorAll('.forecast__item'));
  const serverForecast = `${urlForecast}?q=${cityName}&cnt=3&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(serverForecast);

    if (!response.ok) {
      throw new ServerError('data not received from the server');
    }

    const result = await response.json();
    ELEMENTS.FORECAST_CITY.textContent = result.city?.name;
    result.list?.map((itemList) => setForecastItem(itemList));
  } catch (err) {
    if (err instanceof ServerError) {
      console.log(err.message);
    } else {
      throw err;
    }
  }
}

function setForecastItem(itemList) {
  const nowDate = formatDate(itemList, TYPE_FORMAT.DATE);
  const resultTime = formatDate(itemList, TYPE_FORMAT.HOURS);

  const div = createElementDiv(CLASS_ELEMENT.FORECAST_ITEM);
  ELEMENTS.FORECAST_LIST.prepend(div);

  const divItem = createElementDiv(CLASS_ELEMENT.FORECAST_TIME);
  div.append(divItem);

  createElementSpan(nowDate, divItem);

  createElementSpan(resultTime, divItem);

  const divWeather = createElementDiv(CLASS_ELEMENT.FORECAST_WEATHER);
  div.append(divWeather);

  const divTemperature = createElementDiv(CLASS_ELEMENT.FORECAST_TEMPERATURE);
  divWeather.append(divTemperature);

  createElementTemperature(itemList.main?.temp, divTemperature);

  createElementTemperature(itemList.main?.feels_like, divTemperature);

  const divIcon = createElementDiv(CLASS_ELEMENT.FORECAST_ICON);
  divWeather.append(divIcon);

  const spanIcon = document.createElement(NEW_ELEMENTS.SPAN);
  spanIcon.textContent = itemList.weather[0]?.main;
  divIcon.append(spanIcon);
}

function formatDate(itemList, typeFormat) {
  return format(new Date(itemList.dt * 1000), typeFormat);
}

function createElementDiv(classElement) {
  const newElement = document.createElement(NEW_ELEMENTS.DIV);
  newElement.className = classElement;
  return newElement;
}

function createElementSpan(nowDate, divItem) {
  const spanDate = document.createElement(NEW_ELEMENTS.SPAN);
  spanDate.textContent = nowDate;
  divItem.append(spanDate);
}

function createElementTemperature(temperature, divTemperature) {
  const spanTemperature = document.createElement(NEW_ELEMENTS.SPAN);
  spanTemperature.textContent = `Temperature: ${Math.round(temperature)}${NEW_ELEMENTS.TEMP}`;
  divTemperature.append(spanTemperature);
}
