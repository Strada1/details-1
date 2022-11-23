import Cookies from 'js-cookie';
import { format } from 'date-fns';
import { addMessageUI } from './UI';
import { MODAL, openModal } from './modal';
import { CookieName, isTokenAppStart } from './cookie';
import { getMessageHistory, HTTP_METHOD, URLS } from './request';
import { filterNumberMessages } from './helps';
import { callNotification } from './notification';

if (!isTokenAppStart()) {
  window.onload = () => openModal(MODAL.AUTHORIZATION);
} else {
  getMessageHistory(
    HTTP_METHOD.GET,
    URLS.MESSAGES,
    Cookies.get(CookieName.AUTHORIZATION_TOKEN)
  )
    .then((historyMessages) => {
      const filerHistory = filterNumberMessages(historyMessages.messages);
      filerHistory.forEach((message) => {
        addMessageUI(
          message.user.name,
          message.text,
          format(new Date(message.createdAt), 'HH:mm'),
          message.user.email
        );
      });
    })
    .catch((error) => {
      callNotification(error.message);
    });
}
