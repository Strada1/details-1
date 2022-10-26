const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const serverForecastUrl = 'http://api.openweathermap.org/data/2.5/forecast';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

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
