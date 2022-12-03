import { urlGetInfoUser, headerApplication, httpRequests} from './consts'

export function confirmAutorization(cookieCode: string, name: string): void {
    document.cookie = cookieCode;
    const result = fetch(urlGetInfoUser, {
        method: httpRequests.PATCH,
        headers: {
            'Authorization': `Bearer ${cookieCode}`,
            'Content-Type':  headerApplication,
        },
        body: JSON.stringify({ name })
    });
}