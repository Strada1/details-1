export const LOCAL_STORAGE = {
  HISTORY_MESSAGE: 'historyMessage',
};

export function setLocalStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

export function getLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name));
}
