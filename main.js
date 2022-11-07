class Storage {

    constructor(name, value = null) {
        this.name = name;
        this.value = value
    }

    get() {
        return this.value;
    }

    set(value) {
        this.value = value; 
    }

    clear() {
        this.value = null;
    }

    isEmpty() {
        return (!this.value)
    }
}

const names = new Storage('igor');
names.set('kkk');

console.log(names.get()); 
names.clear();
console.log(names.get()); 
console.log(names.isEmpty()); 
