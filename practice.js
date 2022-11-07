class Storage {
  constructor(names, storageName = localStorage) {
    this.names = names ?? "names";
    this.storageName = storageName === sessionStorage ? sessionStorage : localStorage;
  }

  set(value) {
    this.storageName.setItem(this.names, JSON.stringify(value));
  }

  get() {
    return JSON.parse(this.storageName.getItem(this.names));
  }

  delete() {
    this.storageName.removeItem(this.names);
  }

  clear() {
    this.set('');
  }

  isEmpty() {
    return !this.get() ? true : false;
  }
}

const newNames = new Storage('John', sessionStorage);

newNames.set(['MacBook', 'AirPods', 'Ipad']);
newNames.clear();
newNames.isEmpty();