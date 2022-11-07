export class Storage {

    constructor(name = 'temp', storage = 'session') {
        this.name = name;
        this.storage = storage;
    }

    set name(name) {
        this._name = name;
    }

    set storage(storage) {
        if (storage === 'local' ||
            storage === 'localStorage' ||
            storage === 'localstorage' ||
            storage === localStorage) {
                this._storage = localStorage;
            }
        else this._storage = sessionStorage;
    }

    set(value) {
        return this._storage.setItem(this._name, value);
    }

    get() {
        return this._storage.getItem(this._name);
    }

    delete() {
        return this._storage.removeItem(this._name);
    }

    clear() {
        return this._storage.setItem(this._name, '');
    }

    isEmpty() {
        if (this._storage.getItem(this._name)) return false;
        return true;
    }

}
