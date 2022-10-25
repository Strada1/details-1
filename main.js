import { format, compareAsc } from 'date-fns';
import { ELEMENTS, serverUrl, apiKey, mounths, urlForecast } from './value.js';

let city = new Set(['Amur', 'Samara', 'Bali']);

class ServerError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

ELEMENTS.BTN.addEventListener('click', function (event) {
  event.preventDefault();

  let cityName = ELEMENTS.INPUT.value;
  let url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
  checkCityName(cityName, url);
});

function checkCityName(cityName, url) {
  if (!cityName || !isNaN(cityName)) {
    alert('Enter a correct city');
    return;
  }
  checkUrl(url);
  changeForecast(cityName);
}

async function checkUrl(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new ServerError('data not received from the server');
    }
    let result = await response.json();
    changeDetails(result);
    changeNow(result);
  } catch (err) {
    if (err instanceof ServerError) {
      alert(err.message);
    } else {
      throw err;
    }
  }
}

function changeNow(result) {
  ELEMENTS.NOW_CITY_NAME.textContent = result.name;
  ELEMENTS.TEMPERATURE.textContent = Math.round(result.main.temp) + '°';
  let iconCode = result.weather[0].icon;
  let urlWeather = ` https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  ELEMENTS.ICON_NOW.src = urlWeather;
}

ELEMENTS.BODY.onload = function () {
  if (localStorage.getItem('cityes')) {
    city = new Set(JSON.parse(localStorage.getItem('cityes')));
  }
  saveLocalStorageCityes();
  getLocalStorageCityes();
  getLocalStorageCurrentCity();
};

ELEMENTS.ADD_LOCATION.addEventListener('click', () => addCityArray());

function addCityArray() {
  let nowCity = ELEMENTS.NOW_CITY_NAME.textContent;
  city.add(nowCity);
  saveLocalStorageCityes();
  getLocalStorageCityes();
}

function saveLocalStorageCityes() {
  localStorage.setItem('cityes', JSON.stringify([...city]));
}

function getLocalStorageCityes() {
  if (localStorage.getItem('cityes')) {
    let cityes = localStorage.getItem('cityes');
    cityes = JSON.parse(cityes);
    renderLocation(cityes, cityes.length - 1);
  }
}

function getLocalStorageCurrentCity() {
  let currentCity = localStorage.getItem('currentCity');
  currentCity = JSON.parse(currentCity);
  let url = `${serverUrl}?q=${currentCity}&appid=${apiKey}&units=metric`;
  checkUrl(url);
  changeForecast(currentCity);
}

function renderLocation(cityes, index) {
  deletelistItem(document.querySelectorAll('.list-item'));

  if (index === 0) return index;

  let newIndex = renderLocation(cityes, index - 1) + 1;
  let city = cityes[newIndex];

  let li = document.createElement('li');
  li.className = 'list-item';
  ELEMENTS.LIST_LOCATION.prepend(li);

  let p = document.createElement('p');
  p.className = 'list-item-city';
  p.textContent = city;
  li.append(p);

  let btn = document.createElement('button');
  btn.className = 'locations__delete';
  btn.textContent = 'X';
  li.append(btn);

  li.addEventListener('click', () => {
    changeCurrentCity(p.textContent);
  });

  btn.addEventListener('click', () => {
    deleteCity(p.textContent, li);
  });

  return newIndex;
}

function deletelistItem(items) {
  items.forEach(function (city) {
    city.remove();
  });
}

function changeCurrentCity(nameCity) {
  let url = `${serverUrl}?q=${nameCity}&appid=${apiKey}&units=metric`;
  checkUrl(url);
  localStorage.setItem('currentCity', JSON.stringify(nameCity));
  getLocalStorageCurrentCity();
}

function deleteCity(nameCity, li) {
  let deleteCity = new Set(JSON.parse(localStorage.getItem('cityes')));
  deleteCity.delete(nameCity);
  localStorage.setItem('cityes', JSON.stringify([...deleteCity]));
  li.remove();
}

function changeDetails(result) {
  ELEMENTS.DETAILS_CITY.textContent = result.name;
  changeTemperature(ELEMENTS.DETAILS_TEMPERATURE, 'Temperature: ', result.main.temp);
  changeTemperature(ELEMENTS.DETAILS_FEELS_LIKE, 'Feels like: ', result.main.feels_like);
  ELEMENTS.DETAILS_WEATHER.textContent = 'Weather: ' + result.weather[0].main;
  changeSunriseSunset(result.sys.sunrise, 'Sunrise: ', ELEMENTS.DETAILS_SUNRISE);
  changeSunriseSunset(result.sys.sunset, 'Sunset: ', ELEMENTS.DETAILS_SUNSET);
}

function changeTemperature(elementTemperature, textTemperature, resultTemp) {
  elementTemperature.textContent = textTemperature + Math.round(resultTemp) + '°';
}

function changeSunriseSunset(time, timeOfDay, elementsTimeOfDay) {
  let resultTime = format(new Date(time * 1000), 'HH:mm');
  elementsTimeOfDay.textContent = timeOfDay + resultTime;
}

async function changeForecast(cityName) {
  deletelistItem(document.querySelectorAll('.forecast__item'));
  let serverForecast = `${urlForecast}?q=${cityName}&cnt=3&appid=${apiKey}&units=metric`;
  try {
    let response = await fetch(serverForecast);

    if (!response.ok) {
      throw new ServerError('data not received from the server');
    }

    let result = await response.json();
    ELEMENTS.FORECAST_CITY.textContent = result.city.name;
    result.list.map((itemList) => setForecastItem(itemList));
  } catch (err) {
    if (err instanceof ServerError) {
      alert(err.message);
    } else {
      throw err;
    }
  }
}

function setForecastItem(itemList) {
  let nowDate = format(new Date(itemList.dt * 1000), 'd MMMM');
  let resultTime = format(new Date(itemList.dt * 1000), 'HH:mm');

  let div = document.createElement('div');
  div.className = 'forecast__item';
  ELEMENTS.FORECAST_LIST.prepend(div);

  let divItem = document.createElement('div');
  divItem.className = 'forecast__time';
  div.append(divItem);

  let spanDate = document.createElement('span');
  spanDate.textContent = nowDate;
  divItem.append(spanDate);

  let spanTime = document.createElement('span');
  spanTime.textContent = resultTime;
  divItem.append(spanTime);

  let divWeather = document.createElement('div');
  divWeather.className = 'forecast__weather';
  div.append(divWeather);

  let divTemperature = document.createElement('div');
  divTemperature.className = 'forecast__temperature';
  divWeather.append(divTemperature);

  let spanTemperature = document.createElement('span');
  spanTemperature.textContent = 'Temperature:' + ' ' + Math.round(itemList.main.temp) + '°';
  divTemperature.append(spanTemperature);

  let spanFeelsLike = document.createElement('span');
  spanFeelsLike.textContent = 'Feels like:' + ' ' + Math.round(itemList.main.feels_like);
  divTemperature.append(spanFeelsLike);

  let divIcon = document.createElement('div');
  divIcon.className = 'forecast__icon';
  divWeather.append(divIcon);

  let spanIcon = document.createElement('span');
  spanIcon.textContent = itemList.weather[0].main;
  divIcon.append(spanIcon);
}
