import Cookies from 'js-cookie';
import { ERROR_MESSAGES, ValidationError } from './error/ValidationError';
import { CookieName } from './cookie';
import {
  getLocalStorage,
  LOCAL_STORAGE,
  setLocalStorage,
} from './localStorage';

export function getSpliceMessages() {
  const array = getLocalStorage(LOCAL_STORAGE.HISTORY_MESSAGE);
  const countMessages = 20;
  const filteredArray = array.splice(0, countMessages);
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
