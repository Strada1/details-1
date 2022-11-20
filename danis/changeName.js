import {urlGetInfoUser} from './consts.js'

export async function changeName(newName) {
    const promise = await fetch(urlGetInfoUser, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${document.cookie}`,
            'Content-Type': 'application/json;charset=utf-8',
        },
    });
    const result = await promise.json();
    result.name = newName;
    console.log(result);
}
