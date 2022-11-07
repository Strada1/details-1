class Storage {
  constructor(key, local) {
    this.key = key ?? "defaultKey",
    this.storage = local ?? localStorage
  }
  get() {
    return JSON.parse(this.storage.getItem(this.key));
  }
  set(value) {
    this.storage.setItem(this.key, JSON.stringify(value ?? 'defaultValue'));
  }
  clear() {
    this.storage.removeItem(this.key);
  }
  isEmpty() {
    return this.get() ? false : true;
  }
}