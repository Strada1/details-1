const TYPE_STORAGE = {
    LOCAL: localStorage,
    SESSION: sessionStorage,
};

class Storage {
    constructor(key, typeStorage = TYPE_STORAGE.LOCAL){
        this.key = key;
        this.typeStorage = typeStorage;
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
        this.typeStorage.removeItem(this.key);
    }

    isEmpty() {

    }
}


const local = new Storage(`localKey`);
local.set(`dasdas`);
local.set(`dasdas222`);
local.set(`das`);
local.get();

const local2 = new Storage(`localKey2`);
local2.set(`1`);
local2.set(`2`);
local2.set(`3`);
local2.set(`1`);

local2.get();
