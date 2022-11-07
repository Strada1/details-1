const TYPE_STORAGE = {
    LOCAL: localStorage,
    SESSION: sessionStorage,
};

class Storage {
    constructor(key, typeStorage){
        this.key = key;
        this.typeStorage = typeStorage ?? TYPE_STORAGE.LOCAL;
    }

    set (value){
        const ARRAY = new Set(this.get());
        ARRAY.add(value);
        this.typeStorage.setItem(this.key, JSON.stringify([...ARRAY]));
    }

    get() {
        const getItem = this.typeStorage.getItem(this.key);
        if (!getItem){
            return [];
        }
        return JSON.parse(getItem);
    }

    clear() {
        this.typeStorage.setItem(this.key,"");
    }

    isEmpty() {
        const value = this.typeStorage.getItem(this.key)
        return !value ? true : false;
    }
}

const local = new Storage(`localKey`,TYPE_STORAGE.LOCAL);
local.set(`1`)
local.set(`2`)
local.set(`3`)

local.get();
local.clear();

console.log( local.isEmpty() );
