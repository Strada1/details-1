import { format} from 'date-fns'
import { tabs } from './tabs.js'
import { ELEMENTS, renderNowTab, renderDetailsTab, renderForecastTab, clearLocationsList, renderLocationsList, clearForecastList } from './view.js'
import { favoriteCitiesList, addCityInFavoriteList } from './favoriteCities.js';
import { addCitiesInLocalStorage } from './localStorage.js';
import { getUrl, DATA_TYPE } from './server.js'
import { ApiError, NotFound, ReadError, ERROR_CODE } from './error.js';

const CITY_ON_LOAD = [...favoriteCitiesList].at(-1) ?? 'New York'

const fetchData = async url => {
	try {
		const response = await fetch(url)
		const body = await response.json()

		switch (Number(body.cod)) {
			case ERROR_CODE.API_KEY:
				throw new ApiError(body.message)
			case ERROR_CODE.NOT_FOUND:
				throw new NotFound(body.message)
		}

		return body

	} catch (e) {
		if (e instanceof NotFound) {
			throw new ReadError('Ошибка поиска', e)
		} else if (e instanceof ApiError) {
			throw new ReadError('Ошибка api', e)
		} else {
			throw e
		}
	}
}

export const getWeatherData = async cityName => {
	try {
		const data = await fetchData(getUrl(cityName, DATA_TYPE.WEATHER))

		const weatherData = {
			cityName: data.name,
			temp: Math.round(data.main.temp),
			tempFeelsLike: Math.round(data.main.feels_like),
			type: data.weather[0].main,
			iconId: data.weather[0].icon,
			sunriseTime: format(new Date(data.sys.sunrise * 1000), "HH:mm"),
			sunsetTime: format(new Date(data.sys.sunset * 1000), "HH:mm")
		}

		return weatherData
	} catch (e) {
		if (e instanceof ReadError) {
			console.error(`Исходящая ошибка ${e.cause}`)
		}
	}
}

export const getForecastData = async cityName => {
	try {
		const data = await fetchData(getUrl(cityName, DATA_TYPE.FORECAST))

		const forecastData = {
			cityName: data.city.name,
			list: []
		}

		data.list.forEach(item => {
			const forecastItem = {
				temp: Math.round(item.main.temp),
				tempFeelsLike: Math.round(item.main.feels_like),
				weatherIcon: item.weather[0].icon,
				weatherType: item.weather[0].main,
				day: format(new Date(item.dt * 1000), "dd LLLL"),
				time: format(new Date(item.dt * 1000), "HH:mm")
			}

			forecastData.list.push(forecastItem)
		})

		return forecastData
	} catch (e) {
		if (e instanceof ReadError) {
			console.error(`Исходящая ошибка ${e.cause}`)
		} else {
			throw e
		}
	}
}

const submitHandler = async e => {
	e.preventDefault()
	const cityName = ELEMENTS.INPUT.value

	if (!cityName) return

	renderNowTab(await getWeatherData(cityName))
	renderDetailsTab(await getWeatherData(cityName))
	clearForecastList()
	renderForecastTab(await getForecastData(cityName))

	ELEMENTS.SEARCH_FORM.reset()
}

const addToFavoriteListButtonClickHandler = () => {
	const city = ELEMENTS.LOCATION.textContent
	addCityInFavoriteList(city)
	clearLocationsList()
	renderLocationsList(favoriteCitiesList)
	addCitiesInLocalStorage([...favoriteCitiesList])
}

tabs('.weather_display', '.tab-button', '.tab-content', 'tab-button--active');

(async () => {
	renderNowTab(await getWeatherData(CITY_ON_LOAD))
	renderDetailsTab(await getWeatherData(CITY_ON_LOAD))
	renderForecastTab(await getForecastData(CITY_ON_LOAD))
})()

renderLocationsList(favoriteCitiesList)

ELEMENTS.SEARCH_FORM.addEventListener('submit', submitHandler)
ELEMENTS.ADD_TO_FAVORITE_LIST_BUTTON.addEventListener('click', addToFavoriteListButtonClickHandler)