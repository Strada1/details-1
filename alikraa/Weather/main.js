import {
    ELEMENTS, TAB_NOW, TAB_DETAILS, TAB_FORECAST,
    SERVER, citiesList, getCityName, newCityName,
    convertTime, convertDate
} from './view.js'

import deleteImg from './img/delete-icon.svg'

ELEMENTS.BODY.addEventListener('DOMContentLoaded', function () {
    location.href = '#now';

    getCitiesData(citiesList);
    getCurrentCityData();
})

ELEMENTS.FORM.addEventListener('submit', getCityName);

export class RequestError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Error';
    }
}

export async function getCityNow(cityName) {
    try {
        const URL = `${SERVER.SERVER_URL}?q=${cityName}&appid=${SERVER.API_KEY}&units=metric`;
        let response = await fetch(URL);

        if (response.ok) {
            let weatherData = await response.json();

            TAB_NOW.TEMPERATURE.textContent = Math.round(weatherData.main.temp) + '°';
            TAB_NOW.NAME.textContent = newCityName(cityName);
            TAB_NOW.ICON.src = `http://openweathermap.org/img/wn/${weatherData.weather[0]['icon']}@4x.png`;

        } else {
            throw new RequestError(`data is not found, ${response.status}`);
        }
    } catch (error) {
        if (error instanceof RequestError) {
            console.log(error.name + ': ' + error.message);
        } else {
            throw error;
        }
    }

    ELEMENTS.INPUT.value = '';
    getCityDetails(cityName);
    getCityForecast(cityName);
}

TAB_NOW.FAVORITES.addEventListener('click', addCityToList);

function addCityToList() {
    try {
        if (!citiesList.has(TAB_NOW.NAME.textContent)) {
            citiesList.add(TAB_NOW.NAME.textContent);
            savedCitiesData(citiesList);
            getCitiesData(citiesList);
            TAB_NOW.FAVORITES.classList.add('like');
        } else {
            throw new RequestError('этот город уже добавлен в избранное!');
        }
    } catch (error) {
        if (error instanceof RequestError) {
            alert(error.name + ': ' + error.message);
        } else {
            throw error;
        }
    }
    render(citiesList);
}

function deleteCityFromList(cityName, item) {
    const removeCity = new Set(JSON.parse(localStorage.getItem('cities')));
    removeCity.delete(cityName);
    citiesList.delete(cityName);
    item.remove();

    savedCitiesData(removeCity);
}

function clearListLocation(citiesOfListLocation) {
    if (!citiesOfListLocation.firstChild) {
        return;
    } else {
        citiesOfListLocation.firstChild.remove();
        clearListLocation(citiesOfListLocation);
    }
}

function render(list) {
    clearListLocation(ELEMENTS.ADDED_CITIES);

    list.forEach(function (item) {
        let cityWrap = document.createElement('div');
        cityWrap.className = 'city__name-wrap';
        ELEMENTS.ADDED_CITIES.prepend(cityWrap);

        let newCity = document.createElement('p');
        newCity.className = 'city__name';
        newCity.textContent = item;
        cityWrap.prepend(newCity);

        newCity.addEventListener('click', function () {
            getCityNow(item);

            savedCitiesData(newCity.textContent);
            getCurrentCityData();
            TAB_NOW.FAVORITES.classList.add('like');
        })

        let deleteButton = document.createElement('button');
        deleteButton.className = 'delete__button';
        cityWrap.append(deleteButton);

        let deleteIcon = document.createElement('img');
        deleteIcon.src = deleteImg;
        deleteIcon.alt = 'Delete';
        deleteButton.prepend(deleteIcon);

        deleteButton.addEventListener('click', function () {
            deleteCityFromList(newCity.textContent, cityWrap);

            TAB_NOW.FAVORITES.classList.remove('like');
        })
    })
}

function savedCitiesData(data) {
    if (data instanceof Set) {
        return localStorage.setItem('cities', JSON.stringify(Array.from(data)));
    } else {
        return localStorage.setItem('currentCity', JSON.stringify(data));
    }
}

function getCitiesData(data) {
    data = JSON.parse(localStorage.getItem('cities'));
    render(data);
}

function getCurrentCityData() {
    const currentCity = JSON.parse(localStorage.getItem('currentCity'));
    getCityNow(currentCity);

    TAB_NOW.FAVORITES.classList.add('like');
}

async function getCityDetails(cityName) {
    try {
        const URL = `${SERVER.SERVER_URL}?q=${cityName}&appid=${SERVER.API_KEY}&units=metric`;
        let response = await fetch(URL);

        if (response.ok) {
            let weatherDetails = await response.json();

            TAB_DETAILS.HEADER.textContent = TAB_NOW.NAME.textContent;
            TAB_DETAILS.TEMPERATURE.textContent = 'Temperature: ' + Math.round(weatherDetails.main.temp) + '°';
            TAB_DETAILS.FEELING.textContent = 'Feels like: ' + Math.round(weatherDetails.main.feels_like) + '°';
            TAB_DETAILS.WEATHER.textContent = 'Weather: ' + weatherDetails.weather[0]['main'];
            TAB_DETAILS.SUNRISE.textContent = 'Sunrise: ' + convertTime(weatherDetails.sys.sunrise);
            TAB_DETAILS.SUNSET.textContent = 'Sunset: ' + convertTime(weatherDetails.sys.sunset);

        } else {
            throw new RequestError(`data is not found, ${response.status}`);
        }
    } catch (error) {
        if (error instanceof RequestError) {
            console.log(error.name + ': ' + error.message);
        } else {
            throw error;
        }
    }
}

async function getCityForecast(cityName) {
    try {
        const URL = `${SERVER.FORECAST}?q=${cityName}&appid=${SERVER.API_KEY}&units=metric`;
        let response = await fetch(URL);

        if (response.ok) {
            let weatherForecast = await response.json();
            TAB_FORECAST.HEADER.textContent = TAB_NOW.NAME.textContent;

            new TemplateForecast(
                TAB_FORECAST.DATE_CARD1, TAB_FORECAST.TIME_CARD1, TAB_FORECAST.TEMPERATURE_CARD1,
                TAB_FORECAST.FEELING_CARD1, TAB_FORECAST.CAPTION_CARD1,
                TAB_FORECAST.ICON_CARD1, weatherForecast.list, 0
            )

            new TemplateForecast(
                TAB_FORECAST.DATE_CARD2, TAB_FORECAST.TIME_CARD2, TAB_FORECAST.TEMPERATURE_CARD2,
                TAB_FORECAST.FEELING_CARD2, TAB_FORECAST.CAPTION_CARD2,
                TAB_FORECAST.ICON_CARD2, weatherForecast.list, 1
            )

            new TemplateForecast(
                TAB_FORECAST.DATE_CARD3, TAB_FORECAST.TIME_CARD3, TAB_FORECAST.TEMPERATURE_CARD3,
                TAB_FORECAST.FEELING_CARD3, TAB_FORECAST.CAPTION_CARD3,
                TAB_FORECAST.ICON_CARD3, weatherForecast.list, 2
            )

            new TemplateForecast(
                TAB_FORECAST.DATE_CARD4, TAB_FORECAST.TIME_CARD4, TAB_FORECAST.TEMPERATURE_CARD4,
                TAB_FORECAST.FEELING_CARD4, TAB_FORECAST.CAPTION_CARD4,
                TAB_FORECAST.ICON_CARD4, weatherForecast.list, 3
            )

        } else {
            throw new RequestError(`data is not found, ${response.status}`);
        }
    } catch (error) {
        if (error instanceof RequestError) {
            console.log(error.name + ': ' + error.message);
        } else {
            throw error;
        }
    }
}

function TemplateForecast(
    date, time, temperatureNow, temperatureFeeling,
    iconCaption, weatherIcon, data, num
) {
    this.date = date;
    this.time = time;
    this.temperatureNow = temperatureNow;
    this.temperatureFeeling = temperatureFeeling;
    this.iconCaption = iconCaption;
    this.weatherIcon = weatherIcon;
    this.data = data;
    this.num = num;

    date.textContent = convertDate(data[num]['dt_txt']);
    time.textContent = convertTime(data[num]['dt']);
    temperatureNow.textContent = 'Temperature: ' + Math.round(data[num]['main']['temp']) + '°';
    temperatureFeeling.textContent = 'Feels like: ' + Math.round(data[num]['main']['feels_like']) + '°';
    iconCaption.textContent = data[num]['weather'][0]['main'];
    weatherIcon.src = `http://openweathermap.org/img/wn/${data[num]['weather'][0]['icon']}@2x.png`;
}

TAB_NOW.BUTTON.forEach(function (elem) {
    elem.addEventListener('click', function () {
        TAB_NOW.BUTTON.forEach(function (elem) {
            elem.classList.remove('active');
        })
        elem.classList.add('active');
    })
})

TAB_NOW.LINK.forEach(function (elem) {
    elem.addEventListener('click', function () {
        TAB_NOW.LINK.forEach(function (elem) {
            elem.classList.remove('link');
        })
        elem.classList.add('link');
    })
})