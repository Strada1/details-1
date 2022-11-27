import { urlGetInfoUser } from './consts.js'
import {setName} from './confirmation.js'

export async function changeName(newName, cookie) {
    const promise = await fetch(urlGetInfoUser, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${cookie}`,
            'Content-Type': 'application/json;charset=utf-8',
        },
    });
    const result = await promise.json();;
    result.name = newName;

    setName(cookie, result.name)
}
