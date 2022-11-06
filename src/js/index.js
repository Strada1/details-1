class Storage {
  constructor(name, storage, defaultValue) {
    this.name = name;
    this.storage = storage;
    this.defaultValue = defaultValue;
    this.isStorage();
  }

  isStorage() {
    this.storage === 'local' ? this.storage = localStorage : this.storage = sessionStorage;
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
    return this.storage.getItem(this.name) ?? true;
  }
}

const names = new Storage('names', 'local');
const age = new Storage('age', 'session', 15);
