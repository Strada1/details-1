import { urlPost } from './consts.js'

export async function sendEmailForm(getEmail) {
    await fetch(urlPost, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ email: getEmail })
    });
}