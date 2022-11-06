class Storage {
    constructor(key, websiteStorage = "local") {
        this.key = key;
        this.store = [];
        this.websiteStorage = websiteStorage;
        this.websiteStorage === 'session'
        ? this._myStorage = sessionStorage
        : this._myStorage = localStorage;
    }
    workWithStorageData (value) {
        !value
        ? this.store = []
        : this.store = value
        const dataStorage = JSON.stringify(this.store);
        this._myStorage.setItem(this.key, dataStorage);
    }
    set (value) {
        this.workWithStorageData (value);
    }
    get () {
        this.store = JSON.parse(this._myStorage.getItem(this.key))
    }
    clear () {
        this.workWithStorageData ();
    }
    delete () {
        this._myStorage.removeItem(this.key)
    }
    isEmpty () {
        this.store = JSON.parse(this._myStorage.getItem(this.key))
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
