import Cookies from 'js-cookie';

const CURRENT_LOCATION_COOKIE_NAME = 'currentLocation';
const LOCATION_MAX_AGE = new Date(new Date().getTime() + 60 * 60 * 1000);


const getCurrentLocationFromCookie = () => Cookies.get(CURRENT_LOCATION_COOKIE_NAME);


const setCurrentLocationToCookie = (locationName) => Cookies.set(
  CURRENT_LOCATION_COOKIE_NAME,
  locationName,
  {'expires': LOCATION_MAX_AGE, samesite: 'lax'});


export { setCurrentLocationToCookie, getCurrentLocationFromCookie };
