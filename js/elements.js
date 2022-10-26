export const ELEMENTS = {
  citySearch: document.querySelector(".forecast-form"),
  cityInput: document.querySelector(".city-input"),
  forecastDegrees: document.querySelector(".degrees-num"),
  forecastIcon: document.querySelector(".cloud"),
  forecastCity: document.querySelector(".city-name"),
  buttonFavorite: document.querySelector(".like"),
  iconFavorite: document.querySelector(".like svg"),

  detailsTemperature: document.querySelector(
    ".details-items li:nth-child(1) span"
  ),
  detailsFeelsLike: document.querySelector(
    ".details-items li:nth-child(2) span"
  ),
  detailsWeather: document.querySelector(".details-items li:nth-child(3) span"),
  detailsSunrise: document.querySelector(".details-items li:nth-child(4) span"),
  detailsSunset: document.querySelector(".details-items li:nth-child(5) span"),
  detailsCity: document.querySelector(".forecast-details p"),

  tabs: document.querySelectorAll(".tabs-item"),
  forecastScreen: document.querySelectorAll(".forecast"),
};

export const DATA = [
  document.querySelectorAll(
    ".forecast-date p:nth-child(1) span:nth-child(1)"
  ),
  document.querySelectorAll(
    ".forecast-date p:nth-child(1) span:nth-child(2)"
  ),
  document.querySelectorAll(".forecast-date p:nth-child(2)"),
  document.querySelectorAll(".forecast-temperature p:nth-child(1) span"),
  document.querySelectorAll(".forecast-temperature p:nth-child(2) span"),
  document.querySelectorAll(".rain"),
  document.querySelectorAll(".forecast-icons"),
];
