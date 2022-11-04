const defaultValue = 'names';
const STORAGE = {
  LOCAL: 'local storage',
  SESSION: 'session storage',
};

class Storage {
  constructor(key = defaultValue, storage = STORAGE.LOCAL) {
    this.key = key;
    this.storage = storage;
  }

  set(value) {
    if (this.storage === STORAGE.LOCAL) {
      localStorage.setItem(this.key, value);
      return;
    }
    sessionStorage.setItem(this.key, value);
  }

  get() {
    if (this.storage === STORAGE.LOCAL) return localStorage.getItem(this.key);
    return sessionStorage.getItem(this.key);
  }

  clear() {
    if (this.storage === STORAGE.LOCAL) {
      localStorage.removeItem(this.key);
      return;
    }
    sessionStorage.removeItem(this.key);
  }

  isEmpty() {
    const value = this.get();
    if (value === null || value === undefined) return true;
    return false;
  }
}

const names = new Storage('names');
names.set('Kate');
names.get();
names.clear();
names.set('Marina');
names.isEmpty();
