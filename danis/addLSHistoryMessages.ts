import { urlGetHistoryMessages, httpRequests, headerApplication, localStorageNameHistoryMessages } from './consts'
import { virtualization } from './virtualization';

export function historyMessages(cookie: string | undefined): void {
    fetch(urlGetHistoryMessages, {
        method: httpRequests.GET,
        headers: {
            'Authorization': `Bearer ${cookie}`,
            'Content-Type': headerApplication
        },
    })
   .then(response => response.json())
    .then(result => localStorage.setItem(localStorageNameHistoryMessages, JSON.stringify(result)))
    .then(callback => virtualization());
}