import {DATA} from "./const.js";
import Cookies from "js-cookie";

async function setToken(email){
    try {
      const response =  await fetch(DATA.urlPost, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({email})
        });

        const result = await response.json();
      //  console.log('Post: ', result);

    } catch (e) {
        throw new Error (e.message);
    }
}

async function getDataUser(url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${Cookies.get('email')}`
        }
    })
    const result = await response.json();
   // console.log('result: ', result);
    console.log('response: ', response.ok);
    return result;
}

async function setUserName(name){
    try {
        const cookies =  Cookies.get("email");
        const response = await fetch(DATA.urlPost, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: `Bearer ${cookies}`,
            },
            body: JSON.stringify({ name } )
        });

        const result = await response.json();
        console.log('result: ', result);
        console.log('response: ', response.ok);

    } catch (e) {
        throw new Error(e.message);
    }
}

export {setToken, getDataUser, setUserName}