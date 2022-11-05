import {Storage} from './Storage.js'

const user = new Storage('qwerty', 'local');
const my = new Storage('qwe', localStorage);
const your = new Storage('fdg', localStorage);
const his = new Storage('dfgvb', localStorage);
user.set('my');
my.set(123);
your.set(65456);
his.set(76);
console.log(user._name);
console.log(user._storage);
console.log(user.get());
console.log(localStorage);
my.clear();
let x = your.get();
console.log(x);
console.log(his.isEmpty());

