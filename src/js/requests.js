import {
  UI_NOW,
  renderNowTab,
  renderDetailsTab,
  renderForecastTab,
  UI_DETAILS,
  UI,
} from "./UI";
import { openPopup } from "./popup";
import { setCookie } from "./cookie";

export const SERVERS_URL = {
  CURRENT_WEATHER: "http://api.openweathermap.org/data/2.5/weather",
  FORECAST_WEATHER: "http://api.openweathermap.org/data/2.5/forecast",
  API_KEY: "358eaa62b262b36cac42f77b107308e8",
};

function getURL(serverURL, cityName, keysAPI) {
  return `${serverURL}?q=${cityName}&appid=${keysAPI}&units=metric`;
}

export async function getCityWeather(cityName) {
  try {
    const urlNow = getURL(
      SERVERS_URL.CURRENT_WEATHER,
      cityName,
      SERVERS_URL.API_KEY
    );
    const responseNow = await fetch(urlNow);
    if (responseNow.ok) {
      const weatherJSON = await responseNow.json();
      renderNowTab(weatherJSON, UI_NOW);
      renderDetailsTab(weatherJSON, UI_DETAILS);
      setCookie("currentCity", weatherJSON.name, {
        secure: true,
        "max-age": 3600,
      });
    } else {
      throw new Error(`Ошибка HTTP:  ${responseNow.status}`);
    }
    const urlForecast = getURL(
      SERVERS_URL.FORECAST_WEATHER,
      cityName,
      SERVERS_URL.API_KEY
    );
    const responseForecast = await fetch(urlForecast);
    if (responseForecast.ok) {
      const weatherJSON = await responseForecast.json();
      renderForecastTab(weatherJSON);
    } else {
      throw new Error(`Ошибка HTTP:  ${responseForecast.status}`);
    }
  } catch (error) {
    openPopup(UI.POPUP, error.message);
  }
}

export function getWeatherFavoriteList(event) {
  if (event.target.classList.contains("favorites__item")) {
    const cityName = event.target.textContent;
    getCityWeather(cityName);
  }
}
