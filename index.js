class Storage {
  constructor (names) {
	localStorage.setItem(`${names}`, null);
	this.names = names;
  }

  get(key) {
	const valueLS = localStorage.getItem(`${key}`)
    console.log('valueLS: ', valueLS)
  }

  set (value) {
    localStorage.setItem(names, value)
  }

  clear(key) {
	localStorage.clear(`${key}`)
  }
}

const names = new Storage('names')
names.set(5)
names.get('names')