class Storage {
	constructor(key, optionsObj) {
		this.key = key
		this.options = optionsObj
		this.set(this.options.defaultValue)
	}

	storageController(actionToLocalStorage, actionToSessionStorage) {
		if (this.options.storageType === 'local') {
			return actionToLocalStorage()
		}

		if (this.options.storageType === 'session') {
			return actionToSessionStorage()
		}
	}

	getValueInSessionStorage() {
		return JSON.parse(sessionStorage.getItem(this.key))
	}

	getValueInLocalStorage() {
		return JSON.parse(localStorage.getItem(this.key))
	}

	setValueInLocalStorage(value) {
		localStorage.setItem(this.key, JSON.stringify(value))
	}

	setValueInSessionStorage(value) {
		sessionStorage.setItem(this.key, JSON.stringify(value))
	}

	clearValueInLocalStorage() {
		this.setValueInLocalStorage(null)
	}

	clearValueInSessionStorage() {
		this.setValueInSessionStorage(null)
	}

	get() {
		return this.storageController(
			() => {
				return this.getValueInLocalStorage()
			},
			() => {
				return this.getValueInSessionStorage()
			}
		)
	}

	set(value) {
		this.storageController(
			() => {
				this.setValueInLocalStorage(value)
			},
			() => {
				this.setValueInSessionlStorage(value)
			}
		)
	}

	clean() {
		this.storageController(
			() => {
				this.clearValueInLocalStorage()
			},
			() => {
				this.clearValueInSessionStorage()
			}
		)
	}

	isEmpty() {
		return this.storageController(
			() => {
				const value = JSON.parse(this.getValueInLocalStorage())
				const isEmptyValue = value === null || value === undefined
				return isEmptyValue
			},
			() => {
				const value = JSON.parse(this.getValueInSessionStorage())
				const isEmptyValue = value === null || value === undefined
				return isEmptyValue
			}
		)
	}
}

const names = new Storage('names', {
	storageType: 'local',
	defaultValue: ['name1', 'name2']
})