import {urlPost} from './consts.js'

export async function setName(cookieCode, nameUser) {
    document.cookie = cookieCode;
    await fetch(urlPost, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${cookieCode}`,
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ name: nameUser })
    });
}