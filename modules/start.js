import {cookiesHasKey} from "./getCookieValue.js";
import { openAuth } from "./popup.js";
import receiveMessages from "./receiveMessages.js";
import {webSocketConnect} from "./webSocket.js";


const start = function() {
    const cookieEmail = cookiesHasKey('email');
    const cookieToken = cookiesHasKey('token');
    
    if (!cookieEmail || !cookieToken) {
        openAuth();
    }
    else {
        webSocketConnect();
        receiveMessages();
    }
}

export default start;