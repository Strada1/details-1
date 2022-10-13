import { form, formInput, nowTabTemperatureValue, nowTabCityName, weatherIcon, likeButton, addedLocationsList, temperatureValue, currentCity, feelsLike, weatherData, sunrise, sunset } from './view.js';

const serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

// создаем лист сохраненных городов
let addedLocationsSet = new Set();

document.addEventListener("DOMContentLoaded", () => {
    for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
        }
        addedLocationsSet.add(localStorage[key])
    }
    renderAddedLocationsList(addedLocationsSet);
    console.log(addedLocationsSet);
});

//обработка отправки формы
form.addEventListener('submit', (e) => e.preventDefault())
form.addEventListener('submit', () => {
    getWeatherInfo(formInput.value);
    formInput.value = '';
})

//обработка нажатия кнопки лайк
likeButton.addEventListener('click', () => {
    addCityToFavorites(nowTabCityName.textContent);
    likeButton.childNodes[1].setAttribute('fill', 'red');
})

//выполнение сетевого запроса
function getWeatherInfo(cityName) {
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(weatherInfo => {
            renderNowTab(weatherInfo);
            renderDetailsTab(weatherInfo);
            // console.log(weatherInfo);
        })
}

//рендеринг now tab
function renderNowTab(weatherInfo) {
    likeButton.childNodes[1].setAttribute('fill', 'none');
    nowTabTemperatureValue.textContent = Math.trunc(weatherInfo.main.temp);
    nowTabCityName.textContent = weatherInfo.name;
    weatherIcon.src = `http://openweathermap.org/img/wn/${weatherInfo.weather[0]['icon']}@4x.png`;
    weatherIcon.alt = weatherInfo.weather[0].main;
    if (addedLocationsSet.has(weatherInfo.name)) {
        likeButton.childNodes[1].setAttribute('fill', 'red');
    } else {
        likeButton.childNodes[1].setAttribute('fill', 'none');
    }
}

function addCityToFavorites(cityName) {
    addedLocationsSet.add(cityName);
    renderAddedLocationsList(addedLocationsSet);
}

function renderAddedLocationsList(addedLocationsSet) {
    const currentList = document.querySelectorAll('.list__item');
    currentList.forEach(listItem => listItem.remove());
    addedLocationsSet.forEach((city, cityAgain, set) => {
        addedLocationsList.append(createItem(city));
    });
    let arr = Array.from(addedLocationsSet);
    console.log(arr)
    saveData(arr);
}

function saveData(list) {
    localStorage.clear();
    list.forEach((element, index) => {
        localStorage.setItem(`${index}`, element)
    });
}

function createItem(city) {
    const listItem = document.createElement('li');
    listItem.classList.add('list__item');
    const cityNameHolder = document.createElement('span');
    cityNameHolder.textContent = city;
    cityNameHolder.addEventListener('click', () => {
        const currentList = document.querySelectorAll('.list__item');
        currentList.forEach(listItem => listItem.classList.remove('list__item-selected'));
        listItem.classList.add('list__item-selected');
        getWeatherInfo(city);
    })
    const closeButton = document.createElement('button');
    closeButton.classList.add('close__btn');
    const closeButtonIcon = document.createElement('img');
    closeButtonIcon.src = './image/delete-btn.svg';
    closeButton.addEventListener('click', () => {
        addedLocationsSet.delete(city);
        renderAddedLocationsList(addedLocationsSet);
    })
    closeButton.append(closeButtonIcon);
    listItem.append(cityNameHolder);
    listItem.append(closeButton);
    return listItem;
}

function renderDetailsTab(weatherInfo) {
    temperatureValue.textContent = Math.round(weatherInfo.main.temp);
    currentCity.textContent = weatherInfo.name;
    feelsLike.textContent = Math.round(weatherInfo.main.feels_like);
    weatherData.textContent = weatherInfo.weather[0].main;
    sunrise.textContent = getLocalTime(weatherInfo.sys.sunrise, weatherInfo.timezone);
    sunset.textContent = getLocalTime(weatherInfo.sys.sunset, weatherInfo.timezone);
}

function getLocalTime(time, local) {
    const yourOffset = new Date().getTimezoneOffset() * 60 * 1000;
    time *= 1000;
    time += yourOffset;
    time += local * 1000;
    let localTime = new Date(time);
    localTime = localTime.toLocaleTimeString().slice(0, -3)
    return localTime;
}

