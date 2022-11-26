import Cookies from 'js-cookie';
import { ERROR_MESSAGES, ValidationError } from './error/ValidationError';
import { CookieName } from './cookie';

export function filterNumberMessages(array) {
  return array.splice(0, 20).reverse();
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
