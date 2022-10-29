export const ELEMENTS = {
    FORM: document.querySelector('form'),
    cityName: document.querySelector('.input_User'),
    currentCity: document.querySelectorAll('.name__current_city'),
    currentCityElement: document.querySelector('span.name__current_city'),
    changeColorTabs: document.querySelector('.tabs__items'),
    btnCurrent: document.querySelectorAll('.tab-item'),
    ParentImagesCurrentWeather: document.querySelector('.weather_widgets-img'),
    weatherWidgetsDegrees: document.querySelector('.weather_widgets-degrees'),
    feelsLike: document.querySelectorAll('.feels_like'),
    temperatureView: document.querySelector('.temperature_block'),
    weatherBlockTabTwo: document.querySelector('.weather_blockTabTwo'),
    favoriteBtn: document.querySelector('.favorite_btn'),
    sunsetTime: document.querySelector('.sunset_block'),
    sunriseTime: document.querySelector('.sunrise_block'),
    listOfСities: new Set(),
};

export const SERVER = {
    SERVER_URL: 'http://api.openweathermap.org/data/2.5/weather',
    API_KEY: 'a6efa68218cab903e4bd5ea3af73853d',
}