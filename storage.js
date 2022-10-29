import Cookies from "js-cookie";
// new Set(localGet());

let cityAll = new Set(localGet());
let CITYNAME = localGetNow();

function localSet() {
  localStorage.setItem("likedCity", JSON.stringify([...cityAll]));
   localStorage.setItem("CityNow", JSON.stringify(CITYNAME));
}

function localGet() {
  if (localStorage.getItem("likedCity") !== null) {
    return JSON.parse(localStorage.getItem("likedCity"));
  } else {
    return {};
  }
}

function CookieSet() {
    Cookies.set("CityNow", JSON.stringify(CITYNAME));
}


function CookieSet2() {
  Cookies.set("forecastNow", JSON.stringify(CITYNAME));
}


function localGetNow() {
    return JSON.parse(Cookies.get("CityNow"));
}

export { cityAll, localSet,CookieSet,CookieSet2, CITYNAME };
