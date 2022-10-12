import { getData } from './fetch.js';

import {
	inputSearch,
	list,
	favoriteCity,
	favoirtesCities,
	navNow,
} from './const/const.js';

import {
	addCurrentCity,
	saveFavoriteCity,
	getFavoriteCities,
	deleteCity,
	getCurrentCity
} from './localStorage.js';
	
import { renderNow } from './renderNow.js';
import { renderDetails } from './renderDetails.js';

function addClassHide() {
	document.querySelectorAll('.main_weather__city')
		.forEach(element => element.classList.add('hide'));
}

function removeClassActive() {
	const tabs = document.querySelectorAll('.navigation');

	tabs.forEach((tab) => {
		tab.classList.remove('active');
	})
}

function render() {
	let favoriteCityList = Array.from(new Set(getFavoriteCities()));

	if (favoriteCityList) {
		favoriteCityList.forEach(favorite => {
			createCityItem(favorite.name);
		
			const deleteButton = favoirtesCities.querySelector('.delete');
			const cities = favoirtesCities.querySelectorAll('.add__city');
		
			showDetails(cities);
			deleteFavorite(deleteButton, favoriteCity.textContent);
			})
	}
}

function createCityItem(name) {
	return favoirtesCities.insertAdjacentHTML('afterbegin',
		`<div class="item">
		<li class="add__city">${name}</li>
		<img class="delete" src="./css/img/delete.png" alt="Delete" width="20" height="20">
	</div>`
	);
}

function addToFavorite(city, arr) {
	const item = getData(city);

	item.then(data => {
		Array.from(arr.add(data));
		console.log(Array.from(arr))
		saveFavoriteCity(data);
	});
}

function showDetails(nodeList) {
	return nodeList.forEach(item => {
		item.addEventListener('click', () => {
			const details = getData(item.textContent);
			
			if (!navNow.classList.contains('active') || navNow.classList.contains('active')) {
				renderDetails(details);
				details.then(data => addCurrentCity(data.name))
			}
	 })
 })
}

function deleteFavorite(item, city) {
	item.addEventListener('click', (evt) => {
		if (!list.length) {
			let favoriteCityList = Array.from(new Set(getFavoriteCities()));

			favoriteCityList.forEach(obj => {
				if (obj.name === evt.target.previousElementSibling.innerText) {
					list.delete(obj);
					evt.target.parentElement.remove();
					deleteCity(city);
				}
			})
		}
	})
}

function submit(evt) {
	evt.preventDefault();
	const cityName = inputSearch.value;
	const data = getData(cityName);
	
	renderNow(data);
	addCurrentCity(favoriteCity.textContent);
	inputSearch.value = '';
}

function getCurrentCityName(element) {
	addCurrentCity(element.textContent);

	const currentCity = getCurrentCity();
	const name = getData(currentCity);

	return name;
}

export {
	addToFavorite,
	showDetails,
	deleteFavorite,
	submit,
	renderNow,
	render,
	createCityItem,
	renderDetails,
	addClassHide,
	removeClassActive,
	getCurrentCityName
}