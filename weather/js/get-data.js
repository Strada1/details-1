import { ErrorList, ReadError, ConnectionError, GetDataError } from './error.js';


const SERVER_URL = 'https://api.openweathermap.org/data/2.5/';
const SERVICE = {
  WEATHER: 'weather',
  FORECAST: 'forecast'
};
const WEATHER_ICON_URL = 'https://openweathermap.org/img/wn/';
const WEATHER_ICON_RESOLUTION = '4x';
const WEATHER_ICON_EXTENSION = 'png';
const API_KEY = '7da3db32f6ee2f5673b87abe7908de3d'; //'f660a2fb1e4bad108d6160b7f58c555f';
const UNITS = 'metric';


class Location {
  constructor (data) {
    this.name = data.name;
    this.temperature = Math.round(data.main.temp);
    this.feelsLike = Math.round(data.main.feels_like);
    this.description = data.weather[0].description;
    this.title = data.weather[0].main;
    this.sunrise = data.sys.sunrise;
    this.sunset = data.sys.sunset;
    this.iconSource = `${WEATHER_ICON_URL}${data.weather[0].icon}@${WEATHER_ICON_RESOLUTION}.${WEATHER_ICON_EXTENSION}`;
    this.date = data.dt;
  }
}

//const getLocationData = (data) => {throw new Error('Ошибка')};
const getLocationData = (data) => {
  const location = new Location(data);

  if (!location.name) {
    throw new GetDataError('name');
  }

  if (location.temperature === '') {
    throw new GetDataError('temperature');
  }

  if (location.feelsLike === '') {
    throw new GetDataError('feelsLike');
  }

  if (!location.description) {
    throw new GetDataError('description');
  }

  if (!location.sunrise) {
    throw new GetDataError('sunrise');
  }

  if (!location.sunset) {
    throw new GetDataError('sunset');
  }

  if (!location.iconSource) {
    throw new GetDataError('iconSource');
  }

  return location;
};


const getLocationName = (data) => data.name;


const checkResponse = (response, service) => {
  if (!response.ok) {
    throw new ConnectionError(response.status, response.ok, service);
  }
};


const getData = async (service, onSuccess, onFail, cityName = '', intervalsCount = 24) => {
  try {
    let url ='';

    switch (service) {
      case SERVICE.WEATHER:
        url = `${SERVER_URL}${service}?q=${cityName}&appid=${API_KEY}&units=${UNITS}`;
        break;
      case SERVICE.FORECAST:
        url = `${SERVER_URL}${service}?q=${cityName}&appid=${API_KEY}&units=${UNITS}&cnt=${intervalsCount}`;
        break;
      default:
        url = `${SERVER_URL}${service}?q=${cityName}&appid=${API_KEY}&units=${UNITS}`;
        break;
    }

    const response = await fetch(url);
    console(response);

    checkResponse(response, service);

    const result = await response.json();

    onSuccess(result);
  } catch (error) {
    let readError;

    if (error instanceof ConnectionError) {
      readError = new ReadError(ErrorList.CONNECTION_DATA_ERROR, error);
    } else {
      readError = new ReadError(ErrorList.UNKNOWN_ERROR, error);
    }

    onFail(readError.message);
  }
};


export {
  getData,
  getLocationName,
  getLocationData,
  SERVICE,
  Location
};
