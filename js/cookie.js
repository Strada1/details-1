import Cookies from "js-cookie";
export function cookieSet(key, value) {
    try {
        Cookies.set(key, JSON.stringify(value));
    }
    catch (error) {
        console.log(error);
    }
}
export function cookieGet(key) {
    const jsonType = Cookies.get(key);
    try {
        if (jsonType) {
            return JSON.parse(jsonType);
        }
    }
    catch (error) {
        console.log(error);
    }
}
