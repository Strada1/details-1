import {autorizationForm, urlPost, userEmailForAutorization } from './values.js'

autorizationForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    await fetch(urlPost, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ email: userEmailForAutorization.value.trim() })
    });
    document.querySelector('.autorization__block').style.display = 'none';
    document.querySelector('.input__block').style.display = 'block';
});