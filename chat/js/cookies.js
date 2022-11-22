const BEARER_COOKIE_NAME = 'Bearer';
const DEFAULT_COOKIE_MAX_AGE = 60 * 60 * 24;


const setCookie = (name, value, options = {}) => {
  options = {
    path: '/',
    'max-age': DEFAULT_COOKIE_MAX_AGE,
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
};


const getCookie = (name) => {
  const matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

const deleteCookie = (name) => {
  setCookie(name, '', {
    'max-age': -1
  })
}

export {
  setCookie,
  getCookie,
  deleteCookie,
  BEARER_COOKIE_NAME
};
