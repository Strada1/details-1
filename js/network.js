import { ERROR_LIST } from "./view.js";
import { useCode } from "./ui_service.js";
import { getCookie } from "./cookies.js";

export { getCode, changeNikName };

const API_URL = 'https://edu.strada.one/api/user'

async function getCode(emailUser) {
    try {
        const user = {
            email: emailUser,
        };
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(user)
        });
        const result = await response.json();
        console.log(result);
        useCode();
    }
    catch (error) {
        ERROR_LIST.wrong_fetch(error);
    }
};

async function changeNikName(emailUser,nikName) {
    try {
        const token = getCookie('tokenCode');
        const user = {
            email: emailUser,
            name: `${nikName}`,
        };    
        const response = await fetch(API_URL, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(user),
        });
        const result = await response.json(user);
        return console.log(result);
    }
    catch (error) {
        ERROR_LIST.wrong_fetch(error);
    }
};

