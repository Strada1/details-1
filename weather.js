const searchForm = document.querySelector(".forecast-form");
const searchInput = document.querySelector(".inputForm");

import { ELEMENTS } from "./elements.js";
import { cityAll, localSet, CookieSet,CITYNAME, Storage, OBJ, localОption} from "./storage.js";
import { format } from 'date-fns';


const serverUrlWeather = "http://api.openweathermap.org/data/2.5/weather";
const serverUrlForecast = "http://api.openweathermap.org/data/2.5/forecast";
const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";
searchForm.addEventListener("submit", getCity);

function getCity(event) {
  event.preventDefault();
  const searchInput = document.querySelector(".inputForm").value;
  request(searchInput);
}

async function request(item) {
  const urlWeather = `${serverUrlWeather}?q=${item}&appid=${apiKey}&units=metric`;
  const urlForecast = `${serverUrlForecast}?q=${item}&appid=${apiKey}&units=metric`;
  const resultWeather = await fetch(urlWeather);
  const jsonResultWeather = await resultWeather.json();

  const resultForecast = await fetch(urlForecast);
  const jsonResultForecast = await resultForecast.json();

  if (!(jsonResultWeather.cod == 200)) {
    alert(`${jsonResultWeather.message}`);
  } else if (!(jsonResultForecast.cod == 200)) {
    alert(`${jsonResultForecast.message}`);
  } else {
    renderLeftNow(jsonResultWeather);
    renderDetails(jsonResultWeather);
    renderForecast12h(jsonResultForecast.city.name, jsonResultForecast.list[3]);
    renderForecast15h(jsonResultForecast.list[4]);
    renderForecast18h(jsonResultForecast.list[5]);
  }
  searchInput.value = "";
}


function renderLeftNow(item) {
  let CLOUD_IMG = document.querySelector(".cloud");
  CLOUD_IMG.src = ` https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png `;

  ELEMENTS.NEW_NAME_CITY.textContent = item.name;
  ELEMENTS.CITY_NAME.prepend(ELEMENTS.NEW_NAME_CITY);

  ELEMENTS.NEW_TEMP.textContent = Math.round(item.main.temp) + "°";
  ELEMENTS.NEW_TEMP.classList.add("degrees-num");
  ELEMENTS.DEGREES_NUMBER.prepend(ELEMENTS.NEW_TEMP);
  CITYNAME.infoNow = item;
  
let instanceClass = new Storage('NowCityes')
instanceClass.set(CITYNAME);
instanceClass.get();
}

ELEMENTS.HEART.addEventListener("click", function () {
  SaveCity(ELEMENTS.CITY_NAME.innerText);
});

function SaveCity(name) {
  if (cityAll.has(name)) {
    alert("This city has already been saved");
  } else if (cityAll !== "") {
    cityAll.add(name);
    renderRight();
    localSet();
  }
}

function renderRight() {
  ELEMENTS.SAVE_CITY_FORM.textContent = "";

  for (let item of cityAll) {
    const SAVED_CITY = document.createElement("li");
    SAVED_CITY.textContent = item;
    ELEMENTS.SAVE_CITY_FORM.prepend(SAVED_CITY);
    const REMOVE_SAVED_CITY = document.createElement("button");
    SAVED_CITY.appendChild(REMOVE_SAVED_CITY);

    SAVED_CITY.addEventListener("click", function () {
      request(item);
    });
    REMOVE_SAVED_CITY.addEventListener("click", function () {
      deleteCity(item);
    });
  }
}

function deleteCity(name) {
  cityAll.delete(name);
  localSet();
  renderRight();
}

function renderDetails(item) {
  ELEMENTS.DETAILS_CITY.textContent = item.name;
  ELEMENTS.DETAILS_TEMP.textContent =
    "Temperature:" + " " + Math.round(item.main.temp) + "°";
  ELEMENTS.DETAILS_WEATHER.textContent = `Weather: ${item.weather[0].main}`;
  ELEMENTS.DETAILS_FEEL_LIKE.textContent =
    "Feels like:" + " " + Math.round(item.main.feels_like) + "°";
  
    const SUNRISE = format(new Date(item.sys.sunrise * 1000), 'p');
    const SUNSET = format(new Date(item.sys.sunset * 1000), 'p');

  ELEMENTS.DETAILS_SUNRISE.textContent =
    "Sunrise:" + " " + SUNRISE
  ELEMENTS.DETAILS_SUNSET.textContent =
    "Sunset:" + " " + SUNSET

  CITYNAME.infoDetails = item;
  CookieSet();
}

function renderForecast12h(name, item) {
 makeTodayDate();
  ELEMENTS.FORECAST_CITY.textContent = name
  ELEMENTS.FORECAST_TEMP_12_HOUR.textContent = 
    "Temperature:" + " " + Math.round(item.main.temp) + "°";
  ELEMENTS.FORECAST_FEEL_12_HOUR.textContent =
    "Feels like:" + " " + Math.round(item.main.feels_like) + "°";
  ELEMENTS.FORECAST_WEATHER_12_HOUR.textContent = `Weather: ${item.weather[0].main}`;

  const icon = ELEMENTS.FORECAST_ICON_12_HOUR;
  const iconUrl = `https://openweathermap.org/img/wn/`;
  icon.src = `${iconUrl}${item.weather[0].icon}@2x.png`;

  CITYNAME.info12Forecast = item
  CITYNAME.name12 = name
  CookieSet();
}

function renderForecast15h(item) {
  ELEMENTS.FORECAST_TEMP_15_HOUR.textContent =
    "Temperature:" + " " + Math.round(item.main.temp) + "°";
  ELEMENTS.FORECAST_FEEL_15_HOUR.textContent =
    "Feels like:" + " " + Math.round(item.main.feels_like) + "°";
  ELEMENTS.FORECAST_WEATHER_15_HOUR.textContent = `Weather: ${item.weather[0].main}`;

  const icon = ELEMENTS.FORECAST_ICON_15_HOUR;
  const iconUrl = `https://openweathermap.org/img/wn/`;
  icon.src = `${iconUrl}${item.weather[0].icon}@2x.png`;

  CITYNAME.info15Forecast = item;
  CookieSet()

}

function renderForecast18h(item) {
  ELEMENTS.FORECAST_TEMP_18_HOUR.textContent =
    "Temperature:" + " " + Math.round(item.main.temp) + "°";
  ELEMENTS.FORECAST_FEEL_18_HOUR.textContent =
    "Feels like:" + " " + Math.round(item.main.feels_like) + "°";
  ELEMENTS.FORECAST_WEATHER_18_HOUR.textContent = `Weather: ${item.weather[0].main}`;

  const icon = ELEMENTS.FORECAST_ICON_18_HOUR;
  const iconUrl = `https://openweathermap.org/img/wn/`;
  icon.src = `${iconUrl}${item.weather[0].icon}@2x.png`;

  CITYNAME.info18Forecast = item;
 CookieSet();
}

function makeTodayDate() {
  const DateToday = format(new Date(), 'd MMM')
  ELEMENTS.FORECAST_DATE_TODAY.forEach(item => {
    item.textContent = DateToday
  })
  CITYNAME.date = DateToday;
}

renderRight();
renderLeftNow(CITYNAME.infoNow);
renderDetails(CITYNAME.infoDetails);
renderForecast12h(CITYNAME.name12, CITYNAME.info12Forecast);
renderForecast15h(CITYNAME.info15Forecast);
renderForecast18h(CITYNAME.info18Forecast);
makeTodayDate();
