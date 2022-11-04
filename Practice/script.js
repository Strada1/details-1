const storageItem = {
    local: localStorage,
    session: sessionStorage,
}

class Storage {
    constructor(names, storage = storageItem.local) {
        this.names = names;
        this.storage = storage;
    }
    set(value) {
        this.storage.setItem(this.names, value)
    }
    get() {
        return this.storage.getItem(this.names)
    }
    clear() {
        this.storage.removeItem(this.names)
    }
    isEmpty() {
        return this.get() ? false : true
    }
}

const User = new Storage('names', storageItem.session);
const john = new Storage('john');
john.set('top 1')
User.set('123')
console.log(User.get())
console.log(User.isEmpty())
console.log(john.get())
console.log(john.isEmpty())
console.log(john.clear())
console.log(john.isEmpty())


