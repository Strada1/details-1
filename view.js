import { getWeatherData , getForecastData} from "./index.js"
import { getIconUrl } from "./server.js"
import { removeCityFromFavoriteList, favoriteCitiesList } from "./favoriteCities.js"
import { addCitiesInLocalStorage } from "./localStorage.js"

export const ELEMENTS = {
	SEARCH_FORM: document.querySelector('.search-form'),
	INPUT: document.querySelector('.search-form_input'),
	ADD_TO_FAVORITE_LIST_BUTTON: document.querySelector('.favorite-button'),
	LOCATION: document.querySelector('.now_city'),
	LOCATIONS_LIST: document.querySelector('.locations_list'),
	TABS: {
		NOW: {
			CITY_NAME: document.querySelector('.now_city'),
			TEMPERATURE: document.querySelector('.now_temperature'),
			WEATHER_ICON: document.querySelector('.now_weather-icon img')
		},
		DETAILS: {
			CITY_NAME: document.querySelector('.details_city'),
			TEMPERATURE: document.querySelector('.details_item span'),
			FEELS_LIKE_TEMPERATURE: document.querySelector('#details-feels-like-temperature'),
			WEATHER_TYPE: document.querySelector('#details-weather-type'),
			SUNRISE_TIME: document.querySelector('#details-sunrise'),
			SUNSET_TIME: document.querySelector('#details-sunset'),
		},
		FORECAST: {
			CITY_NAME: document.querySelector('.forecast_city'),
			LIST: document.querySelector('.forecast_list'),
		}
	}
}

const createElement = (tagName, className) => {
	const element = document.createElement(tagName)
	element.classList.add(className)

	return element
}

export const renderNowTab = ({cityName, temp, iconId}) => {
	ELEMENTS.TABS.NOW.CITY_NAME.textContent = cityName
	ELEMENTS.TABS.NOW.TEMPERATURE.textContent = temp
	ELEMENTS.TABS.NOW.WEATHER_ICON.src = getIconUrl(iconId)
}

export const renderDetailsTab = ({cityName, temp, tempFeelsLike, type, sunriseTime, sunsetTime}) => {
	ELEMENTS.TABS.DETAILS.CITY_NAME.textContent = cityName
	ELEMENTS.TABS.DETAILS.TEMPERATURE.textContent = temp
	ELEMENTS.TABS.DETAILS.FEELS_LIKE_TEMPERATURE.textContent = tempFeelsLike
	ELEMENTS.TABS.DETAILS.WEATHER_TYPE.textContent = type
	ELEMENTS.TABS.DETAILS.SUNRISE_TIME.textContent = sunriseTime
	ELEMENTS.TABS.DETAILS.SUNSET_TIME.textContent = sunsetTime
}

export const renderForecastTab = ({cityName, list}) => {
	ELEMENTS.TABS.FORECAST.CITY_NAME.textContent = cityName

	list.forEach(weatherData => {
		const forecastItem = createElement('li', 'forecast-item')
		const forecastHeader = createElement('div', 'forecast-item_header')
		const forecastDate = createElement('div', 'forecast-item_date')
		const forecastTime = createElement('div', 'forecast-item_time')
		const forecastInfo = createElement('div', 'forecast-item_info')
		const forecastTemperatures = createElement('div', 'forecast-item_box')
		const forecastWeatherTypeBox = createElement('div', 'forecast-item_box')
		const forecastTemperatureBox = createElement('div', 'forecast-item_temperature')
		const forecastTemperatureCaption = document.createElement('span')
		const forecastTemperature = createElement('span', 'temperature')
		const forecastTemperatureFeelsBox = createElement('div', 'forecast-item_temperature')
		const forecastTemperatureFeelsCaption = document.createElement('span')
		const forecastTemperatureFeelsLike = createElement('span', 'temperature')
		const forecastWeatherType = createElement('div', 'forecast-item_weather-type')
		const forecastWeatherIconBox = createElement('div', 'forecast-item_weather-icon')
		const forecastWeatherIcon = document.createElement('img')

		forecastItem.append(forecastHeader)
		forecastItem.append(forecastInfo)
		forecastHeader.append(forecastDate)
		forecastHeader.append(forecastTime)
		forecastInfo.append(forecastTemperatures)
		forecastInfo.append(forecastWeatherTypeBox)
		forecastTemperatures.append(forecastTemperatureBox)
		forecastTemperatureBox.append(forecastTemperatureCaption)
		forecastTemperatureBox.append(forecastTemperature)
		forecastTemperatures.append(forecastTemperatureFeelsBox)
		forecastTemperatureFeelsBox.append(forecastTemperatureFeelsCaption)
		forecastTemperatureFeelsBox.append(forecastTemperatureFeelsLike)
		forecastWeatherTypeBox.append(forecastWeatherType)
		forecastWeatherTypeBox.append(forecastWeatherIconBox)
		forecastWeatherIconBox.append(forecastWeatherIcon)

		forecastDate.textContent = weatherData.day
		forecastTime.textContent = weatherData.time
		forecastTemperature.textContent = weatherData.temp
		forecastTemperatureFeelsLike.textContent = weatherData.tempFeelsLike
		forecastWeatherType.textContent = weatherData.weatherType
		forecastWeatherIcon.src = getIconUrl(weatherData.weatherIcon)

		forecastTemperatureCaption.textContent = 'Temperature:'
		forecastTemperatureFeelsCaption.textContent = 'Feels like:'

		ELEMENTS.TABS.FORECAST.LIST.append(forecastItem)
	})
}

export const renderLocationsList = citiesArray => {
	citiesArray.forEach(location => {
		const locationElement = document.createElement('div')
		const locationName = document.createElement('span')
		const removeButton = document.createElement('button')

		locationElement.classList.add('locations_item')
		locationName.classList.add('locations_city')
		removeButton.classList.add('locations_remove')
		locationName.textContent = location

		locationElement.append(locationName)
		locationElement.append(removeButton)

		locationName.addEventListener('click', async () => {
			renderNowTab(await getWeatherData(location))
			renderDetailsTab(await getWeatherData(location))
			clearForecastList()
			renderForecastTab(await getForecastData(location))
		})
		
		removeButton.addEventListener('click', () => {
			removeCityFromFavoriteList(location)
			clearLocationsList()
			renderLocationsList(favoriteCitiesList)
			addCitiesInLocalStorage([...favoriteCitiesList])
		})

		ELEMENTS.LOCATIONS_LIST.append(locationElement)
	})
}

export const clearForecastList = () => {
	const forecastItems = document.querySelectorAll('.forecast-item')
	forecastItems.forEach(item => item.remove())
}

export const clearLocationsList = () => {
	const locations = document.querySelectorAll('.locations_item')
	locations.forEach(location => location.remove())
}