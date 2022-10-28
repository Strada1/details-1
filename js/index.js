import { ELEMENTS } from "./elements.js";
import { storageList, cookieCity, setLocal } from "./storage.js";
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

if (cookieCity) {
  cityName = cookieCity;
  showForecast(cityName);
} else {
  const newList = list.values();
      cityName = newList.next().value;
      showForecast(cityName);
}

export function showForecast(city) {
  function camelize(str) {
    return str
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("-");
  }

  if (ELEMENTS.cityInput.value) {
    city = ELEMENTS.cityInput.value;
  }
  const lowerCity = city.trim();
  const upperCity = camelize(lowerCity);

  if (list.has(upperCity)) {
    document.querySelector(".like svg").classList.add("heart");
  } else {
    document.querySelector(".like svg").classList.remove("heart");
  }

  const url = `${SERVER.serverUrl}?q=${city}&appid=${SERVER.apiKey}&units=metric`;
  const forecastUrl = `${SERVER.serverForecast}?q=${city}&cnt=3&appid=${SERVER.apiKey}&units=metric`;

  setLocal(city);
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
    setLocal(cityName);
  } else {
    list.add(ELEMENTS.forecastCity.textContent);
    document.querySelector(".like svg").classList.add("heart");
  }
  setLocal(list);

  render();
}

export function deleteFavoriteLocation(city) {
  list.delete(city);
  setLocal(list);
  render();
}

render();

ELEMENTS.buttonFavorite.addEventListener("click", addFavoriteLocation);
