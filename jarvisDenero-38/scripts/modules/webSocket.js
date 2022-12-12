import Cookies from 'js-cookie';
import { renderMessage } from './veiw.js';

const token = Cookies.get('AuthorizationWS');
const socketURL = `wss://edu.strada.one/websockets?${token}`

const socket = new WebSocket(socketURL);

socket.addEventListener('message', (event) => {
   renderMessage();
})

export { socket }
