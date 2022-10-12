function currentCity(localName, city) {
	localStorage.setItem(localName, JSON.stringify(city));
}
function getCurrent(currentCityName) {
	let current = JSON.parse(localStorage.getItem(currentCityName));
	return current;
}

export { currentCity, getCurrent };
