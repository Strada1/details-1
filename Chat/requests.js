import {DATA} from "./constUrlEmail.js";
import Cookies from "js-cookie";

export async function setToken(email){
    try {
        await fetch(DATA.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({email})
        });

    } catch (e) {
        throw new Error (e.message);
    }
}

export async function getDataUser() {
    const response = await fetch(DATA.url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${Cookies.get('email')}`
        }
    })
    const result = await response.json();
    console.log('result: ', result);
    console.log('response: ', response.ok);

}

export async function setUserName(userName){
    try {
        const cookies =  Cookies.get("email");
        await fetch(DATA.url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: `Bearer ${cookies}`,
            },
            body: JSON.stringify({ userName })
        });

    } catch (e) {
        throw new Error(e.message);
    }
}