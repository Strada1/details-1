import { getCookie, setCookie } from './cookiesFunctions.js';
import { ELEMENTS, SERVER } from './elements.js'
import { createTabOne, createTabTwo, } from './viewFunc.js'
import closeImg from '../images/close.svg';
import { recordToStorage, getInfoStorage } from './LsFunctions.js'

function exampleList(task) {
  for (const i of ELEMENTS.listOfСities) {
    if (i === task) {
      return task;
    }
  }
  return false;
}

function addCity(value) {
  if (value) {
    const url = `${SERVER.SERVER_URL}?q=${value}&appid=${SERVER.API_KEY}&units=metric`;
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
      })/* 
      .catch(() => console.log('Unknown error')); */
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
      ELEMENTS.listOfСities.delete(currentCityEl);
      item.remove();
      recordToStorage([...ELEMENTS.listOfСities], 'Task');
    }
  });

  cityLi.addEventListener('click', () => {
    addCity(currentCityEl);
    setCookie('lastItem', ELEMENTS.currentCity)
  });
  item.append(cityLi);
  item.append(close);
  locationList.append(item);
}

function addFavoriteCity() {
  if (exampleList(ELEMENTS.currentCityElement.textContent) === false) {
    ELEMENTS.listOfСities.add(ELEMENTS.currentCityElement.textContent);
    recordToStorage([...ELEMENTS.listOfСities], 'Task');
    setCookie('lastItem', ELEMENTS.currentCityElement.textContent)
    addFavoriteCityinHtml(ELEMENTS.currentCityElement.textContent);
  } else {
    alert('Такой элемент уже добавлен в избранное');
  }
}

ELEMENTS.changeColorTabs.addEventListener('click', (e) => {
  ELEMENTS.btnCurrent.forEach((item) => {
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
      ELEMENTS.listOfСities.add(item);
    }
    ELEMENTS.listOfСities.forEach((item) => {
      addFavoriteCityinHtml(item);
    });
  }
  addCity(getCookie('lastItem'));
} else {
  addCity('Aktobe');
}

ELEMENTS.FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  addCity(ELEMENTS.cityName.value);
  ELEMENTS.cityName.value = '';
});

ELEMENTS.favoriteBtn.addEventListener('click', addFavoriteCity);
