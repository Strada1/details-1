import { openAuth } from "./popup.js";
import { webSocketClose } from "./webSocket.js";

const exit = function() {
    const containerMessages = document.querySelector('.mid')
    
    document.cookie = 'email = null; max-age = 0';
    document.cookie = 'token = null; max-age = 0';

    while(containerMessages.hasChildNodes()) {
        containerMessages.removeChild(containerMessages.firstChild);
    }
    webSocketClose();
    openAuth();
};

export default exit;