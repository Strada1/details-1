import { getHistoryMessageUrl } from './consts.js'
import { createMessage } from './createMessage.js';
import { existsCookie } from './script.js'

export async function loandingHistoryMessage(user) {
    const result = await fetch(getHistoryMessageUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${user}`,
            'Content-Type': 'application/json;charset=utf-8',
        },
    });

    const promise = await result.json();
    const arrayMessages = promise.messages;
    arrayMessages.map(function (item, index) {
        if (arrayMessages[index].user.email === existsCookie('userEmail')) {
            createMessage(arrayMessages[index].text, arrayMessages[index].user.name, arrayMessages[index].createdAt.substr(5, 11),);
        } else {
            createMessage(arrayMessages[index].text, arrayMessages[index].user.name, arrayMessages[index].createdAt.substr(5, 11), 'another');
        }
    });

}


