import {getItemStorage} from "./storage";
import {renderClient} from "./render";


function scrollLastElement() {
    const ELEMENTS = document.querySelector('.content-message');
    const LAST_MESSAGE = ELEMENTS.lastElementChild;
    LAST_MESSAGE.scrollIntoView({ block: 'end', behavior: 'smooth' });
}

function spliceArr() {

    const array = getItemStorage();
    if(!array){
        return;
    }
    const newArr = array.splice(0,countEnd) ;
    renderClient(newArr);
    scrollLastElement();

}


let item = 0;
const countEnd = 20;
function lazyLoad() {
    let array = getItemStorage();
    for (let i = 0; i <= countEnd ; i++){
       renderClient([array[item]]);
       item++;
    }
}

export {scrollLastElement, spliceArr, lazyLoad}