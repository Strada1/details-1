import * as Cookies from "js-cookie";
import {DATA} from "./const";

async function setToken(email: string) {
    try {
        const response = await fetch(DATA.urlPost, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({email})
        });

        const result = await response.json();
        console.log('Post: ', result);

    } catch (e: any) {
        throw new Error(e.message);
    }
}

async function getDataUser(url: string) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${Cookies.get('email')}`
        }
    })
    const result = await response.json();
    console.log('response: ', response.ok);
    return result;
}

async function setUserName(name: string) {
    try {
        const cookies = Cookies.get("email");
        const response = await fetch(DATA.urlPost, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: `Bearer ${cookies}`,
            },
            body: JSON.stringify({name})
        });

        const result = await response.json();
        console.log('result: ', result);
        console.log('response: ', response.ok);

    } catch (e: any) {
        throw new Error(e.message);
    }
}

export {setToken, getDataUser, setUserName}