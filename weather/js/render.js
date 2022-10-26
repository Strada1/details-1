import { getTimeStringWithoutSeconds } from './util.js';
import { storage } from './local-storage.js';
import { onSuccessGetForecast } from './forecast.js';

import {
  ReadError,
  GetDataError,
  showError,
  ErrorList
} from './error.js';

import {
  blockNowTemplate,
  locationItemTemplate,
  blockDetailsTemplate
} from './templates.js';

import {
  getData,
  getLocationName,
  getLocationData,
  SERVICE
} from './get-data.js';

import {
  addLocation,
  deleteLocation,
  getLocationsList,
  findLocation
} from './added-locations.js';


const STORE = {
  currentLocationName: ''
};

const NAVIGATION_ACTIVE_LINK_CLASS_NAME = 'weather__nav-link--active';
const ADD_LOCATION_ACTIVE_BUTTON_CLASS_NAME = 'now-block__add--active';

const searchFormElement = document.querySelector('.weather__search-form');
const searchFieldElement = searchFormElement.querySelector('.weather__search-input');
const navigationElement = document.querySelector('.weather__nav');
const blockNowElement = document.querySelector('.now-block');
const blockDetailsElement = document.querySelector('.details-block');


// Хэндлер нажатия на вкладку
const onTabClick = (e) => {
  const currentLink = e.target;

  if (!currentLink.classList.contains(NAVIGATION_ACTIVE_LINK_CLASS_NAME)) {
    for(let link of navigationElement.children) {
      link.classList.remove(NAVIGATION_ACTIVE_LINK_CLASS_NAME);
    }

    currentLink.classList.add(NAVIGATION_ACTIVE_LINK_CLASS_NAME);
  }
};


// Удаление состояния --active для кнопки "Добавить в избранные"
const removeActiveClassFromAddButton = (buttonElement) => {
  buttonElement.classList.remove(ADD_LOCATION_ACTIVE_BUTTON_CLASS_NAME);
};


// Установка состояния --active для кнопки "Добавить в избанные"
const setActiveClassToAddButton = (buttonElement) => {
  buttonElement.classList.add(ADD_LOCATION_ACTIVE_BUTTON_CLASS_NAME);
};


// Хэндлер нажатия на ссылку локации в списке добавленных локаций
const onLocationLinkClick = (locationName) => {
  getData(SERVICE.WEATHER, onSuccessGetData, showError, locationName);
  getData(SERVICE.FORECAST, onSuccessGetForecast, showError, locationName);
}


const setElement = ({parentNode, selector, textContent = null, attributes = {}, dataset = {}}) => {
  const elementNode = parentNode.querySelector(selector);

  if (textContent !== null) {
    elementNode.textContent = textContent;
  }

  if (attributes) {
    for (let attributeName of Object.keys(attributes)) {
      elementNode[attributeName] = attributes[attributeName];
    }
  }

  if (dataset) {
    for (let dataName of Object.keys(dataset)) {
      elementNode.dataset[dataName] = dataset[dataName];
    }
  }

  return elementNode;
};


// Хэндлер нажатия кнопки удаления локации из списка добавленных локаций
const onLocationDeleteClick = (locationName) => {
  deleteLocation(locationName);
  renderLocations();

  const nowBlockTitleElement = document.querySelector('.now-block__title');
  const addButtonElement = document.querySelector('.now-block__add');
  const nowBlockTitle = nowBlockTitleElement.textContent;

  if (nowBlockTitle === locationName) {
    removeActiveClassFromAddButton(addButtonElement);
  }
};


// Хэндлер нажатия на список локаций.
// - Проверяет, на что нажали: название локации или кнопку "Удалить"
// - В зависимости от цели, вызывает функцию для нужного действия
const onLocationsListClick = (e) => {
  const clickedElement = e.target;

  if (clickedElement.classList.contains('weather__locations-link')) {
    e.preventDefault();
    const locationName = clickedElement.textContent;
    onLocationLinkClick(locationName);
    return;
  }

  if (clickedElement.classList.contains('weather__locations-item-delete')) {
    const locationName = clickedElement.dataset.name;
    onLocationDeleteClick(locationName);
    return;
  }
};


// Получение одного элемента списка добавленных локаций
const getLocationItem = (locationName) => {
  const locationItemElement = locationItemTemplate.cloneNode(true);

  setElement({
    parentNode: locationItemElement,
    selector: '.weather__locations-link',
    textContent: locationName
  });

  setElement({
    parentNode: locationItemElement,
    selector: '.weather__locations-item-delete',
    dataset: {name: locationName}
  });

  return locationItemElement;
};


// Получение фрагмента с элементами списка добавленных локаций
const getLocationsItemsFragment = () => {
  const locationsItemsFragment = document.createDocumentFragment();

  const locationsList = getLocationsList();

  if (locationsList && locationsList.length > 0) {
    locationsList.forEach((location) => {
      locationsItemsFragment.append(getLocationItem(location));
    });
  }

  return locationsItemsFragment;
};


// Рендер блока с избранными локациями
const renderLocations = () => {
  const locationsListElement = document.querySelector('.weather__locations-list');
  const newLocationsListElement = locationsListElement.cloneNode(false);
  const locationsItemsFragment = getLocationsItemsFragment();

  newLocationsListElement.append(locationsItemsFragment);
  newLocationsListElement.addEventListener('click', onLocationsListClick);

  locationsListElement.removeEventListener('click', onLocationsListClick);
  locationsListElement.replaceWith(newLocationsListElement);
};


const renderDetailsBlock = ({
  name,
  temperature,
  feelsLike,
  description,
  sunrise,
  sunset
}) => {
  const wrapperElement = blockDetailsTemplate.cloneNode(true);


  setElement({
    parentNode: wrapperElement,
    selector: '.details-block__title',
    textContent: name
  });

  setElement({
    parentNode: wrapperElement,
    selector: '.details-block__temperature span',
    textContent: temperature
  });

  setElement({
    parentNode: wrapperElement,
    selector: '.details-block__feels-like span',
    textContent: feelsLike
  });

  setElement({
    parentNode: wrapperElement,
    selector: '.details-block__weather span',
    textContent: description
  });

  setElement({
    parentNode: wrapperElement,
    selector: '.details-block__sunrise span',
    textContent: getTimeStringWithoutSeconds(sunrise)
  });

  setElement({
    parentNode: wrapperElement,
    selector: '.details-block__sunset span',
    textContent: getTimeStringWithoutSeconds(sunset)
  });

  blockDetailsElement
    .querySelector('.details-block__wrapper')
    .replaceWith(wrapperElement);
};


// Хэндлер нажатия на кнопку "Добавить в избранное"
const onAddButtonClick = (name) => function (e) {
  const buttonElement = this;

  if (!buttonElement.classList.contains(ADD_LOCATION_ACTIVE_BUTTON_CLASS_NAME)) {
    setActiveClassToAddButton(buttonElement);
    addLocation(name);
  } else {
    removeActiveClassFromAddButton(buttonElement);
    deleteLocation(name);
  }

  renderLocations();
};


// Рендер вкладки NOW
const renderNowBlock = ({ temperature, name, iconSource, description }) => {
  const oldTitleElement = document.querySelector('.now-block__title');
  if (oldTitleElement && oldTitleElement.textContent === name) {
    return;
  }

  const wrapperElement = blockNowTemplate.cloneNode(true);

  setElement({
    parentNode: wrapperElement,
    selector: '.now-block__temperature span',
    textContent: temperature
  });

  setElement({
    parentNode: wrapperElement,
    selector: '.now-block__title',
    textContent: name
  });

  setElement({
    parentNode: wrapperElement,
    selector: '.now-block__image',
    attributes: {src: iconSource, alt: description}
  });

  const addButtonElement = setElement({
    parentNode: wrapperElement,
    selector: '.now-block__add',
    dataset: {name: name}
  });


  if (findLocation(name)) {
    setActiveClassToAddButton(addButtonElement);
  }

  addButtonElement.addEventListener('click', onAddButtonClick(name));

  blockNowElement
    .querySelector('.now-block__wrapper')
    .replaceWith(wrapperElement);
};


// Действия при успешном получении данных с сервера
const onSuccessGetData = (data) => {
  try {
    const locationData = getLocationData(data);
    const locationName = getLocationName(data);

    renderNowBlock(locationData);
    renderDetailsBlock(locationData);
    STORE.currentLocationName = locationName;
    storage.saveCurrentLocation(locationName);
  } catch (error) {
    let readError;

    if (error instanceof GetDataError) {
      readError = new ReadError(ErrorList.GET_DATA_ERROR, error);
    } else {
      readError = new ReadError(ErrorList.UNKNOWN_ERROR, error);
    }

    showError(readError.message);
  }
};


// Хэндлер отправки данных в форме поиска локации
const onSearchFormSubmit = (e) => {
  e.preventDefault();
  const cityName = searchFieldElement.value;

  if (cityName.trim() !== '') {
    getData(SERVICE.WEATHER, onSuccessGetData, showError, cityName);
    getData(SERVICE.FORECAST, onSuccessGetForecast, showError, cityName);
    e.target.reset();
  }
};


// Установка события Submit формы поиска локации
const setSearchForm = () => searchFormElement.addEventListener('submit', onSearchFormSubmit);

// Настройка перекючения вкладок
const setTabs = () => {
  const firstTabElement = navigationElement.querySelector('#now-link');
  firstTabElement.classList.add(NAVIGATION_ACTIVE_LINK_CLASS_NAME);
  navigationElement.addEventListener('click', onTabClick);
};


const initialRender = () => {
  setTabs();
  setSearchForm();
  renderLocations();

  const currentLocationName = storage.getCurrentLocation();

  if (currentLocationName) {
    STORE.currentLocationName = currentLocationName;
    getData(SERVICE.WEATHER, onSuccessGetData, showError, currentLocationName);
    getData(SERVICE.FORECAST, onSuccessGetForecast, showError, currentLocationName);
  }
};


export { renderNowBlock, initialRender, setElement };
