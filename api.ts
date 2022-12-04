import { Message } from "./message";
import { getCookie, setCookie } from "./cookie";
import { addMessage, getLastMessage, onAuth, scrollSmoothTo } from "./page";

const COOKIE_USERNAME = 'username';
const COOKIE_TOKEN = 'usertoken';

const URL_GET_MESSAGES = 'https://edu.strada.one/api/messages/';
const URL_REQUEST_CODE = 'https://edu.strada.one/api/user';
const URL_VERIFY_CODE = 'https://edu.strada.one/api/user/me';
const URL_SET_USERNAME = 'https://edu.strada.one/api/user';

const MSG_OFFSET_STEP = 20;

type ServerMessage = {
    user: {
        name: string,
        email: string
    };
    text: string;
    createdAt: string;
}

export class ChatClient {
    socket: WebSocket | null = null;
    historyMessages: Message[] = [];
    userEmail: string | null;
    offset = 0;

    public async authorize() {
        fetch(URL_VERIFY_CODE, {
            method: 'GET',
            headers: {
                "Authorization": 'Bearer ' + getCookie(COOKIE_TOKEN)
            }
        }).then(response => {
            if (response.status === 200) {
                onAuth(true);
                return response.json();
            }
            throw new Error('Cannot authorize');
        }).then(json => {
            this.userEmail = json.email;
            return this.loadHistoryMessages();
        }).then(json => {
            this.historyMessages = json.messages.map((m: ServerMessage) => {
                return new Message(m.user.name, m.user.email, m.text, new Date(m.createdAt), this.userEmail === m.user.email);
            });
            console.log(`Loaded messages: ${this.historyMessages.length}`)

            const messages = this.getNextHistoryMessages();
            messages.forEach(message => addMessage(message, false));
            const lastMessage = getLastMessage();
            if (lastMessage) scrollSmoothTo(lastMessage);
        }).then(() => {
            this.socket = this.createSocket();
        }).catch(err => {
            console.error(err);
            onAuth(false);
        })
    }

    public async requestCodeToEmail(email: string): Promise<Response> {
        return fetch(URL_REQUEST_CODE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        });
    }

    public async verifyCode(code: string): Promise<string> {
        return new Promise((res, rej) => {
            fetch(URL_VERIFY_CODE, {
                method: 'GET',
                headers: {
                    "Authorization": 'Bearer ' + code
                }
            }).then(response => {
                if (response.status === 200) {
                    res(code);
                } else {
                    rej(new Error('Cannot verify code'))
                }
            });
        });
    }

    public async changeUsername(username: string) {
        return fetch(URL_SET_USERNAME, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + getCookie(COOKIE_TOKEN)
            },
            body: JSON.stringify({ name: username })
        });
    }

    public getNextHistoryMessages(): Message[] {
        const messages = this.historyMessages.slice(this.offset, this.offset + MSG_OFFSET_STEP);
        this.offset += messages.length;
        return messages;
    }

    public setToken(token: string) {
        setCookie(COOKIE_TOKEN, token);
    }

    public setUsername(username: string) {
        setCookie(COOKIE_USERNAME, username);
    }

    public sendMessage(text: string) {
        if (!this.socket) throw new Error('Socket not connected');
        this.socket.send(JSON.stringify({ text: text }));
    }

    async loadHistoryMessages(): Promise<{ messages: ServerMessage[] }> {
        const response = await fetch(URL_GET_MESSAGES, {
            headers: {
                'Authorization': 'Bearer ' + getCookie(COOKIE_TOKEN)
            }
        });
        return response.json();
    }

    createSocket(): WebSocket {
        const token = getCookie(COOKIE_TOKEN);
        const socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);
        socket.onopen = () => console.log('Socket opened');
        socket.onmessage = (event) => {
            console.log(event.data);
            const data = JSON.parse(event.data);
            const text = data.text;
            const username = data.user.name;
            const email = data.user.email;
            const timestamp = data.createdAt;
            const addToEnd = true;
            const message = new Message(username, email, text, new Date(timestamp), this.userEmail === email);

            const newElement = addMessage(message, addToEnd);
            scrollSmoothTo(newElement);
        }
        socket.onclose = () => console.log('Socket closed');

        return socket;
    }
}
