import { ERROR_LIST } from "./view.js";
import { useCode, startChat } from "./ui_service.js";
import { getCookie } from "./cookies.js";
import { userStorage, renderMessages } from "./main.js";

export { getCode, changeNikName, getMessages, serverConnect, sendMessage };

const API_URL = 'https://edu.strada.one/api/user';
const API_URL_USER = 'https://edu.strada.one/api/user/me';
const API_URL_MESSAGES = 'https://edu.strada.one/api/messages/';


async function getCode(email) {
    try {
        userStorage.set(email);
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({email})
        });
        const result = await response.json();
        console.log(result);
        useCode();
    }
    catch (error) {
        ERROR_LIST.wrong_fetch(error);
    }
};

async function changeNikName(name) {
    try {
        const token = getCookie('token');   
        const response = await fetch(API_URL, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({name}),
        });
        const result = await response.json({name});
        console.log(result);
        getMessages(name);
    }
    catch (error) {
        ERROR_LIST.wrong_fetch(error);
    }
};

async function getMessages(name) {
    try {
        const token = getCookie('token');    
        const response = await fetch(API_URL_MESSAGES, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                Authorization: `Bearer ${token}`,
            },
        });
        const messages = await response.json({name});
        const MESSAGES = messages.messages;
        console.log(MESSAGES);
        startChat(MESSAGES, name);
    }
    catch (error) {
        ERROR_LIST.wrong_fetch(error);
    }
};
const token = getCookie('token');
const socket = new WebSocket(`ws://edu.strada.one/websockets?${token}`);
function serverConnect() {
    socket.onopen = function() {
        console.log("[open] Соединение установлено");  
    }
    socket.onmessage = function(event) {
        console.log(`[message] Данные получены с сервера: ${event.data}`);
        const message = JSON.parse(event.data);
        const MESSAGES = [];
        MESSAGES.push(message);
        renderMessages(MESSAGES);
    };
 
    socket.onerror = function(error) {
        console.log(`[error]`);
    };  
}

function sendMessage(message) {
    socket.send(JSON.stringify({ 
        text: message,
    }));   
};



// async function sendMessage(message, userName, userEmail) {
//     try {
//         const token = getCookie('token');
//         const user = {
//             email: userEmail,
//             name: userName,
//         }
//         const messages = {
//             user,
//             text: message,
//         }
//         console.log(user)
//         const response = await fetch(API_URL_MESSAGES, {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json; charset=utf-8',
//               Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify(messages)
//         });
//         const result = await response.json();
//         console.log(result);
        
//     }
//     catch (error) {
//         ERROR_LIST.wrong_fetch(error);
//     }
// };

// async function getUser(name) {
//     try {
//         const token = getCookie('tokenCode');   
//         const response = await fetch(API_URL_USER, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json; charset=utf-8',
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         const result = await response.json({name});
//         console.log(result);
//         console.log(result.name);
//     }
//     catch (error) {
//         ERROR_LIST.wrong_fetch(error);
//     }
// };

