let ELEMENTS = {
	items: document.querySelectorAll(".weather__item"),
	links: document.querySelectorAll(".weather__link"),
	nameTown: document.querySelectorAll(".weather__item--name"),
	temperatureTown: document.querySelectorAll(".temperature span"),
	iconsMain: document.querySelector(".weather__item--icon img"),
	input: document.querySelector(".weather__search input"),
	favoriteBtn: document.querySelector(".weather__favorites"),
	locationList: document.querySelector(".location__list"),
	close: document.querySelectorAll(".location__list .click"),
	weatherList: document.querySelector(".weather span"),
	feelsList: document.querySelectorAll(".feels span"),
	sunriseList: document.querySelector(".sunrise span"),
	sunsetList: document.querySelector(".sunset span"),
};

export { ELEMENTS };
