export class Storage {

    constructor(name = 'temp', storage = 'session') {
        this.name = name;
        this.storage = storage;
        console.log(this);
    }

    set name(name) {
        this._name = name;
    }

    set storage(storage) {
        if (storage === 'local' || storage === 'localStorage' || storage === 'localstorage' || storage === localStorage) this._storage = localStorage;
        else this._storage = sessionStorage;
    }

    set(value) {
        this._storage.setItem(this._name, value);
    }

    get() {
        return this._storage.getItem(this._name);
    }

    clear() {
        this._storage.removeItem(this._name);
    }

    isEmpty() {
        if (this._storage.getItem(this._name)) return false;
        return true;
    }

}
