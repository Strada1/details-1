const SERVER_URL = 'http://api.openweathermap.org/data/2.5/';
export const DATA_TYPE = {
	WEATHER: 'weather',
	FORECAST: 'forecast'
}
const API_KEY = '2cb77942f530dd0240db1045c0eb4594';
const UNIT_CELSIUS = 'metric'

export const getUrl = (cityName, dataType) => {
	return `${SERVER_URL}${dataType}?q=${cityName}&appid=${API_KEY}&units=${UNIT_CELSIUS}`
}

export const getIconUrl = iconId => {
	return `http://openweathermap.org/img/wn/${iconId}@2x.png`
}