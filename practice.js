const storageType = {
  local: localStorage,
  session: sessionStorage,
};

class Storage {
  constructor(names = "users", storageName = storageType.local) {
    this.names = names;
    this.storageName = storageName;
  }

  get() {
    return this.storageName.getItem(this.names);
  }

  set(value) {
    this.storageName.setItem(this.names, value);
  }

  clear() {
    this.storageName.removeItem(this.names);
  }

  isEmpty() {
    return this.get() === null || this.get() === undefined ? true : false;
  }
}
