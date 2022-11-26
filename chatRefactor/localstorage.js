export class Storage {
    constructor(key, typeStorage ) {
        this.key = key
        this.storage = typeStorage ?? localStorage
    }
    set(value) {
        this.storage.setItem(this.key, JSON.stringify(value))
    }
    get() {
        return JSON.parse(this.storage.getItem(this.key))
    }
    clear() {
        this.storage.removeItem(this.key)
    }
    isEmpty() {
        return this.get() ? false : true
    }
}

export const newKey = new Storage('newKey')