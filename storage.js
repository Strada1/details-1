import Cookies from "js-cookie";
// new Set(localGet());

let cityAll = new Set(localGet());
let CITYNAME = localGetNow();

function localSet() {
  localStorage.setItem("likedCity", JSON.stringify([...cityAll]));
}

function localGet() {
  if (localStorage.getItem("likedCity") == null) {
    return {};
  } else {
    return JSON.parse(localStorage.getItem("likedCity"));
  }
}

function CookieSet() {
  Cookies.set("CityNow", JSON.stringify(CITYNAME));
}

function localGetNow() {
  if (Cookies.get("CityNow") == null) {
    return {}
  } else {
    return JSON.parse(Cookies.get("CityNow"));
  }
}

export { cityAll, localSet, CookieSet, CITYNAME };
