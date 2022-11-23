import { ERROR_MESSAGES, ValidationError } from './error/ValidationError';

export function filterNumberMessages(array) {
  return array.filter((item, index) => index > array.length - 50);
}

export function getCheckMessage(message) {
  const maxLetters = 50;
  if (message.length > maxLetters) {
    throw new ValidationError(ERROR_MESSAGES.INPUT_FULL);
  }
  return message;
}
