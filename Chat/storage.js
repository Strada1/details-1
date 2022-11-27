import {getDataUser} from "./requests";
import {DATA} from "./const";

async function setItemStorage() {
    const response = await getDataUser(DATA.urlMessage);
    const array  =  response.messages;
    const localArray = JSON.stringify(array.reverse());
    localStorage.setItem("messages" , localArray );
}


function getItemStorage(){
    const array = localStorage.getItem("messages");
    return  JSON.parse(array);
}

export {setItemStorage, getItemStorage};