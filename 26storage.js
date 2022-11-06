/*

Напишите класс Storage который будет создавать экземпляры для работы с localStorage
Пример:
const names = new Storage(’names’);
names.get() // возвращает значение для ключа names в localStorage;
names.set() // устанавливает значение для ключа names в localStorage;
names.clear() // очищает значение для ключа names в localStorage;
names.isEmpty() // вернет true если ключ names в localStorage имеет пустое значение (null || undefind);
Создайте несколько экземпляров класса Storage и убедитесь что все они работают правильно
Для класса Storage добавьте пару опций в конструктор
чтобы можно было выбирать local или session storage
возможность указать значение по-умолчанию (при создании экземпляра)
 */

class Storage {
    constructor (name, value, type="local") {
        this.name = name;
        this.type = type;
        
        if (type=="local"){
            this.storage = localStorage;
        }
        else {
            this.storage = sessionStorage;
        }
        
        this.set(value);
    }

    get() {
        return this.storage.getItem(this.name);
    }

    set(value) {
        this.storage.setItem(this.name, value);
    }

    clear() {
        this.storage.removeItem(this.name);
    }
     
    isEmpty() {
        let myItem = this.storage.getItem(this.name);
        if((myItem==null)||(myItem==undefined)) {
            return true;
        }
        return false;
    }

}
localStorage.clear();
sessionStorage.clear();
const mumu = new Storage("mumu", 5, "session");

console.log(mumu.get());

console.log(mumu.type);
console.log(mumu.isEmpty());

mumu.clear();
console.log(mumu.storage);
console.log(mumu.isEmpty());

