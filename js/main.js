const SEARCH_CITY = document.querySelector('#searchCity');
const TABS_BTNS = document.querySelectorAll('.tabs--btn');

const WEATHER_SCREENS_EL = document.querySelector('.weather--screens');
const NOW = 'now';
const DETAILS = 'details';
const FORECAST = 'forecast';
const deg = '&deg';
const FAVORITE_CITIES = 'favoriteCities';
const DATE_FORMATE = { month: 'long', day: 'numeric' };

const TABS = [
  {
    tabName: 'now',
    tabStatus: 'true',
  },
  {
    tabName: 'details',
    tabStatus: 'false',
  },
  {
    tabName: 'forecast',
    tabStatus: 'false',
  },
];

const details = ['temp', 'feels like', 'weather', 'sunrise', 'sunset'];

let locations = [];
let currentCity;

document.addEventListener('DOMContentLoaded', readyPage);
SEARCH_CITY.addEventListener('submit', getSearchValue);
TABS_BTNS.forEach((tab, index) =>
  tab.addEventListener('click', (el) => {
    const currentTab = el.target.dataset.tab;
    changeTabsState(currentTab, TABS);
  })
);

function createElementWithClass(el, elCLassName) {
  const newElement = document.createElement(el);
  newElement.classList.add(elCLassName);
  return newElement;
}

function readyPage() {
  if (localStorage.getItem(FAVORITE_CITIES)) {
    locations = getToLocalStorage(FAVORITE_CITIES);
    currentCity = locations[0].name;

    renderAddedLocations(locations);
  } else {
    localStorage.setItem(FAVORITE_CITIES, JSON.stringify(locations));
  }
  renderAll();
}

function saveToLocalStorage(cities) {
  localStorage.setItem('favoriteCities', JSON.stringify(cities));
}

function getToLocalStorage(cities) {
  let obj = localStorage.getItem(cities);
  return JSON.parse(obj);
}

function checkLocalStorage() {
  return Object.keys(getToLocalStorage('favoriteCities')).length;
}

function disableTabs() {
  TABS_BTNS.forEach((tab, index) => {
    tab.classList.remove('tabs--active');
    tab.setAttribute('disabled', 'disable');
  });
}

function enableTabs() {
  TABS_BTNS.forEach((tab) => tab.removeAttribute('disabled'));
}

function changeTabsState(currenTab, tabs) {
  tabs.forEach((tab) => {
    if (tab.tabName === currenTab) {
      tab.tabStatus = true;
      changeTabsClass(tab);
      toggleScreen(currenTab, currentCity);
    }
  });
}

function changeTabsClass(tabObj) {
  TABS_BTNS.forEach((tabBtn) => {
    if (tabBtn.classList.contains('tabs--active')) {
      tabBtn.classList.remove('tabs--active');
    }
    if (tabBtn.dataset.tab === tabObj.tabName) {
      tabBtn.classList.add('tabs--active');
    }
  });
}

function getSearchValue(event) {
  event.preventDefault();
  let searchField = document.querySelector('#searchField');
  let city = searchField.value;
  currentCity = city;
  checkText(city);
  renderAll();
}

function checkText(text) {
  if (text.length === 0 || text === 'undefined') {
    alert('Введите город!');
  } else {
    toggleScreen(NOW, text);
  }
}

async function fetchCity(city, weatherCollection) {
  const serverUrl = 'http://api.openweathermap.org/data/2.5/';
  const cityName = city;
  const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

  let url;
  if (weatherCollection === FORECAST) {
    url = `${serverUrl}/forecast/?q=${cityName}&appid=${apiKey}&units=metric`;
  } else if (weatherCollection === NOW) {
    url = `${serverUrl}weather/?q=${cityName}&appid=${apiKey}&units=metric`;
  }

  let response = await fetch(url);
  if (response.status == 200) {
    let json = await response.json();
    return json;
  }
}

function clearWeatherScreens() {
  WEATHER_SCREENS_EL.innerHTML = null;
}

function renderNowScreen(result) {
  clearWeatherScreens();
  const nowEl = createElementWithClass('div', 'weather--now');
  const temperatureEl = createElementWithClass('div', 'now--temperature');
  const iconEl = createElementWithClass('div', 'now--icon');
  const nameCity = createElementWithClass('div', 'now-city');
  const nowBtn = createElementWithClass('button', 'now-btn');
  const nowLocation = createElementWithClass('div', 'now--location');
  WEATHER_SCREENS_EL.append(nowEl);
  let temperature = Math.ceil(result.main.temp);
  nameCity.textContent = result.name;
  temperatureEl.innerHTML = `${temperature} ${deg}`;
  iconEl.style.backgroundImage = `url('http://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png')`;
  nowEl.append(temperatureEl);
  nowEl.append(iconEl);
  nowLocation.append(nameCity);
  nowLocation.append(nowBtn);
  nowEl.append(nowLocation);
  nowBtn.addEventListener('click', () => addFavoriteCity(result, locations));
}
function detailsGetTime(time) {
  let timeInMs = time * 1000;
  let timeInHours =
    new Date(timeInMs).getHours() < 10
      ? '0' + new Date(timeInMs).getHours()
      : new Date(timeInMs).getHours();
  let timeInMinutes =
    new Date(timeInMs).getMinutes() < 10
      ? '0' + new Date(timeInMs).getMinutes()
      : new Date(timeInMs).getMinutes();
  let result = `${timeInHours}:${timeInMinutes}`;
  return result;
}

function renderDetailsScreen(result) {
  clearWeatherScreens();
  let weather = { weather: result.weather[0].main };
  let sys = {
    sunset: detailsGetTime(result.sys.sunset),
    sunrise: detailsGetTime(result.sys.sunrise),
  };
  let main = {
    temp: `${Math.ceil(result.main.temp)} ${deg}`,
    'feels like': `${Math.ceil(result.main.feels_like)} ${deg}`,
  };
  let newObj = { ...main, ...weather, ...sys };

  const weatherDetailsEl = createElementWithClass('div', 'weather--details');
  const detailsListEl = createElementWithClass('ul', 'details--list');
  const forecastHeader = createElementWithClass('h3', 'location-header');
  weatherDetailsEl.append(detailsListEl);
  weatherDetailsEl.prepend(forecastHeader);
  forecastHeader.append(result.name);

  WEATHER_SCREENS_EL.append(weatherDetailsEl);

  details.forEach((key, index) => {
    let detailsItemEl = createElementWithClass('li', 'details--item');
    detailsItemEl.innerHTML = `${key[0].toUpperCase() + key.substring(1)}: ${
      newObj[key]
    }`;
    detailsListEl.append(detailsItemEl);
  });
}

function renderForecastScreen(result) {
  clearWeatherScreens();
  const weatherForecastEl = createElementWithClass('div', 'weather--forecast');
  const forecastCardsEl = createElementWithClass('div', 'forecast--cards');
  WEATHER_SCREENS_EL.append(weatherForecastEl);
  weatherForecastEl.append(forecastCardsEl);
  const forecastHeader = createElementWithClass('h3', 'location-header');
  forecastHeader.innerHTML = result.city.name;

  weatherForecastEl.prepend(forecastHeader);

  console.log(`Hello from ${FORECAST}`);
  let forecastList = result.list;

  forecastList.forEach((forecast) => {
    const card = createElementWithClass('div', 'forecast--card');
    const dateBlockEl = createElementWithClass('div', 'forecast--dateblock');
    const weatherBlockEl = createElementWithClass(
      'div',
      'forecast--weatherblock'
    );
    const temperatureBoxEL = createElementWithClass(
      'div',
      'forecast--temperaturebox'
    );
    const weatherBoxEL = createElementWithClass('div', 'forecast--weatherbox');
    const dateEl = createElementWithClass('div', 'forecast--date');
    const timeeEl = createElementWithClass('div', 'forecast--date');
    const tempEl = createElementWithClass('div', 'forecast--tempereture');
    const tempFeelsLikeEl = createElementWithClass(
      'div',
      'forecast--tempereture'
    );
    const forecastWeatherEl = createElementWithClass(
      'div',
      'forecast--weather'
    );
    const forecastIconEl = createElementWithClass('div', 'forecast--icon');
    const currentDayRaw = new Date(forecast.dt_txt);
    const currentDay = currentDayRaw.toLocaleString('en', DATE_FORMATE);
    let currentHour =
      currentDayRaw.getHours() < 10
        ? '0' + currentDayRaw.getHours()
        : currentDayRaw.getHours();
    let currentMinutes =
      currentDayRaw.getMinutes() < 10
        ? '0' + currentDayRaw.getMinutes()
        : currentDayRaw.getMinutes();
    forecastCardsEl.append(card);
    card.append(dateBlockEl);
    card.append(weatherBlockEl);
    dateBlockEl.append(dateEl);
    dateBlockEl.append(timeeEl);
    weatherBlockEl.append(temperatureBoxEL);
    weatherBlockEl.append(weatherBoxEL);
    dateEl.append(currentDay);
    timeeEl.append(`${currentHour}:${currentMinutes}`);
    temperatureBoxEL.append(tempEl);
    temperatureBoxEL.append(tempFeelsLikeEl);
    tempEl.innerHTML = `Temperature: ${Math.ceil(forecast.main.temp)}${deg}`;
    tempFeelsLikeEl.innerHTML = `Feels like: ${Math.ceil(
      forecast.main.feels_like
    )}${deg}`;
    weatherBoxEL.append(forecastWeatherEl);
    weatherBoxEL.append(forecastIconEl);
    forecastWeatherEl.innerHTML = forecast.weather[0].main;
    forecastIconEl.style.backgroundImage = `url('http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png')`;
  });
}

function renderAll() {
  let state = checkLocalStorage();

  if (state || currentCity) {
    enableTabs();
    changeTabsState(NOW, TABS);
  } else {
    TABS.forEach((key, index) => {
      key.tabStatus = false;
    });
    disableTabs();
  }
}

function toggleScreen(screen, city) {
  switch (screen) {
    case NOW:
      fetchCity(city, NOW).then((result) => renderNowScreen(result));
      break;
    case DETAILS:
      fetchCity(city, NOW).then((result) => renderDetailsScreen(result));
      break;
    case FORECAST:
      fetchCity(city, FORECAST).then((result) => renderForecastScreen(result));
      break;
  }
}

function deleteFavoriteCity(city, arr) {
  let newLocations = arr.filter((elem) => {
    return elem.id !== city.id;
  });

  saveToLocalStorage(newLocations);
  locations = getToLocalStorage('favoriteCities');

  renderAddedLocations(locations);
}

function addFavoriteCity(city, locations) {
  let favoriteCity = locations.find((item) => item.id === city.id);

  if (!favoriteCity) {
    locations.push({
      name: city.name,
      id: city.id,
    });
    currentCity = city.name;
  }
  saveToLocalStorage(locations);
  renderAddedLocations(getToLocalStorage('favoriteCities'));
}

function getFavoriteCity(cityElem) {
  let city = cityElem.target.innerHTML;
  currentCity = city;

  changeTabsState(NOW, TABS);
}

// function kelvinToCelsius(kelvin) {
//   return Math.ceil(kelvin - 273, 15);
// }

// function createElementWithId(el, elId) {
//   const newElement = document.createElement(el);
//   newElement.setAttribute("id", elId);
//   return newElement;
// }

function renderAddedLocations(list) {
  const locationslist = document.querySelector('#locationslist');
  locationslist.innerHTML = '';
  list.forEach((element) => {
    let listEl = createElementWithClass('li', 'locations--item');
    let listElText = createElementWithClass('span', 'locations--text');
    let listElBtn = createElementWithClass('button', 'locations-btn');
    listElText.innerHTML = element.name;
    listEl.append(listElText, listElBtn);
    listEl.dataset.id = element.id;
    listElText.addEventListener('click', (el) => getFavoriteCity(el));
    listElBtn.addEventListener('click', () =>
      deleteFavoriteCity(element, locations)
    );
    locationslist.append(listEl);
  });
}
