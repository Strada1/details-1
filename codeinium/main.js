import { getCurrentCity, setCurrentCity, setFavoriteCities, getFavoriteCities} from "./localstorage.js";

const favoriteCities = new Set(JSON.parse(getFavoriteCities()));

const ELEMENTS = {
    FINDINPUT: document.querySelector("#find-input"),
    FORM: document.querySelector("#find-form"),
    WEATHERICON: document.querySelector("#weather-icon"),
    TEMPERATURE: document.querySelector("#temperature"),
    LOCATION: document.querySelector("#loca"),
    LOCATIONFORBUTTON: document.querySelector('.location'),
    ADDBUTTON: document.querySelector('#add-button'),
    ADDBUTTONICON: document.querySelector('#add-icon'),
    ADDEDLOCATIONS: document.querySelector("#added-locations"),
    DETAILS_LOCATION: document.querySelector('#city'),
    DETAILS_TEMPERATURE: document.querySelector('#temp'),
    DETAILS_FEEL: document.querySelector('#feel'),
    DETAILS_WEATHER: document.querySelector('#weather'),
    DETAILS_SUNRISE: document.querySelector('#sunrise'),
    DETAILS_SUNSET: document.querySelector('#sunset'),
    FORECAST_LOCATION: document.querySelector('#city2'),
    FORECASTS: document.querySelectorAll('.forecast')
}

const API = {
    KEY: '4dac46ba5170c186410fd41ea59f39db',
    SERVERURL: `https://api.openweathermap.org/data/2.5/weather`,
    IMG: "https://openweathermap.org/img/wn/",
    FORECAST_URL: `https://api.openweathermap.org/data/2.5/forecast`
}

const TEMPERATURE_WORDS = {
    TEMPERATURE: 'Temperature: ',
    FEELS_LIKE: 'Feels like: ',
    WEATHER: 'Weather: ',
    SUNRISE: 'Sunrise: ',
    SUNSET: 'Sunset: '
}

function getWordMonth(num) {
    switch(+num) {
        case 0: return 'Jan'; 
        case 1: return 'Feb';
        case 2: return 'Mar'; 
        case 3: return 'Apr';
        case 4: return 'May';
        case 5: return 'Jun';
        case 6: return 'Jul';
        case 7: return 'Aug';
        case 8: return 'Sen';
        case 9: return 'Oct';
        case 10: return 'Nov';
        case 11: return 'Dec';
    }
}

class NameError extends Error { 
    constructor(message) {
        super(message)
        this.name = "NameError"
    }
}

async function weatherResponse(cityName) {
    try {
        const serverUrl = API.SERVERURL + `?q=${cityName}&appid=${API.KEY}&units=metric`
        const responce = await fetch(serverUrl)
        const data1 = await responce.json(); 

        const forecastUrl = API.FORECAST_URL +`?q=${cityName}&appid=${API.KEY}&units=metric`;
        const response2 = await fetch(forecastUrl);
        const data2 = await response2.json();
        if (data1.cod === '404' && data2.cod === '404') {
            throw new NameError("введен неправильный город")
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
        const dateSunrise = new Date(data1.sys.sunrise * 1000)
        const dateSunset = new Date(data1.sys.sunset * 1000)
        ELEMENTS.DETAILS_SUNRISE.textContent = TEMPERATURE_WORDS.SUNRISE + `${
            dateSunrise.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        }`
        ELEMENTS.DETAILS_SUNSET.textContent = TEMPERATURE_WORDS.SUNSET + `${
            dateSunset.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        }`
        //forecast
        ELEMENTS.FORECAST_LOCATION.textContent = data1.name;
        let i = 0;
        for(let forecast of ELEMENTS.FORECASTS) {
            i += 1;
            const weatherStatus = forecast.querySelector('#weather-status');
            const iconStatus = forecast.querySelector('img[alt="weather-status"]')
            const date = data2.list[i].dt * 1000;
            const temperature = forecast.querySelector('#temper');
            const feels_like = forecast.querySelector('#feels');
            const day = forecast.querySelector('.dayy');
            const time = forecast.querySelector('.timee');
            const monthNumber = new Date( date ).getMonth();
            temperature.textContent = TEMPERATURE_WORDS.TEMPERATURE + data2.list[i].main.temp.toFixed(1); 
            feels_like.textContent = 'Feels like: ' + data2.list[i].main.feels_like.toFixed(1);
            day.textContent = new Date( date ).getDate() + ' ' + getWordMonth(monthNumber);
            time.textContent = new Date( date ).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            iconStatus.src = API.IMG + `${ data2.list[i].weather[0].icon }@2x.png`;
            weatherStatus.textContent = data2.list[i].weather[0].main;                
        };
    } catch (error) {
        alert(error.message)
    }
}

function getCity() {
    const city = ELEMENTS.FINDINPUT.value;
    if (!city) {
        throw new NameError("не введен город");
    }
    ELEMENTS.FINDINPUT.value = '';
    return city;
}

function addLocationToNow(value) {
    favoriteCities.forEach((valueInSet) => {
        if (valueInSet === value) {
            const cityName = valueInSet;
            weatherResponse(cityName);
        }
    })
}

function addLocationToNowFromLocal() {
    const cityName = getCurrentCity();
    weatherResponse(cityName);
}

function submitHandler(event) {
    event.preventDefault();
    const cityName = getCity();
    weatherResponse(cityName);
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

function render() {
    const deleteFavotiteCities = document.querySelectorAll('.item')
    deleteFavotiteCities.forEach(function(item) {
        item.remove();
    })
    favoriteCities.forEach((value) => {
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
    })
};
addLocationToNowFromLocal();
render()