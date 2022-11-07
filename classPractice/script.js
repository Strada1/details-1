let localS = {}
console.log(localS)

class Storage {
    constructor(key) {
        this.key = key
    }
    set() {
        localStorage.setItem(`${this.key}`,JSON.stringify(localS))
        this.storage = JSON.parse(localStorage.getItem(`${this.key}`))
    }
    get() {
        this.storage = JSON.parse(localStorage.getItem(`${this.key}`))
        return this.storage
    }
    clear() {
        this.storage = localStorage.setItem(`${this.key}`, undefined)
        localS = {}
    }
    isEmpty() {
        console.log(this.storage)
        if(this.storage == undefined) {
            return true
        } else {
            return false
        }
    }
}

const names  = new Storage('Ключ')

// Проверял работоспособность

// function setdata() {
//     localS.first = 'first'
//     localS.second = 'second'
//     localS.third = 'third'
//     names.set()
//     console.log(localS)
// }

// setdata()

localS = names.get()
