import { ELEMENTS } from "./value.js";

import { currentCity, getCurrent } from "./storage.js";
const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";

ELEMENTS.links.forEach(function (element) {
	element.addEventListener("click", function (e) {
		e.preventDefault();
		link(element);
	});
});
function link(el) {
	if (el.dataset.id) {
		ELEMENTS.items.forEach(function (item) {
			if (el.dataset.id === item.getAttribute("id")) {
				item.classList.add("active");
				ELEMENTS.links.forEach((elem) => elem.classList.remove("active"));
				el.classList.add("active");
			} else {
				item.classList.remove("active");
			}
		});
	}
}

let array = new Set();
ELEMENTS.input.addEventListener("change", function () {
	currentCity("city", ELEMENTS.input.value);
	req();
});

window.addEventListener("load", function () {
	req(getCurrent("city"));
});
function req(city = ELEMENTS.input.value) {
	let url = `${serverUrl}?q=${city}&appid=${apiKey}&units=metric`;
	fetch(url)
		.then((response) => response.json())
		.then((result) => {
			console.log(result);
			createTown(result);
		});
}

function enumeration(item, value) {
	item.forEach((item) => (item.textContent = value));
	return;
}

function createTown(info) {
	let town = info.name;
	enumeration(ELEMENTS.nameTown, town);
	let temperature = parseInt(info.main.temp);
	enumeration(ELEMENTS.temperatureTown, temperature);
	ELEMENTS.iconsMain.src = `http://openweathermap.org/img/wn/${info.weather[0]["icon"]}@4x.png`;
	let weather = info.weather[0].main;
	ELEMENTS.weatherList.textContent = weather;
	let feelslike = parseInt(info.main.feels_like);
	enumeration(ELEMENTS.feelsList, feelslike);
	ELEMENTS.sunriseList.textContent = sunriseTime(info.sys.sunrise);
	ELEMENTS.sunsetList.textContent = sunriseTime(info.sys.sunset);
}

function sunriseTime(sunriseValue) {
	let resultTime = new Date(sunriseValue * 1000);
	resultTime = resultTime.toLocaleTimeString();
	return resultTime;
}

ELEMENTS.favoriteBtn.addEventListener("click", favoritesBtn);
function favoritesBtn() {
	let town = this.parentNode.querySelector(".weather__item--name").textContent;
	array.add(town);
	currentCity("favorite", [...array]);
	render(array);
}
if (getCurrent("favorite")) {
	console.log(localStorage.favorite);
	array = new Set(getCurrent("favorite"));
}
console.log(array);

function createLi(city) {
	let li = document.createElement("li");
	let btn = document.createElement("button");
	btn.className = "click";
	btn.textContent = "Click";
	btn.dataset.town = city;
	btn.addEventListener("click", function () {
		if (array.has(btn.dataset.town)) {
			console.log(city);
			array.delete(btn.dataset.town);
			console.log(array);
		}
		currentCity("favorite", [...array]);
		render(array);
	});
	li.textContent = city;
	li.dataset.town = city;
	li.append(btn);
	ELEMENTS.locationList.appendChild(li);
	li.addEventListener("click", function () {
		let town = this.dataset.town;
		req(town);
	});
}

function render(arr) {
	ELEMENTS.locationList.innerHTML = "";
	arr.forEach(function (item) {
		createLi(item);
	});
}
render(array);
