import Cookies from 'js-cookie';
import { ERROR_MESSAGES, ValidationError } from './error/ValidationError';
import { CookieName } from './cookie';
import {
  getLocalStorage,
  LOCAL_STORAGE,
  setLocalStorage,
} from './localStorage';
// TODO: поменять имя функции
export function filterNumberMessages() {
  const array = getLocalStorage(LOCAL_STORAGE.HISTORY_MESSAGE);
  const filteredArray = array.splice(0, 20);
  setLocalStorage(LOCAL_STORAGE.HISTORY_MESSAGE, array);
  return filteredArray;
}

export function getCheckMessage(message) {
  const maxLetters = 50;
  const minLetters = 0;
  if (message.length === minLetters) {
    throw new ValidationError(ERROR_MESSAGES.INPUT_NOTHING);
  }
  if (message.length > maxLetters) {
    throw new ValidationError(ERROR_MESSAGES.INPUT_FULL);
  }
  if (!Cookies.get(CookieName.AUTHORIZATION_TOKEN)) {
    throw new ValidationError(ERROR_MESSAGES.TOKEN);
  }
  return message;
}
