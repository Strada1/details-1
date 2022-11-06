import Cookies from 'js-cookie';

class Storage {
  constructor(name, storage, defaultValue) {
    this.name = name;
    this.storage = storage;
    this.defaultValue = defaultValue;
    this.isStorage();
  }

  isStorage() {
    this.storage === 'local' ? this.storage = true : this.storage = false;
  }

  get() {
    return (this.storage) ? localStorage.getItem(this.name) : Cookies.get(this.name);
  }

  set(value = this.defaultValue) {
    this.storage ? localStorage.setItem(this.name, value) : Cookies.set(this.name, value);
  }

  clear() {
    this.storage ? localStorage.removeItem(this.name) : Cookies.remove(this.name);
  }

  isEmpty() {
    if (this.storage) {
      return localStorage.getItem(this.name) ?? true;
    }
    return Cookies.get(this.name) ?? true;
  }
}

const names = new Storage('names', 'local');
const age = new Storage('age', 'cookie', 15);
