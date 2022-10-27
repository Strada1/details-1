const CURRENT_LOCATION_COOKIE_NAME = 'currentLocation';
const LOCATION_MAX_AGE = 3600;


const getCurrentLocationFromCookie = () => getCookie(CURRENT_LOCATION_COOKIE_NAME);


const setCurrentLocationToCookie = (locationName) => {
  setCookie(CURRENT_LOCATION_COOKIE_NAME, locationName, {'max-age': LOCATION_MAX_AGE, samesite: 'lax'});
};


const setCookie = (name, value, options = {}) => {
  options = {
    path: '/',

    ...options
  };

  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  for (const optionName of Object.keys(options)) {
    cookieString += `; ${optionName}`;

    const optionValue = options[optionName];

    if (optionValue !== true) {
      cookieString += `=${optionValue}`;
    }
  }

  document.cookie = cookieString;
};


const getCookie = (name) => {
  const cookies = document.cookie.split(';');
  const cookie = cookies.find((cookie) => cookie.includes( encodeURIComponent(name) ));

  return cookie ? cookie.split('=')[1] : '';
};


export { setCurrentLocationToCookie, getCurrentLocationFromCookie };
