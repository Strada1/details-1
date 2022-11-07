import Cookies from "js-cookie";

const cityAll = new Set(localGet());
const CITYNAME = localGetNow();
function localSet() {
  localStorage.setItem("likedCity", JSON.stringify([...cityAll]));
}

function localGet() {
  if (localStorage.getItem("likedCity") == null) {
    return new Set();
  } else {
    return JSON.parse(localStorage.getItem("likedCity"));
  }
}

function CookieSet() {
  Cookies.set("CityNow", JSON.stringify(CITYNAME));
}

function localGetNow() {
  if (Cookies.get("CityNow") == null) {
    return {};
  } else {
    return JSON.parse(Cookies.get("CityNow"));
  }
}

const localОption = {
  localStorage: localStorage,
  sessionStorage: sessionStorage,
};

class Storage {
  constructor(key) {
    this.key = key ?? "defaultKey",
    this.storage = localОption.localStorage
  }
  get() {
    return JSON.parse(this.storage.getItem(this.key));
  }
  set(value) {
    this.storage.setItem(this.key, JSON.stringify(value));
  }
  clear() {
    this.storage.removeItem(this.key);
  }
  isEmpty() {
    return this.get() ? false : true;
  }
}



export { cityAll, localSet, CookieSet, CITYNAME, Storage, localОption };
