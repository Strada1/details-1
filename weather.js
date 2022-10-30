const searchForm = document.querySelector(".forecast-form");
const searchInput = document.querySelector(".inputForm");

import { ELEMENTS } from "./elements.js";
import { cityAll, localSet, CookieSet,CITYNAME } from "./storage.js";
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
  let resultWeather = await fetch(urlWeather);
  let jsonResultWeather = await resultWeather.json();

  let resultForecast = await fetch(urlForecast);
  let jsonResultForecast = await resultForecast.json();


  if (!(jsonResultWeather.cod == 200)) {
    alert(`${jsonResultWeather.message}`);
  } else if (!(jsonResultForecast.cod == 200)) {
    alert(`${jsonResultForecast.message}`);
  } else {
    renderLeftNow(jsonResultWeather);
    renderDetails(jsonResultWeather);
    renderForecast12h(jsonResultForecast);
    renderForecast15h(jsonResultForecast);
    renderForecast18h(jsonResultForecast);
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

CookieSet();
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


// //конструктор
// ELEMENTS.HEART.addEventListener("click", function () {
//   constr(ELEMENTS.CITY_NAME.innerText);
// });

// function constr(name) {
// const cityes = new CityLiked(name);
// console.log(cityes)

// function CityLiked(name) {
//   this.name = name;
// }

// }

function renderRight() {
  ELEMENTS.SAVE_CITY_FORM.textContent = "";

  for (let item of cityAll) {
    let SAVED_CITY = document.createElement("li");
    SAVED_CITY.textContent = item;
    ELEMENTS.SAVE_CITY_FORM.prepend(SAVED_CITY);
    let REMOVE_SAVED_CITY = document.createElement("button");
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
  
  let SUNRISE = format(new Date(item.sys.sunrise * 1000), 'p');
  let SUNSET = format(new Date(item.sys.sunset * 1000), 'p');

  ELEMENTS.DETAILS_SUNRISE.textContent =
    "Sunrise:" + " " + SUNRISE
  ELEMENTS.DETAILS_SUNSET.textContent =
    "Sunset:" + " " + SUNSET

  CITYNAME.infoDetails = item;

  CookieSet();
}

function renderForecast12h(item) {
  let DateToday = format(new Date(), 'd MMM')

  ELEMENTS.FORECAST_CITY.textContent = item.city.name
  ELEMENTS.FORECAST_DATE_TODAY1.textContent = DateToday;
  ELEMENTS.FORECAST_DATE_TODAY2.textContent = DateToday;
  ELEMENTS.FORECAST_DATE_TODAY3.textContent = DateToday;

  ELEMENTS.FORECAST_TEMP_12_HOUR.textContent =
    "Temperature:" + " " + Math.round(item.list[3].main.temp) + "°";
  ELEMENTS.FORECAST_FEEL_12_HOUR.textContent =
    "Feels like:" + " " + Math.round(item.list[3].main.feels_like) + "°";
  ELEMENTS.FORECAST_WEATHER_12_HOUR.textContent = `Weather: ${item.list[3].weather[0].main}`;

  let icon = ELEMENTS.FORECAST_ICON_12_HOUR;
  const iconUrl = `https://openweathermap.org/img/wn/`;
  icon.src = `${iconUrl}${item.list[3].weather[0].icon}@2x.png`;

  CITYNAME.date = DateToday;
  CITYNAME.info12Forecast = item
  CookieSet();
}

function renderForecast15h(item) {
   CITYNAME.info15Forecast = item;
   CookieSet()
 
  ELEMENTS.FORECAST_TEMP_15_HOUR.textContent =
    "Temperature:" + " " + Math.round(CITYNAME.info15Forecast.list[4].main.temp) + "°";
  // ELEMENTS.FORECAST_FEEL_15_HOUR.textContent =
  //   "Feels like:" + " " + Math.round(item.list[4].main.feels_like) + "°";
  // ELEMENTS.FORECAST_WEATHER_15_HOUR.textContent = `Weather: ${item.list[4].weather[0].main}`;

  // let icon = ELEMENTS.FORECAST_ICON_15_HOUR;
  // const iconUrl = `https://openweathermap.org/img/wn/`;
  // icon.src = `${iconUrl}${item.list[4].weather[0].icon}@2x.png`;

  // CITYNAME.info15Forecast = item;
  // CookieSet()
}

function renderForecast18h(item) {
  ELEMENTS.FORECAST_TEMP_18_HOUR.textContent =
    "Temperature:" + " " + Math.round(item.list[5].main.temp) + "°";
  ELEMENTS.FORECAST_FEEL_18_HOUR.textContent =
    "Feels like:" + " " + Math.round(item.list[5].main.feels_like) + "°";
  ELEMENTS.FORECAST_WEATHER_18_HOUR.textContent = `Weather: ${item.list[5].weather[0].main}`;

  let icon = ELEMENTS.FORECAST_ICON_18_HOUR;
  const iconUrl = `https://openweathermap.org/img/wn/`;
  icon.src = `${iconUrl}${item.list[5].weather[0].icon}@2x.png`;

  CITYNAME.info18Forecast = item;
 CookieSet();
}

renderRight();
renderLeftNow(CITYNAME.infoNow);
renderDetails(CITYNAME.infoDetails);

renderForecast12h(CITYNAME.info12Forecast);
renderForecast15h(CITYNAME.info15Forecast);
renderForecast18h(CITYNAME.info18Forecast);
