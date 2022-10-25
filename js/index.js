import { ELEMENTS } from "./elements.js";
import { storageList, storageCity, setLocal } from "./storage.js";
import { render } from "./vue.js";
import { loadWeather, loadForecast } from "./load-forecast.js";

const SERVER = {
  serverForecast: "http://api.openweathermap.org/data/2.5/forecast",
  serverUrl: "http://api.openweathermap.org/data/2.5/weather",
  apiKey: "6ca767a0f89bdb44703b66b9c5240f30",
};

export let list = new Set([
  "Amur",
  "Samara",
  "Bali",
  "Dane",
  "Kilo",
  "Nur-Sultan",
]);

let cityName;

if (storageList) {
  list = new Set(JSON.parse(storageList));
}

if (storageCity) {
  cityName = storageCity;
  showForecast(cityName);
}

export function showForecast(cityName) {
  if (!cityName) {
    cityName = ELEMENTS.cityInput.value;
  }

  const lowerCity = cityName.trim().toLowerCase();
  const upperCity = lowerCity[0].toUpperCase() + lowerCity.slice(1);

  if (list.has(upperCity)) {
    document.querySelector(".like svg").classList.add("heart");
  } else {
    document.querySelector(".like svg").classList.remove("heart");
  }

  const url = `${SERVER.serverUrl}?q=${cityName}&appid=${SERVER.apiKey}&units=metric`;
  const forecastUrl = `${SERVER.serverForecast}?q=${cityName}&cnt=3&appid=${SERVER.apiKey}&units=metric`;

  setLocal(cityName);
  loadWeather(url);
  loadForecast(forecastUrl);

  ELEMENTS.cityInput.value = "";
}

ELEMENTS.citySearch.addEventListener("submit", (event) => {
  event.preventDefault();
  showForecast();
});

function addFavoriteLocation() {
  if (list.delete(ELEMENTS.forecastCity.textContent)) {
    document.querySelector(".like svg").classList.remove("heart");
  } else {
    list.add(ELEMENTS.forecastCity.textContent);
    document.querySelector(".like svg").classList.add("heart");
  }
  setLocal(list);
  setLocal(cityName);
  render();
}

export function deleteFavoriteLocation(city) {
  list.delete(city);
  setLocal(list);
  render();
}

render();

ELEMENTS.buttonFavorite.addEventListener("click", addFavoriteLocation);
