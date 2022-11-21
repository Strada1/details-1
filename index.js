class Storage {
  constructor(name, typeOfStorage) {
    this.name = name ?? "Value";
    this.typeOfStorage =
      typeOfStorage === "sessionStorage" ? sessionStorage : localStorage;
  }

  setKey(value) {
    this.typeOfStorage.setItem(this.name, value);
  }

  getKey() {
    console.log(this.typeOfStorage.getItem(this.name));
  }

  clearKey() {
    this.typeOfStorage.removeItem(this.name);
  }

  keyIsEmpty() {
    return console.log(
      this.typeOfStorage.getItem(this.name) == undefined ? true : false
    );
  }
}

let firstStorage = new Storage("Alex", "localStorage");
firstStorage.getKey();
firstStorage.setKey("Rusakov");
firstStorage.getKey();
firstStorage.clearKey();
firstStorage.getKey();
firstStorage.keyIsEmpty();

let secondStorage = new Storage("Alexander", "sessionStorage");
secondStorage.setKey("Pushkin");
secondStorage.getKey();
secondStorage.keyIsEmpty();
secondStorage.clearKey();
secondStorage.getKey();
secondStorage.keyIsEmpty();
