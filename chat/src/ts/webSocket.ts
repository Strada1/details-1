import Cookies from 'js-cookie';

const token = Cookies.get('user');
const url: string = `wss://edu.strada.one/websockets?${token}`;

export const socket = new WebSocket(url);
