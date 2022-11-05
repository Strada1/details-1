class Storage {

    constructor(name) {
        localStorage.setItem(name, JSON.stringify({value: null}));
        this.name = name;
    }

    get() {
        const obj = JSON.parse(localStorage.getItem(this.name));
        return obj.value
    }

    set(value) {
        localStorage.setItem(this.name, JSON.stringify({value: value}));
    }

    clear() {
        localStorage.setItem(this.name, JSON.stringify({value: null}));
    }

    isEmpty() {
        const obj = JSON.parse(localStorage.getItem(this.name))
       return !(obj.value ?? false)
    }

}

const yar = new Storage('yar');
console.log(yar.get());
yar.set('lalala');
console.log(yar.get());
yar.clear();
console.log(yar.get());
console.log(yar.isEmpty());



