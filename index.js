class Storage {
  constructor(settings, name = "default Name") {
    this.settings = settings;
    this.name = name;
    // if (name == undefined) {
    //   this.name = "default Name";
    // } else {
    //   this.name = name;
    // }
  }

  get() {
    if (this.settings === "local") {
      const localName = window.localStorage.getItem("names");
      console.log("localStorage names: ", localName);
    } else if (this.settings === "sess") {
      const sessName = window.sessionStorage.getItem("names");
      console.log("sessionStorage name: ", sessName);
    }
  }

  set() {
    if (this.settings === "local") {
      window.localStorage.setItem("names", this.name);
    } else if (this.settings === "sess") {
      window.sessionStorage.setItem("names", this.name);
    }
  }

  clear() {
    if (this.settings === "local") {
      window.localStorage.removeItem("names");
      // window.localStorage.setItem('names', '');
    } else if (this.settings === "sess") {
      window.sessionStorage.removeItem("names");
    }
  }

  isEmpty() {
    if (this.settings === "local") {
      const localName = window.localStorage.getItem("names");
      if (localName === undefined || localName === null) {
        return true;
      } else return false;
    } else if (this.settings === "sess") {
      const sessName = window.sessionStorage.getItem("names");
      if (sessName === undefined || sessName === null) {
        return true;
      } else return false;
    }
  }
}

const names = new Storage("local", "Pavel");

names.set();
names.get();
names.isEmpty();
names.clear();
names.get();
names.isEmpty();
