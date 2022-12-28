import { ELEMENTS } from './elements.js'
import { convertTime } from './converters.js';

export function createTabTwo(
    feelsLikeValue,
    degrees,
    weatherValue,
    sunsetValue,
    sunriseValue,
) {
    ELEMENTS.temperatureView.innerHTML = `Temperature: ${Math.round(degrees)}&deg;`;
    ELEMENTS.weatherBlockTabTwo.textContent = `Weather: ${weatherValue}`;
    ELEMENTS.feelsLike.forEach((item) => {
        item.innerHTML = `Feels like: ${Math.round(feelsLikeValue)}&deg;`;
    });
    ELEMENTS.sunsetTime.textContent = `Sunset: ${convertTime(sunsetValue)}`;
    ELEMENTS.sunriseTime.textContent = `Sunrise: ${convertTime(sunriseValue)}`;
}

export function createTabOne(nameOfCity, degrees, iconWeather) {
    ELEMENTS.currentCity.forEach((itemCity) => {
        itemCity.textContent = nameOfCity;
    });
    const parentImages = Array.from(ELEMENTS.ParentImagesCurrentWeather.children);
    const imagesIcon = document.createElement('img');
    imagesIcon.src = `https://openweathermap.org/img/wn/${iconWeather}@4x.png`;
    if (parentImages.length) {
        parentImages.forEach((item) => item.remove());
    }
    ELEMENTS.ParentImagesCurrentWeather.append(imagesIcon);
    ELEMENTS.weatherWidgetsDegrees.innerHTML = `${Math.round(degrees)}&deg;`;
}