import { getCurrentCity, setCurrentCity, setFavoriteCities, getFavoriteCities} from "./localstorage.js";

const favoriteCities = new Set(JSON.parse(getFavoriteCities()))

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
    DETAILS_SUNSET: document.querySelector('#sunset')
}

const API = {
    APIKEY: '4dac46ba5170c186410fd41ea59f39db',
    SERVERURL: 'https://api.openweathermap.org/data/2.5/weather'
}

function weatherResponce(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => data)
        .then(function (data) {
            //now
            ELEMENTS.WEATHERICON.src = `https://openweathermap.org/img/wn/${ data.weather[0].icon }@2x.png`;
            ELEMENTS.TEMPERATURE.textContent = `${ Number(data.main.temp).toFixed(0) }°`;
            ELEMENTS.LOCATION.textContent = data.name;
            ELEMENTS.ADDBUTTON.hidden = false;
            ELEMENTS.ADDBUTTONICON.hidden = false;
            setCurrentCity(data.name);
            //details
            ELEMENTS.DETAILS_LOCATION.textContent = data.name;
            ELEMENTS.DETAILS_TEMPERATURE.textContent = `Temperature: ${ Number(data.main.temp).toFixed(2) }°`;
            ELEMENTS.DETAILS_FEEL.textContent = `Feels like: ${ Number(data.main.feels_like).toFixed(2) }°`
            ELEMENTS.DETAILS_WEATHER.textContent = `Weather: ${ data.weather[0].main }`
            const dateSunrise = new Date(data.sys.sunrise * 1000)
            const dateSunset = new Date(data.sys.sunset * 1000)
            ELEMENTS.DETAILS_SUNRISE.textContent = `Sunrise: ${
                dateSunrise.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
            }`
            ELEMENTS.DETAILS_SUNSET.textContent = `Sunset ${
                dateSunset.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
            }`
        })
        .catch(error => alert("Произошла ошибка"))
}

function getCity() {
    const city = ELEMENTS.FINDINPUT.value;
    ELEMENTS.FINDINPUT.value = '';
    return city;
}

function addLocationToNow(value) {
    favoriteCities.forEach((valueInSet) => {
        if (valueInSet === value) {
            const cityName = valueInSet;
            const url = `${API.SERVERURL}?q=${cityName}&appid=${API.APIKEY}&units=metric`;
            weatherResponce(url);
        }
    })
}

function addLocationToNowFromLocal() {
    const cityName = getCurrentCity();
    const url = `${API.SERVERURL}?q=${cityName}&appid=${API.APIKEY}&units=metric`;
    weatherResponce(url)
}

function submitHandler(event) {
    event.preventDefault();
    const cityName = getCity();
    const url = `${API.SERVERURL}?q=${cityName}&appid=${API.APIKEY}&units=metric`;
    weatherResponce(url);
}

function clickHandler() {
    favoriteCities.add(ELEMENTS.LOCATION.textContent);
    console.log(favoriteCities);
    setFavoriteCities(JSON.stringify([...favoriteCities]))
    render();
}
ELEMENTS.ADDBUTTON.addEventListener('click', clickHandler)
ELEMENTS.FORM.addEventListener('submit', submitHandler)

function deleteFavoriteLocation(city) {
    favoriteCities.delete(city)
    setFavoriteCities(JSON.stringify([...favoriteCities]))
    const li = document.querySelector(`#${city}`);
    li.remove();
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
}

addLocationToNowFromLocal();
render()

