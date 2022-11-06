class Storage {

    constructor(name, storage='local') {
        this.name = name;
        this.storage = storage;
        (this.storage === 'local')
        ? this.storage = localStorage
        : this.storage = sessionStorage;
        this.storage.setItem(name, JSON.stringify({value: null}));

    }

    get() {
        const obj = JSON.parse(this.storage.getItem(this.name));
        return obj.value
    }

    set(value) {
        this.storage.setItem(this.name, JSON.stringify({value: value}));
    }

    clear() {
        this.storage.setItem(this.name, JSON.stringify({value: null}));
    }

    isEmpty() {
        const obj = JSON.parse(this.storage.getItem(this.name))
       return !(obj.value ?? false)
    }

}

const yar = new Storage('yar');
console.log(yar)
console.log(yar.get());
yar.set('lalala');
console.log(yar.get());
yar.clear();
console.log(yar.get());
console.log(yar.isEmpty());

const yarSes = new Storage('yarSes', 'session');
console.log(yarSes)
console.log(yarSes.get());
yarSes.set('lalalaSes');
console.log(yarSes.get());
yarSes.clear();
console.log(yarSes.get());
console.log(yarSes.isEmpty());


