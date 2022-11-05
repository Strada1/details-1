import { Storage } from '../classes/Storage.js';

const myTest = new Storage('myTest');

myTest.set('Strada the best');
console.log(myTest.get());

myTest.set({ name: 'Strada the best - 2' });
console.log(myTest.get());

console.log(myTest.isEmpty());

myTest.clear();

console.log(myTest.isEmpty());
