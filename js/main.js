class Storage {
    constructor(key, typeOfStorage = "local") {
        this.key = key;
        this.typeOfStorage = typeOfStorage === 'session'
        ? sessionStorage
        : localStorage;
    }
    set (value) {
        this.value = value;
        this.typeOfStorage.setItem(this.key, JSON.stringify(this.value));
    }
    get () {
        return this.value = JSON.parse(this.typeOfStorage.getItem(this.key))
    }
    clear () {
        this.value = [];
        this.typeOfStorage.setItem(this.key, JSON.stringify(this.value));
    }
    delete () {
        this.typeOfStorage.removeItem (this.key)
    }
    isEmpty () {
        this.value = this.get ();
        if (!this.value) {
            return true;
        }
        if (this.value.length === 0) {
            return true;
        }
        return false;
    }
}

let key = 'John';
const dataLesson26 = ['iPhone 14Pro', 'Apple Watch 8', 'MacBook 16 Pro'];
const typeOfStorage = 'local';
const names = new Storage(key, typeOfStorage);
console.log(names);
names.set(dataLesson26);
console.log(names.get());
// names.clear();
// names.delete();
console.log(names.isEmpty(key));
