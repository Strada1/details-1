class Storage {
  constructor(name = 'default', storageType = 'local') {
    try {
      if(storageType !== 'local' && storageType !== 'session') {
        throw new Error('incorrect Storage type ("local"/"session" needed)');
      }
      this.name = name;
      this.storageType = storageType;
      this.set(this.get() ?? 'default');
    }

    catch(e) {
      console.log(e.name + ': ' + e.message);
    } 
  }
  get() {
    switch(this.storageType) {
      case 'local' : return localStorage.getItem(this.name)
      case 'session' : return sessionStorage.getItem(this.name)
    }
  }
  set(value) {
    switch(this.storageType) {
      case 'local' : localStorage.setItem(this.name, value); break;
      case 'session' : sessionStorage.setItem(this.name, value); break;
    }
  } 
  clear() {
    switch(this.storageType) {
      case 'local' : localStorage.removeItem(this.name); break;
      case 'session' : sessionStorage.removeItem(this.name); break;
    }
  }
  isEmpty() {
    const answer = (this.get() === null) || (this.get() === undefined) ?
    true:
    false
    return answer
  }
}

