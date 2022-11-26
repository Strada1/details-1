import Cookies from 'js-cookie'
export class Storage {
    constructor(key ) {
        this.key = key
    }
    set(value) {
        Cookies.set(this.key, JSON.stringify(value))
    }
    get() {
        return JSON.parse(Cookies.get(this.key))
    }
    clear() {
        Cookies.remove(this.key)
    }
    isEmpty() {
        return this.get() ? false : true
    }
}

export const newKey = new Storage('newKey')
