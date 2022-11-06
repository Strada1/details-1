const STORAGE = {
    LOCAL_STORAGE: localStorage,
    SESSION_STORAGE: sessionStorage
}

class Storage {
    constructor(name = 'name', storageType = STORAGE.LOCAL_STORAGE) {
        this.name = name;
        this.storage = storageType;
    }

    get() {
        return this.storage.getItem(this.name);
    }

    set(value) {
        this.storage.setItem(this.name, value);
    }

    clear() {
        this.storage.setItem(this.name, '')
    }

    isEmpty() {
        return !this.get() ?? true
    }
}