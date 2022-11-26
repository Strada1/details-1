import {getCookieValue} from "./getCookieValue.js";

const changeNickname = async function(event) {
    event.preventDefault();

    const inputSettings = document.querySelector('.popup__input-set');
    const url = 'https://edu.strada.one/api/user';
    const token = getCookieValue('token');
    
    const newNickname = {
        name : inputSettings.value
    }

    let options = {
        method: 'PATCH',
        body: JSON.stringify(newNickname),
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${token}`
        },
    }

    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);


    async function whoiam() {
        const iam = await fetch('https://edu.strada.one/api/user/me', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${token}`
            } 
        });
        const i = await iam.json();
        console.log(i);
    }

    whoiam();
};

export default changeNickname;