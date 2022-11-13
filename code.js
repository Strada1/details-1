class Storage {
    constructor(name, typeStorage) {
        this._name = name;
        this._typeOfStorage = typeStorage;
        this._typeOfStorage.setItem(this._name, null);
    }
    get() {
        return this._typeOfStorage.getItem(this._name);
    }
    set(value) {
        this._typeOfStorage.setItem(this._name, value);
    }
    clear() {
        this._typeOfStorage.removeItem(this._name);
    }
    isEmpty() {
        let valueStorage = this._typeOfStorage.getItem(this._name);
        return (valueStorage == null)
    }
}

window.btnCreateClass.addEventListener('click', createClass);
window.btnSetClass.addEventListener('click', setStorage);
window.btnGetClass.addEventListener('click', getStorage);
window.btnClearClass.addEventListener('click', clearStorage);
window.btnIsEmptyClass.addEventListener('click', isEmptyStorage);

let names;

function createClass() {
    let keyStorageValue = window.keyStorage.value;
    names = new Storage(keyStorageValue, window.typeOfStorage.value === "2" ? sessionStorage : localStorage);
}

function setStorage() {
    if (names != undefined) {
        let valueStorageValue = window.valueStorage.value;
        names.set(valueStorageValue);
        window.valueOfOperation.value = 'Set storage';
    } else {
        window.valueOfOperation.value = 'Storage not defined';
    }
}

function getStorage() {
    window.valueOfOperation.value = names.get();
}

function clearStorage() {
    names.clear();
}

async function isEmptyStorage() {
    window.valueOfOperation.value = await names.isEmpty();
}
