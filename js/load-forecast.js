import { cityTime } from "./setTime.js";
import { setNowHTML, setDetailHTML } from "./vue.js";
import { DATA } from "./elements.js";

class ValidationError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = "ValidationError";
  }
}

export async function loadWeather(url) {
  try {
    let response = await fetch(url);
    let json = await response.json();

    if (response.status === 400 || response.status === 404) {
      throw new ValidationError("отсутствует название города");
    }
    const FORECAST = {
      degrees: Math.round(json.main.temp),
      degreesFeelsLike: Math.round(json.main.feels_like),
      icon: json.weather[0].icon,
      forecastCity: json.name,

      currentTimeZone: json.timezone,
      sunrise: json.sys.sunrise,
      sunset: json.sys.sunset,

      detailsWeather: json.weather[0].main,
    };

    const sunriseTime = cityTime(FORECAST.sunrise, FORECAST.currentTimeZone);
    const sunsetTime = cityTime(FORECAST.sunset, FORECAST.currentTimeZone);

    setNowHTML(FORECAST.degrees, FORECAST.icon, FORECAST.forecastCity);
    setDetailHTML(
      sunriseTime,
      sunsetTime,
      FORECAST.degrees,
      FORECAST.degreesFeelsLike,
      FORECAST.detailsWeather,
      FORECAST.forecastCity
    );
  } catch (err) {
    if (err instanceof ValidationError) {
      alert("Данные введены некорректно:" + err.message);
    } else {
      alert(err);
    }
  }
}

export async function loadForecast(forecastUrl) {
  try {
    let response = await fetch(forecastUrl);
    let json = await response.json();

    const newForecast = json.list.map((item) => {
      return [
        new Date(item.dt_txt).getDate(),
        new Date(item.dt_txt).toLocaleString("en-us", { month: "short" }),
        `${new Date(item.dt_txt).getHours()}:00`,
        Math.round(item.main.temp),
        Math.round(item.main.feels_like),
        item.weather[0].main,
        item.weather[0].icon,
      ];
    });

    document.querySelector(".text-locations.details").textContent =
      json.city.name;

    let j = 0;
    for (let elem of DATA) {
      let i = 0;
      for (let item of elem) {
        if (j === DATA.length - 1) {
          item.setAttribute(
            "src",
            `http://openweathermap.org/img/wn/${newForecast[i][j]}@2x.png`
          );
        } else {
          item.textContent = newForecast[i][j];
        }
        ++i;
      }
      j++;
    }
  } catch (err) {
    alert(err);
  }
}
