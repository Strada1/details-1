import { format } from 'date-fns';
import { UIELEMENTS } from './uielements';
import { saveFavoriteCities, getFavoriteCities } from './localstorage';
import { getWeatherPromise } from './getWeatherPromise';
import { renderDetails } from './renderDetails';
import MyError from './customError';
import myLikeImg from '../img/like.png';
import myRemoveImg from '../img/remove.png';

function AddFavoriteCities(list) {
  this.cityName = list;
}

function likeLocation() {
  try {
    const list = new Set(getFavoriteCities());
    const likeCity = document.querySelector('.city-name');

    list.forEach((item) => {
      if (likeCity.textContent === item.cityName) {
        throw new MyError(`${likeCity.textContent}  уже существует в избранных `);
      }
    });

    const favoriteCities = new AddFavoriteCities(likeCity.textContent);
    list.add(favoriteCities);
    saveFavoriteCities(list);
    renderLikeList();
  } catch (error) {
    console.log(error.message);
  }
}

function renderNow(inputCity) {
  const divRemove = document.querySelector('#divRemove');

  inputCity
    .then((data) => {
      const temperature = data.main.temp;
      const tempCount = `${temperature.toFixed(0)}°`;
      const serverImgUrl = 'http://openweathermap.org/img/wn/';
      const src = `${serverImgUrl}${data.weather[0].icon}@2x.png`;

      const spanNowDate = document.createElement('span');
      spanNowDate.className = 'nowDate';
      spanNowDate.textContent = `${format(new Date(), 'h:mm')}`;
      divRemove.append(spanNowDate);

      const span = document.createElement('span');
      span.className = 'count';
      span.textContent = tempCount;
      divRemove.append(span);

      const img = document.createElement('img');
      img.className = 'icon-cloud';
      img.src = src;
      divRemove.append(img);

      const cityLike = document.createElement('div');
      cityLike.className = 'city-like';
      divRemove.append(cityLike);

      const cityName = document.createElement('span');
      cityName.className = 'city-name';
      cityName.id = 'nowIdCity';
      cityName.textContent = data.name;
      cityLike.appendChild(cityName);

      const likeImg = document.createElement('img');
      likeImg.className = 'like';
      likeImg.src = myLikeImg;
      likeImg.id = 'nowIdLike';
      cityLike.appendChild(likeImg);

      const likeLocations = document.querySelector('#nowIdLike');
      likeLocations.addEventListener('click', likeLocation);
    })
    .catch((error) => console.log(error.message));
}

UIELEMENTS.form_input.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputCity = getWeatherPromise(UIELEMENTS.cityName.value.split(' ').join(''));
  const divRemove = document.querySelector('#divRemove');

  UIELEMENTS.form_input.reset();
  renderNow(inputCity);
  renderDetails(inputCity);
  divRemove.innerHTML = '';
});

function renderLikeList() {
  const locations = document.querySelector('.locations');
  const list = getFavoriteCities();
  locations.innerHTML = '';

  list.forEach((el) => {
    const selectLocation = document.createElement('div');
    selectLocation.className = 'selectLocation';

    const div = document.createElement('div');
    div.className = 'city-name';
    div.id = `divId${el.cityName}`;
    div.textContent = el.cityName;

    const remove = document.createElement('img');
    remove.className = 'removeLocation';
    remove.src = myRemoveImg;
    remove.id = `removeId${el.cityName}`;
    selectLocation.appendChild(div);
    selectLocation.appendChild(remove);
    locations.append(selectLocation);

    remove.addEventListener('click', () => {
      const newList = list.filter((item) => (item !== el));
      saveFavoriteCities(newList);
      renderLikeList();
    });

    div.addEventListener('click', () => {
      const divRemove = document.querySelector('#divRemove');
      const inputCity = getWeatherPromise(el.cityName);
      divRemove.innerHTML = '';
      renderNow(inputCity);
      renderDetails(inputCity);
    });
  });
}

renderLikeList();