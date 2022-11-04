class Storage {
    constructor(name = 'default', storageType = 'local') {
        
        try {
            if(storageType !== `local` && storageType !== `session`) {
              throw new Error(`please enter local or session storage type`);
            }

        this.name = name;
        this.storageType = storageType;
        }

        catch(e) {
            console.log(e.name + `: ` + e.message);
        } 
    }
    get(key) {
        switch(this.storageType) {
            case `local` : return localStorage.getItem(key);
            case `session` : return sessionStorage.getItem(key);
        }
        
    }
    set(key, value) {
        switch(this.storageType) {
            case `local` : localStorage.setItem(key, value); break;
            case `session` : sessionStorage.setItem(key, value); break;
          }
    }
    clear(key) {
        switch(this.storageType) {
            case `local` : localStorage.removeItem(key); break;
            case `session` : sessionStorage.removeItem(key); break;
        }
    }
    isEmpty(key) {
        return (this.get(key) === null || this.get(key) === undefined) ? `true` : `false`;
    }
}

const names = new Storage(`names`, `local`);
console.log(names.isEmpty(`Vova's dog`))
names.set(`Kate's cat`, `Una`)
names.set(`Vova's dog`, `Jopa`)
names.clear(`Vova's dog`)
console.log(names.get(`Kate's cat`))
console.log(names.isEmpty(`Kate's cat`))

const cities = new Storage(`cities`, `local`);
console.log(cities.isEmpty(`Toronto`))
cities.set(`Moskow`, `Russia`)
cities.set(`Toronto`, `Canada`)
cities.clear(`Toronto`)
console.log(cities.get(`Moskow`))
console.log(cities.isEmpty(`Moskow`))