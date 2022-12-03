import Cookies from 'js-cookie';
import { ValidationError } from './error/ValidationError';
import { getLocalStorage, setLocalStorage } from './localStorage';
import { COOKIE_NAME, LOCAL_STORAGE_NAME, ERROR_MESSAGES } from './const';

export function getSpliceMessages() {
  const array = getLocalStorage(LOCAL_STORAGE_NAME.HISTORY_MESSAGE);
  const countMessages = 20;
  const filteredArray = array.splice(0, countMessages);
  setLocalStorage(LOCAL_STORAGE_NAME.HISTORY_MESSAGE, array);
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
  if (!Cookies.get(COOKIE_NAME.AUTHORIZATION_TOKEN)) {
    throw new ValidationError(ERROR_MESSAGES.TOKEN);
  }
  return message;
}
