import { forecastItemTemplate } from './templates.js';
import { setElement } from './render.js';
import { Location } from './get-data.js';
import { getTimeStringWithoutSeconds, getDateString } from './util.js';

const forecastContainerElement = document.getElementById('forecast');


const getForecastItemCard = (forecastDataItem) => {
  const forecastItemElement = forecastItemTemplate.cloneNode(true);
  const locationDataItem = new Location(forecastDataItem);

  setElement({
    parentNode: forecastItemElement,
    selector: '.forecast-block__date',
    textContent: getDateString(locationDataItem.date)
  });

  setElement({
    parentNode: forecastItemElement,
    selector: '.forecast-block__time',
    textContent: getTimeStringWithoutSeconds(locationDataItem.date)
  });

  setElement({
    parentNode: forecastItemElement,
    selector: '.forecast-block__temperature-item--temperature span',
    textContent: locationDataItem.temperature
  });

  setElement({
    parentNode: forecastItemElement,
    selector: '.forecast-block__temperature-item--feels-like span',
    textContent: locationDataItem.feelsLike
  });

  setElement({
    parentNode: forecastItemElement,
    selector: '.forecast-block__weather-title',
    textContent: locationDataItem.title
  });

  setElement({
    parentNode: forecastItemElement,
    selector: '.forecast-block__weather-picture',
    attributes:
      {
        src: locationDataItem.iconSource,
        alt: locationDataItem.description
      }
  });
  return forecastItemElement;
};


const getForecastItemsFragment = (forecastListItems) => {
  const forecastItemsFragment = document.createDocumentFragment();

  forecastListItems.forEach((forecastListItem) => {
    const forecastItemCardElement = getForecastItemCard(forecastListItem);
    forecastItemsFragment.append(forecastItemCardElement);
  });

  return forecastItemsFragment;
};


const createWrapper = (forecastListItems) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.classList.add('forecast-block__wrapper');

  const forecastItemsFragment = getForecastItemsFragment(forecastListItems);
  wrapperElement.append(forecastItemsFragment);

  return wrapperElement;
};


const onSuccessGetForecast = (data) => {
  const forecastTitleElement = forecastContainerElement.querySelector('.forecast-block__title');
  const forecastWrapperElement = forecastContainerElement.querySelector('.forecast-block__wrapper');

  forecastTitleElement.textContent = data.city.name;

  const forecastListItems = data.list;
  const forecastNewWrapperElement = createWrapper(forecastListItems);

  forecastWrapperElement.replaceWith(forecastNewWrapperElement);
};

export { onSuccessGetForecast };
