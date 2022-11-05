class Storage {

  constructor (key, names, typeStorage) {
	this.names = names;
	this.key = key;
	this.typeStorage = typeStorage;
  }

  get() {
	const item = localStorage.getItem(`${this.key}`)
	return item;
  }

  set () {
	localStorage.setItem(this.key, this.names)
  }

//   set names(value) {
// 	this._names = value
//   }

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


// class Storage {
//   constructor (names) {
// 	this.names = names;
// 	localStorage.setItem(`${this.names}`, null);
//   }

//   get(key) {
// 	const valueLS = localStorage.getItem(`${key}`)
//     console.log('valueLS: ', valueLS)
//   }

//   set (value) {
//     localStorage.names = value;
//   }

//   clear(key) {
// 	localStorage.clear(`${key}`)
//   }
// }


// const names = new Storage('names')
// names.set(5)
// names.get('names')

// const test = new Storage('test')
// test.set(2)
// test.get('test')

// localStorage.clear()