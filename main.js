class Storage {
    
    constructor(name, storage = 'local') { 
        this.name = name;
        storage === 'local' ? this.storage = localStorage : this.storage = sessionStorage;
    }

    set(value) {
        this.storage.setItem(this.name, value);
    }

    get() {
        return this.storage.getItem(this.name);
    }

    clear() {
        this.storage.setItem(this.name, '');
    }

    isEmpty() {
        return !!this.storage.getItem(this.name);
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