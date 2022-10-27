import { format } from 'date-fns';

import closeImg from '../images/close.svg';

const SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'a6efa68218cab903e4bd5ea3af73853d';
const cityName = document.querySelector('.input_User');
const FORM = document.querySelector('form');
const currentCity = document.querySelectorAll('.name__current_city');
const currentCityElement = document.querySelector('span.name__current_city');
const changeColorTabs = document.querySelector('.tabs__items');
const btnCurrent = document.querySelectorAll('.tab-item');
const ParentImagesCurrentWeather = document.querySelector('.weather_widgets-img');

const weatherWidgetsDegrees = document.querySelector('.weather_widgets-degrees');
const feelsLike = document.querySelectorAll('.feels_like');
const temperatureView = document.querySelector('.temperature_block');
const weatherBlockTabTwo = document.querySelector('.weather_blockTabTwo');
const favoriteBtn = document.querySelector('.favorite_btn');
const sunsetTime = document.querySelector('.sunset_block');
const sunriseTime = document.querySelector('.sunrise_block');
const listOfСities = new Set();

function exampleList(task) {
  for (const i of listOfСities) {
    if (i === task) {
      return task;
    }
  }
  return false;
}

function getInfoStorage(value) {
  if (JSON.parse(localStorage.getItem(value))) {
    const task = JSON.parse(localStorage.getItem(value));
    return task;
  }
}
function recordToStorage(tasks, nameOfTask) {
  const tasksStorage = JSON.stringify(tasks);
  localStorage.setItem(nameOfTask, tasksStorage);
}

function convertTime(value) {
  return format(value, 'kk:mm');
}

function createTabOne(nameOfCity, degrees, iconWeather) {
  currentCity.forEach((itemCity) => {
    itemCity.textContent = nameOfCity;
  });
  const parentImages = Array.from(ParentImagesCurrentWeather.children);
  const imagesIcon = document.createElement('img');
  imagesIcon.src = `https://openweathermap.org/img/wn/${iconWeather}@4x.png`;
  if (parentImages.length) {
    parentImages.forEach((item) => item.remove());
  }
  ParentImagesCurrentWeather.append(imagesIcon);
  weatherWidgetsDegrees.innerHTML = `${Math.round(degrees)}&deg;`;
}

function createTabTwo(
  feelsLikeValue,
  degrees,
  weatherValue,
  sunsetValue,
  sunriseValue,
) {
  temperatureView.innerHTML = `Temperature: ${Math.round(degrees)}&deg;`;
  weatherBlockTabTwo.textContent = `Weather: ${weatherValue}`;
  feelsLike.forEach((item) => {
    item.innerHTML = `Feels like: ${Math.round(feelsLikeValue)}&deg;`;
  });
  sunsetTime.textContent = `Sunset: ${convertTime(sunsetValue)}`;
  sunriseTime.textContent = `Sunrise: ${convertTime(sunriseValue)}`;
}

function addCity(value) {
  if (value) {
    const url = `${SERVER_URL}?q=${value}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        createTabOne(data.name, data.main.temp, data.weather[0].icon);
        createTabTwo(
          data.main.feels_like,
          data.main.temp,
          data.weather[0].main,
          new Date(data.sys.sunset * 1000),
          new Date(data.sys.sunrise * 1000),
        );
        setCookie('lastItem', value, { 'max-age': 3600 })
      })
      .catch(() => console.log('Unknown error'));
  }
}
function addFavoriteCityinHtml(currentCityEl) {
  const locationList = document.querySelector('.location-list');
  const item = document.createElement('li');
  const close = document.createElement('img');
  const cityLi = document.createElement('span');
  cityLi.textContent = currentCityEl;

  close.src = closeImg;
  close.classList.add('close-city');

  close.addEventListener('click', () => {
    const index = exampleList(currentCityEl);
    if (index !== false) {
      listOfСities.delete(currentCityEl);
      item.remove();
      recordToStorage([...listOfСities], 'Task');
    }
  });

  cityLi.addEventListener('click', () => {
    addCity(currentCityEl);
    setCookie('lastItem', currentCity)
  });
  item.append(cityLi);
  item.append(close);
  locationList.append(item);
}

function addFavoriteCity() {
  if (exampleList(currentCityElement.textContent) === false) {
    listOfСities.add(currentCityElement.textContent);
    recordToStorage([...listOfСities], 'Task');
    setCookie('lastItem', currentCityElement.textContent)
    addFavoriteCityinHtml(currentCityElement.textContent);
  } else {
    alert('Такой элемент уже добавлен в избранное');
  }
}

changeColorTabs.addEventListener('click', (e) => {
  btnCurrent.forEach((item) => {
    if (!e.target.classList.contains('tabs__items')) {
      if (item === e.target || item === e.target.parentElement) {
        item.classList.add('active');
        document.querySelector(`.${item.textContent}`).style.display = 'block';
      } else {
        document.querySelector(`.${item.textContent}`).style.display = 'none';
        item.classList.remove('active');
      }
    }
  });
});

if (localStorage.length || document.cookie.length) {
  if (getInfoStorage('Task')) {
    for (const item of getInfoStorage('Task')) {
      listOfСities.add(item);
    }
    listOfСities.forEach((item) => {
      addFavoriteCityinHtml(item);
    });
  }
  addCity(getCookie('lastItem'));
} else {
  addCity('Aktobe');
}

FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  addCity(cityName.value);
  cityName.value = '';
});

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;

    }
  }

  document.cookie = updatedCookie;
}

favoriteBtn.addEventListener('click', addFavoriteCity);
