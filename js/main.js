class Storage {
    constructor(key, typeStorage = 'local') {
        this.key = key;
        this.typeStorage = typeStorage === 'session'
        ? sessionStorage
        : localStorage;
    }
    set (value) {
        this.value = value ?? [];
        this.typeStorage.setItem (this.key, JSON.stringify(this.value));
    }
    get () {
        return this.value = JSON.parse (this.typeStorage.getItem(this.key))
    }
    clear () {
        this.value = [];
        this.typeStorage.setItem (this.key, JSON.stringify(this.value));
    }
    delete () {
        this.typeStorage.removeItem (this.key)
    }
    isEmpty () {
        this.value = this.get ();
        const trueFalse = this.value?.length ?? 0;
        return Boolean(!trueFalse);
    }
}

const dataLesson26 = ['iPhone 14Pro', 'Apple Watch 8', 'MacBook 16 Pro'];
// const dataLesson26 = [];
let key = 'John';
const typeStorage = 'local';
const user = new Storage(key, typeStorage);
console.log(user);
user.set(dataLesson26);
console.log(user.get());
// user.clear();
// user.delete();
console.log(user.isEmpty(key));


