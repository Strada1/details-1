import { format } from 'date-fns/esm';

window.addEventListener('load', startPage);
// Блок поиска
const search__form = document.querySelector('.search__form');
search__form.addEventListener('submit', takeCity);


function getCookie() {
  return document.cookie.split('; ').reduce((acc, item) => {
    const [name, value] = item.split('=')

    return { ...acc, [name]: value }
  }, {})
}
const cookie = getCookie();

let setCities = localStorage.getItem('CitiesSet');
setCities = JSON.parse(setCities);
setCities = new Set(setCities);
console.log(setCities);
console.log(typeof setCities);

function startPage() {
  createRightBlock();
  quickStart();
  document.querySelector('.item-plus').click();
}

function takeCity(event) {
  const search__input = document.querySelector('.search__input');
  const cityName = search__input.value;
  const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
  const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

  if (event) {
    event.preventDefault();
  }

  async function a() {
    try {
      const response = await fetch(url);

      if (response.status === 400) {
        throw new EmptyRequestError('Пустой запрос');
      }

      if (response.status === 404) {
        throw new InvalidRequestError('Неккоректный запрос');
      }

      const result = await response.json();
      render(result);
      document.cookie = `lastCity = ${cityName}; max-age = 3600`;
    } catch (error) {
      alert(error.message);
    }
  }
  a();
}

function render(result) {
  createFirstBlock(result);
  createSecondBlock(result);
  createRightBlock(result);
}

function createFirstBlock(result) {
  const cityNow = document.querySelector('.block__item-city');
  const tempNow = document.querySelector('.block__item-temp');
  const weatherImgNow = document.querySelector('.block__item-weather-img');
  const likeNow = document.querySelector('.block__item-like');
  cityNow.textContent = result.name;
  console.log('result', result);
  tempNow.textContent = `${Math.round(result.main.temp)}°`;
  weatherImgNow.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png`;
  likeNow.addEventListener('click', likeThisCity);
}

function createSecondBlock(result) {
  const cityDetails = document.querySelector('.selected__city-details');
  const detailTemp = document.querySelector('.detail-temp');
  const detailFeels = document.querySelector('.detail-feels');
  const detailWeather = document.querySelector('.detail-weather');
  const detailSunrise = document.querySelector('.detail-sunrise');
  const detailSunset = document.querySelector('.detail-sunset');
  cityDetails.textContent = result.name;
  detailTemp.textContent = `Temperature: ${(Math.round(result.main.temp))} °`;
  detailFeels.textContent = `Feels like: ${(Math.round(result.main.temp))} °`;
  detailWeather.textContent = `Weather: ${result.weather[0].main}`;
  const sunriseTime = new Date(showLocalSunrise(result));
  const sunsetTime = new Date(showLocalSunset(result));
  detailSunrise.textContent = `Sunrise: ${format((sunriseTime), 'h:mm aaa')}`;
  detailSunset.textContent = `Sunset: ${format((sunsetTime), 'h:mm aaa')}`;
}

// доп со временем
function showLocalSunrise(result) {
  const myOffset = new Date().getTimezoneOffset() * 60 * 1000;
  const offsetReqCity = result.timezone * 1000;
  const sunrise = result.sys.sunrise * 1000;
  const localSunrise = sunrise + myOffset + offsetReqCity;
  return localSunrise;
}
function showLocalSunset(result) {
  const myOffset = new Date().getTimezoneOffset() * 60 * 1000;
  const offsetReqCity = result.timezone * 1000;
  const sunset = result.sys.sunset * 1000;
  const showLocalSunset = sunset + myOffset + offsetReqCity;
  return showLocalSunset;
}

function createRightBlock() {
  clear();
  setCities.forEach((elem) => {
    createCityElement(elem);
  });
}

function likeThisCity() {
  const cityNow = document.querySelector('.block__item-city');
  setCities.add(cityNow.textContent);
  createRightBlock();
  localStorage.setItem('CitiesSet', JSON.stringify(Array.from(setCities)));
}

// -------------- Побочные функции
let createCityElement = function (item) {
  const likedArea = document.querySelector('.liked__locations');
  const miniBlockCity = document.createElement('div');
  miniBlockCity.classList.add('added__list');
  const selectedCity = document.createElement('p');
  selectedCity.classList.add('added__list__item');
  selectedCity.textContent = item;
  selectedCity.addEventListener('click', quickRequest(item));
  const selectedCityButton = document.createElement('button');
  selectedCityButton.classList.add('added__list__button');
  selectedCityButton.addEventListener('click', quickRemove);
  selectedCityButton.innerHTML = '&times;';
  miniBlockCity.append(selectedCity, selectedCityButton);
  likedArea.append(miniBlockCity);
};

let quickRequest = (text) => {
  const innerText = text;
  return function () {
    const search__input = document.querySelector('.search__input');
    // let target = event.target;
    search__input.value = innerText;
    takeCity();
  };
};

let quickRemove = function () {
  let { target } = event;
  target = target.previousSibling.textContent;
  setCities.delete(target);
  createRightBlock();
  localStorage.setItem('CitiesSet', JSON.stringify(Array.from(setCities)));
};

function quickStart() {
  const cityName = cookie.lastCity;
  const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
  const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      render(result);
      document.cookie = `lastCity = ${cityName}; max-age = 3600`;
    })
    .catch((err) => err);
}

let clear = function () {
  const liked__locations = document.querySelector('.liked__locations');
  while (liked__locations.firstChild) {
    liked__locations.removeChild(liked__locations.firstChild);
  }
};

// Ошибки
class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class EmptyRequestError extends MyError {
  constructor(message) {
    super(message);
  }
}
class InvalidRequestError extends MyError {
  constructor(message) {
    super(message);
  }
}



/* Рекурсия
function checkChildren(elem, sum, deep, result) {
    const tab = Array(deep).fill('--').join();
    let deep2 = deep+1;
    let sum2 = sum+1;
    let result2 = result;
    // if (elem.children.length !== 0) {
    // result2 = result+1;
    // }
    console.log(tab, elem);
    console.log(tab, result2);
   if(elem.children.length !== 0) {
    result2 +=1;
    const childrens = elem.children;
    for (let child of childrens) {
        // sum2 = checkChildren(child, sum2, deep2, result2);

        const arr = checkChildren(child, sum2, deep2, result2);
        sum2 = arr[0];
        result2 = arr[1];
    }
   }
   return [sum2, result2];
};
console.log("result:", checkChildren(document.body, 0, 0, 0));
const finishResult = checkChildren(document.body, 0, 0, 0);
console.log((finishResult[1]/finishResult[0]).toFixed(4)*100+'%')
*/
