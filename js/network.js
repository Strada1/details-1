import { getCookie } from "./cookies.js";
import { timeFormation } from "./render.js";
import { Storage } from "./storage.js";
import { 
    UI, 
    ERROR_LIST 
} from "./view.js";
import { 
    useCode, 
    startChat 
} from "./ui_service.js";
import { 
    userStorage, 
    checkCurrentMessage 
} from "./main.js";

export { 
    getCode, 
    changeNikName, 
    getMessages, 
    serverConnect, 
    sendMessage, 
    closeConnect, 
    messagesStorage 
};

const API_URL = 'https://edu.strada.one/api/user';
const API_URL_USER = 'https://edu.strada.one/api/user/me';
const API_URL_MESSAGES = 'https://edu.strada.one/api/messages/';
let messagesStorage = new Storage('message', 'local');
let socket;

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
        ERROR_LIST.wrong_fetch(`${error} getCode`);
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
        ERROR_LIST.wrong_fetch(`${error} changeNikName`);
    }
};

async function getMessages(name) {
    const token = getCookie('token');  
    try {   
        const response = await fetch(API_URL_MESSAGES, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                Authorization: `Bearer ${token}`,
            },
        });
        const messages = await response.json({name});
        let MESSAGES = messages.messages;
        console.log(MESSAGES);
        messagesStorage.set(MESSAGES);
        startChat(name);
    }
    catch (error) {
        ERROR_LIST.wrong_fetch(`${error} getMessage`);
    }
};

function reConnect() {
    const token = getCookie('token');
    socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);
    return socket;   
}

function serverConnect() {
    reConnect();
    socket.onopen = function() {
        UI.CHAT.STATUS.src='./images/icon-translating.png';
        const time = timeFormation();
        console.log(`[open] Соединение установлено ${time}`);
    }
    socket.onmessage = function(event) {
        const message = JSON.parse(event.data);
        console.log(message);
        const MESSAGES = [];
        MESSAGES.push(message);
        checkCurrentMessage(MESSAGES);
    };
    socket.onerror = function(error) {
        console.log(`[error] Произошла ошибка ${error}`);
    };
    socket.onclose = function(event) {
        if (event.wasClean) {
            UI.CHAT.STATUS.src='./images/connect-lost.png';
            console.log(`Соединение закрыто чисто - ${event.reason} - code: ${event.code}`);
            return;
        } else {
            UI.CHAT.STATUS.src='./images/connect-lost.png';
            const time = timeFormation();
            console.log(`Соединение разорвано Код: ${event.code} ${time}`);
            serverConnect();
        }
    };
}

function closeConnect() {
    if(socket) {
        socket.close(1000, "работа закончена");
    }
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

