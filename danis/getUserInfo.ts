import { httpRequests, headerApplication, getUserInfoUrl } from './consts'

export async function getUserInfo() {
    const result: any = fetch(getUserInfoUrl, {
        method: httpRequests.GET,
        headers: {
            'Authorization': `Bearer ${document.cookie}`,
            'Content-Type': headerApplication
        }
    })
        .then(promise => promise.json())
        .then(function(promiseEmail) {
            return promiseEmail.email
        })
        return result
    }

