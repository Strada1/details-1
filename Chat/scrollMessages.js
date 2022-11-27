import {getItemStorage} from "./storage.js";

function scrollLastElement() {
    const ELEMENTS = document.querySelector('.content-message');
    const LAST_MESSAGE = ELEMENTS.lastElementChild;
    LAST_MESSAGE.scrollIntoView({ block: 'end', behavior: 'smooth' });
}

function scrollVue() {
    const array = getItemStorage();
    if(!array){
        return;
    }

}

export {scrollLastElement, scrollVue}