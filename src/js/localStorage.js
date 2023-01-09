export function updateCityLocalStorage(db) {
  const citiName = "cityName";
  localStorage.setItem(citiName, db);
}

export function renderLocalStorage(addDatabase) {
  const citiName = "cityName";
  const checkOldLs = localStorage.getItem(citiName);
  if (checkOldLs) {
    const oldArr = checkOldLs.split(",");
    oldArr.forEach((item) => addDatabase(item));
  }
}

export function setCurrentCityLocalStorage(cityName) {
  const currentCity = "currentCity";
  localStorage.setItem(currentCity, cityName);
}
