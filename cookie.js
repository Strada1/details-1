import Cookies from "js-cookie";

export function cookieSet(key, value) {
    Cookies.set(key, JSON.stringify(value));
  }
  
  export function cookieGet(key) {
    if (Cookies.get(key) == null) {
      return {};
    } else {
      return JSON.parse(Cookies.get(key));
    }
  }