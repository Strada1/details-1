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

class Storage {
  constructor(key, local) {
    this.key = key ?? "defaultKey",
    this.storage = local ?? localStorage
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

const instanceClassNow = new Storage('NowCity')
const nowCity = instanceClassNow.get();

export { cityAll, localSet, CookieSet, CITYNAME, Storage, localОption, instanceClassNow, nowCity };
