class Storage {
    constructor(key, websiteStorage = "local") {
        this.key = key;
        this.store = [];
        this.websiteStorage = websiteStorage;
    }
    workWithStorageData (value) {
        !value
        ? this.store = []
        : this.store = value
        const dataStorage = JSON.stringify(this.store);
        return this.websiteStorage === 'session'
        ? sessionStorage.setItem(this.key, dataStorage)
        : localStorage.setItem(this.key, dataStorage);
    }
    set (value) {
        this.workWithStorageData (value);
    }
    get () {
        return this.websiteStorage === 'session' 
        ? this.store = JSON.parse(sessionStorage.getItem(this.key))
        : this.store = JSON.parse(localStorage.getItem(this.key))
    }
    clear () {
        this.workWithStorageData ();
    }
    delete () {
        return this.websiteStorage === 'session'
        ? sessionStorage.removeItem(this.key)
        : localStorage.removeItem(this.key)
    }
    isEmpty () {
        this.websiteStorage === 'session'
        ? this.store = JSON.parse(sessionStorage.getItem(this.key))
        : this.store = JSON.parse(localStorage.getItem(this.key))
        if (!this.store) {
            return true;
        }
        if (this.store.length === 0) {
            return true;
        }
        return false;
    }
}

let key = 'Ann';
const websiteStorage = 'local';
const dataLesson26 = ['iPhone 14Pro', 'Apple Whatch8'];
const names = new Storage(key, websiteStorage);
console.log(names);
names.set(dataLesson26);
console.log(names.get());
// names.clear();
// names.delete();
console.log(names.isEmpty(key));

