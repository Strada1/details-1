const localОption = {
  "localStorage" : localStorage, 
  "sessionStorage" : sessionStorage,
}


class Storage {
    constructor(key = "defaultKey", value = 'defaultValue', defaultLocalStorage = localОption.localStorage) {
      this.key = key; 
      this.value = value; 
      this.storage = defaultLocalStorage
    }
    get() {
        return JSON.parse(this.storage.getItem(this.key));
    }
    set() {
      this.storage.setItem(this.key, JSON.stringify(this.value));
    }
    clear() {
      this.storage.removeItem(this.key)
    }
    isEmpty() {
      return !this.get() ? true : false
    }
  };
