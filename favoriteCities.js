export const favoriteCitiesList = new Set(localStorage.cities ? JSON.parse(localStorage.cities) : '')

export const addCityInFavoriteList = cityName => {
	favoriteCitiesList.add(cityName)
}

export const removeCityFromFavoriteList = cityName => {
	favoriteCitiesList.delete(cityName)
}