class Storage {
  constructor (names) {
	this.names = names;
	localStorage.setItem(`${this.names}`, null);
  }

  get(key) {
	const valueLS = localStorage.getItem(`${key}`)
    console.log('valueLS: ', valueLS)
  }

  set (value) {
    localStorage.names = value;
  }

  clear(key) {
	localStorage.clear(`${key}`)
  }
}


const names = new Storage('names')
names.set(5)
names.get('names')

const test = new Storage('test')
test.set(2)
test.get('test')

