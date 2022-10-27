const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const serverForecastUrl = 'http://api.openweathermap.org/data/2.5/forecast';
const apiKey = '7241b7709d450b31ffd537fc2363b110';

export async function getData(cityName) {
	try {
		const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
		const data = await fetch(url);

		return data.json();
	} catch (error) {
		alert(error.name, error.message);
	}
}

export async function getDataForecast(cityName) {
	try {
		const url = `${serverForecastUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
		const data = await fetch(url);

		return data.json();
	} catch (error) {
		alert(`${error.name}: ${error.message}`);
	}
}
