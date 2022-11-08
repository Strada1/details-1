import closeImg from "./img/close.svg"
import { format } from 'date-fns'

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

const inputCity = document.getElementById("inputCity");
const nowCity = document.getElementById("nowCity");
const nowTemperature = document.getElementById("nowTemperature");
const detailsTemperature = document.getElementById("detailsTemperature");
const detailsFeelsLike = document.getElementById("detailsFeelsLike");
const detailsWeather = document.getElementById("detailsWeather");
const detailsSunrise = document.getElementById("detailsSunrise");
const detailsSunset = document.getElementById("detailsSunset");
const addedLocations = document.getElementById("addedLocations");
const currentCity = getCurrentCity();

const сitySet = getFavoriteCities();

document.getElementById("btnNow").addEventListener("click", () => { openTab('Now') });
document.getElementById("btnDetails").addEventListener("click", () => { openTab('Details') });
document.getElementById("btnForecast").addEventListener("click", () => { openTab('Forecast') });

// function openTab(evt, tabName) {
function openTab(tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "flex";
    event.currentTarget.className += " active";
}

document.getElementById("searchButton").addEventListener("click", searchClick);

async function searchClick() {

    localStorage.setItem('currentCity', inputCity.value);

    let url = `${serverUrl}?q=${inputCity.value.trim()}&appid=${apiKey}`;
    let json;

    try {
        let response = await fetch(url);
        if (!response.ok) { // если НЕ HTTP-статус в диапазоне 200-299
            inputCity.value = "Ошибка HTTP: " + response.status;
        } else {
            json = await response.json();
            if (json.cod === "404") {
                inputCity.value = "City not found ";
            } else {
                nowCity.innerHTML = json.name;
                let temperature = Math.floor(Number(json.main.temp) - 273.15);
                nowTemperature.innerHTML = temperature;
                detailsTemperature.innerHTML = temperature;
                detailsFeelsLike.innerHTML = Math.floor(Number(json.main.feels_like) - 273.15);
                detailsWeather.innerHTML = json.weather[0].main;
                detailsSunrise.innerHTML = format(new Date(json.sys.sunrise * 1000), "HH:mm:ss");
                detailsSunset.innerHTML = format(new Date(json.sys.sunset * 1000), "HH:mm:ss");
            }
        }
    } catch (err) {
        inputCity.value = "Ошибка HTTP: " + err; // TypeError: failed to fetch
    }
    // Через Promise
    // let url = `${serverUrl}?q=${inputCity.value.trim()}&appid=${apiKey}`;
    // fetch(url).then(response => response.json())
    //     .catch(err => inputCity.value = "Ошибка HTTP: ")
    //     .then(json => {
    //         // if (!response.ok) { // если НЕ HTTP-статус в диапазоне 200-299
    //         //     inputCity.value = "Ошибка HTTP: " + response.status;
    //         // } else {
    //         //    json = await response.json();
    //         if (json.cod === "404") {
    //             inputCity.value = "City not found ";
    //         } else {
    //             nowCity.innerHTML = json.name;
    //             nowTemperature.innerHTML = Math.floor(Number(json.main.temp) - 273.15);
    //         }
    //     }
    //     )
    //}
}

function chooseClick() {
    let cityName = event.currentTarget.innerText;
    inputCity.value = cityName;
    searchClick();
}

document.getElementById("addToFavorites").addEventListener("click", addToFavorites);

function addToFavorites() {
    сitySet.add(inputCity.value);
    saveFavoriteCities(сitySet);
    refreshAddedLocation();
}

function deleteCityClick() {
    let element = event.currentTarget;
    сitySet.delete(element.attributes.cityName.value);
    saveFavoriteCities(сitySet);
    refreshAddedLocation();
}

function refreshAddedLocation() {

    addedLocations.innerHTML = '';

    сitySet.forEach(value => {
        let li = `<li class="container-item flex-row addedLocation">
            <span class="container-item-city">${value}</span>
            <img class="close" src=${closeImg} alt="close" cityName="${value}"></li>`;
        addedLocations.insertAdjacentHTML('afterbegin', li);
    }
    );

    let chooseElements = document.getElementsByClassName("container-item-city");
    for (i = 0; i < chooseElements.length; i++) {
        chooseElements[i].addEventListener("click", chooseClick);
    }

    let closeElements = document.getElementsByClassName("close");
    for (i = 0; i < closeElements.length; i++) {
        closeElements[i].addEventListener("click", deleteCityClick);
    }

}

function saveFavoriteCities(favoriteCities) {

    localStorage.setItem('сitySet', JSON.stringify(Array.from(сitySet)));

}

function getFavoriteCities() {

    if (localStorage.getItem('сitySet') !== null) {
        return new Set(JSON.parse(localStorage.getItem("сitySet")));
    } else {
        return new Set();
    }
}

function getCurrentCity() {
    if (localStorage.getItem('currentCity') !== null) inputCity.value = localStorage.getItem('currentCity');
}

getCurrentCity();

refreshAddedLocation();



