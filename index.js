class Storage {

  constructor (key, names, typeStorage) {
	this.names = names;
	this.key = key;
	this.typeStorage = typeStorage;
  }

  get() {
	const item = localStorage.getItem(this.key)
	return item;
  }

  set () {
	localStorage.setItem(this.key, this.names)
  }

  clear() {
	localStorage.removeItem(this.key)
  }
}

const test = new Storage('test', 123, )
test.set()
test.get()
test.clear()

const newStorage = new Storage('Storage', 121)
newStorage.set()
newStorage.get()

const one = new Storage('one', 123)
one.set()
one.get()
one.clear()