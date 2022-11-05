class Storage {
  constructor(key, type = 'local', defaultValue = false) {
    this.key = key;
    if (defaultValue) {
      this.value = 'Vlad';
    } else {
      this.value = null;
    }
    this.type = type;
    if (typeof key === 'string' && type === 'local') {
      localStorage.setItem(key, this.value);
    } else if (typeof key === 'string' && type === 'session') {
      sessionStorage.setItem(key, this.value);
    }
  }

  get() {
    if (this.type === 'local') {
      return localStorage.getItem(this.key);
    } else if (this.type === 'session') {
      return sessionStorage.getItem(this.key);
    }
  }

  set(value) {
    if (this.type === 'local') {
      localStorage.setItem(this.key, value);
      this.value = value;
      return value;
    } else if (this.type === 'session') {
      sessionStorage.setItem(this.key, value);
      this.value = value;
      return value;
    }
  }

  clear() {
    if (this.type === 'local') {
      this.value = value;
      return localStorage.setItem(this.key, null);
    } else if (this.type === 'session') {
      this.value = value;
      return sessionStorage.setItem(this.key, null);
    }
  }

  isEmpty() {
    if (this.type === 'local') {
      if (this.value === null || this.value == undefined) {
        return true;
      } else {
        return false;
      }
    } else if (this.type === 'session') {
      if (this.value === null || this.value == undefined) {
        return true;
      } else {
        return false;
      }
    }
  }
}

const names = new Storage('names');
const guys = new Storage('guys', 'session', true);
