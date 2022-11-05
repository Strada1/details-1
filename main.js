
class Storage {
  constructor(name, whereStorage){
    this.name = name ?? 'Value'; 
    this.whereStorage = whereStorage === 'sessionStorage' ? sessionStorage : localStorage;
  }

  get(){
    return this.whereStorage.getItem(this.name);
  }

  set(value){
    this.whereStorage.setItem(this.name, value);
  }

  clear(){
    this.whereStorage.setItem(this.name, '');
  }

  isEmpty(){
    const value = this.get();
    return !value ? true : false;
  }
}

const bmw = new Storage("BMW");
bmw.set('Штаб-квартира: Мюнхен, Германия')
console.log( bmw.get() );
console.log( "Удалено " + bmw.clear())
console.log( bmw.isEmpty() );

const toyota = new Storage('Toyota', 'sessionStorage');
toyota.set('Штаб-квартира: Тоёта, Айти, Япония');
console.log("Даннные с sessionStorage " + toyota.get());

const emptyName = new Storage();
emptyName.set('324');
console.log( emptyName.isEmpty() );
console.log( emptyName.get() );

