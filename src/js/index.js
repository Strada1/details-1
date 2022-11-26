import Cookies from 'js-cookie';
import { MODAL, openModal } from './UI/modal';
import { CookieName, isTokenAppStart } from './cookie';
import { openWebSocket } from './requests/webSocket';
import { addMessageHistory } from './requests/processingResultsRequest';

if (!isTokenAppStart()) {
  window.onload = () => openModal(MODAL.AUTHORIZATION);
} else {
  addMessageHistory(Cookies.get(CookieName.AUTHORIZATION_TOKEN));
}

openWebSocket();
