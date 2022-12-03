import {getMessageUrl, headerApplication, httpRequests} from './consts';

export function autorization(email: string): void  {
    const result = fetch(getMessageUrl, {
        method:  httpRequests.POST,
        headers: {
            'Content-Type' : headerApplication
    },
    body: JSON.stringify({ email })
 });
}