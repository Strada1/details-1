class Storage {
   constructor(names, isSessionStorage = false) {
      this.names = names;
      this.isSessionStorage = isSessionStorage;
   }
   get() {
      if (this.isSessionStorage) {
         return JSON.parse(sessionStorage.getItem(this.names));
      }
      return JSON.parse(localStorage.getItem(this.names));
   }
   set(value) {
      this.isSessionStorage ?
         sessionStorage.setItem(this.names, JSON.stringify(value)) :
         localStorage.setItem(this.names, JSON.stringify(value));
      console.log('Added!');
   }
   clear() {
      this.isSessionStorage ?
         sessionStorage.removeItem(this.names) :
         localStorage.removeItem(this.names);
      console.log('Deleted!');
   }
   isEmpty() {
      if (this.isSessionStorage) {
         return Boolean(sessionStorage.getItem(this.names));
      }
      return Boolean(localStorage.getItem(this.names));
   }
}

export { Storage }