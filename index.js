class Storage {
  constructor(key, type = 'local') {
    this.key = key;
    this.value = null;
    this.type = type === 'local' ? localStorage : sessionStorage;
    this.type.setItem(key, this.value);
  }

  get() {
    return this.type.getItem(this.value);
  }

  set(value) {
    this.value = value;
    return this.type.setItem(this.key, value);
  }

  clear() {
    this.value = null;
    return this.type.setItem(this.key, null);
  }

  isEmpty() {
    if (!this.value) {
      return true;
    } else {
      return false;
    }
  }
}

const names = new Storage('names');
const guys = new Storage('guys', 'session');
