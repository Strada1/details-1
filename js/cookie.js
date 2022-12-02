import Cookies from "js-cookie";

export function cookieSet(key, value) {
  try{
  Cookies.set(key, JSON.stringify(value));
  } catch(error) {
    console.log(error.message)
  }
}

export function cookieGet(key) {
  try{
    if (Cookies.get(key) == null) {
      return false;
    } else {
      return JSON.parse(Cookies.get(key));
    }
  } catch(error) {
    console.log(error.message)
  }
  }