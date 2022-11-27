export { Storage };

class Storage {
    constructor(key, typeStorage = 'local') {
        this.key = key;
        this.typeStorage = typeStorage === 'session'
        ? sessionStorage
        : localStorage;
    }
    set (value) {
        this.value = value ?? []
        this.typeStorage.setItem (this.key, JSON.stringify(this.value));
    }
    get () {
        this.value = JSON.parse (this.typeStorage.getItem(this.key))
        return this.value ?? []
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
