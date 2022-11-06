class Storage {
  constructor(name, storage, defaultValue) {
    this.name = name;
    this.storage = storage;
    this.defaultValue = defaultValue;
    this.isStorage();
  }

  isStorage() {
    if (this.storage === 'local') {
      this.storage = localStorage;
    } else {
      this.storage = sessionStorage;
    }
  }

  get() {
    return this.storage.getItem(this.name);
  }

  set(value = this.defaultValue) {
    this.storage.setItem(this.name, value);
  }

  clear() {
    this.storage.removeItem(this.name);
  }

  isEmpty() {
    return this.storage.getItem(this.name) === 'undefined'
      || this.storage.getItem(this.name) === 'null';
  }
}

const names = new Storage('names', 'local');

const age = new Storage('age', 'session', 15);
