import { urlGetInfoUser } from './consts.js'

export async function changeName(newName, cookie) {
    const promise = await fetch(urlGetInfoUser, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${cookie}`,
            'Content-Type': 'application/json;charset=utf-8',
        },
    });
    const result = await promise.json();
    console.log(result.user);
    result.name = newName;
    console.log(result);
}
