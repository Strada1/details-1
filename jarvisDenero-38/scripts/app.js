import Cookies from 'js-cookie';

import { addToDomMessage } from './modules/veiw.js';
import { POPUPS, openPopup, closePopup } from './modules/popups.js';
import { getKeyOnUserEmail } from './modules/login.js';
import { socket } from './modules/webSocket.js';
import { } from './modules/setting.js';

const sendMessageForm = document.querySelector('.send-message');
const sendMessageInput = document.querySelector('.send-message .input-message');

async function aunteficationHandler() {
   event.preventDefault();

   const userEmail = POPUPS.login.input.value;

   const response = await getKeyOnUserEmail(userEmail);

   if (response.ok) {
      Cookies.set('ChatUserEmail', `${POPUPS.login.input.value}`);
      closePopup();
      openPopup(POPUPS.verification.popup);
   }

}

const sendMessageHandler = (event) => {
   event.preventDefault();
   socket.send(JSON.stringify({ text: `${sendMessageInput.value}` }));
   sendMessageInput.value = '';
}

POPUPS.login.form.addEventListener('submit', aunteficationHandler)
POPUPS.verification.form.addEventListener('submit', (e) => {
   e.preventDefault();
   Cookies.set('Authorization', `Bearer ${POPUPS.verification.input.value}`);
   Cookies.set('AuthorizationWS', `${POPUPS.verification.input.value}`);
   closePopup();
})
sendMessageForm.addEventListener('submit', sendMessageHandler);