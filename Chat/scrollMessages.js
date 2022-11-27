import {getItemStorage} from "./storage.js";
import {renderClient} from "./render";

function scrollLastElement() {
    const ELEMENTS = document.querySelector('.content-message');
    const LAST_MESSAGE = ELEMENTS.lastElementChild;
    LAST_MESSAGE.scrollIntoView({ block: 'end', behavior: 'smooth' });
}

let countStart = 0
let countEnd = 20;

function scrollVue() {
    const array = getItemStorage();
    if(!array){
        return;
    }

    // if(array.length === countEnd){
    //
    //     newArr = [ ...array.splice(countStart,countEnd) ] ;
    //
    // }
    const newArr = array.splice(countStart,countEnd) ;
    renderClient(newArr);

}

export {scrollLastElement, scrollVue}