class Storage {
  constructor (key, typeStorage) {
    this.key = key
    this.typeStorage = typeStorage === sessionStorage ? sessionStorage : localStorage
  }

  get () {
    const item = this.typeStorage.getItem(this.key)
    return item
  }

  set (value) {
    this.typeStorage.setItem(this.key, value)
  }

  clear () {
    this.typeStorage.setItem(this.key, '')
  }

  isEmpty () {
    if (this.key) {
      return false
    } else {
      return true
    }
  }
}

const one = new Storage('one', sessionStorage, 'test')
one.set('test')
one.get()
one.clear()
one.isEmpty()
console.log('one.isEmpty: ', one.isEmpty())

const kirill = new Storage('Kirill', localStorage)
kirill.set('age: 17')
kirill.isEmpty()
console.log('kirill.isEmpty: ', kirill.isEmpty())

const test = new Storage ('test')
test.set('/')
test.isEmpty()
console.log('test.isEmpty: ', test.isEmpty())
