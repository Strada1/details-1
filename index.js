class Storage {
  constructor (key, typeStorage) {
    this.key = key
    this.typeStorage = typeStorage === 'localStorage' ? localStorage : sessionStorage
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
    if (!this.key) {
      return true
    } else {
      return false
    }
  }
}

const one = new Storage('one', sessionStorage)
one.set('test')
one.get()
one.clear()
one.isEmpty()
console.log('one.isEmpty: ', one.isEmpty())

const kirill = new Storage('Kirill', localStorage)
kirill.set('age: 17')
kirill.isEmpty()
console.log('kirill.isEmpty: ', kirill.isEmpty())