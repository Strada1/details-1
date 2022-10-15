import { RequestFailed } from "./RequestFailed.js";

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
const servURL = 'http://api.openweathermap.org/data/2.5/forecast';

export async function getData(cityName) {
	try {
		const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
		const data = await fetch(url);

		if (!data.ok) {
			throw new RequestFailed(`${RequestFailed.name}: Data not received from the server, ${data.status}`);
		} else {
			return data.json();
		}		
	} catch (error) {
		throw error;
	}
}

export async function getDataForecast(cityName) {
	try {
		const url = `${servURL}?q=${cityName}&appid=${apiKey}&units=metric`;
		const data = await fetch(url);

		if (!data.ok) {
			throw new RequestFailed(`${RequestFailed.name}: Data not received from the server, ${data.status}`);
		} else {
			return data.json();
		}		
	} catch (error) {
		throw error;
	}
}