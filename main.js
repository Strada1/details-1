const form = document.querySelector('.search__form');
const formInput = document.querySelector('.search__form-input');
const likeButton = document.querySelector('.like__button');
const currentCity = document.querySelector('.current__city-nowtab');
const serverUrl = 'https://api.openweathermap.org/data/2.5';
const apiKey = '609c9b4b7ef12e010193bbaa8935143b';
let addedLocationsMassive = [];

document.addEventListener("DOMContentLoaded", () => {
    for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
        }
        if (JSON.parse(localStorage.getItem(`${key}`)).isSelected === true) getWeatherInfo(JSON.parse(localStorage.getItem(`${key}`)).name);
        addedLocationsMassive = addedLocationsMassive.concat(JSON.parse(localStorage.getItem(`${key}`)));
    }
    renderLocationList(addedLocationsMassive);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeatherInfo(formInput.value);
    getForecastInfo(formInput.value);
    formInput.value = '';
})

likeButton.addEventListener('click', () => {
    if (cityPresenceCheck(currentCity.textContent)) {
        deleteCityFromFavorite(currentCity.textContent);
    } else {
        addCityToFavorite(currentCity.textContent);
    }
})

function getWeatherInfo(cityName) {
    const url = `${serverUrl}/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(weather => {
            renderNowTab(weather);
            renderDetailsTab(weather);
            console.log(weather);
            // getForecastInfo(cityName);   
        })
        .catch(err => console.log(err.message))
}

async function getForecastInfo(cityName) {
    const url = `${serverUrl}/forecast?q=${cityName}&appid=${apiKey}&units=metric`;

    let forecast = await fetch(url);
    forecast = await forecast.json();

    console.log(forecast);
    renderForecastTab(forecast);
    // renderForecastTab(forecast);

}

function renderNowTab(weatherInfo) {
    const temperatureValue = document.querySelector('.temperature__value');
    const weatherIcon = document.querySelector('.weather__icon');
    const likeIcon = likeButton.childNodes[1];
    likeIcon.addEventListener('click', () => {
        likeIcon.setAttribute('fill', 'red');
    })
    if (cityPresenceCheck(weatherInfo.name)) {
        likeIcon.setAttribute('fill', 'red');
    } else {
        likeIcon.setAttribute('fill', 'none');
    }
    temperatureValue.textContent = Math.round(weatherInfo.main.temp);
    currentCity.textContent = weatherInfo.name;
    // formInput.placeholder = weatherInfo.name;
    weatherIcon.src = `http://openweathermap.org/img/wn/${weatherInfo.weather[0]['icon']}@4x.png`;
    weatherIcon.alt = weatherInfo.weather[0].main;
    addedLocationsMassive.forEach(element => {
        (currentCity.textContent === element.name) ? element.isSelected = true : element.isSelected = false;
    });
    saveData(addedLocationsMassive);
    for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
        }
        if (JSON.parse(localStorage.getItem(`${key}`)).isSelected === false) {
            continue;
        }
    }
    renderLocationList(addedLocationsMassive);
}

function renderDetailsTab(weatherInfo) {
    const temperatureValue = document.querySelector('.details__temperature');
    const currentCity = document.querySelector('.current__city-detailstab');
    const feelsLike = document.querySelector('.details__feelslike');
    const weatherData = document.querySelector('.details__weather');
    const sunrise = document.querySelector('.details__sunrise');
    const sunset = document.querySelector('.details__sunset');
    temperatureValue.textContent = Math.round(weatherInfo.main.temp);
    currentCity.textContent = weatherInfo.name;
    feelsLike.textContent = Math.round(weatherInfo.main.feels_like);
    weatherData.textContent = weatherInfo.weather[0].main;
    sunrise.textContent = getLocalTime(weatherInfo.sys.sunrise, weatherInfo.timezone);
    sunset.textContent = getLocalTime(weatherInfo.sys.sunset, weatherInfo.timezone);
}

function renderForecastTab(forecast) {
    const currentCity = document.querySelector('.current__city-forecasttab');
    currentCity.firstChild.textContent = forecast.city.name;
    const forecastIcon = document.querySelector('.forecast__icon');
    forecastIcon.src = 
    `http://openweathermap.org/img/wn/${forecast.list[0].weather[0].icon}@2x.png`;
    const weatherDescr = document.querySelector('.forecast__weather-descr');
    weatherDescr.textContent = forecast.list[0].weather[0].main;
    const forecastTemp = document.querySelector('.details__temperature');
    forecastTemp.textContent =  Math.round(forecast.list[0].main.temp);
    console.log(forecastTemp);
    const times = document.querySelectorAll('.forecast__time');
    // for (let time of times) {
    //     time.textContent = getLocalTime()
    // }
}

function getLocalTime(time, local) {
    const yourOffset = new Date().getTimezoneOffset()*60*1000;
    time *= 1000;
    time += yourOffset;
    time += local*1000;
    let localTime = new Date( time );
    localTime = localTime.toLocaleTimeString().slice(0,-3)
    return localTime;
}

function cityPresenceCheck(cityName) {
    for (let city of addedLocationsMassive) {
        if (city.name === cityName) {
            return true;
        }
    }
    return false;
}

function addCityToFavorite() {
    let newCity = { name: currentCity.textContent, url: `${serverUrl}?q=${currentCity.textContent}&appid=${apiKey}&units=metric`, }
    addedLocationsMassive = addedLocationsMassive.concat(newCity);
    addedLocationsMassive.forEach(element => {
        (currentCity.textContent === element.name) ? element.isSelected = true : element.isSelected = false;
    });
    renderLocationList(addedLocationsMassive);
    saveData(addedLocationsMassive);
}

function deleteCityFromFavorite(cityName) {
    addedLocationsMassive = addedLocationsMassive.filter(item => item.name !== cityName);
    getWeatherInfo(cityName);
    renderLocationList(addedLocationsMassive);
    saveData(addedLocationsMassive);
}

function renderLocationList(list) {
    let citiesForDelete = document.querySelectorAll('.list__item');
    citiesForDelete.forEach((item) => item.remove());
    const addedLocationsList = document.querySelector('.added__locations-list');
    list.forEach(element => {
        if (element.isSelected === true) {
            let element1 = createItem(element);
            element1.classList.remove('.list__item');
            element1.classList.add('list__item-selected'); 
            addedLocationsList.append(element1);
            return;
        }
        addedLocationsList.append(createItem(element));
    });
}

function createItem(element) {
    let listItem = document.createElement('li');
    listItem.classList.remove('.list__item');
    listItem.classList.add('list__item');
    let cityNameHolder = document.createElement('span');
    cityNameHolder.textContent = element.name;
    let closeButton = document.createElement('button');
    closeButton.classList.add('close__btn');
    let closeButtonIcon = document.createElement('img');
    closeButtonIcon.src = './image/delete-btn.svg';
    closeButton.append(closeButtonIcon);
    listItem.append(cityNameHolder);
    listItem.append(closeButton);
    listItem.addEventListener('click', () => {
        getWeatherInfo(element.name);
        getForecastInfo(element.name);
    })
    closeButton.addEventListener('click', () => {
        deleteCityFromFavorite(element.name);
        renderLocationList(addedLocationsMassive);
    })
    return listItem;
}

function saveData(list) {
    localStorage.clear();
    list.forEach((element, index) => {
        localStorage.setItem(`${index}`, JSON.stringify(element))
    });
}