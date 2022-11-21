import { getHistoryMessageUrl } from './consts.js'
import { createMessage } from './createMessage.js';

export async function loandingHistoryMessage() {
    const result = await fetch(getHistoryMessageUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${document.cookie}`,
            'Content-Type': 'application/json;charset=utf-8',
        },
    });

    const promise = await result.json();
    const arrayMessages = promise.messages;
    arrayMessages.map(function(item, index) {
        createMessage(arrayMessages[index].text, arrayMessages[index].user.name, arrayMessages[index].createdAt.substr(5, 11), 'another');
    });
   
}


