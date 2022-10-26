import { UI, UI_NOW, renderFavoriteCities } from './UI';
import {
  getCityWeather,
  getWeatherFavoriteList,
} from './requests';
import { checkInput } from './hepls';
import {
  favoriteCities,
  addFavoriteCitDatabase,
  deleteCitiDatabase,
} from './favorite-cities-db';
import { getCurrentCityLocalStorage, renderLocalStorage } from './localStorage';

function getCityName(event) {
  event.preventDefault();
  const input = event.currentTarget.querySelector('input');
  const inputText = input.value;
  if (!checkInput(inputText)) {
    return;
  }
  getCityWeather(inputText);
  event.currentTarget.reset();
}

UI.FORM.addEventListener('submit', (event) => getCityName(event));

UI_NOW.ADD_FAVORITE_ICON.addEventListener('click', () => {
  addFavoriteCitDatabase(UI_NOW.CURRENT_CITY.textContent);
  renderFavoriteCities(favoriteCities);
});

UI.FAVORITE_CITIES_LIST.addEventListener('click', (event) => deleteCitiDatabase(event));
UI.FAVORITE_CITIES_LIST.addEventListener('click', (event) => getWeatherFavoriteList(event));

getCurrentCityLocalStorage(getCityWeather);
renderLocalStorage(addFavoriteCitDatabase);
renderFavoriteCities(favoriteCities);
