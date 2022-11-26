import { getHistoryMessageUrl} from './consts.js'

export async function setMessagesLocalStorage(user) {
    const result = await fetch(getHistoryMessageUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${user}`,
            'Content-Type': 'application/json;charset=utf-8',
        },
    });

    const promise = await result.json();
    const arrayMessages = promise.messages;
    localStorage.setItem('messages', JSON.stringify(arrayMessages))
}


