
class Storage {
  constructor(names, storageType = localStorage) {
    storageType.setItem(names, '')
    this.storageType = storageType
    this.key = names
  }

  get() {
    return this.storageType.getItem(this.key)
  }

  set(value) {
    this.storageType.setItem(this.key, value)
  }

  clear() {
    this.storageType.setItem(this.key, '')
  }

  delete() {
    this.storageType.removeItem(this.key)
  }

  isEmpty() {
    if (this.get() === null || this.get() === '') {
      return true
    }
    return false
  }
}


