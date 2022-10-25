import { storage } from './local-storage.js';


const findLocation = (name) => {
  const locationsSet = new Set(getLocationsList());
  return locationsSet.has(name);
};


const deleteLocation = (name) => {
  const locationsSet = new Set(getLocationsList());

  locationsSet.delete(name);
  storage.saveFavouriteLocations([...locationsSet]);
};


const addLocation = (name) => {
  const locationsSet = new Set(getLocationsList());

  locationsSet.add(name);
  storage.saveFavouriteLocations([...locationsSet]);
};


const getLocationsList = () => {
  return storage.getFavouriteLocations();
};


export { addLocation, deleteLocation, getLocationsList, findLocation };
