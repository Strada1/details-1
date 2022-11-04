const storageType = {
  local: "localStorage",
  session: "sessionStorage",
};

class Storage {
  constructor(names = "users", storageName = storageType.local) {
    this.names = names;
    this.storageName = storageName;
  }

  get() {
    return this.storageName === storageType.local
      ? localStorage.getItem(this.names)
      : sessionStorage.getItem(this.names);
  }

  set(value) {
    this.storageName === storageType.local
      ? localStorage.setItem(this.names, value)
      : sessionStorage.setItem(this.names, value);
  }

  clear() {
    this.storageName === storageType.local
      ? localStorage.removeItem(this.names)
      : sessionStorage.removeItem(this.names);
  }

  isEmpty() {
    let namesValue = this.get();
    return namesValue === null || namesValue === undefined ? true : false;
  }
}
