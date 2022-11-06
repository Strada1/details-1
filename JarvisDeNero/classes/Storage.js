class Storage {
   constructor(names, isLocalStorage = true) {
      this.names = names;
      this._storage = isLocalStorage ? localStorage : sessionStorage;
   }
   get() {
      return JSON.parse(this._storage.getItem(this.names));
   }
   set(value) {
      this._storage.setItem(this.names, JSON.stringify(value));
      console.log('Added!');
   }
   clear() {
      this._storage.removeItem(this.names);
      console.log('Deleted!');
   }
   isEmpty() {
      return Boolean(this._storage.getItem(this.names));
   }
}

export { Storage }