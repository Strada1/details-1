import {
	form,
	favoriteCity,
	favoriteButton,
	favoirtesCities,
	searchButton,
	list,
	navDetail,
	navNow,
	navForecast,
	headerDetails,
} from './src/js/const/const.js';

import {
	addToFavorite,
	deleteFavorite,
	submit,
	showDetails,
	render,
	createCityItem,
	getCurrentCityName,
} from './src/js/more.js';

import { getCurrentCity } from './src/js/localStorage.js';
import { getData, getDataForecast } from './src/js/fetch.js';
import { renderNow } from './src/js/renderNow.js';
import { renderDetails } from './src/js/renderDetails.js';
import { renderForecast } from './src/js/renderForecast.js';

document.addEventListener('DOMContentLoaded', () => {
	const currentCity = getCurrentCity();

	if (currentCity) {
		const city = getData(currentCity);
		renderNow(city);
		render();
	} else {
		const city = getData(favoriteCity.textContent);
		renderNow(city);
	}
});

form.addEventListener('submit', evt => {
	submit(evt);
});

searchButton.addEventListener('submit', evt => {
	submit(evt);
});

favoriteButton.addEventListener('click', () => {
	createCityItem(favoriteCity.textContent);

	const deleteButton = favoirtesCities.querySelector('.delete');
	const cities = favoirtesCities.querySelectorAll('.add__city');

	addToFavorite(favoriteCity.textContent, list);
	showDetails(cities);
	deleteFavorite(deleteButton, favoriteCity.textContent);
});

navNow.addEventListener('click', () => {
	const cityName = getCurrentCityName(headerDetails);
	renderNow(cityName);
});

navDetail.addEventListener('click', () => {
	const cityName = getCurrentCityName(favoriteCity);
	renderDetails(cityName);
});

navForecast.addEventListener('click', () => {
	const currentCity = getCurrentCity();
	const name = getDataForecast(currentCity);

	renderForecast(name);
});
