class Storage {
    
    constructor(name, storage = 'local') { 
        this.name = name;
        if (storage === 'session') {
            this.storage = localStorage;
        }
        this.storage = sessionStorage;
    }

    set(value) {
        return this.storage.setItem(this.name, value);
    }

    get() {
        return this.storage.getItem(this.name);
    }

    clear() {
        return this.storage.setItem(this.name, '');
    }

    isEmpty() {
        if (!this.storage.getItem(this.name)) {
            return true;
        } 
        return false;
    }
}

const names = new Storage('names', 'session')
const namesOne = new Storage('namesOne') 


console.dir(namesOne);
namesOne.set('Tim')
names.set('Igor')
names.set('Pavel')
names.get()
namesOne.get()
namesOne.clear()
namesOne.isEmpty()
names.isEmpty()