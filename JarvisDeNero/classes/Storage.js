class Storage {
   constructor(name, isLocalStorage = true) {
      this.name = name;
      this._storage = isLocalStorage ? localStorage : sessionStorage;
   }
   get() {
      return JSON.parse(this._storage.getItem(this.name));
   }
   set(value) {
      this._storage.setItem(this.name, JSON.stringify(value));
      console.log('Added!');
   }
   clear() {
      this._storage.removeItem(this.name);
      console.log('Deleted!');
   }
   isEmpty() {
      return Boolean(this._storage.getItem(this.name));
   }
}

export { Storage }