import { getCurrentCity, setCurrentCity, setFavoriteCities, getFavoriteCities} from "./localstorage.js";
import { ELEMENTS, API, TEMPERATURE_WORDS, MONTHES} from "./items.js";
import { format } from "date-fns";


const favoriteCities = new Set(JSON.parse(getFavoriteCities()));

class NameError extends Error {
    constructor(message) {
        super(message)
        this.name = "NameError"
    }
}

async function weatherResponse(cityName) {
    try {
        if (!cityName) {
            throw new NameError("не введен город");
        }
        const serverUrl = API.SERVERURL + `?q=${cityName}&appid=${API.KEY}&units=metric`
        const responce = await fetch(serverUrl)
        const data1 = await responce.json();
        const forecastUrl = API.FORECAST_URL +`?q=${cityName}&appid=${API.KEY}&units=metric`;
        const response2 = await fetch(forecastUrl);
        const data2 = await response2.json();
        if (data1.cod === '404' && data2.cod === '404') {
            throw new NameError("город не найден");
        }
        //now and details
        ELEMENTS.WEATHERICON.src = API.IMG + `${ data1.weather[0].icon }@2x.png`;
        ELEMENTS.TEMPERATURE.textContent = `${ Number(data1.main.temp).toFixed(0) }°`;
        ELEMENTS.LOCATION.textContent = data1.name;
        ELEMENTS.ADDBUTTON.hidden = false;
        ELEMENTS.ADDBUTTONICON.hidden = false;
        setCurrentCity(data1.name);
        ELEMENTS.DETAILS_LOCATION.textContent = data1.name;
        ELEMENTS.DETAILS_TEMPERATURE.textContent = TEMPERATURE_WORDS.TEMPERATURE + `${ Number(data1.main.temp).toFixed(2) }°`;
        ELEMENTS.DETAILS_FEEL.textContent = TEMPERATURE_WORDS.FEELS_LIKE + `${ Number(data1.main.feels_like).toFixed(2) }°`
        ELEMENTS.DETAILS_WEATHER.textContent = TEMPERATURE_WORDS.WEATHER + `${ data1.weather[0].main }`
        const dateSunrise = format(new Date(data1.sys.sunrise * 1000), 'HH:mm')
        const dateSunset = format(new Date(data1.sys.sunset * 1000), 'HH:mm')
        ELEMENTS.DETAILS_SUNRISE.textContent = TEMPERATURE_WORDS.SUNRISE + `${
            dateSunrise
        }`
        ELEMENTS.DETAILS_SUNSET.textContent = TEMPERATURE_WORDS.SUNSET + `${
            dateSunset
        }`
        //forecast
        ELEMENTS.FORECAST_LOCATION.textContent = data1.name;

        let i = 0;
        function recurtionForecast(i) {
            if (i === ELEMENTS.FORECASTS.length) {
                return;
            } else {
                const weatherStatus = ELEMENTS.FORECASTS[i].querySelector('#weather-status');
                const iconStatus = ELEMENTS.FORECASTS[i].querySelector('img[alt="weather-status"]')
                const date = data2.list[i].dt * 1000;
                const temperature = ELEMENTS.FORECASTS[i].querySelector('#temper');
                const feels_like = ELEMENTS.FORECASTS[i].querySelector('#feels');
                const day = ELEMENTS.FORECASTS[i].querySelector('.dayy');
                const time = ELEMENTS.FORECASTS[i].querySelector('.timee');
                const monthNumber = format(new Date( date ), 'MMM')
                temperature.textContent = TEMPERATURE_WORDS.TEMPERATURE + data2.list[i].main.temp.toFixed(0);
                feels_like.textContent = 'Feels like: ' + data2.list[i].main.feels_like.toFixed(0);
                day.textContent = format(new Date( date ), 'd');
                time.textContent = format(new Date( date ), 'HH:mm');
                iconStatus.src = API.IMG + `${ data2.list[i].weather[0].icon }@2x.png`;
                weatherStatus.textContent = data2.list[i].weather[0].main;
                i += 1;
                recurtionForecast(i);
            }    
        }
        recurtionForecast(i);
    } catch (error) {
        alert(error);
        throw new NameError(error);
    }
}


function getCity() {
    const city = ELEMENTS.FINDINPUT.value;
    ELEMENTS.FINDINPUT.value = '';
    return city;
}

function addLocationToNow(value) {
    if (!favoriteCities.has(value)) {
        return;
    } else {
        weatherResponse(value);
    }
}

function addLocationToNowFromLocal() {
    weatherResponse(getCurrentCity());
}

function submitHandler(event) {
    event.preventDefault();
    weatherResponse(getCity());
}

function clickHandler() {
    favoriteCities.add(ELEMENTS.LOCATION.textContent);
    setFavoriteCities(JSON.stringify([...favoriteCities]))
    render();
}

ELEMENTS.ADDBUTTON.addEventListener('click', clickHandler)
ELEMENTS.FORM.addEventListener('submit', submitHandler)

function deleteFavoriteLocation(city) {
    favoriteCities.delete(city)
    setFavoriteCities(JSON.stringify([...favoriteCities]))
    render();
}

function removingCities(deleteFavoriteCities) {
    if (deleteFavoriteCities.length === 0) {
        return;
    } else {
        let item = document.querySelector('.item');
        for (let subitem of deleteFavoriteCities) {
            if (subitem === item) {
                subitem.remove();
                removingCities(deleteFavoriteCities)
            }
        }
    }
}

function renderFavoriteCities() {
    if (favoriteCities.size === 0) {
        return;
    } else {
        for (let value of favoriteCities) {
            const element = document.createElement('li');
            const button = document.createElement('button');
            const closeButton = document.createElement('button');
            const closeIcon = document.createElement('img');
            closeIcon.src = './icons/close-icon.svg';
            element.id = value;
            element.className = 'item';
            element.prepend(button);
            element.append(closeButton);
            ELEMENTS.ADDEDLOCATIONS.prepend(element);
            button.id = value;
            button.className = 'location-button';
            button.textContent = value;
            button.addEventListener('click', () => addLocationToNow(value));
            closeButton.id = value;
            closeButton.className = 'close-button';
            closeButton.prepend(closeIcon);
            closeButton.addEventListener('click', () => deleteFavoriteLocation(value));
        }
    }
}

function render() {
    const deleteFavotiteCities = document.querySelectorAll('.item')
    removingCities(deleteFavotiteCities);
    renderFavoriteCities();
};

addLocationToNowFromLocal();
render()