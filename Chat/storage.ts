import {getDataUser} from "./requests";
import {DATA} from "./const";

async function setItemStorage() {
    try {
        const response = await getDataUser(DATA.urlMessage);
        const array = response.messages;
        const localArray = JSON.stringify(array.reverse());
        localStorage.setItem("messages", localArray);
    } catch (e: any) {
        new Error(e.message)
    }

}

function getItemStorage() {
    const array = localStorage.getItem("messages");

    if (array === null) {
        return;
    }

    try {
        return JSON.parse(array);
    } catch (e: any) {
        new Error(e.message)
    }
}

export {setItemStorage, getItemStorage};