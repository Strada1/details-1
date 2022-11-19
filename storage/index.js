class Storage {
  constructor (key, storage = '', value = null) {
    this.storage = storage.toLowerCase() === 'sessionstorage' ? sessionStorage : localStorage;
    this.key = key;

    if (value !== null) {
      this.set(value);
    }
  }

  get() {
    const data = this.storage.getItem(this.key);
    return JSON.parse(data);
  }

  set(value) {
    if (value && value.length > 0) {
      this.storage.setItem(this.key, JSON.stringify(value));
    }
  }

  clear() {
    this.storage.setItem(this.key, JSON.stringify(''));
  }

  isEmpty() {
    const data = this.get();
    return (data === null) || (data === undefined);
  }
}

const names = new Storage('names');

