const STORAGE_TYPE = {
    LOCAL_STORAGE: "localStorage",
    SESSION_STORAGE: "sessionStorage"
}

class Storage {

    constructor(name = "name", storageType = STORAGE_TYPE.LOCAL_STORAGE) {
        this.name = name;
        this.storageType = storageType;
    }

    set(value) {
        if (this.storageType === STORAGE_TYPE.SESSION_STORAGE) {
            sessionStorage.setItem(this.name, value);
            return;
        }
        localStorage.setItem(this.name, value);
    }

    get() {
        if (this.storageType === STORAGE_TYPE.SESSION_STORAGE) {
            return sessionStorage.getItem(this.name);
        }
        return localStorage.getItem(this.name);
    }

    clear() {
        if (this.storageType === STORAGE_TYPE.SESSION_STORAGE) {
            sessionStorage.removeItem(this.name);
        }
        localStorage.removeItem(this.name);
    }

    isEmpty() {
        let value;
        if (this.storageType === STORAGE_TYPE.SESSION_STORAGE) {
            value = sessionStorage.getItem(this.name);
        } else {
            value = localStorage.getItem(this.name);
        }

        if (value === null || value === undefined) {
            return true;
        }
        return false;
    }
}